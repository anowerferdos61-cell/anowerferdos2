import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3DCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup — Soft off-white fog for subtle depth
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xFBFBFD, 0.015);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Main 3D Tech Lines Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Subtle Technical Wireframe Geometry (Slate / Faint Cyan)
    const coreGeo = new THREE.IcosahedronGeometry(6, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Inner Geometry (Cool Slate)
    const innerGeo = new THREE.OctahedronGeometry(3.5, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x475569,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // Outer Thin Orbital Ring 1
    const ringGeo1 = new THREE.TorusGeometry(12, 0.03, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.1,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // Outer Thin Orbital Ring 2
    const ringGeo2 = new THREE.TorusGeometry(16, 0.02, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x64748b,
      transparent: true,
      opacity: 0.08,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 2. Ambient Micro Particles (Faint Cyan & Slate)
    const particleCount = 160;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x0284c7);
    const slateColor = new THREE.Color(0x94a3b8);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 90;
      posArray[i + 1] = (Math.random() - 0.5) * 110;
      posArray[i + 2] = (Math.random() - 0.5) * 50 - 10;

      const col = Math.random() > 0.4 ? cyanColor : slateColor;
      colorArray[i] = col.r;
      colorArray[i + 1] = col.g;
      colorArray[i + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse & Scroll Parallax State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let currentScrollNorm = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0003;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0003;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const targetScrollNorm = Math.min(1, Math.max(0, scrollY / maxScroll));
      currentScrollNorm += (targetScrollNorm - currentScrollNorm) * 0.06;

      coreMesh.rotation.x = elapsedTime * 0.12;
      coreMesh.rotation.y = elapsedTime * 0.15;

      innerMesh.rotation.x = -elapsedTime * 0.18;
      innerMesh.rotation.y = -elapsedTime * 0.22;

      ring1.rotation.z = elapsedTime * 0.08;
      ring2.rotation.x = elapsedTime * 0.1;

      mainGroup.position.y = (0.5 - currentScrollNorm) * 12;
      mainGroup.position.x = Math.sin(elapsedTime * 0.3) * 1.2;

      mainGroup.rotation.x = targetY * 1.5 + (currentScrollNorm - 0.5) * -0.15;
      mainGroup.rotation.y = targetX * 1.5;

      particles.rotation.y = elapsedTime * 0.015 + currentScrollNorm * 0.4;
      particles.position.y = (0.5 - currentScrollNorm) * 14;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
