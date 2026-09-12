"use client";

import { useRef } from "react";
import { profile } from "@/lib/data";
import TechTicker from "./TechTicker";
import CRTWarp from "./CRTWarp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import SplitFlapText from "./SplitFlapText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".hero-animate", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 }
    );
  }, { scope: containerRef });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="top" ref={containerRef} className="min-h-screen flex items-center justify-center bg-[#05010a] text-white px-5 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50 will-change-transform">
          <CRTWarp
            color="#646cff"
            backgroundColor="#05010a"
            speed={0.4}
            curvature={0.2}
            scanlineStrength={0.2}
            waveAmplitude={0.25}
            bloom={1.2}
            mouseReact={true}
            mouseStrength={0.4}
          />
        </div>

        <div className="max-w-7xl w-full relative z-10">
          <div className="space-y-8">
            <div className="hero-animate inline-block">
              <p className="font-mono text-sm text-neutral-400 uppercase tracking-wider bg-black/40 px-3 py-1 rounded-full border border-neutral-800 backdrop-blur-md">
                {profile.location} 
              </p>
            </div>
            
            <div className="hero-animate">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9] text-white">
                {profile.name}
              </h1>
            </div>
            
            <p className="hero-animate text-xl sm:text-2xl text-neutral-300 max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>
            
            <div className="hero-animate flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollTo("projects")}
                className="group relative px-8 py-4 bg-white text-black font-medium text-sm overflow-hidden transition-all hover:scale-105 rounded-lg shadow-lg"
              >
                <span className="relative z-10">View Work</span>
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 border-2 border-neutral-700 bg-black/40 backdrop-blur-md text-white font-medium text-sm hover:border-white transition-all rounded-lg"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      <TechTicker />
    </>
  );
}
