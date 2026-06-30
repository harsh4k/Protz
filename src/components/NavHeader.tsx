import { useTheme } from "../context/ThemeContext";

export default function NavHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="nav-header">
      <div className="page-wrapper flex items-center justify-between" style={{ paddingLeft: 0, paddingRight: 0 }}>
        {/* Left: Wordmark */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="wordmark no-underline"
        >
          <span className="wordmark-part wordmark-new font-ui w-550" style={{ color: "var(--fg)" }}>HARSHIT</span>
          <span className="wordmark-part wordmark-form font-ui w-550" style={{ color: "var(--fg)" }}>CHAUHAN</span>
        </a>

        {/* Right: Theme toggle + Menu */}
        <div className="flex items-center" style={{ gap: "var(--spacing-30)" }}>
          <button
            onClick={toggleTheme}
            className="btn-ghost"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            style={{ padding: 0, border: "none" }}
          >
            {theme === "light" ? "DARK" : "LIGHT"}
          </button>

          <div className="flex items-center" style={{ gap: "var(--spacing-20)" }}>
            <span className="link-ghost" style={{ cursor: "default", fontSize: "var(--text-body-sm)", textTransform: "none" }}>
              Menu
            </span>
            <span className="mark-icon">||</span>
          </div>
        </div>
      </div>
    </header>
  );
}