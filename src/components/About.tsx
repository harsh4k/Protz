import { motion, useReducedMotion } from "motion/react";
import harshitPortrait from "../assets/images/harshit_portrait_1781587593103.jpg";

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
      className="page-wrapper section-gap"
    >
      <div className="flex flex-col" style={{ gap: "var(--spacing-80)" }}>
        {/* Section 1: Image + Headline editorial spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-start" style={{ gap: "var(--spacing-60)" }}>
          {/* Left: B&W Image Tile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="md:col-span-5"
          >
            <div className="image-tile" style={{ width: "100%", aspectRatio: "3/4", maxWidth: "380px" }}>
              <img
                src={harshitPortrait}
                alt="Harshit Chauhan portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Display Headline + Body */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="md:col-span-7 flex flex-col"
            style={{ gap: "var(--spacing-30)" }}
          >
            <h2
              className="font-display w-display-light text-heading-sm leading-display-tight"
              style={{
                color: "var(--fg)",
                letterSpacing: "-0.01em",
              }}
            >
              BRIDGING THE APEX OF PURE AESTHETICS AND DEEP LOGIC
            </h2>

            <div className="flex flex-col" style={{ gap: "var(--spacing-20)", marginTop: "var(--spacing-10)" }}>
              <p
                className="font-ui w-350 text-body"
                style={{ color: "var(--fg)", lineHeight: 1.6 }}
              >
                Hi, I&apos;m Harshit Chauhan. I am a first-year computer engineering student with a lifelong passion for Research & Development. Ever since I was a kid, I&apos;ve been fascinated by how things work — whether it&apos;s the logic inside a computer or the vast, undiscovered mysteries of space and planets.
              </p>
              <p
                className="font-ui w-350 text-body"
                style={{ color: "var(--fg-muted)", lineHeight: 1.6 }}
              >
                Becoming an engineer isn&apos;t just a career path for me; it&apos;s a dream I&apos;m actively building toward every single day. I love bridging the gap between aesthetics and logic. I focus on creating clean, intuitive UI/UX designs while diving deep into learning robust backend architectures to build fast, reliable, and scalable platforms.
              </p>
            </div>

            {/* Accent Tick */}
            <div className="accent-tick" style={{ marginTop: "var(--spacing-15)" }} />
          </motion.div>
        </div>

        {/* Section 2: Metadata editorial grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "var(--spacing-40)" }}
        >
          {/* Metadata: College */}
          <div className="flex flex-col" style={{ gap: "var(--spacing-8)" }}>
            <span className="font-ui w-350 text-caption uppercase" style={{ color: "var(--fg-muted)" }}>
              Academics
            </span>
            <span className="font-display w-display-semibold text-subheading" style={{ color: "var(--fg)" }}>
              MPSTME, NMIMS
            </span>
            <span className="font-caption caption-pair text-sm" style={{ color: "var(--fg-muted)", fontStyle: "normal" }}>
              B.Tech Student (Year 1)
            </span>
          </div>

          {/* Metadata: Discipline */}
          <div className="flex flex-col" style={{ gap: "var(--spacing-8)" }}>
            <span className="font-ui w-350 text-caption uppercase" style={{ color: "var(--fg-muted)" }}>
              Discipline
            </span>
            <span className="font-display w-display-semibold text-subheading" style={{ color: "var(--fg)" }}>
              Full-Stack & R&D
            </span>
            <span className="font-caption caption-pair text-sm" style={{ color: "var(--fg-muted)", fontStyle: "normal" }}>
              Core System Operations
            </span>
          </div>

          {/* Metadata: Focus */}
          <div className="flex flex-col" style={{ gap: "var(--spacing-8)" }}>
            <span className="font-ui w-350 text-caption uppercase" style={{ color: "var(--fg-muted)" }}>
              Lifelong Focus
            </span>
            <span className="font-display w-display-semibold text-subheading" style={{ color: "var(--fg)" }}>
              How Things Work
            </span>
            <span className="font-caption caption-pair text-sm" style={{ color: "var(--fg-muted)", fontStyle: "normal" }}>
              From Logic to Space Experiments
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}