import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 22);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Anime.js Style Morphing Geometric Grid Mesh (Plane with Wireframe)
    const gridWidth = 40;
    const gridHeight = 30;
    const gridSegmentsX = 35;
    const gridSegmentsY = 25;

    const planeGeometry = new THREE.PlaneGeometry(
      gridWidth,
      gridHeight,
      gridSegmentsX,
      gridSegmentsY
    );
    planeGeometry.rotateX(-Math.PI / 2.4); // Tilt plane back like Anime.js perspective grid

    // Wireframe Mesh Material with Neon Green Line stroke
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00FF6A,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const gridMesh = new THREE.Mesh(planeGeometry, wireframeMaterial);
    scene.add(gridMesh);

    // 2. Vertex Node Glowing Dots at Grid Intersections
    const initialPositions = planeGeometry.attributes.position.array.slice();
    const vertexCount = planeGeometry.attributes.position.count;

    const nodesGeometry = new THREE.BufferGeometry();
    nodesGeometry.setAttribute('position', planeGeometry.attributes.position);

    const nodesMaterial = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x00FF6A,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const nodesSystem = new THREE.Points(nodesGeometry, nodesMaterial);
    scene.add(nodesSystem);

    // Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Anime.js Morphing Wave Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const positions = planeGeometry.attributes.position.array;

      // Anime.js Trigonometric Morphing Wave on Grid Vertices
      for (let i = 0; i < vertexCount; i++) {
        const i3 = i * 3;
        const x = initialPositions[i3];
        const y = initialPositions[i3 + 1];

        // Complex kinetic wave equation
        const wave1 = Math.sin(x * 0.3 + elapsedTime * 1.5);
        const wave2 = Math.cos(y * 0.4 + elapsedTime * 1.2);
        const wave3 = Math.sin((x + y) * 0.2 + elapsedTime * 2.0);

        positions[i3 + 2] = (wave1 + wave2 + wave3) * 0.8 + (targetX * x + targetY * y) * 0.5;
      }

      planeGeometry.attributes.position.needsUpdate = true;
      nodesGeometry.attributes.position.needsUpdate = true;

      // Subtle rotation shift
      gridMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.05 + targetX;
      nodesSystem.rotation.z = Math.sin(elapsedTime * 0.2) * 0.05 + targetX;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      planeGeometry.dispose();
      wireframeMaterial.dispose();
      nodesGeometry.dispose();
      nodesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full opacity-75"
    />
  );
};
