import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Hero3D - Interactive 3D Focal Object
 * 
 * Recreates the exact kinetic gyroscope from the Stitch export:
 * - Central polyhedral icosahedron core with teal specular sheen
 * - Outer wireframe cage counter-rotating
 * - Gyroscopic dual rings (teal & warm orange)
 * - 8 orbiting quantum code satellite nodes
 * - 140 floating stardust particles
 * - Smooth pointer and touch-based parallax tilt damping
 */
export default function Hero3D() {
  const mountRef = useRef(null);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 360;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.6;
    camera.position.y = 0.1;

    // 2. High-performance WebGL Renderer with transparency
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 3. Lighting: Teal & Warm Orange Glow
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const lightTeal = new THREE.PointLight(0x14b8a6, 4.5, 12);
    lightTeal.position.set(3, 3, 3);
    scene.add(lightTeal);

    const lightOrange = new THREE.PointLight(0xf97316, 4.0, 12);
    lightOrange.position.set(-3, -2.5, 2.5);
    scene.add(lightOrange);

    const lightTop = new THREE.PointLight(0x38bdf8, 2, 8);
    lightTop.position.set(0, 4, -2);
    scene.add(lightTop);

    // 4. Master kinetic group
    const kineticGroup = new THREE.Group();
    scene.add(kineticGroup);

    // Central Polyhedral Core
    const coreGeo = new THREE.IcosahedronGeometry(1.0, 1);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x0f172a,
      emissive: 0x042f2e,
      specular: 0x2dd4bf,
      shininess: 100,
      flatShading: true,
      transparent: true,
      opacity: 0.88,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    kineticGroup.add(coreMesh);

    // Outer Teal Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.22, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    kineticGroup.add(cageMesh);

    // Gyroscopic Ring 1 (Teal)
    const ringGeo1 = new THREE.TorusGeometry(1.58, 0.022, 16, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.75,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    kineticGroup.add(ring1);

    // Gyroscopic Ring 2 (Warm Orange)
    const ringGeo2 = new THREE.TorusGeometry(1.82, 0.02, 16, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.85,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    kineticGroup.add(ring2);

    // Satellites: Orbiting code node cubes
    const satellites = [];
    const satGeo = new THREE.BoxGeometry(0.14, 0.14, 0.14);
    const tealMat = new THREE.MeshPhongMaterial({ color: 0x2dd4bf, emissive: 0x115e59 });
    const orangeMat = new THREE.MeshPhongMaterial({ color: 0xfb923c, emissive: 0x9a3412 });

    for (let i = 0; i < 8; i++) {
      const isTeal = i % 2 === 0;
      const sat = new THREE.Mesh(satGeo, isTeal ? tealMat : orangeMat);
      const angle = (i / 8) * Math.PI * 2;
      sat.userData = {
        angle: angle,
        speed: 0.012 + i * 0.002,
        radius: 1.75 + (i % 3) * 0.25,
        yOffset: Math.sin(i * 1.5) * 0.45,
      };
      kineticGroup.add(sat);
      satellites.push(sat);
    }

    // Ambient Stardust Particles
    const pCount = 140;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 7.5;
      pPos[i + 1] = (Math.random() - 0.5) * 7.5;
      pPos[i + 2] = (Math.random() - 0.5) * 4.5;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x99f6e4,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Pointer & Touch Tilt Response
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : window.innerWidth / 2);
      const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : window.innerHeight / 2);
      const nx = (clientX / window.innerWidth) * 2 - 1;
      const ny = (clientY / window.innerHeight) * 2 - 1;
      targetRotY = nx * 0.65;
      targetRotX = ny * 0.45;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Animation Loop with FPS counter
    let animationFrameId;
    const clock = new THREE.Clock();
    let frameCount = 0;
    let lastTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // FPS estimation every 1 sec
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      // Gyro group smooth rotation with mouse damping
      kineticGroup.rotation.y += 0.007;
      kineticGroup.rotation.x += (targetRotX - kineticGroup.rotation.x) * 0.05;
      kineticGroup.rotation.y += (targetRotY - kineticGroup.rotation.y) * 0.05;

      // Counter-rotations
      cageMesh.rotation.y = -time * 0.28;
      cageMesh.rotation.z = time * 0.14;

      ring1.rotation.z = time * 0.22;
      ring1.rotation.x = Math.PI / 3 + Math.sin(time * 0.8) * 0.15;

      ring2.rotation.x = -time * 0.25;
      ring2.rotation.y = Math.PI / 4 + Math.cos(time * 0.7) * 0.18;

      // Satellite orbital math
      satellites.forEach((sat) => {
        sat.userData.angle += sat.userData.speed;
        sat.position.x = Math.cos(sat.userData.angle) * sat.userData.radius;
        sat.position.z = Math.sin(sat.userData.angle) * sat.userData.radius;
        sat.position.y = sat.userData.yOffset + Math.sin(time * 2.2 + sat.userData.angle) * 0.18;
        sat.rotation.x += 0.025;
        sat.rotation.y += 0.035;
      });

      // Stardust gentle drift
      particles.rotation.y = time * 0.018;

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 400;
      const newH = container.clientHeight || 360;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup resources on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      [coreGeo, cageGeo, ringGeo1, ringGeo2, satGeo, pGeo].forEach((g) => g.dispose());
      [coreMat, cageMat, ringMat1, ringMat2, tealMat, orangeMat, pMat].forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] flex items-center justify-center">
      {/* HUD Info Badges */}
      <div className="absolute top-space-sm left-space-sm z-20 flex items-center gap-1.5 bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-1 rounded-full border border-outline-variant/30">
        <span className="material-symbols-outlined text-primary text-[14px]">view_in_ar</span>
        <span className="font-label-badge text-label-badge text-primary-fixed">Interactive Orbit • Touch / Cursor reactive</span>
      </div>

      <div className="absolute bottom-space-sm right-space-sm z-20 flex items-center gap-1 bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-1 rounded-full border border-outline-variant/30">
        <span className="font-code-mono-sm text-[10px] text-outline">FPS: {fps}.0 • THREE.JS CORE</span>
      </div>

      {/* Canvas container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
