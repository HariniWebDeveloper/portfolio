"use client";
export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", marginBottom: 16 }}>ABOUT ME</p>
            <h2 id="about-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.1 }}>
              Code that ranks,<br />
              <span style={{ color: "var(--accent)" }}>loads fast,</span><br />
              and looks great.
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
              I&apos;m a final year Computer Science student who builds full stack web applications with SEO baked in from the start — not added as an afterthought. My development experience spans 5 internships and real-world MERN projects.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 32 }}>
              I believe great software is fast, accessible, and discoverable. Every project I build follows semantic HTML, Core Web Vitals best practices, and clean URL architecture.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <a
                href="https://linkedin.com/in/harinipriya-balamurugan-a09b52364"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: "var(--accent)", borderBottom: "1px solid var(--accent)", paddingBottom: 2 }}
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/HariniWebDeveloper"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: "var(--muted)", borderBottom: "1px solid var(--border)", paddingBottom: 2 }}
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* Right: info card */}
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 12, padding: 40 }}>
            {[
              { label: "Education", value: "B.E. Computer Science & Engineering" },
              { label: "College", value: "Chendhuran College of Engineering" },
              { label: "CGPA", value: "8.45 (till 6th semester)" },
              { label: "Graduating", value: "2026" },
              { label: "Location", value: "Karaikudi, Tamil Nadu" },
              { label: "Email", value: "harinichitra2005@gmail.com" },
              { label: "Phone", value: "+91 9487881250" },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                  padding: "14px 0",
                  borderBottom: i < 6 ? "1px solid var(--border)" : "none",
                  gap: 16,
                }}
              >
                <span style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.05em", flexShrink: 0 }}>{item.label}</span>
                <span style={{ fontSize: 14, color: "var(--text)", textAlign: "right" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
