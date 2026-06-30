import React from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      id="main-navigation"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 w-full bg-[#0A0A0A] border-b border-[rgba(240,237,232,0.08)] py-5 px-6 md:px-12 backdrop-none"
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase select-none">
        
        <div className="flex gap-6 md:gap-10 w-1/3 justify-start">
          <a
            href="#work"
            onClick={(e) => scrollToSection("work", e)}
            className="text-[#F0EDE8] hover:text-[rgba(240,237,232,0.55)] cursor-pointer tracking-[0.2em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(240,237,232,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded-[2px]"
            id="nav-link-work"
          >
            WORK
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection("about", e)}
            className="text-[#F0EDE8] hover:text-[rgba(240,237,232,0.55)] cursor-pointer tracking-[0.2em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(240,237,232,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded-[2px]"
            id="nav-link-about"
          >
            ABOUT
          </a>
        </div>

        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-center font-sans font-black text-xs md:text-sm tracking-[0.3em] text-[#F0EDE8] hover:opacity-80 transition-opacity cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(240,237,232,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded-[2px] w-1/3 flex justify-center"
          id="nav-anchor"
        >
          HARSHIT CHAUHAN
        </a>

        <div className="flex gap-6 md:gap-10 w-1/3 justify-end text-right">
          <a
            href="#path"
            onClick={(e) => scrollToSection("path", e)}
            className="text-[#F0EDE8] hover:text-[rgba(240,237,232,0.55)] cursor-pointer tracking-[0.2em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(240,237,232,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded-[2px]"
            id="nav-link-path"
          >
            PATH
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection("contact", e)}
            className="text-[#F0EDE8] hover:text-[rgba(240,237,232,0.55)] cursor-pointer tracking-[0.2em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(240,237,232,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded-[2px]"
            id="nav-link-contact"
          >
            CONTACT
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
