"use client";

import { useState, useRef } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className = "" }: Card3DProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-3 to 3 degrees for a very subtle effect)
    const rotateY = ((mouseX / width) - 0.5) * 6;
    const rotateX = ((mouseY / height) - 0.5) * -6;

    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-[transform,box-shadow] duration-500 ease-out preserve-3d ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        boxShadow: rotate.x === 0 && rotate.y === 0 
          ? "0 0 0 rgba(255,255,255,0)" 
          : `${-rotate.y}px ${-rotate.x}px 30px rgba(255,255,255,0.05)`,
      }}
    >
      <div 
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${((rotate.y + 10) / 20) * 100}% ${((rotate.x + 10) / 20) * 100}%, rgba(255,255,255,0.05), transparent 70%)`
        }}
      />
      {children}
    </div>
  );
}