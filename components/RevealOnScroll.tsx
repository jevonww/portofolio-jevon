"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
}

export default function RevealOnScroll({ children }: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(containerRef.current, { perspective: 1000 });
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 200, rotateX: -45, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 2,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </div>
  );
}
