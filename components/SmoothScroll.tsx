"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    // High-performance smooth scroll
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Global scroll reveal animations
    gsap.utils.toArray(".reveal-section").forEach((section: any) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 100, scale: 0.95 }, 
        {
          opacity: 1, y: 0, scale: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
