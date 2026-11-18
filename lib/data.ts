export const profile = {
  name: "Jevon Wong Arsyale",
  role: "Software Engineer",
  location: "Semarang, Indonesia",
  tagline:
    `Student at SMKN 8 Semarang.
Software and Game Development Major.`,
  email: "jevonwong0@gmail.com",
  github: "https://github.com/jevonww",
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Flutter",
    "Supabase",
    "Dart",
  ],
};

export const about = `I enjoy building websites, messing around with code, and figuring out why something suddenly stopped working. When I’m not coding, you’ll probably find me playing games, exploring new tech, or pretending I’ll stop playing after “one more game.`;

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  status: "production" | "active" | "archived";
  metric: string;
  image: string; // Tambahkan field image
  compact?: boolean; // Tampilkan sebagai kartu kecil
  links: {
    demo: string;
    source: string;
  };
};

export const projects: Project[] = [
 
  {
    slug: "TrashSmart-apk",
    name: "TrashSmart-apk",
    description:
      "Mobile application for education on how to manage waste efficiently.",
    stack: ["Flutter", "Supabase", "Dart"],
    status: "active",
    metric: "",
    image: "/projects/trashsmart.png", // Path gambar placeholder
    links: {
      demo: "https://trashsmartdownload.vercel.app/",
      source: "https://github.com/jevonww/trashmart",
    },
  },
  {
    slug: "Bexs-Door",
    name: "Bexs Door",
    description:
    "E-commerce website for selling Bexs Door products.",
    stack: ["Laravel", "PHP", "MySQL"],
    status: "active",
    metric: "",
    image: "/projects/bexsdoor.png", // Path gambar placeholder
    links: {
      demo: "",
      source: "https://github.com/jevonww/bexs-door",
    },
  },
  {
    slug: "Ecommerce-Web",
    name: "Tahu Bakso Ecommerce",
    description:
      "Online shopping platform for Semarang's signature Tahu Bakso products with a checkout system.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    status: "active",
    metric: "",
    image: "/projects/ecommerce.png", // Path gambar placeholder
    links: {
      demo: "",
      source: "https://github.com/jevonww/website-praukk",
    },
  },
  {
    slug: "level-up-game-lounge",
    name: "LEVEL Up - Premium Game Lounge",
    description:
      "Website for a premium game lounge with room and console booking, membership perks, and an admin dashboard for managing reservations.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    status: "active",
    metric: "",
    image: "/projects/levelup.png",
    links: {
      demo: "",
      source: "https://github.com/jevonww/website-reservasi-gamelounge",
    },
  },
  {
    slug: "whatsapp-bot",
    name: "Bot WhatsApp",
    description:
      "A fun WhatsApp bot packed with jokes, mini games, random commands, and other entertainment features to keep group chats lively.",
    stack: ["Node.js"],
    status: "active",
    metric: "",
    image: "/projects/whatsapp-bot-logo.png", // Ganti path gambar di sini
    compact: true,
    links: {
      demo: "",
      source: "https://github.com/jevonww/bot-wa",
    },
  },
  {
    slug: "discord-bot",
    name: "Level Up Voice Bot",
    description:
      "Discord bot that tracks time spent in voice channels and rewards members with XP, levels, and rank progression the longer they hang out.",
    stack: ["Node.js"],
    status: "active",
    metric: "",
    image: "/projects/discord-bot.png", // Ganti path gambar di sini
    compact: true,
    links: {
      demo: "",
      source: "https://github.com/jevonww/bot-discord-levelupvoice",
    },
  },
 
];

export type Commit = {
  hash: string;
  date: string;
  title: string;
  detail: string;
  image?: string;
  location: string;
  mapLink: string;
  additions: number;
  deletions: number;
};

export const timeline: Commit[] = [
 
  {
    hash: "7b2d40a",
    date: "2024 — 2027",
    title: "SMKN 8 SEMARANG",
    detail:
      "Focusing on web and mobile application development. Involved in various team collaboration projects to build school information systems and inventory management applications.",
    image: "/experience/smk.jpg",
    location: "Semarang, Indonesia",
    mapLink: "https://maps.app.goo.gl/xQYcTas3tkf4z7nc7",
    additions: 96,
    deletions: 12,
  },
  {
    hash: "e91cc08",
    date: "2021 — 2024",
    title: "SMPN 3 Semarang",
    detail:
      "Early exploration phase in information technology.",
    image: "/experience/smpn3.png",
    location: "Semarang, Indonesia",
    mapLink: "https://maps.app.goo.gl/idByajJoqVNKvznY7",
    additions: 64,
    deletions: 8,
  },
  {
    hash: "1a0f223",
    date: "2015 - 2021",
    title: "SDN Pekunden",
    detail:
      "Elementary education period that shaped character and learning interests.",
    image: "/experience/sdn.png",
    location: "Semarang, Indonesia",
    mapLink: "https://maps.app.goo.gl/5VQrh3BvnWuP8oA89",
    additions: 20,
    deletions: 0,
  },
];

