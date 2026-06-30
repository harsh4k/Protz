import { motion, useReducedMotion } from "motion/react";
import { PROJECTS } from "../data";

export default function Projects() {
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
      id="work"
      className="page-wrapper section-gap"
    >
      <div className="flex flex-col" style={{ gap: "var(--spacing-60)" }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col"
          style={{ gap: "var(--spacing-8)" }}
        >
          <span
            className="font-ui w-350 text-caption uppercase"
            style={{ color: "var(--fg-muted)" }}
          >
            Selected Work
          </span>
          <h2
            className="font-display w-display-light text-heading-sm leading-display-tight"
            style={{ color: "var(--fg)", letterSpacing: "-0.01em" }}
          >
            Projects
          </h2>
          <div className="accent-tick" />
        </motion.div>

        {/* Portfolio Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "var(--spacing-20)" }}
        >
          {PROJECTS.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="portfolio-card group flex flex-col no-underline cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              {/* B&W Image */}
              <div
                className="image-tile w-full"
                style={{ aspectRatio: "4/3", marginBottom: "var(--spacing-20)" }}
              >
                <img
                  src={project.visual}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Company name */}
              <h3
                className="font-ui w-regular text-subheading"
                style={{ color: "var(--fg)", margin: 0 }}
              >
                {project.title}
              </h3>

              {/* Category tag */}
              <span
                className="font-ui w-350 text-caption uppercase tracking-wider"
                style={{
                  color: "var(--fg-muted)",
                  marginTop: "var(--spacing-4)",
                }}
              >
                {project.role}
              </span>

              {/* Description */}
              <p
                className="font-ui w-350 text-body-sm"
                style={{
                  color: "var(--fg-muted)",
                  marginTop: "var(--spacing-10)",
                  lineHeight: 1.5,
                  opacity: 0.7,
                }}
              >
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}