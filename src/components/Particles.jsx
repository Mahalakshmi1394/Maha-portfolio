import React, { useRef, useEffect } from "react";

const Particles = ({
  particleColors = ['#ffffffc1', '#ffffffc4'], 
  particleCount = 50, 
  speed = 0.8, 
  particleBaseSize = 6
}) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    const createParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * particleBaseSize + 1,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    handleResize();
    animate();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [particleColors, particleCount, speed, particleBaseSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,   // <-- Changed to 0 so it appears behind content
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default Particles;
