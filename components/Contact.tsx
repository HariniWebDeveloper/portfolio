"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("harinichitra2005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <p style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", marginBottom: 16 }}>GET IN TOUCH</p>
        <h2 id="contact-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.05 }}>
          Let&apos;s build<br />
          <span style={{ color: "var(--accent)" }}>something great.</span>
        </h2>
        <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 48, fontSize: 16 }}>
          I&apos;m actively looking for my first full-time role as a Full Stack Developer. If you have an opportunity or just want to chat about tech, I&apos;d love to hear from you.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <button
            onClick={copyEmail}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "20px 28px", background: "var(--bg2)", border: "1px solid var(--border)",
              borderRadius: 8, cursor: "pointer", color: "var(--text)", width: "100%",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <span style={{ fontSize: 16 }}>harinichitra2005@gmail.com</span>
            <span style={{ fontSize: 12, color: copied ? "var(--accent)" : "var(--muted)" }}>
              {copied ? "COPIED!" : "COPY"}
            </span>
          </button>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <a
              href="https://linkedin.com/in/harinipriya-balamurugan-a09b52364"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 24px", background: "var(--bg2)", border: "1px solid var(--border)",
                borderRadius: 8, transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#0a66c2")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <span style={{ fontSize: 14 }}>LinkedIn</span>
              <span style={{ fontSize: 14, color: "var(--muted)" }}>↗</span>
            </a>
            <a
              href="https://github.com/HariniWebDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 24px", background: "var(--bg2)", border: "1px solid var(--border)",
                borderRadius: 8, transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--muted)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <span style={{ fontSize: 14 }}>GitHub</span>
              <span style={{ fontSize: 14, color: "var(--muted)" }}>↗</span>
            </a>
          </div>

          <a
            href="tel:+919487881250"
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "16px 24px", background: "var(--bg2)", border: "1px solid var(--border)",
              borderRadius: 8, transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent2)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <span style={{ fontSize: 14 }}>+91 9487881250</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>CALL</span>
          </a>
        </div>
      </div>
    </section>
  );
}
