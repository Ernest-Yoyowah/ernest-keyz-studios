"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;
      decay: number;
    }[] = [];

    for (let i = 0; i < 28; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.1,
        alpha: Math.random() * 0.4 + 0.05,
        size: Math.random() * 1.5 + 0.5,
        decay: Math.random() * 0.002 + 0.001,
      });
    }

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      const lineCount = 12;
      for (let i = 0; i < lineCount; i++) {
        const y =
          (height / lineCount) * i + ((frame * 0.08) % (height / lineCount));
        const alpha = 0.03 + Math.sin(frame * 0.01 + i) * 0.015;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = `rgba(0, 212, 255, ${Math.max(0, alpha)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      const waveY = height * 0.55;
      ctx.beginPath();
      for (let x = 0; x < width; x += 2) {
        const y =
          waveY +
          Math.sin(x * 0.012 + frame * 0.02) * 18 +
          Math.sin(x * 0.025 + frame * 0.015) * 10 +
          Math.sin(x * 0.006 + frame * 0.008) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(0, 212, 255, 0.07)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      for (let x = 0; x < width; x += 2) {
        const y =
          waveY * 0.6 +
          Math.sin(x * 0.009 + frame * 0.016 + 1.5) * 14 +
          Math.sin(x * 0.02 + frame * 0.011) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(0, 180, 230, 0.04)";
      ctx.lineWidth = 1;
      ctx.stroke();

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
      }

      const barCount = 18;
      const now = frame * 0.015;
      for (let i = 0; i < barCount; i++) {
        const x = (width / barCount) * i + width / barCount / 2;
        const barH = (Math.sin(now + i * 0.8) * 0.5 + 0.5) * height * 0.12;
        const alpha = 0.025 + Math.sin(now + i) * 0.012;
        ctx.fillStyle = `rgba(0, 212, 255, ${Math.max(0, alpha)})`;
        ctx.fillRect(x - 1, height - barH, 2, barH);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.9 }}
      />

      <motion.div
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-0 w-[400px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,150,220,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07070c] to-transparent" />
    </div>
  );
}
