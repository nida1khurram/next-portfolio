"use client";
import { useCanvas } from "./useCanvas";
import { useCallback, useRef } from "react";

class Particle {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  radius: number;
  color: string;

  constructor(ctx: CanvasRenderingContext2D) {
    this.x = Math.random() * ctx.canvas.width;
    this.y = Math.random() * ctx.canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    };
    this.radius = Math.random() * 1.5 + 0.5;
    this.color = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${
      Math.random() * 100 + 155
    }, 0.1)`;
  }

  update(ctx: CanvasRenderingContext2D) {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x < 0 || this.x > ctx.canvas.width) this.velocity.x *= -1;
    if (this.y < 0 || this.y > ctx.canvas.height) this.velocity.y *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export function ParticleCanvas() {
  const particles = useRef<Particle[]>([]);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    if (particles.current.length === 0) {
      particles.current = Array.from({ length: 50 }, () => new Particle(ctx));
    }

    ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particles.current.forEach((particle) => {
      particle.update(ctx);
      particle.draw(ctx);
    });
  }, []);

  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-20" />;
}
