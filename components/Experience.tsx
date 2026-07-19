import { timeline } from "@/lib/data";
import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll>
          <p className="font-mono text-sm text-amber">03 · experience.log</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            --pendidikan
          </h2>
        </RevealOnScroll>

        <div className="mt-10 rounded-lg border border-line bg-surface">
          {timeline.map((commit, i) => (
            <RevealOnScroll key={commit.hash} delay={i * 70}>
              <div
                className={`flex flex-col gap-3 px-6 py-6 sm:flex-row sm:items-start sm:gap-6 ${
                  i !== timeline.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="shrink-0 font-mono text-sm text-accent">
                  {commit.hash}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-medium text-ink">
                      {commit.title}
                    </h3>
                    <span className="font-mono text-xs text-muted">{commit.date}</span>
                  </div>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    {commit.detail}
                  </p>
                  <div className="mt-3 flex gap-3 font-mono text-xs">
                    <span className="text-diffAdd">+{commit.additions}</span>
                    <span className="text-diffDel">-{commit.deletions}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
