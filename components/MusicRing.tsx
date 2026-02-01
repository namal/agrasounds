"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const MusicRing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Audio Setup ---
    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        
        analyser.fftSize = 512; // Controls "detail" of the spikes
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        source.connect(analyser);
        
        audioContextRef.current = audioContext;
        analyserRef.current = analyser;
        dataArrayRef.current = dataArray;
      } catch (err) {
        console.error("Mic access denied or not supported:", err);
      }
    };

    initAudio();

    // --- Three.js Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(224, 224);
    containerRef.current.appendChild(renderer.domElement);

    const OUTER_RADIUS = 4;
    const outerGeometry = new THREE.TorusGeometry(OUTER_RADIUS, 0.05, 16, 360);
    const outerMaterial = new THREE.PointsMaterial({
      color: 0x00ccff,
      size: 0.045,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const outerRing = new THREE.Points(outerGeometry, outerMaterial);
    scene.add(outerRing);

    const positions = outerGeometry.attributes.position.array as Float32Array;
    const original = new Float32Array(positions);

    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);

      let avgVolume = 0;
      if (analyserRef.current && dataArrayRef.current) {
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        // Get an average volume for a general "pulse" or use specific bins for spikes
        avgVolume = dataArrayRef.current.reduce((a, b) => a + b) / dataArrayRef.current.length;
      }

      for (let i = 0; i < positions.length; i += 3) {
        const x = original[i];
        const y = original[i + 1];
        const angle = Math.atan2(y, x);

        // Map audio data to the spikes
        // We use the frequency index to make different parts of the ring react differently
        const freqIndex = Math.floor(((angle + Math.PI) / (Math.PI * 2)) * (dataArrayRef.current?.length || 1));
        const audioIntensity = dataArrayRef.current ? dataArrayRef.current[freqIndex] / 255 : 0;
        
        // Intensity of the spike based on mic input
        const spikeHeight = audioIntensity * 1.5; 
        const r = OUTER_RADIUS + spikeHeight;

        positions[i] = Math.cos(angle) * r;
        positions[i + 1] = Math.sin(angle) * r;
      }

      outerGeometry.attributes.position.needsUpdate = true;
      outerRing.rotation.z -= 0.002;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
      outerGeometry.dispose();
      outerMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
};

export default MusicRing;