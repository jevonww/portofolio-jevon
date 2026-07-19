export const profile = {
  name: "Jevon Wong",
  role: "Software Engineer",
  location: "Semarang, Indonesia",
  tagline:
    "Aku membangun aplikasi web yang cepat, rapi, dan enak dipakai — dari ide sampai production.",
  email: "jevonwong0@gmail.com",
  github: "https://github.com/jevonww",
  linkedin: "https://linkedin.com/in/namakamu",
  stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
};

export const about = `Aku software engineer dengan fokus di frontend, tapi cukup nyaman
bolak-balik ke backend kalau diperlukan. Suka merapikan hal yang berantakan —
baik itu UI yang berantakan atau kodebase yang butuh refactor.`;

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  status: "production" | "active" | "archived";
  metric: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
 
  {
    slug: "TrashSmart-apk",
    name: "TrashSmart-apk",
    description:
      "Aplikasi mobile untuk edukasi bagaimana mengelola sampah secara efisien.",
    stack: ["Flutter", "Supabase", "Dart"],
    status: "active",
    metric: "",
    link: "https://github.com/jevonww/trashmart",
    repo: "https://github.com/jevonww/trashmart",
  },
 
];

export type Commit = {
  hash: string;
  date: string;
  title: string;
  detail: string;
  additions: number;
  deletions: number;
};

export const timeline: Commit[] = [
 
  {
    hash: "7b2d40a",
    date: "2024 — 2027",
    title: "SMKN 8 SEMARANG",
    detail:
      "Masuk ke jurusan PPLG (Pemrograman Perangkat Lunak dan Gim) dan mulai belajar dasar-dasar pemrograman.",
    additions: 96,
    deletions: 12,
  },
  {
    hash: "e91cc08",
    date: "2021 — 2024",
    title: "SMPN 3 Semarang",
    detail:
      "Belum mengenal tentang dunia programming.",
    additions: 64,
    deletions: 8,
  },
  {
    hash: "1a0f223",
    date: "2015 - 2021",
    title: "SDN Pekunden",
    detail:
      "",
    additions: 20,
    deletions: 0,
  },
];
