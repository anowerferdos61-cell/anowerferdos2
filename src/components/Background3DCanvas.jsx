import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3DCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup — No Fog for crisp background clarity
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Group for 3D Full-Screen Background Photo Layer
    const portraitGroup = new THREE.Group();
    scene.add(portraitGroup);

    // Floating 3D Particles Group
    const particlesGroup = new THREE.Group();
    scene.add(particlesGroup);

    // Create ambient dust sparkles
    const particleCount = 90;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 80;
      posArray[i + 1] = (Math.random() - 0.5) * 100;
      posArray[i + 2] = (Math.random() - 0.5) * 30 - 5;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.35,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particleMesh = new THREE.Points(particleGeo, particleMat);
    particlesGroup.add(particleMesh);

    let portraitMesh = null;
    let currentAspect = 1.33;

    // Y Travel Distance for Top-to-Bottom Parallax Motion
    const Y_TRAVEL_RANGE = 14;

    // Helper: Compute plane dimensions to COVER full viewport AND full vertical parallax travel range
    const updatePlaneDimensions = (mesh, aspect, planeZ = -4) => {
      if (!mesh) return;
      const distance = camera.position.z - planeZ;
      const vFovRad = THREE.MathUtils.degToRad(camera.fov);
      const visibleHeight = 2 * Math.tan(vFovRad / 2) * Math.abs(distance);
      const visibleWidth = visibleHeight * camera.aspect;

      // Plane height must be visibleHeight + Y_TRAVEL_RANGE + buffer to prevent any gap during top-to-bottom scroll
      const requiredHeight = visibleHeight + Y_TRAVEL_RANGE + 6;
      let planeH = requiredHeight;
      let planeW = planeH * aspect;

      // Ensure width also completely covers visibleWidth
      if (planeW < visibleWidth * 1.35) {
        planeW = visibleWidth * 1.35;
        planeH = planeW / aspect;
      }

      mesh.geometry.dispose();
      mesh.geometry = new THREE.PlaneGeometry(planeW, planeH, 48, 48);
    };

    // Load Pristine Original Photo Texture (No Color Alteration or Overlay)
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/anower-bg-1.jpg', (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      const image = texture.image;
      currentAspect = image.width / image.height;

      const planeMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide,
      });

      portraitMesh = new THREE.Mesh(new THREE.BufferGeometry(), planeMat);
      portraitMesh.position.set(0, 0, -4);
      updatePlaneDimensions(portraitMesh, currentAspect, -4);
      portraitGroup.add(portraitMesh);
    });

    // Bright Natural Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Mouse & Scroll Parallax State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let lastScrollY = 0;
    let scrollVelocity = 0;
    let currentScrollNorm = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0004;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0004;
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

      if (portraitMesh) updatePlaneDimensions(portraitMesh, currentAspect, -4);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Scroll inertia & velocity calculation
      const scrollDelta = scrollY - lastScrollY;
      scrollVelocity += (scrollDelta - scrollVelocity) * 0.1;
      lastScrollY = scrollY;

      // Normalized Scroll Progress (0 at top, 1 at bottom)
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const targetScrollNorm = Math.min(1, Math.max(0, scrollY / maxScroll));
      currentScrollNorm += (targetScrollNorm - currentScrollNorm) * 0.08;

      // Dynamic Top-to-Bottom Parallax Sliding Motion:
      // As you scroll down the page, the photo slides smoothly from top to bottom!
      portraitGroup.position.y = (0.5 - currentScrollNorm) * Y_TRAVEL_RANGE;
      portraitGroup.position.z = -4 + Math.sin(currentScrollNorm * Math.PI) * 0.6;
      portraitGroup.rotation.x = targetY * 1.5 + (currentScrollNorm - 0.5) * -0.15 + scrollVelocity * 0.0005;
      portraitGroup.rotation.y = targetX * 1.5 + Math.sin(elapsedTime * 0.3) * 0.015;

      // Dynamic Organic 3D Wave Ripples on scroll
      if (portraitMesh && portraitMesh.geometry && portraitMesh.geometry.attributes.position) {
        const pos = portraitMesh.geometry.attributes.position;
        const waveIntensity = 0.2 + Math.min(0.6, Math.abs(scrollVelocity) * 0.012);

        for (let i = 0; i < pos.count; i++) {
          const u = pos.getX(i);
          const v = pos.getY(i);
          const zWave = Math.sin(u * 0.1 + v * 0.1 + elapsedTime * 1.2 + currentScrollNorm * 5) * waveIntensity;
          pos.setZ(i, zWave);
        }
        pos.needsUpdate = true;
      }

      // Sparkle Particle Swirl & Motion on Scroll
      particlesGroup.rotation.y = elapsedTime * 0.04 + currentScrollNorm * 1.2;
      particlesGroup.position.y = (0.5 - currentScrollNorm) * (Y_TRAVEL_RANGE * 0.8);

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
      className="fixed inset-0 pointer-events-none z-0 opacity-100"
      aria-hidden="true"
    />
  );
}






