import React from "react";
import { GooeyText } from "./ui/gooey-text-morphing";

export default function Skills() {
  // Texts for the glorious Gooey Text Centerpiece
  const morphWords = [
    "Design IS",
    "Engineering",
    "Space",
    "Is awesome"
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center bg-[#070707] border-t border-[rgba(240,237,232,0.06)] py-20 select-none overflow-hidden"
    >
      {/* Decorative High-Contrast Tech Blueprint Backing */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent pointer-events-none" />
      
      {/* Subtle vertical laser grid stripes */}
      <div className="absolute left-[6vw] top-0 bottom-0 w-[1px] bg-[rgba(255,255,255,0.015)] pointer-events-none" />
      <div className="absolute right-[6vw] top-0 bottom-0 w-[1px] bg-[rgba(255,255,255,0.015)] pointer-events-none" />

      <div 
        id="skills-interactive-container"
        className="max-w-[1500px] mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col gap-12"
      >
        {/* TITLE BLOCK HEADER */}
        <div className="flex justify-between items-baseline border-b border-[rgba(240,237,232,0.08)] pb-8 mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[rgba(240,237,232,0.4)] uppercase">
              (03)
            </span>
            <span className="w-10 h-[1px] bg-[rgba(240,237,232,0.15)]"></span>
            <h2 className="font-sans font-black text-xl tracking-tight text-[#F0EDE8] uppercase">
              WITH GREAT POWER COMES GREAT RESPONSIBILITY
            </h2>
          </div>
          <span className="font-mono text-[10px] tracking-widest text-[rgba(240,237,232,0.35)] uppercase hidden sm:inline">
            Active Morphing Matrix
          </span>
        </div>

        {/* WIDESCREEN LAYOUT */}
        <div className="max-w-5xl mx-auto w-full">
          
          {/* CENTERPIECE MORPHING SCREEN */}
          <div className="w-full flex items-center justify-center border border-[rgba(240,237,232,0.08)] bg-zinc-950/40 relative overflow-hidden backdrop-blur p-12 sm:p-20 min-h-[400px] md:min-h-[520px] rounded-lg">
            
            {/* Centered Liquid Text Canvas */}
            <div className="w-full flex items-center justify-center relative z-10 py-16">
              <div className="relative">
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-white/5 blur-[75px] rounded-full pointer-events-none transition-all duration-1000" />
                
                <GooeyText
                  texts={morphWords}
                  morphTime={1.0}
                  cooldownTime={0.35}
                  className="font-sans font-black tracking-tighter"
                  textClassName="text-[#F0EDE8] text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-extrabold"
                />
              </div>
            </div>

          </div>

        </div>

        {/* SUMMARY BLURB */}
        <div className="max-w-2xl mx-auto text-center mt-4">
          <p className="font-sans font-extralight text-xs leading-relaxed text-[rgba(240,237,232,0.4)]">
            A fluid, typographic showcase where design, engineering, and space collide. Just as great power requires great responsibility, crafting beautiful user experiences takes a perfect harmony of bold imagination and meticulous implementation.
          </p>
        </div>

      </div>
    </section>
  );
}
