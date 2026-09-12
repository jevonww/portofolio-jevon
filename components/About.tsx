import { about } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const paragraphs = about.trim().split("\n\n");

  return (
    <section id="about" className="px-5 py-32 bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">introduction</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">ABOUT ME</h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={200}>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-8">
                Vocational high school student
who loves tech, web development,
and probably spends too much time gaming.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal delay={400}>
              <div className="relative group w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/50 shadow-2xl p-2 rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none z-20" />
                <img 
                  src="/ligo.jpg" 
                  alt="Jevon Wong" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}


