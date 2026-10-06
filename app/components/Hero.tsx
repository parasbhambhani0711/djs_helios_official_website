"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HELIOS_DATA } from "@/data/heliosData";

export default function Hero() {
  const brandWords = [
    { text: "DJS", delay: 0.3 },
    { text: "Helios", delay: 1.0 },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col justify-center items-center text-center overflow-hidden bg-helios-dark">
      
      {/* 1. Full-Screen Track Photo Background with 70% Overlay & Motion Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/hero-track-jpg.jpeg"
          alt="DJS Helios Race Track Run"
          fill
          className="object-cover opacity-50 filter blur-[3px] scale-105"
          priority
        />
        {/* Dark Vignette & Gradient Overlays for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-helios-dark/90 via-helios-dark/75 to-helios-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto w-full z-10 flex flex-col items-center">
        
        {/* 2. Top Anchor: Official Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-28 h-28 md:w-36 md:h-36 mb-4 p-3 rounded-3xl bg-black/80 border border-amber-500/40 shadow-2xl shadow-amber-500/30 backdrop-blur-md flex items-center justify-center group"
        >
          <Image
            src="/helios-logo.jpg"
            alt="DJS Helios Logo"
            width={120}
            height={120}
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </motion.div>

        {/* 3. Cursive Handwriting Title */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 my-1 py-4 px-4 overflow-visible">
          {brandWords.map((wordObj, wordIdx) => (
            <div key={wordIdx} className="flex overflow-visible py-2">
              {wordObj.text.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.35,
                    delay: wordObj.delay + charIdx * 0.1,
                    ease: "easeOut",
                  }}
                  className="font-cursive text-6xl sm:text-7xl md:text-9xl text-amber-300 leading-relaxed px-0.5 drop-shadow-[0_0_25px_rgba(251,191,36,0.6)]"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </div>

        {/* 4. Dual-Color Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/70 border border-white/10 backdrop-blur-md mb-6 shadow-2xl"
        >
          <span className="text-emerald-400 font-black tracking-widest uppercase text-xs md:text-sm drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]">
            🌱 GO GREEN
          </span>
          <span className="text-slate-600 font-bold">•</span>
          <span className="text-amber-400 font-black tracking-widest uppercase text-xs md:text-sm drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]">
            ☀️ GO SOLAR
          </span>
        </motion.div>

        {/* 5. Championship Highlight Badge (Relocated Below Tagline) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs md:text-sm font-semibold mb-6 shadow-xl backdrop-blur-md max-w-2xl"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
          <span>{HELIOS_DATA.legacyHighlight}</span>
        </motion.div>

        {/* 6. Subtitle / College Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.0 }}
          className="text-slate-300 text-sm md:text-lg max-w-2xl leading-relaxed mb-8"
        >
          {HELIOS_DATA.aboutSummary}
        </motion.p>

        {/* 7. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="flex flex-wrap gap-4 justify-center items-center mb-16"
        >
          <a
            href="#partners"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-sm md:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all"
          >
            Partner With Us
          </a>

          <a
            href="#hall-of-fame"
            className="px-8 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm md:text-base backdrop-blur-md hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            <span>🏆 Hall of Fame</span>
          </a>

          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm md:text-base backdrop-blur-md hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            <span>✉️ Contact Us</span>
          </a>
        </motion.div>

        {/* 8. Key Impact Stat Cards */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          {HELIOS_DATA.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.4 + idx * 0.1 }}
              className="p-5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md hover:border-amber-500/40 transition-all text-center group"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-amber-400 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}