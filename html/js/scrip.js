 let scene, camera, renderer, points, analyzer, dataArray;
        let isAudioSetup = false;

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 20;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // 1. Create a Torus (Donut) but with a tiny tube radius (0.01)
            // This creates a thin ring of particles.
            const geometry = new THREE.TorusGeometry(4, 0.05, 16, 300); 
            
            const material = new THREE.PointsMaterial({
                color: 0x00ccff,
                size: 0.04,
                transparent: true,
                blending: THREE.AdditiveBlending
            });

            points = new THREE.Points(geometry, material);
            scene.add(points);

            // Save original positions
            points.geometry.userData.origPos = points.geometry.attributes.position.array.slice();

            window.addEventListener('resize', onWindowResize);
            animate();
        }

        async function setupAudio() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const source = audioContext.createMediaStreamSource(stream);
                analyzer = audioContext.createAnalyser();
                analyzer.fftSize = 1024; // Higher resolution for spikes
                source.connect(analyzer);
                
                dataArray = new Uint8Array(analyzer.frequencyBinCount);
                isAudioSetup = true;
                document.getElementById('startBtn').style.display = 'none';
            } catch (err) {
                console.error("Audio error:", err);
            }
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate(time) {
            requestAnimationFrame(animate);

            const positions = points.geometry.attributes.position.array;
            const orig = points.geometry.userData.origPos;

            if (isAudioSetup) {
                analyzer.getByteFrequencyData(dataArray);
            }

            for (let i = 0; i < positions.length; i += 3) {
                const x = orig[i];
                const y = orig[i+1];
                const z = orig[i+2];

                // Calculate the angle of the particle around the center
                const angle = Math.atan2(y, x);
                
                // Map that angle to a frequency bin (0 to 511)
                // This makes the ring react symmetrically
                const binIndex = Math.floor(((angle + Math.PI) / (Math.PI * 7)) * (dataArray ? dataArray.length / 1 : 0));
                
                let spikeLevel = 0;
                if (isAudioSetup && dataArray[binIndex]) {
                    spikeLevel = (dataArray[binIndex] / 255) * 4.5; // Controls spike length
                } else {
                    // Gentle idle pulse
                    spikeLevel = Math.sin(angle * 70 + time * 0.905) * 0.1;
                }

                // Push vertices outward from the center based on spikeLevel
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                
                const radius = 4 + spikeLevel;
                positions[i] = cos * radius;
                positions[i+1] = sin * radius;
                positions[i+2] = z; // Keep the thin depth
            }

            points.geometry.attributes.position.needsUpdate = true;
            
            // Subtle rotation for a 3D feel
            points.rotation.z += 0.001;
            
            renderer.render(scene, camera);
        }

        document.getElementById('startBtn').addEventListener('click', setupAudio);
        init();