"use client";
export default function Footer() {
  return (
    <footer role="contentinfo" style={{ borderTop: "1px solid var(--border)", padding: "32px 0", background: "var(--bg)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700 }}>
          HB<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <p style={{ fontSize: 13, color: "var(--muted)" }}>
          © {new Date().getFullYear()} Harinipriya Balamurugan. Built with Next.js + SEO.
        </p>
        <nav aria-label="Footer navigation" style={{ display: "flex", gap: 24 }}>
          {["About", "Projects", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 13, color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
