"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { ArrowDown } from "lucide-react";

const lines = [
  { indent: 0, text: `const profil = {` },
  { indent: 1, text: `nama: "${profile.name}",` },
  { indent: 1, text: `peran: "${profile.role}",` },
  { indent: 1, text: `lokasi: "${profile.location}",` },
  { indent: 1, text: `stack: [${profile.stack.map((s) => `"${s}"`).join(", ")}],` },
  { indent: 0, text: `};` },
];

export default function Hero() {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [cursorLine, setCursorLine] = useState(0);
  const [cursorChar, setCursorChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (cursorLine >= lines.length) {
      setDone(true);
      return;
    }
    const currentText = lines[cursorLine].text;
    if (cursorChar <= currentText.length) {
      const timeout = setTimeout(() => {
        setTypedLines((prev) => {
          const copy = [...prev];
          copy[cursorLine] = currentText.slice(0, cursorChar);
          return copy;
        });
        setCursorChar((c) => c + 1);
      }, 18);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCursorLine((l) => l + 1);
        setCursorChar(0);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [cursorChar, cursorLine]);

  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-[92vh] flex-col justify-center border-b border-line px-5"
    >
      <div className="mx-auto w-full max-w-5xl py-24">
        <p className="mb-4 font-mono text-sm text-amber">// halo, aku</p>
        <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 max-w-xl font-body text-lg text-muted">
          {profile.tagline}
        </p>

        <div className="mt-10 w-full max-w-xl overflow-hidden rounded-lg border border-line bg-surface shadow-2xl shadow-black/40">
          <div className="flex items-center gap-1.5 border-b border-line bg-surface2 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-diffDel/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-diffAdd/70" />
            <span className="ml-3 font-mono text-xs text-muted">profil.ts</span>
          </div>
          <pre className="min-h-[180px] p-5 font-mono text-sm leading-relaxed text-ink">
            {lines.map((line, i) => (
              <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                {typedLines[i] ?? ""}
                {!done && i === cursorLine && (
                  <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-accent align-middle" />
                )}
              </div>
            ))}
          </pre>
        </div>

        <button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-14 flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          scroll <ArrowDown size={14} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
