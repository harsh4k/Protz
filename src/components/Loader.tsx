import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const name = "HARSHIT CHAUHAN";
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 450);

    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.95,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="portfolio-preloader"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0A0A0A] p-8 md:p-16 select-none cursor-wait"
    >
      {/* Top Header info */}
      <div className="flex justify-between items-start font-mono text-[10px] tracking-[0.2em] uppercase text-[rgba(240,237,232,0.4)]">
        <div>HARSHIT CHAUHAN — PORTFOLIO</div>
        <div>MUMBAI, INDIA — UTC+5:30</div>
      </div>

      {/* Centered Large Name */}
      <div className="flex flex-col items-start justify-center ml-2 md:ml-10">
        <div className="font-mono text-xs mb-4 tracking-[0.3em] text-[rgba(240,237,232,0.5)]">
          INITIALIZING SYSTEM{dots}
        </div>
        <div className="flex flex-wrap font-sans font-black text-4xl sm:text-6xl md:text-8xl tracking-tighter leading-none text-[#F0EDE8]">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={char === " " ? "mr-4" : ""}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom info */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-end font-mono text-[10px] tracking-[0.2em] uppercase text-[rgba(240,237,232,0.4)] gap-4">
        <div>© 2026 EDITION</div>
        <div>EDITORIAL BRUTALISM / MEETS LUXURY TECHNOLOGY</div>
      </div>
    </motion.div>
  );
}
