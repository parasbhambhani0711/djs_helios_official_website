import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Official DJS Helios Brand Typography
const orbitron = Orbitron({
  variable: "--font-helios",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DJS Helios | Official Solar Vehicle Team",
  description: "Official Electric Solar Car Team of DJSCE Mumbai. Dual ESVC & IASC Champions.",
  icons: {
    icon: "/helios-logo.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        {children}
        {/* Floating Live Theme Switcher */}
        <ThemeSwitcher />
      </body>
    </html>
  );
}