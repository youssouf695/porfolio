"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";

export default function Layout({ children }) {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });

  // 🎯 Paramètres améliorés pour un effet visuel plus fort
  const PARTICLE_COUNT = 250;
  const PARTICLE_SIZE_MIN = 2;
  const PARTICLE_SIZE_MAX = 6;
  const PARTICLE_SPEED_MIN = 0.3;
  const PARTICLE_SPEED_MAX = 1;
  const CONNECTION_DISTANCE = 150;
  const PARTICLE_LIFESPAN = 600;

  // 🛠️ Création d'une particule
  const createParticle = useCallback((width, height) => {
    return {
      id: Math.random(),
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (PARTICLE_SPEED_MAX - PARTICLE_SPEED_MIN) + PARTICLE_SPEED_MIN * (Math.random() > 0.5 ? 1 : -1),
      vy: (Math.random() - 0.5) * (PARTICLE_SPEED_MAX - PARTICLE_SPEED_MIN) + PARTICLE_SPEED_MIN * (Math.random() > 0.5 ? 1 : -1),
      size: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
      opacity: 0.3,
      life: 0,
      maxLife: PARTICLE_LIFESPAN + Math.random() * PARTICLE_LIFESPAN * 0.5,
    };
  }, []);

  // 📐 Redimensionnement du canvas
  useEffect(() => {
    const handleResize = () => {
      const container = canvasRef.current?.parentElement;
      if (container) {
        setCanvasDimensions({
          width: container.clientWidth,
          height: container.clientHeight,
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🌀 Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvasDimensions;

    canvas.width = width;
    canvas.height = height;
    if (width === 0 || height === 0) return;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      if (particles.current.length < PARTICLE_COUNT && Math.random() < 0.3) {
        particles.current.push(createParticle(width, height));
      }

      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life < PARTICLE_LIFESPAN / 2) {
          p.opacity = Math.min(1, p.opacity + 0.01);
        } else {
          p.opacity = Math.max(0, p.opacity - 0.002);
        }

        const outOfBounds = p.x < -p.size || p.x > width + p.size || p.y < -p.size || p.y > height + p.size;
        return p.opacity > 0 && !outOfBounds;
      });

      particles.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 255, ${p.opacity})`; // 🔷 Couleur plus vive
        ctx.fill();
      });

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            const lineOpacity = (1 - distance / CONNECTION_DISTANCE) * Math.min(p1.opacity, p2.opacity);
            ctx.strokeStyle = `rgba(0, 200, 255, ${lineOpacity * 0.7})`; // 🔷 Lignes plus visibles
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [canvasDimensions, createParticle]);

  return (
    <div className="relative overflow-hidden bg-gray-900 text-gray-800 dark:bg-black dark:text-white min-h-screen">
      {/* 🔷 Canvas animé */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
      ></canvas>

      {/* 🔷 Contenu */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
