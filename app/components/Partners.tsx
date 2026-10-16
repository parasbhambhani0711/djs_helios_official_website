"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Sponsor {
  name: string;
  role: string;
  logo: string;
  description: string;
}

const SPONSORS: Sponsor[] = [
  {
    name: "Waaree Energies",
    role: "Official Solar PV Partner",
    logo: "/sponsors/waaree-logo.png",
    description: "For enabling sustainable mobility through advanced solar panels for our vehicle development.",
  },
  {
    name: "SolidWorks",
    role: "3D CAD & Design Partner",
    logo: "/sponsors/solidworks.png",
    description: "For providing the digital workspace for the design and development of our vehicle.",
  },
  {
    name: "Ansys",
    role: "Simulation & Engineering Partner",
    logo: "/sponsors/ansys.png",
    description: "For providing advanced simulation software to optimize the car's aerodynamics, structural integrity, and thermal performance.",
  },
  {
    name: "Shree Autocare",
    role: "Build & Workspace Partner",
    logo: "/sponsors/autocare.png",
    description: "For providing the workspace that supported the build and development of our vehicle.",
  },
  {
    name: "NN Control",
    role: "CNC Machining & Manufacturing",
    logo: "/sponsors/nncontrol.png",
    description: "For their significant contribution to the CNC machining and manufacturing of our vehicle.",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 px-4 md:px-8 bg-helios-dark relative overflow-hidden border-t border-white/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-amber-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            Corporate Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            BACKED BY INDUSTRY LEADERS
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
            Partnering with world-class renewable energy manufacturers, engineering firms, and automotive innovators.
          </p>
        </div>

        {/* Infinite Scrolling Logo Ticker Bar */}
        <div className="mb-20 py-6 border-y border-white/10 bg-black/40 backdrop-blur-md overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-helios-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-helios-dark to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex items-center gap-12 whitespace-nowrap w-max"
          >
            {[...SPONSORS, ...SPONSORS].map((s, idx) => (
              <div key={idx} className="flex items-center gap-4 px-6 py-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="relative w-8 h-8 flex-shrink-0 bg-white/10 rounded-lg p-1">
                  <Image
                    src={s.logo}
                    alt={s.name}
                    fill
                    className="object-contain p-0.5 filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                  />
                </div>
                <span className="text-slate-200 font-bold text-sm md:text-base tracking-wide">
                  {s.name}
                </span>
                <span className="text-xs text-amber-400/80 font-mono">({s.role})</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Sponsor Cards Grid (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          
          {/* 5 Existing Sponsor Cards */}
          {SPONSORS.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-7 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-amber-500/40 hover:bg-white/[0.04] transition-all group flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Dark Glass Logo Tile with Soft Center Spotlight (Fixes dark logos without white glare) */}
                <div className="relative w-full h-24 mb-6 p-4 rounded-2xl bg-gradient-to-b from-slate-900/90 to-black/80 border border-white/10 shadow-inner flex items-center justify-center overflow-hidden group-hover:border-amber-500/30 transition-colors">
                  
                  {/* Subtle Center Spotlight for Dark Logos */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/15 via-transparent to-transparent pointer-events-none" />

                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    fill
                    className="object-contain p-3 relative z-10 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Company Name */}
                <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                  {sponsor.name}
                </h3>

                {/* Clean Role Badge */}
                <div className="inline-block px-3 py-1 mt-2.5 mb-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-wide">
                  {sponsor.role}
                </div>
                
                {/* Sentence Description */}
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mt-1 font-medium">
                  {sponsor.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* 6th Slot: Interactive "Become Our Partner" Card */}
          <motion.a
            href="#contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-7 rounded-3xl bg-gradient-to-br from-amber-500/10 via-black to-black border border-dashed border-amber-500/40 hover:border-amber-400/80 hover:bg-amber-500/5 transition-all group flex flex-col items-center justify-center text-center cursor-pointer min-h-[300px]"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-3xl font-bold mb-4 group-hover:scale-110 transition-transform">
              ⚡
            </div>

            <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
              BECOME OUR NEXT PARTNER
            </h3>

            <p className="text-xs text-slate-400 mt-2 max-w-xs leading-relaxed font-medium">
              Join DJS Helios to power Asia&apos;s top student solar car and showcase your technology to engineering leaders.
            </p>

            <span className="mt-6 px-5 py-2.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs uppercase tracking-wider group-hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all">
              Partner With Us →
            </span>
          </motion.a>

        </div>

      </div>
    </section>
  );
}