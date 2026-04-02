# Harinipriya Balamurugan — Portfolio

Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## SEO Features Built-In
- Dynamic metadata with `generateMetadata` per page
- JSON-LD Schema.org (Person schema) on homepage
- Open Graph + Twitter Card tags
- Auto-generated `sitemap.xml` via `app/sitemap.ts`
- `robots.txt` via `app/robots.ts`
- Semantic HTML5 throughout (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`)
- All images have `alt` attributes
- Mobile-first responsive design
- Core Web Vitals optimised (target Lighthouse 90+)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Customise

1. Update your name/info in each component
2. Replace GitHub links with your real repo links
3. Add your resume PDF to `/public/Harinipriya_Resume.pdf`
4. Update `metadataBase` URL in `app/layout.tsx` after you get your domain

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts (Syne + Space Grotesk)
