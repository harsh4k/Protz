import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const socialLinks = [
  {
    label: "Email",
    address: "harshitsinhchauhan250@gmail.com",
    url: "mailto:harshitsinhchauhan250@gmail.com",
    action: "copy",
  },
  {
    label: "GitHub",
    address: "@harshit-chauhan",
    url: "https://github.com/harshit-chauhan",
    action: "link",
  },
  {
    label: "LinkedIn",
    address: "Harshit Chauhan",
    url: "#",
    action: "link",
  },
  {
    label: "Instagram",
    address: "@harshit_chauhan",
    url: "#",
    action: "link",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("harshitsinhchauhan250@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeUp = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reducedMotion ? { duration: 0 } : { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer
      id="contact"
      className="page-wrapper"
      style={{
        paddingTop: "var(--spacing-120)",
        paddingBottom: "var(--spacing-60)",
      }}
    >
      <div className="flex flex-col min-h-[70vh] justify-between" style={{ gap: "var(--spacing-80)" }}>
        {/* Top: CTA + Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col"
          style={{ gap: "var(--spacing-40)" }}
        >
          <div className="flex flex-col" style={{ gap: "var(--spacing-8)" }}>
            <span
              className="font-ui w-350 text-caption uppercase"
              style={{ color: "var(--fg-muted)" }}
            >
              Connect
            </span>
            <h2
              className="font-display w-display-light"
              style={{
                fontSize: "clamp(48px, 11vw, 140px)",
                lineHeight: 0.85,
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s Build
              <br />
              Something.
            </h2>
            <div className="accent-tick" style={{ marginTop: "var(--spacing-10)" }} />
          </div>

          <a
            href="mailto:harshitsinhchauhan250@gmail.com"
            className="btn-cta self-start"
          >
            Get in Touch
            <span className="arrow">→</span>
          </a>
        </motion.div>

        {/* Bottom: Social links grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ gap: "var(--spacing-20)" }}
          >
            {socialLinks.map((link) => (
              <div key={link.label} className="flex flex-col" style={{ gap: "var(--spacing-8)" }}>
                <span
                  className="font-ui w-350 text-caption uppercase"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {link.label}
                </span>
                {link.action === "copy" ? (
                  <button
                    onClick={handleCopyEmail}
                    className="btn-ghost"
                    style={{ padding: 0, textTransform: "none", letterSpacing: 0, border: "none" }}
                  >
                    {copied ? "Email copied!" : link.address}
                  </button>
                ) : (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                    style={{ padding: 0, textTransform: "none", letterSpacing: 0, border: "none" }}
                  >
                    {link.address}
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-ui w-350 text-caption uppercase"
          style={{
            color: "var(--fg-muted)",
            paddingTop: "var(--spacing-30)",
            borderTop: "1px solid var(--border-subtle)",
            gap: "var(--spacing-15)",
          }}
        >
          <span>Designed &amp; Coded by Harshit Chauhan // &copy; 2026 Cores</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-ghost"
            style={{ padding: 0, border: "none", letterSpacing: 0 }}
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}