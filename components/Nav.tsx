"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";

const tabs = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  
  const navRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const updateUnderline = useCallback((index: number) => {
    if (navRef.current) {
      const buttons = navRef.current.querySelectorAll("button");
      const target = buttons[index];
      if (target) {
        setUnderlineStyle({
          left: target.offsetLeft,
          width: target.offsetWidth,
        });
      }
    }
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (isManualNavigation) return;
      
      setIsScrolling(true);
      
      const sectionIds = tabs.map(tab => tab.id);
      let currentSection = "";
      
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isBottom) {
        currentSection = "contact";
      } else {
        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
              currentSection = id;
            }
          }
        }
      }
      
      if (currentSection && currentSection !== activeTab) {
        setActiveTab(currentSection);
        const index = tabs.findIndex(tab => tab.id === currentSection);
        if (index !== -1) {
          updateUnderline(index);
        }
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeTab, updateUnderline, isManualNavigation]);

  const scrollTo = (id: string, index: number) => {
    setOpen(false);
    setIsManualNavigation(true);
    setActiveTab(id);
    updateUnderline(index);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsManualNavigation(false);
    }, 1000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 ${
        isScrolling && !isManualNavigation
          ? "opacity-0 -translate-y-full" 
          : "opacity-100 translate-y-0 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="transition-transform hover:scale-105">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </button>

        <nav ref={navRef} className="hidden md:flex items-center relative gap-4">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id, i)}
              className={`px-2 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.id ? "text-white" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div 
            className="absolute -bottom-1 h-0.5 bg-white transition-all duration-300 ease-out"
            style={{ 
              left: underlineStyle.left, 
              width: underlineStyle.width,
              opacity: activeTab ? 1 : 0
            }}
          />
        </nav>

        <button
          className="p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col p-6 space-y-4">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id, i)}
                className="text-left text-base text-neutral-300 hover:text-white transition-colors"
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
