import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nengi Theophilus | Full-Stack Developer",
    template: "%s | Nengi Theophilus",
  },
  description:
    "Portfolio showcasing modern web applications, Laravel, Next.js, UI design, and software development projects.",

  keywords: [
    "Nengi Theophilus",
    "Full Stack Developer",
    "Laravel",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Nengi Theophilus",
    },
  ],

  creator: "Nengi Theophilus",

 // metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}