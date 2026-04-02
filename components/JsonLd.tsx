export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Harinipriya Balamurugan",
    "jobTitle": "Full Stack Developer",
    "description": "Final year CSE student and Full Stack Developer skilled in React.js, Node.js, MERN Stack and SEO-aware development.",
    "url": "https://harinipriya.dev",
    "email": "harinichitra2005@gmail.com",
    "telephone": "+919487881250",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karaikudi",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://linkedin.com/in/harinipriya-balamurugan-a09b52364",
      "https://github.com/HariniWebDeveloper"
    ],
    "knowsAbout": [
      "React.js", "Node.js", "MERN Stack", "Next.js",
      "SEO", "Full Stack Development", "Python", "JavaScript"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
