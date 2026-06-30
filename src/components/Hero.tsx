import { motion, useReducedMotion } from "motion/react";
import harshitPortrait from "../assets/images/harshit_portrait_1781587593103.jpg";

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="page-wrapper section-gap min-h-[90vh] flex flex-col justify-center"
    >
      {/* Display Headline Block */}
      <div className="flex flex-col relative">
        {/* Line 1 */}
        <div className="flex items-start relative">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <h1
              className="font-display w-display-light text-display-lg leading-display-tight"
              style={{
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}
            >
              HARSHIT
            </h1>
          </motion.div>
        </div>

        {/* Line 2 with overlapping image tile */}
        <div className="relative flex items-start justify-between" style={{ marginTop: "-0.05em" }}>
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative z-10"
            style={{ marginLeft: "8vw" }}
          >
            <h1
              className="font-display w-display-light text-display-lg leading-display-tight"
              style={{
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}
            >
              CHAUHAN
            </h1>
          </motion.div>

          {/* Image tile overlapping the second line */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="image-tile hidden md:block flex-shrink-0"
            style={{
              width: "280px",
              height: "200px",
              position: "relative",
              top: "-40px",
            }}
          >
            <img
              src={harshitPortrait}
              alt="Harshit Chauhan"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Accent Tick + CTA row */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="flex items-end justify-between mt-16"
        >
          <div className="flex flex-col" style={{ gap: "var(--spacing-15)" }}>
            <div className="accent-tick" />
            <p
              className="font-caption caption-pair max-w-xs"
              style={{ color: "var(--fg-muted)" }}
            >
              Full-Stack Developer & R&D Enthusiast. Structuring clean interfaces and robust systems at MPSTME, NMIMS.
            </p>
          </div>

          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-cta"
          >
            Explore Work
            <span className="arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}