import { profile } from "@/lib/data";

export default function Contact() {
  const links = [
    { name: "Instagram", val: "@jevn019", href: "https://instagram.com/jevn019" },
    { name: "Discord", val: "jepp2301", href: "https://discord.com" },
    { name: "GitHub", val: "github.com/jevonww", href: profile.github },
  ];

  return (
    <section id="contact" className="px-5 py-32 bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Let’s Talk
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto md:mx-0 text-lg">
            Wanna talk, play some games, or discuss random stuff? Just hit me up. I’m always down for a good conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="relative p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800 hover:border-white/20 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-neutral-500 tracking-widest">{link.name}</span>
                <p className="text-xl mt-3 font-medium text-white group-hover:translate-x-2 transition-transform duration-300">
                  {link.val}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
