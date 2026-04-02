import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://harinipriya.dev"),
  title: {
    default: "Harinipriya Balamurugan — Full Stack Developer",
    template: "%s | Harinipriya Balamurugan",
  },
  description:
    "Full Stack Developer skilled in React.js, Node.js, MERN Stack and SEO-aware web development. Final year CSE student based in Tamil Nadu, India.",
  keywords: [
    "Full Stack Developer", "React Developer", "MERN Stack",
    "SEO Developer", "Next.js", "Tamil Nadu", "Fresher Developer India",
  ],
  authors: [{ name: "Harinipriya Balamurugan" }],
  creator: "Harinipriya Balamurugan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://harinipriya.dev",
    siteName: "Harinipriya Balamurugan Portfolio",
    title: "Harinipriya Balamurugan — Full Stack Developer",
    description: "Full Stack Developer skilled in React.js, Node.js, MERN Stack and SEO-aware web development.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Harinipriya Balamurugan — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harinipriya Balamurugan — Full Stack Developer",
    description: "Full Stack Developer skilled in React.js, Node.js, MERN Stack and SEO-aware web development.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
