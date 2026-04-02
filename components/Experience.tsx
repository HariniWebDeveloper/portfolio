"use client";
const experiences = [
  {
    role: "Front-End Development Intern",
    company: "Visual Career Solutions",
    duration: "6 Months",
    desc: "Built a Learning Management System with guidance from senior professionals. Developed reusable React components, implemented responsive layouts, and optimised page performance for faster load times.",
    skills: ["React.js", "Bootstrap", "Responsive Design", "LMS"],
    highlight: true,
  },
  {
    role: "Web Development Intern",
    company: "Code Alpha",
    duration: "3 Months",
    desc: "Developed a full personal website, E-Commerce platform, and LMS using the MERN Stack. Applied SEO best practices including semantic HTML, meta tags, and clean URL structures.",
    skills: ["MERN Stack", "MongoDB", "Express", "React", "SEO"],
    highlight: false,
  },
  {
    role: "App Development Intern",
    company: "Code Alpha",
    duration: "1 Month",
    desc: "Built mobile applications from scratch, understanding app architecture, component lifecycle, and deployment workflows.",
    skills: ["App Development", "Architecture", "Deployment"],
    highlight: false,
  },
  {
    role: "Front-End Intern",
    company: "Acrosys Technologies",
    duration: "1 Month",
    desc: "Created responsive web interfaces using Bootstrap with a focus on mobile-first design principles and cross-browser compatibility.",
    skills: ["Bootstrap", "HTML5", "CSS3", "Mobile-First"],
    highlight: false,
  },
  {
    role: "Back-End Intern",
    company: "South Grapes Solutions",
    duration: "1 Month",
    desc: "Gained hands-on back-end experience working with PHP on live production projects, learning real-world development workflows.",
    skills: ["PHP", "Backend", "Production"],
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-heading" style={{ padding: "100px 0", borderTop: "1px solid var(--border)", background: "var(--bg2)" }}>
      <div className="container">
        <p style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", marginBottom: 16 }}>WHERE I&apos;VE WORKED</p>
        <h2 id="exp-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 60 }}>
          Experience
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.role + exp.company}
              style={{
                display: "grid", gridTemplateColumns: "200px 1fr",
                gap: 40, padding: "36px 0",
                borderBottom: i < experiences.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6, letterSpacing: "0.03em" }}>{exp.duration}</div>
                <div style={{ fontSize: 14, color: exp.highlight ? "var(--accent)" : "var(--text)", fontWeight: 600 }}>{exp.company}</div>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{exp.role}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>{exp.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {exp.skills.map((s) => (
                    <span key={s} style={{ fontSize: 11, padding: "3px 10px", background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 20, color: "var(--muted)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #experience .container > div > div { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}
