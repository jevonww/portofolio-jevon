"use client";

const skills = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Supabase", icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const duplicatedSkills = [...skills, ...skills, ...skills];

export default function TechTicker() {
  return (
    <div className="w-full py-20 border-y border-neutral-900 bg-[#0a0a0a] overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex gap-8 items-center py-2">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-lg bg-neutral-900 text-white font-medium text-sm shrink-0 hover:bg-neutral-800 transition-colors"
            >
              <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}