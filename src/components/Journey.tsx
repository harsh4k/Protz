import { motion, useReducedMotion } from "motion/react";
import { TIMELINE } from "../data";

export default function Journey() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reducedMotion ? { duration: 0 } : { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="path"
      className="page-wrapper section-gap"
    >
      <div className="flex flex-col" style={{ gap: "var(--spacing-60)" }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="flex flex-col"
          style={{ gap: "var(--spacing-8)" }}
        >
          <span
            className="font-ui w-350 text-caption uppercase"
            style={{ color: "var(--fg-muted)" }}
          >
            History
          </span>
          <h2
            className="font-display w-display-light text-heading-sm leading-display-tight"
            style={{ color: "var(--fg)", letterSpacing: "-0.01em" }}
          >
            The Path So Far
          </h2>
          <div className="accent-tick" />
        </motion.div>

        {/* Timeline Entries */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="flex flex-col"
          style={{ gap: "var(--spacing-80)" }}
        >
          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.year}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-12"
              style={{ gap: "var(--spacing-40)" }}
            >
              {/* Year - Caption Pair style */}
              <div className="md:col-span-3">
                <span
                  className="font-caption caption-pair"
                  style={{
                    fontSize: "var(--text-subheading)",
                    color: "var(--fg-muted)",
                    fontStyle: "normal",
                    fontWeight: 400,
                  }}
                >
                  {item.year}
                </span>
              </div>

              {/* Title + Description */}
              <div className="md:col-span-9 flex flex-col" style={{ gap: "var(--spacing-15)" }}>
                <h3
                  className="font-display w-display-regular"
                  style={{
                    fontSize: "clamp(24px, 3vw, 42px)",
                    lineHeight: 1.05,
                    color: "var(--fg)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-ui w-350 text-body"
                  style={{ color: "var(--fg-muted)", lineHeight: 1.6, maxWidth: "540px" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <div
          className="flex justify-between items-center font-ui w-350 text-caption uppercase"
          style={{ color: "var(--fg-muted)", paddingTop: "var(--spacing-20)" }}
        >
          <span>Timeline Register // Version 2.6</span>
          <span>Established in Mumbai, IN</span>
        </div>
      </div>
    </section>
  );
}