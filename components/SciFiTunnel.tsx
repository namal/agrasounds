"use client";

import React, { useEffect, useRef } from "react";

const SciFiTunnel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let particles: Particle[] = [];
    const numParticles = 400;

    // --- Audio Setup ---
    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        audioContextRef.current = audioContext;
        analyserRef.current = analyser;
      } catch (err) {
        console.log("Mic blocked or not found");
      }
    };

    // --- Particle Logic ---
    class Particle {
      x: number; y: number; z: number; px: number; py: number;
      constructor() {
        this.reset();
        this.z = Math.random() * canvas!.width; // Start at random depth
      }
      reset() {
        this.x = (Math.random() - 0.5) * canvas!.width * 2;
        this.y = (Math.random() - 0.5) * canvas!.height * 2;
        this.z = canvas!.width;
        this.px = 0; this.py = 0;
      }
      update(speed: number) {
        this.z -= speed;
        if (this.z <= 0) this.reset();
      }
      draw(volume: number) {
        const sx = (this.x / this.z) * 400 + canvas!.width / 2;
        const sy = (this.y / this.z) * 400 + canvas!.height / 2;
        const size = (1 - this.z / canvas!.width) * 3 + (volume * 0.05);

        ctx!.fillStyle = `rgba(0, 204, 255, ${1 - this.z / canvas!.width})`;
        ctx!.beginPath();
        ctx!.arc(sx, sy, size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: numParticles }, () => new Particle());
    };

    const drawRings = (volume: number) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < 5; i++) {
        const radius = (100 * i) + (volume * 0.8);
        ctx.strokeStyle = `rgba(0, 204, 255, ${0.5 - i * 0.1})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.fillStyle = "rgba(0, 10, 20, 0.2)"; // Motion blur effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      let volume = 0;
      if (analyserRef.current) {
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        volume = dataArray.reduce((a, b) => a + b) / dataArray.length;
      }

      // Draw glowing core
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, 300 + volume
      );
      gradient.addColorStop(0, "rgba(0, 204, 255, 0.3)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update(5 + volume * 0.1);
        p.draw(volume);
      });

      drawRings(volume);
      animationFrame = requestAnimationFrame(render);
    };

    window.addEventListener("resize", setup);
    setup();
    render();
    canvas.addEventListener("click", initAudio);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* The Silhouette */}
      <div className="relative z-10 pointer-events-none">
        <svg width="100" height="200" viewBox="0 0 24 24" fill="black" className="animate-pulse">
           <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
        </svg>
      </div>

      <div className="absolute bottom-10 text-cyan-400 opacity-50 text-sm font-mono">
        CLICK TO ENABLE MICROPHONE
      </div>
    </div>
  );
};

export default SciFiTunnel;