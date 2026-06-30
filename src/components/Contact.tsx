import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("harshitsinhchauhan250@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative min-h-screen flex flex-col justify-between bg-[#0A0A0A] border-t border-[rgba(240,237,232,0.08)] p-6 md:p-16 select-none overflow-hidden"
    >
      <div className="absolute right-[5vw] top-[10%] font-mono text-[16vw] text-[rgba(240,237,232,0.015)] pointer-events-none font-bold uppercase select-none">
        MUMBAI
      </div>

      <div className="flex justify-between items-start font-mono text-[10px] tracking-[0.3em] uppercase text-[rgba(240,237,232,0.4)] mt-4">
        <div className="flex items-center gap-2">
          <span>(05)</span>
          <span>CONNECT LAYER</span>
        </div>
        <div>AVAILABLE WORLDWIDE</div>
      </div>

      <div className="my-auto py-12">
        <div className="flex flex-col mix-blend-difference">
          <h2 className="font-sans font-black text-[13vw] sm:text-[12vw] md:text-[11vw] uppercase leading-[0.78] tracking-tighter text-[#F0EDE8]">
            LET'S
          </h2>
          <h2 className="font-sans font-black text-[13vw] sm:text-[12vw] md:text-[11vw] uppercase leading-[0.78] tracking-tighter text-[#F0EDE8] pl-[6vw]">
            BUILD
          </h2>
          <h2 className="font-sans font-black text-[13vw] sm:text-[12vw] md:text-[11vw] uppercase leading-[0.78] tracking-tighter text-[#F0EDE8] pl-[12vw]">
            SOMETHING.
          </h2>
        </div>
      </div>

      <div className="w-full border-t border-[rgba(240,237,232,0.08)] pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 justify-between items-start">
          {SOCIAL_LINKS.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              key={link.label}
              className="flex flex-col gap-2 group cursor-pointer border-l border-transparent hover:border-[rgba(240,237,232,0.15)] pl-3 transition-colors duration-500"
            >
              <div className="flex items-center gap-1">
                <span className="font-mono text-[9px] tracking-[0.25em] text-[rgba(240,237,232,0.4)] uppercase">
                  {link.label}
                </span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[rgba(240,237,232,0.6)]" />
              </div>
              <span className="font-sans font-extralight text-sm sm:text-base text-[#F0EDE8] group-hover:text-[rgba(240,237,232,0.6)] transition-all break-all leading-relaxed">
                {link.address}
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center font-mono text-[9px] tracking-[0.25em] uppercase text-[rgba(240,237,232,0.3)] mt-16 pt-8 border-t border-[rgba(240,237,232,0.04)] gap-4">
          <div>DESIGNED & CODED BY HARSHIT CHAUHAN // © 2026 CORES</div>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1 cursor-pointer hover:text-[#F0EDE8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(240,237,232,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded-[2px]"
          >
            {copied ? "[EMAIL COPIED TO CLIPBOARD]" : "[CLICK TO COPY EMAIL]"}
          </button>
          <button
            onClick={scrollToTop}
            className="cursor-pointer hover:text-[#F0EDE8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(240,237,232,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded-[2px]"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
