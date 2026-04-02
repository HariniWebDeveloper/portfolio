"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#" style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>
          HB<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" style={{ display: "flex", gap: 32 }} className="desktop-nav">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ fontSize: 14, color: "var(--muted)", transition: "color 0.2s", letterSpacing: "0.02em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          style={{
            fontSize: 13, padding: "8px 20px", border: "1px solid var(--accent)",
            color: "var(--accent)", borderRadius: 4, transition: "all 0.2s", letterSpacing: "0.05em"
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#0a0a0a"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
        >
          HIRE ME
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
