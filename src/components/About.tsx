import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Gamepad2, Compass, Award } from "lucide-react";

export default function About() {
  const reducedMotion = useReducedMotion();
  
  const fadeUp = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reducedMotion ? { duration: 0 } : { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 bg-[#0A0A0A] border-t border-[rgba(240,237,232,0.08)] select-none overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-24 relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-start"
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-[rgba(240,237,232,0.4)] uppercase mb-6 flex items-center gap-3">
            <span>(01)</span>
            <span className="w-10 h-[1px] bg-[rgba(240,237,232,0.15)]"></span>
            <span>WHO I AM // R&D MANIFESTO</span>
          </div>

          <h2 className="font-sans font-black text-[7vw] sm:text-[6.5vw] md:text-[5.5vw] uppercase leading-[0.85] tracking-tight text-[#F0EDE8] max-w-5xl">
            BRIDGING THE APEX
            <br />
            OF PURE AESTHETICS
            <br />
            AND DEEP LOGIC.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start pt-12 border-t border-[rgba(240,237,232,0.08)]">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="md:col-span-7 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[10px] tracking-[0.25em] text-[rgba(240,237,232,0.4)] uppercase">
                THE MOTIVATION
              </p>
              <p className="font-sans font-extralight text-xl md:text-2xl leading-relaxed text-[rgba(240,237,232,0.85)] pr-4">
                Hi, I'm Harshit Chauhan. 👋 I am a first-year computer engineering student with a lifelong passion for Research & Development. Ever since I was a kid, I've been fascinated by how things work—whether it's the logic inside a computer or the vast, undiscovered mysteries of space and planets.
              </p>
              <p className="font-sans font-extralight text-base md:text-lg leading-relaxed text-[rgba(240,237,232,0.55)] pr-4">
                Becoming an engineer isn't just a career path for me; it's a dream I'm actively building toward every single day. I love bridging the gap between aesthetics and logic. I focus on creating clean, intuitive UI/UX designs while diving deep into learning robust backend architectures to build fast, reliable, and scalable platforms.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <p className="font-mono text-[10px] tracking-[0.25em] text-[rgba(240,237,232,0.4)] uppercase">
                WHERE I FIND INSPIRATION
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                <div className="border border-[rgba(240,237,232,0.08)] p-6 flex flex-col justify-between h-full bg-[rgba(240,237,232,0.01)] hover:bg-[rgba(240,237,232,0.02)] transition-colors duration-300">
                  <Gamepad2 className="w-5 h-5 text-[rgba(240,237,232,0.6)] mb-4 stroke-[1.2]" />
                  <div>
                    <h4 className="font-mono text-[11px] font-bold text-[#F0EDE8] tracking-wider uppercase mb-1">GAMING</h4>
                    <p className="font-sans font-extralight text-xs text-[rgba(240,237,232,0.5)]">
                      Immersive world UI like the Dying Light series and Valorant are major visual triggers.
                    </p>
                  </div>
                </div>

                <div className="border border-[rgba(240,237,232,0.08)] p-6 flex flex-col justify-between h-full bg-[rgba(240,237,232,0.01)] hover:bg-[rgba(240,237,232,0.02)] transition-colors duration-300">
                  <Compass className="w-5 h-5 text-[rgba(240,237,232,0.6)] mb-4 stroke-[1.2]" />
                  <div>
                    <h4 className="font-mono text-[11px] font-bold text-[#F0EDE8] tracking-wider uppercase mb-1">SCI-FI & SPACE</h4>
                    <p className="font-sans font-extralight text-xs text-[rgba(240,237,232,0.5)]">
                      Pushing boundaries of science. Keeping my intense curiosity safe & active.
                    </p>
                  </div>
                </div>

                <div className="border border-[rgba(240,237,232,0.08)] p-6 flex flex-col justify-between h-full bg-[rgba(240,237,232,0.01)] hover:bg-[rgba(240,237,232,0.02)] transition-colors duration-300">
                  <Award className="w-5 h-5 text-[rgba(240,237,232,0.6)] mb-4 stroke-[1.2]" />
                  <div>
                    <h4 className="font-mono text-[11px] font-bold text-[#F0EDE8] tracking-wider uppercase mb-1">SPORTS</h4>
                    <p className="font-sans font-extralight text-xs text-[rgba(240,237,232,0.5)]">
                      Recharging physically and strategically through football, volleyball, or badminton.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="md:col-span-5 flex flex-col gap-12"
          >
            <div className="flex flex-col border-b border-[rgba(240,237,232,0.08)] pb-6 hover:border-[rgba(240,237,232,0.25)] transition-colors duration-500">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[rgba(240,237,232,0.4)]">
                ACADEMICS & COLLEGE
              </span>
              <span className="font-sans font-black text-xl md:text-2xl tracking-tight uppercase text-[#F0EDE8] mt-2">
                MPSTME, NMIMS
              </span>
              <span className="font-mono text-[10px] text-[rgba(240,237,232,0.45)] mt-1">
                B.TECH STUDENT (YEAR 1)
              </span>
            </div>

            <div className="flex flex-col border-b border-[rgba(240,237,232,0.08)] pb-6 hover:border-[rgba(240,237,232,0.25)] transition-colors duration-500">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[rgba(240,237,232,0.4)]">
                DISCIPLINE
              </span>
              <span className="font-sans font-black text-xl md:text-2xl tracking-tight uppercase text-[#F0EDE8] mt-2">
                FULL-STACK & R&D
              </span>
              <span className="font-mono text-[10px] text-[rgba(240,237,232,0.45)] mt-1">
                CORE SYSTEM OPERATIONS
              </span>
            </div>

            <div className="flex flex-col border-b border-[rgba(240,237,232,0.08)] pb-6 hover:border-[rgba(240,237,232,0.25)] transition-colors duration-500">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[rgba(240,237,232,0.4)]">
                LIFELONG FOCUS
              </span>
              <span className="font-sans font-black text-xl md:text-2xl tracking-tight uppercase text-[#F0EDE8] mt-2">
                HOW THINGS WORK
              </span>
              <span className="font-mono text-[10px] text-[rgba(240,237,232,0.45)] mt-1">
                FROM LOGIC TO SPACE EXPERIMENTS
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute left-[30vw] top-0 bottom-0 w-[1px] bg-[rgba(240,237,232,0.02)] pointer-events-none hidden md:block"></div>
    </section>
  );
}
