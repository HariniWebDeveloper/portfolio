"use client";
const skillGroups = [
  {
    title: "Frontend",
    color: "#e8ff47",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Figma", "React Router", "JSX"],
  },
  {
    title: "Backend",
    color: "#47ffb2",
    skills: ["Node.js", "Express.js", "REST API", "Python", "Django", "PHP", "SQLite", "MongoDB", "Docker", "Jenkins", "AWS (EC2, S3)"],
  },
  {
    title: "SEO & Performance",
    color: "#ff6b47",
    skills: ["Semantic HTML5", "Meta Tags", "Open Graph", "Schema.org / JSON-LD", "Core Web Vitals", "Google Search Console", "Sitemap.xml", "robots.txt", "Mobile-First", "Page Speed", "Lighthouse"],
  },
  {
    title: "Tools & Others",
    color: "#b347ff",
    skills: ["Git", "GitHub", "VS Code", "npm", "Vite", "C++", "Java", "LeetCode", "Cloud Platforms"],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" style={{ padding: "100px 0", borderTop: "1px solid var(--border)", background: "var(--bg2)" }}>
      <div className="container">
        <p style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", marginBottom: 16 }}>WHAT I KNOW</p>
        <h2 id="skills-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 60 }}>
          Skills & Technologies
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {skillGroups.map((group) => (
            <div
              key={group.title}
              style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, padding: 28, transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = group.color + "60")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: group.color }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: group.color }}>{group.title}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: 12, padding: "5px 10px",
                      background: "var(--bg3)", border: "1px solid var(--border)",
                      borderRadius: 4, color: "var(--muted)", letterSpacing: "0.02em",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
