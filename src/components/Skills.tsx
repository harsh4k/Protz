import { motion, useReducedMotion } from "motion/react";

const SKILL_AREAS = [
  {
    label: "Frontend",
    skills: "React, Next.js, TypeScript, Tailwind CSS, Motion",
  },
  {
    label: "Backend",
    skills: "Node.js, Express, REST APIs, PostgreSQL, Prisma",
  },
  {
    label: "Design",
    skills: "UI/UX, Typographic Systems, Editorial Layout, Prototyping",
  },
  {
    label: "R&D",
    skills: "System Architecture, Performance Optimization, Emerging Tech",
  },
];

export default function Skills() {
  const reducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reducedMotion ? { duration: 0 } : { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="skills"
      className="page-wrapper section-gap"
    >
      <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--spacing-60)" }}>
        {/* Left: Display Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="md:col-span-5 flex flex-col"
          style={{ gap: "var(--spacing-20)" }}
        >
          <span
            className="font-ui w-350 text-caption uppercase"
            style={{ color: "var(--fg-muted)" }}
          >
            Capabilities
          </span>
          <h2
            className="font-display w-display-light text-heading-sm leading-display-tight"
            style={{ color: "var(--fg)", letterSpacing: "-0.01em" }}
          >
            With Great Power Comes Great Responsibility
          </h2>
          <div className="accent-tick" />
          <p
            className="font-ui w-350 text-body-sm"
            style={{ color: "var(--fg-muted)", lineHeight: 1.6, marginTop: "var(--spacing-10)" }}
          >
            A fluid intersection where design, engineering, and curiosity collide. Crafting beautiful user experiences takes a harmony of bold imagination and meticulous implementation.
          </p>
        </motion.div>

        {/* Right: Skills List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="md:col-span-6 md:col-start-7 flex flex-col"
          style={{ gap: "var(--spacing-30)" }}
        >
          {SKILL_AREAS.map((area) => (
            <div
              key={area.label}
              className="flex flex-col"
              style={{
                gap: "var(--spacing-8)",
                paddingBottom: "var(--spacing-20)",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <span
                className="font-ui w-350 text-caption uppercase tracking-wider"
                style={{ color: "var(--fg-muted)" }}
              >
                {area.label}
              </span>
              <span
                className="font-display w-display-regular text-subheading"
                style={{ color: "var(--fg)", lineHeight: 1.3 }}
              >
                {area.skills}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}