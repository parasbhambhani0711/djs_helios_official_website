"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Sponsor {
  name: string;
  role: string;
  tier: "Title Sponsor" | "Power Partner" | "Technical Partner" | "Official Sponsor";
  logo: string;
  description: string;
}

const SPONSORS: Sponsor[] = [
  {
    name: "Waaree Energies Ltd",
    role: "Official Solar PV Partner",
    tier: "Title Sponsor",
    logo: "/sponsors/Waaree.png",
    description: "India's largest solar module manufacturer powering our custom photovoltaic array.",
  },
  {
    name: "Hindusthan Electric Motors",
    role: "Powertrain & Motor Supplier",
    tier: "Power Partner",
    logo: "/sponsors/Hindustan Motors.png",
    description: "High-efficiency electric motor technology custom built for race track torque.",
  },
  {
    name: "Harshada Composites (HCSL)",
    role: "Carbon Fiber & Body Material",
    tier: "Technical Partner",
    logo: "/sponsors/HCSL.png",
    description: "Lightweight composite structures engineering for aerodynamic shell fabrication.",
  },
  {
    name: "Ishna Benelli",
    role: "Automotive & Mechanical Support",
    tier: "Technical Partner",
    logo: "/sponsors/Ishna Benelli.png",
    description: "Premium motorcycle & engineering partner assisting in chassis dynamics.",
  },
  {
    name: "NN LaserTech",
    role: "Precision Laser Cutting & Fab",
    tier: "Official Sponsor",
    logo: "/sponsors/NN LaserTech.png",
    description: "Precision CNC laser cutting, structural steel fabrication, and welding support.",
  },
  {
    name: "Victron Energy",
    role: "Battery & Inverter Systems",
    tier: "Power Partner",
    logo: "/sponsors/Victron.png",
    description: "Global leader in energy storage, MPPT charge controllers, and battery management.",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 px-4 md:px-8 bg-helios-dark relative overflow-hidden border-t border-white/5">
      
      {/* Background Ambient Lights */}
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
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src={s.logo}
                    alt={s.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-slate-200 font-bold text-sm md:text-base tracking-wide">
                  {s.name}
                </span>
                <span className="text-xs text-amber-400/80 font-mono">({s.tier})</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SPONSORS.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-amber-500/40 hover:bg-white/[0.04] transition-all group flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
                    {sponsor.tier}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">DJSCE Official</span>
                </div>

                <div className="relative w-full h-20 mb-6 p-2 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2 filter brightness-95 group-hover:brightness-100 transition-all"
                  />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                  {sponsor.name}
                </h3>

                <p className="text-xs font-semibold text-amber-400/90 mb-3">
                  {sponsor.role}
                </p>
                
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {sponsor.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>VERIFIED SPONSOR</span>
                <span className="text-amber-400">⚡ SOLAR PARTNER</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sponsorship Pitch CTA Box */}
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-amber-500/15 via-black to-black border border-amber-500/40 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/20 blur-3xl rounded-full pointer-events-none" />
          
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-3">
            Sponsorship Opportunities
          </span>
          <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            PARTNER WITH ASIA&apos;S #1 SOLAR CAR TEAM
          </h3>
          <p className="text-slate-300 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Elevate your corporate brand with logo placement on our race car, direct access to top DJSCE engineering talent, and CSR visibility in green energy innovation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}