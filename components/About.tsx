import { about, profile } from "@/lib/data";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  const paragraphs = about.trim().split("\n\n");

  return (
    <section id="about" className="border-b border-line px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll>
          <p className="font-mono text-sm text-amber">01 · about.tsx</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Tentang aku
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <RevealOnScroll delay={80}>
            <div className="rounded-lg border border-line bg-surface p-6 font-mono text-sm text-muted">
              <p className="text-diffAdd/80">/**</p>
              {paragraphs.map((p, i) => (
                <p key={i} className="mt-2 leading-relaxed">
                  {" * "}
                  {p.replace(/\n/g, " ")}
                </p>
              ))}
              <p className="mt-2 text-diffAdd/80"> */</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                stack yang dipakai
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-8 font-mono text-xs uppercase tracking-wider text-muted">
                lokasi
              </p>
              <p className="mt-2 font-body text-ink">{profile.location}</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
