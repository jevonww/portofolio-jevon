"use client";

import { useState } from "react";
import { Menu, X, Circle } from "lucide-react";

const tabs = [
  { id: "about", label: "about.tsx" },
  { id: "projects", label: "projects.tsx" },
  { id: "experience", label: "experience.log" },
  { id: "contact", label: "contact.tsx" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5">
        <button
          onClick={() => scrollTo("top")}
          className="flex items-center gap-2 py-3 font-mono text-sm text-ink"
        >
          <Circle className="h-2.5 w-2.5 fill-amber text-amber" />
          portofolio.dev
        </button>

        {/* desktop tabs */}
        <nav className="hidden md:flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className="group relative border-l border-line px-4 py-3 font-mono text-sm text-muted transition-colors hover:text-ink"
            >
              {tab.label}
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-accent transition-transform group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <button
          className="p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className="border-b border-line px-5 py-3 text-left font-mono text-sm text-muted"
            >
              {tab.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
