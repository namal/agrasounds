const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create the Particles
const geometry = new THREE.SphereGeometry(5, 64, 64);
const material = new THREE.PointsMaterial({
  color: 0x0077ff,
  size: 0.05,
  transparent: true,
  blending: THREE.AdditiveBlending
});

const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 12;

// Animation logic
const originalPositions = geometry.attributes.position.array.slice();

function animate(time) {
  requestAnimationFrame(animate);
  
  const positions = geometry.attributes.position.array;
  const t = time * 0.002; // speed factor

  for (let i = 0; i < positions.length; i += 3) {
    // Get original x, y, z
    const ox = originalPositions[i];
    const oy = originalPositions[i + 1];
    const oz = originalPositions[i + 2];

    // Create a "wobble" using sine/cosine based on position and time
    // This targets the ring-like distortion
    const wave = Math.sin(ox * 0.5 + t) * Math.cos(oy * 0.5 + t) * 0.5;
    
    positions[i] = ox + (ox * wave * 0.2);
    positions[i+1] = oy + (oy * wave * 0.2);
    positions[i+2] = oz + (oz * wave * 0.2);
  }

  geometry.attributes.position.needsUpdate = true;
  points.rotation.y += 0.002; // Slow rotation
  
  renderer.render(scene, camera);
}

animate();

// Handle Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});