"use client";
const projects = [
  {
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform built with React.js featuring product listings, cart functionality, and SEO-optimised product pages with Schema.org markup.",
    tech: ["React.js", "Tailwind CSS", "JSON-LD", "Semantic HTML"],
    tag: "Frontend",
    tagColor: "#e8ff47",
    github: "https://github.com/HariniWebDeveloper",
  },
  {
    title: "Real-Time Chat App",
    description: "Full stack chat application using the MERN stack with WebSocket communication, user authentication, and real-time messaging.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
    tag: "Full Stack",
    tagColor: "#47ffb2",
    github: "https://github.com/HariniWebDeveloper",
  },
  {
    title: "Employee Payroll System",
    description: "A complete payroll management system built with Python and SQLite, featuring CRUD operations, salary calculations, and report generation.",
    tech: ["Python", "SQLite", "Django", "REST API"],
    tag: "Backend",
    tagColor: "#ff6b47",
    github: "https://github.com/HariniWebDeveloper",
  },
  {
    title: "EduAR — AR E-Learning Platform",
    description: "An augmented reality e-learning platform built with Unity, enabling immersive educational experiences with 3D content overlaid in the real world.",
    tech: ["Unity", "AR", "C#", "3D Modelling"],
    tag: "AR / App",
    tagColor: "#b347ff",
    github: "https://github.com/HariniWebDeveloper",
  },
  {
    title: "Donate Food App",
    description: "A Python web application connecting food donors with recipients. Features location-based matching, real-time inventory tracking, and admin dashboard.",
    tech: ["Python", "Django", "SQLite", "Maps API"],
    tag: "Full Stack",
    tagColor: "#47ffb2",
    github: "https://github.com/HariniWebDeveloper",
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <p style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", marginBottom: 16 }}>WHAT I&apos;VE BUILT</p>
        <h2 id="projects-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Projects
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: 60, maxWidth: 500 }}>
          Real projects built during internships and personal learning — each one applying full stack and SEO best practices.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {projects.map((p) => (
            <article
              key={p.title}
              style={{
                background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 12,
                padding: 28, display: "flex", flexDirection: "column", gap: 16,
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = p.tagColor + "50"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: 11, padding: "4px 10px", background: p.tagColor + "20", color: p.tagColor, borderRadius: 20, letterSpacing: "0.05em", fontWeight: 600 }}>
                  {p.tag}
                </span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${p.title} on GitHub`}
                  style={{ fontSize: 12, color: "var(--muted)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >
                  GitHub →
                </a>
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, flex: 1 }}>{p.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
                {p.tech.map((t) => (
                  <span key={t} style={{ fontSize: 11, padding: "3px 8px", background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 4, color: "var(--muted)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
