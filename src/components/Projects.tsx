import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (reducedMotion || !containerRef.current) return;
    requestAnimationFrame(() => {
      const rect = containerRef.current!.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    });
  }, [reducedMotion, mouseX, mouseY]);

  const handleMouseEnter = useCallback((idx: number) => {
    if (!reducedMotion) setHoveredIdx(idx);
  }, [reducedMotion]);

  const handleMouseLeave = useCallback(() => {
    if (!reducedMotion) setHoveredIdx(null);
  }, [reducedMotion]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="work"
      className="relative min-h-screen bg-[#0A0A0A] border-t border-[rgba(240,237,232,0.08)] py-24 select-none"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 w-full">
        
        <div className="flex justify-between items-baseline mb-16 border-b border-[rgba(240,237,232,0.08)] pb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[rgba(240,237,232,0.4)] uppercase">
              (02)
            </span>
            <span className="w-10 h-[1px] bg-[rgba(240,237,232,0.15)]"></span>
            <h2 className="font-sans font-black text-xl tracking-tight text-[#F0EDE8] uppercase">
              SELECTED WORK
            </h2>
          </div>
          <span className="font-mono text-xs tracking-wider text-[rgba(240,237,232,0.45)]">
            (03 ITEMS)
          </span>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project, idx) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className="group relative flex flex-col md:flex-row items-stretch md:items-center justify-between py-10 md:py-14 border-b border-[rgba(240,237,232,0.08)] transition-all duration-500 hover:bg-[rgba(240,237,232,0.015)] px-4 -mx-4"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              id={`project-item-${project.id}`}
            >
              
              <div className="flex items-center gap-6 md:gap-14 flex-1">
                <span className="font-mono text-xs tracking-widest text-[rgba(240,237,232,0.35)] block w-8">
                  {project.number}
                </span>
                
                <h3 className="font-sans font-black text-3xl sm:text-4xl md:text-[4vw] tracking-tighter text-[#F0EDE8] uppercase leading-none transition-transform duration-500 ease-out group-hover:translate-x-3 md:group-hover:translate-x-6">
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-col md:flex-row flex-1 items-start md:items-center justify-between gap-6 py-4 md:py-0">
                <p className="font-sans font-extralight text-sm md:text-base text-[rgba(240,237,232,0.55)] max-w-sm md:leading-normal">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] tracking-wider text-[rgba(240,237,232,0.6)] border border-[rgba(240,237,232,0.12)] px-2 py-1 uppercase rounded-none bg-[#0A0A0A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end pl-4">
                <div className="p-3 border border-transparent group-hover:border-[rgba(240,237,232,0.15)] group-hover:bg-[#F0EDE8] group-hover:text-[#0A0A0A] transition-all duration-500 rounded-none text-text-sec focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(240,237,232,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="hidden lg:block pointer-events-none absolute inset-0 z-30 overflow-hidden">
          <AnimatePresence>
            {hoveredIdx !== null && !reducedMotion && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  left: springX,
                  top: springY,
                  x: "-50%",
                  y: "-50%",
                }}
                className="absolute w-[24vw] aspect-[4/3] bg-black border border-[rgba(240,237,232,0.15)] overflow-hidden shadow-[20px_20px_40px_rgba(0,0,0,0.8)] rounded-none"
              >
                <img
                  src={PROJECTS[hoveredIdx].visual}
                  alt={PROJECTS[hoveredIdx].title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-110 ease-out transition-transform duration-700 active:scale-105"
                />
                
                <div className="absolute top-3 left-3 bg-black py-1 px-2 border border-[rgba(240,237,232,0.1)] font-mono text-[8px] tracking-[0.2em] text-[#F0EDE8]">
                  {PROJECTS[hoveredIdx].title} // ASSET PREVIEW
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:hidden mt-8 flex flex-col gap-4">
          <p className="font-mono text-[9px] tracking-wider text-[rgba(240,237,232,0.4)] uppercase">
            * Tap headers to access digital source codes and previews
          </p>
        </div>
      </div>
    </section>
  );
}
