import { profile } from "@/lib/data";
import { Mail } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll>
          <p className="font-mono text-sm text-amber">04 · contact.tsx</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Mari ngobrol
          </h2>
          <p className="mt-3 max-w-md font-body text-muted">
            Lagi terbuka untuk belajar , diskusi, atau sekadar ngobrol. Jangan sungkan buat kirim pesan.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="mt-10 overflow-hidden rounded-lg border border-line bg-surface">
            <div className="flex items-center gap-1.5 border-b border-line bg-surface2 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-diffDel/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-diffAdd/70" />
              <span className="ml-3 font-mono text-xs text-muted">zsh</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <p className="text-muted">
                <span className="text-diffAdd">➜</span> ~ hubungi 
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-4 flex items-center gap-2 text-ink transition-colors hover:text-accent"
              >
                <Mail size={16} className="text-accent" /> {profile.email}
              </a>
              <a
                href={profile.github}
                className="mt-3 flex items-center gap-2 text-ink transition-colors hover:text-accent"
              >
                <span className="text-accent"><GithubIcon /></span> github.com/jevonww
              </a>
              <a
                href={profile.linkedin}
                className="mt-3 flex items-center gap-2 text-ink transition-colors hover:text-accent"
              >
                <span className="text-accent"><LinkedinIcon /></span> linkedin.com/in/namakamu
              </a>

              <p className="mt-6 text-muted">
                <span className="text-diffAdd">➜</span> ~{" "}
                <span className="inline-block h-4 w-2 animate-blink bg-accent align-middle" />
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
