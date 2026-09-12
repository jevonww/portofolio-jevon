"use client";

import { timeline } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="reveal-section px-5 py-32 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
            HISTORY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Experience
          </h2>
        </div>

        <div className="grid gap-12">
          {timeline.map((item) => (
            <div 
              key={item.hash} 
              className="group relative grid lg:grid-cols-12 gap-8 items-center bg-[#0a0a0a] border border-neutral-900 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors pointer-events-none" />

              {/* Image / Logo Box */}
              <div className="lg:col-span-3 flex flex-col items-center sm:items-start">
                <div className="w-full max-w-[200px] h-32 relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-mono text-xs text-neutral-500 mt-4 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800">
                  {item.date}
                </span>
              </div>
              
              {/* Content */}
              <div className="lg:col-span-9 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    {item.title}
                  </h3>
                  <a 
                    href={item.mapLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-mono text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800 hover:border-emerald-500/50 transition-all w-fit"
                  >
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    Maps
                  </a>
                </div>
                
                {item.detail && (
                  <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">
                    {item.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
