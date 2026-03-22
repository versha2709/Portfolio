import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Versha Parashar — Full Stack Developer",
  description:
    "Full Stack Developer specialising in React.js, Next.js, TypeScript, NestJS & MongoDB. 2+ years building enterprise applications for banking & healthcare.",
  keywords: [
    "Versha Parashar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "NestJS",
    "TypeScript",
    "Freelance Developer India",
  ],
  authors: [{ name: "Versha Parashar" }],
  openGraph: {
    title: "Versha Parashar — Full Stack Developer",
    description: "Building scalable enterprise apps in React, Next.js & NestJS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
