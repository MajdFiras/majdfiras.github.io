import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Majd Firas — Software Engineer",
  description:
    "Software Engineer specializing in full-stack web development with expertise in React, Next.js, Laravel, and cloud technologies.",
  icons: {
    icon: [
      { url: "/icon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/icon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
