import { projects } from "@/lib/data";
import { ExternalLink, GitBranch, Folder } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const statusStyle: Record<string, string> = {
  production: "text-diffAdd border-diffAdd/30 bg-diffAdd/10",
  active: "text-accent border-accent/30 bg-accent/10",
  archived: "text-muted border-line bg-surface2",
};

const statusLabel: Record<string, string> = {
  production: "production",
  active: "active",
  archived: "archived",
};

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll>
          <p className="font-mono text-sm text-amber">02 · projects.tsx</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Proyek yang pernah aku garap
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Folder size={16} className="text-accent" />
                    <h3 className="font-mono text-base font-medium text-ink">
                      {project.name}
                    </h3>
                  </div>
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-[11px] ${statusStyle[project.status]}`}
                  >
                    {statusLabel[project.status]}
                  </span>
                </div>

                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
                    <GitBranch size={12} />
                    {project.metric}
                  </span>
                  {(project.repo || project.link) && (
                    <a
                      href={project.repo ?? project.link ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 font-mono text-xs text-accent transition-colors hover:text-ink"
                    >
                      lihat <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
