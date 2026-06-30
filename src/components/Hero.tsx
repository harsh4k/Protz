import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Cloud } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollY } = useScroll();
  
  const textY1 = reducedMotion ? 0 : useTransform(scrollY, [0, 800], [0, -100]);
  const textY2 = reducedMotion ? 0 : useTransform(scrollY, [0, 800], [0, -60]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-16 py-12 select-none overflow-hidden bg-[#0A0A0A]"
    >
      <div className="absolute top-10 left-6 md:left-16 flex items-center gap-3 text-[rgba(240,237,232,0.6)]">
        <Cloud className="w-5 h-5 stroke-[1]" id="nav-cloud-logo" />
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase">[SPIDERMAN.CLOUD]</span>
      </div>

      <div className="absolute top-10 right-6 md:right-16 font-mono text-[9px] tracking-[0.25em] text-[rgba(240,237,232,0.6)] text-right flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 bg-[#F0EDE8] motion-safe:animate-pulse"></span>
        <span>INDEX</span>
      </div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10 flex flex-col justify-center mt-auto mb-auto pt-16">
        
        <motion.div
          style={{ y: textY1 }}
          className="relative mix-blend-difference"
        >
          <h1 className="font-sans font-black text-[11vw] sm:text-[11vw] md:text-[12vw] uppercase leading-[0.9] tracking-tighter text-[#F0EDE8]">
            HARSHIT
          </h1>
        </motion.div>

        <motion.div
          style={{ y: textY2 }}
          className="relative ml-[8vw] sm:ml-[14vw] md:ml-[18vw] flex items-baseline mix-blend-difference"
        >
          <h1 className="font-sans font-black text-[11vw] sm:text-[11vw] md:text-[12vw] uppercase leading-[0.9] tracking-tighter text-[#F0EDE8]">
            CHAUHAN
          </h1>
        </motion.div>

        <div className="mt-[6vw] flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-30">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-md"
          >
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[rgba(240,237,232,0.55)] mb-3">
              PRIMARY SPECIALIZATION
            </p>
            <p className="font-sans font-light text-xl md:text-2xl leading-snug text-[rgba(240,237,232,0.8)]">
              Full-Stack Developer & R&D Enthusiast. Structuring clean interfaces and robust systems at MPSTME, NMIMS.
            </p>
          </motion.div>

<motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="flex gap-4 self-start md:self-auto"
            >
              <a 
                href="#work"
                className="font-mono text-[10px] tracking-[0.25em] uppercase border border-[rgba(240,237,232,0.25)] px-6 py-4 hover:bg-[#F0EDE8] hover:text-[#0A0A0A] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(240,237,232,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded-[2px]"
              >
                EXPLORE INDEX ↓
              </a>
            </motion.div>
        </div>
      </div>

      <div className="absolute right-[15vw] top-0 bottom-0 w-[1px] bg-[rgba(240,237,232,0.03)] pointer-events-none hidden md:block"></div>
    </section>
  );
}
