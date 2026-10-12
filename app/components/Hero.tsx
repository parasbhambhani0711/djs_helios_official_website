"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const brandWords = [
    { text: "DJS", delay: 0.2 },
    { text: "Helios", delay: 0.7 },
  ];

  const heroNavTabs = [
    { num: "01", name: "ABOUT", href: "#about" },
    { num: "02", name: "HALL OF FAME", href: "#hall-of-fame" },
    { num: "03", name: "GALLERY", href: "#gallery" },
    { num: "04", name: "PARTNERS", href: "#partners" },
    { num: "05", name: "CONTACT", href: "#contact" },
  ];

  const quickStats = [
    { icon: "🏆", label: "Dual National Champions" },
    { icon: "⚡", label: "100% Clean Energy" },
    { icon: "📍", label: "DJSCE Mumbai" },
  ];

  return (
    <section className="relative w-full h-screen min-h-[720px] flex flex-col justify-between items-center text-center overflow-hidden bg-helios-dark">
      
      {/* 1. Full-Screen Track Canvas with Layered Vignette & Ambient Beams */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/hero-track-jpg.jpeg"
          alt="DJS Helios Race Vehicle"
          fill
          quality={95}
          priority
          className="object-cover opacity-50 scale-105 filter brightness-90 saturate-125"
        />
        
        {/* High-Tech Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Dynamic Glowing Solar Beams */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/20 blur-[150px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/15 blur-[140px] rounded-full pointer-events-none"
        />

        {/* Dark Vignette Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-helios-dark" />
      </div>

      {/* Top Spacer for Fixed Navbar */}
      <div className="pt-24 z-10" />

      {/* 2. Center Stage: High-Impact Branding, Quick Badges & Tagline */}
      <div className="max-w-5xl mx-auto px-4 z-10 flex flex-col items-center justify-center my-auto relative">
        
        {/* Quick-Telemetry Floating Pills */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden sm:flex items-center gap-3 mb-6"
        >
          {quickStats.map((stat, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-slate-300 font-mono text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-lg hover:border-amber-500/40 transition-colors"
            >
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </span>
          ))}
        </motion.div>

        {/* Logo Badge with Dual Solar Glow */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-22 h-22 md:w-28 md:h-28 mb-4 p-2.5 rounded-2xl bg-black/80 border border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.25)] backdrop-blur-md flex items-center justify-center group"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <Image
            src="/helios-logo.jpg"
            alt="DJS Helios Official Logo"
            width={95}
            height={95}
            className="object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
            priority
          />
        </motion.div>

        {/* Animated Brand Title with High-Glow Typography */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 my-1 overflow-visible">
          {brandWords.map((wordObj, wordIdx) => (
            <div key={wordIdx} className="flex overflow-visible">
              {wordObj.text.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.35,
                    delay: wordObj.delay + charIdx * 0.08,
                    ease: "easeOut",
                  }}
                  className="font-cursive text-6xl sm:text-7xl md:text-9xl text-amber-300 leading-tight px-0.5 drop-shadow-[0_0_35px_rgba(251,191,36,0.7)] hover:text-amber-200 transition-colors cursor-default"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </div>

        {/* Dual-Color Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-black/85 border border-white/15 backdrop-blur-md shadow-2xl mt-3 group hover:border-amber-500/40 transition-all"
        >
          <span className="text-emerald-400 font-black tracking-widest uppercase text-xs md:text-sm drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]">
            🌱 GO GREEN
          </span>
          <span className="text-slate-600 font-bold">•</span>
          <span className="text-amber-400 font-black tracking-widest uppercase text-xs md:text-sm drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]">
            ☀️ GO SOLAR
          </span>
        </motion.div>

        {/* Scroll Prompt Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-8 flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-widest group"
        >
          <span>Scroll to explore</span>
          <svg className="w-4 h-4 animate-bounce text-amber-400 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>

      </div>

      {/* 3. Delft-Style Floating Bottom Dock */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="w-full max-w-7xl px-4 md:px-8 mb-8 z-10"
      >
        <div className="w-full p-2.5 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-2xl shadow-2xl flex items-center justify-between overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 md:gap-4 min-w-max mx-auto">
            {heroNavTabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-400/60 hover:bg-white/[0.08] transition-all duration-300 group flex items-center gap-2.5 relative overflow-hidden"
              >
                <span className="text-[10px] font-mono font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                  {tab.num}
                </span>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white tracking-wider transition-colors">
                  {tab.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}