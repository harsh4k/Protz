import { motion, useReducedMotion } from "motion/react";
import { TIMELINE } from "../data";

export default function Journey() {
  const reducedMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reducedMotion ? { duration: 0 } : { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="path"
      className="relative min-h-screen bg-[#0A0A0A] border-t border-[rgba(240,237,232,0.08)] py-24 select-none"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 w-full">
        
        <div className="flex justify-between items-baseline mb-20 border-b border-[rgba(240,237,232,0.08)] pb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[rgba(240,237,232,0.4)] uppercase">
              (04)
            </span>
            <span className="w-10 h-[1px] bg-[rgba(240,237,232,0.15)]"></span>
            <h2 className="font-sans font-black text-xl tracking-tight text-[#F0EDE8] uppercase">
              THE PATH SO FAR
            </h2>
          </div>
          <span className="font-mono text-xs tracking-wider text-[rgba(240,237,232,0.45)]">
            (HISTORIC MILESTONES)
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="flex flex-col"
        >
          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.year}
              variants={itemVariants}
              className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24 border-b border-[rgba(240,237,232,0.08)] hover:bg-[rgba(240,237,232,0.005)] transition-colors duration-500 px-4 -mx-4 group"
            >
              
              <div className="md:col-span-4 flex items-baseline gap-4 select-none">
                <span className="font-mono text-xs text-[rgba(240,237,232,0.35)] font-bold tracking-widest block w-8">
                  [0{index + 1}]
                </span>
                <h3 className="font-sans font-black text-[12vw] md:text-[6.5vw] uppercase leading-none tracking-tighter text-[rgba(240,237,232,0.12)] group-hover:text-[rgba(240,237,232,0.6)] duration-700 transition-all">
                  {item.year}
                </h3>
              </div>

              <div className="md:col-span-8 flex flex-col justify-center gap-4">
                <h4 className="font-sans font-black text-xl md:text-2xl tracking-tight text-[#F0EDE8] uppercase">
                  {item.title}
                </h4>
                <p className="font-sans font-extralight text-base md:text-lg leading-relaxed text-[rgba(240,237,232,0.65)] max-w-2xl">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-between items-center text-mono text-[9px] tracking-[0.25em] text-[rgba(240,237,232,0.35)] uppercase">
          <div>TIMELINE REGISTER // VERSION 2.6</div>
          <div>ESTABLISHED IN MUMBAI, IN</div>
        </div>
      </div>
    </section>
  );
}
