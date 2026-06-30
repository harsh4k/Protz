import { useEffect } from "react";
import Lenis from "lenis";
import { ThemeProvider } from "./context/ThemeContext";
import NavHeader from "./components/NavHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full" style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}>
        <div className="grain-overlay" />
        <NavHeader />
        <main className="w-full">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Journey />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}