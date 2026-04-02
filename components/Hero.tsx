"use client";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "React Developer", "SEO-Aware Builder", "MERN Stack Dev"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        paddingTop: 80, position: "relative", overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        opacity: 0.4,
      }} />

      {/* Glow blobs */}
      <div style={{
        position: "absolute", top: "20%", left: "60%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)",
        borderRadius: "50%", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: "20%", left: "10%", width: 300, height: 300,
        background: "radial-gradient(circle, rgba(71,255,178,0.05) 0%, transparent 70%)",
        borderRadius: "50%", zIndex: 0,
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <p className="fade-up fade-up-1" style={{ fontSize: 13, color: "var(--accent)", letterSpacing: "0.15em", marginBottom: 20, fontFamily: "var(--font-body)" }}>
          AVAILABLE FOR WORK — FRESHER
        </p>

        <h1 className="fade-up fade-up-2" style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(42px, 7vw, 88px)",
          fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05,
          marginBottom: 24, color: "var(--text)"
        }}>
          Harinipriya<br />
          <span style={{ color: "var(--accent)" }}>Balamurugan</span>
        </h1>

        <div className="fade-up fade-up-3" style={{ fontSize: "clamp(18px, 2.5vw, 26px)", color: "var(--muted)", marginBottom: 40, height: 36, fontFamily: "var(--font-display)" }}>
          {displayed}<span className="cursor" />
        </div>

        <p className="fade-up fade-up-3" style={{ fontSize: 16, color: "var(--muted)", maxWidth: 520, marginBottom: 48, lineHeight: 1.7 }}>
          Final year CSE student at Chendhuran College. I build fast, SEO-friendly web applications using the MERN stack. Based in Karaikudi, Tamil Nadu.
        </p>

        <div className="fade-up fade-up-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              padding: "14px 32px", background: "var(--accent)", color: "#0a0a0a",
              fontWeight: 700, borderRadius: 4, fontSize: 14, letterSpacing: "0.05em",
              transition: "transform 0.2s, opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            VIEW MY WORK
          </a>
          <a
            href="/Harinipriya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 32px", border: "1px solid var(--border)", color: "var(--text)",
              borderRadius: 4, fontSize: 14, letterSpacing: "0.05em",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--muted)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Stats row */}
        <div className="fade-up fade-up-4" style={{ display: "flex", gap: 40, marginTop: 72, paddingTop: 40, borderTop: "1px solid var(--border)", flexWrap: "wrap" }}>
          {[
            { num: "5+", label: "Internships" },
            { num: "5+", label: "Projects Built" },
            { num: "8.45", label: "CGPA" },
            { num: "2026", label: "Graduating" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "var(--accent)" }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
