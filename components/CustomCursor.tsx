"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("button") || target.closest("a")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed pointer-events-none z-50 rounded-full bg-accent/20 border border-accent/50 backdrop-blur-[1px] transition-transform duration-100 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? "64px" : "32px",
          height: isHovered ? "64px" : "32px",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div 
        className="fixed pointer-events-none z-50 rounded-full bg-white transition-transform duration-75 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "8px",
          height: "8px",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
