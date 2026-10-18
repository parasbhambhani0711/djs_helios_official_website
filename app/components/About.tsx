"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Department {
  id: string;
  title: string;       // Full name displayed when expanded
  shortTitle: string;  // Concise name displayed on the collapsed card tile
  badge: string;
  image: string;
  description: string;
  subsystems: string[];
}

const DEPARTMENTS: Department[] = [
  {
    id: "chassis",
    title: "Chassis & Bodyworks",
    shortTitle: "CHASSIS",
    badge: "Mechanical & Aero",
    image: "/departments/chassis.png",
    description:
      "Engineering lightweight spaceframes and composite aerodynamic shells to minimize drag coefficient and ensure driver safety at high track speeds.",
    subsystems: ["Tubular Spaceframe", "Carbon Composites", "Aero Simulation"],
  },
  {
    id: "ssb",
    title: "Suspension, Steering & Brakes",
    shortTitle: "SSB",
    badge: "Vehicle Dynamics",
    image: "/departments/ssb.jpg",
    description:
      "Designing custom suspension geometry, ergonomic steering assemblies, and precision braking systems tailored for tight corner handling.",
    subsystems: ["Double Wishbone", "Steering Rack", "Disc Braking"],
  },
  {
    id: "powertrain",
    title: "Powertrain",
    shortTitle: "POWERTRAIN",
    badge: "Mechanical Drive",
    image: "/departments/powertrain.jpg",
    description:
      "Optimizing direct-drive transmission efficiency, custom hub motors, and gearbox ratios to convert solar energy into maximum wheel torque.",
    subsystems: ["In-Wheel Motors", "Reduction Gearbox", "Drive Efficiency"],
  },
  {
    id: "electronics",
    title: "Electronics",
    shortTitle: "ELECTRONICS",
    badge: "Electrical & IoT",
    image: "/departments/electronics.jpg",
    description:
      "Developing high-efficiency solar array wiring, custom MPPT charge controllers, battery management systems (BMS), and real-time telemetry sensors.",
    subsystems: ["Solar PV Array", "Custom BMS", "Telemetry IoT"],
  },
  {
    id: "marketing",
    title: "Marketing & Operations",
    shortTitle: "MARKETING",
    badge: "Corporate & PR",
    image: "/departments/marketing.jpg",
    description:
      "Managing corporate sponsorship pipelines, brand identity, social media outreach, logistics execution, and alumni crowdfunding campaigns.",
    subsystems: ["Sponsorships", "PR & Branding", "Event Logistics"],
  },
  {
    id: "autonomous",
    title: "Autonomous & Strategy",
    shortTitle: "AUTONOMOUS",
    badge: "Software & AI",
    image: "/departments/autonomous.jpg",
    description:
      "Building intelligent telemetry analytics, solar energy forecasting algorithms, race-lap strategy tools, and autonomous driver-assistance systems.",
    subsystems: ["Solar Forecasting", "Lap Strategy AI", "Sensor Fusion"],
  },
];

export default function About() {
  const [activeDept, setActiveDept] = useState<string | null>(null);

  const currentActive = DEPARTMENTS.find((d) => d.id === activeDept) || DEPARTMENTS[0];

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-helios-dark relative overflow-hidden border-t border-white/5 font-sans">
      
      {/* Background Ambient Solar Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase inline-block mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            ENGINEERING SUSTAINABLE SPEED
          </h2>
        </motion.div>

        {/* Story Block: Dual Championships & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-stretch">
          
          {/* Dual National Champions (SUPER HIGH-VISIBILITY AIR 1 HERO CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-500/25 via-slate-950 to-black border-2 border-amber-400 shadow-[0_0_40px_rgba(245,158,11,0.25)] flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Background Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-5">
              
              {/* Badge Pills Header */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 text-xs font-mono font-black tracking-widest uppercase shadow-lg shadow-amber-500/30 flex items-center gap-1.5">
                  🏆 NATIONAL CHAMPIONS
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-mono font-black">
                  SEVC 2018 & ESVC 2018
                </span>
              </div>

              {/* HUGE GLOWING AIR 1 DISPLAY */}
              <div className="pt-2 pb-1 space-y-1">
                <div className="text-xs font-mono font-extrabold tracking-widest text-amber-400 uppercase">
                  OVERALL RANK IN INDIA
                </div>
                
                <h3 className="text-6xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 tracking-tighter leading-none filter drop-shadow-[0_0_35px_rgba(245,158,11,0.8)] font-mono">
                  AIR 1!
                </h3>
                
                <p className="text-sm font-bold text-amber-300 font-mono tracking-wide pt-2">
                  🥇 ALL INDIA RANK 1 (SEVC & ESVC)
                </p>
              </div>

              <p className="text-slate-200 text-sm leading-relaxed font-semibold border-t border-amber-500/30 pt-4">
                DJS Helios made national motorsport history by securing <strong className="text-amber-400 text-base font-extrabold underline decoration-amber-400 decoration-2 underline-offset-4">AIR 1 in SEVC 2018 & ESVC 2018</strong>, holding both the ESVC & IASC Champions titles simultaneously as Asia&apos;s #1 student solar team.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-500/30 flex items-center justify-between text-xs font-mono text-amber-400 font-black tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="text-base">🏆</span> ASIA #1 SOLAR TEAM
              </span>
              <span>EST. 2015</span>
            </div>
          </motion.div>

          {/* Student Organization & Legacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-wider block mb-2">
                🌱 Our Purpose & Legacy
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
                STUDENT-RUN & NON-PROFIT INNOVATION
              </h3>
              <p className="text-slate-300 mt-4 text-sm md:text-base leading-relaxed font-medium">
                Founded in 2015, DJS Helios is an entirely student-run, non-profit organization fueled by its members&apos; passion for environmentally sustainable technology.
              </p>
              <p className="text-slate-400 mt-3 text-sm md:text-base leading-relaxed">
                We provide a unique opportunity for students to gain valuable hands-on engineering and business experience while raising community awareness of clean energy vehicles.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
              <div>
                <span className="block text-xl font-black text-white font-mono">2015</span>
                <span className="text-[11px] text-slate-400 uppercase font-mono">Founded at DJSCE</span>
              </div>
              <div>
                <span className="block text-xl font-black text-amber-400 font-mono">45+</span>
                <span className="text-[11px] text-slate-400 uppercase font-mono">Student Engineers</span>
              </div>
              <div>
                <span className="block text-xl font-black text-emerald-400 font-mono">100%</span>
                <span className="text-[11px] text-slate-400 uppercase font-mono">Clean Energy</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Department Overview Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
            Multidisciplinary Engineering
          </span>
          <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mt-3 uppercase">
            DEPARTMENT OVERVIEW
          </h3>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Hover over any division below to inspect engineering subsystems and technical focus areas.
          </p>
        </div>

        {/* DESKTOP VIEW: Interactive Horizontal Expanding Accordion */}
        <div
          onMouseLeave={() => setActiveDept(null)}
          className="hidden lg:flex w-full h-[520px] gap-3"
        >
          {DEPARTMENTS.map((dept) => {
            const isActive = activeDept === dept.id;
            return (
              <div
                key={dept.id}
                onMouseEnter={() => setActiveDept(dept.id)}
                className={`relative rounded-3xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-end p-6 ${
                  isActive
                    ? "flex-[3.5] border-amber-500/50 shadow-2xl shadow-amber-500/10"
                    : "flex-1 border-white/10 hover:border-white/30 bg-white/[0.02]"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={dept.image}
                  alt={dept.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    isActive ? "scale-105 filter brightness-90" : "scale-100 filter brightness-40"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

                {/* Collapsed Title */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                    <span className="text-lg font-black text-slate-300 uppercase tracking-widest -rotate-90 whitespace-nowrap font-mono">
                      {dept.shortTitle}
                    </span>
                  </div>
                )}

                {/* Expanded Content */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="relative z-10 space-y-3 w-[360px] xl:w-[420px]"
                  >
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-mono font-bold inline-block">
                      {dept.badge}
                    </span>

                    <h4 className="text-2xl xl:text-3xl font-black text-white uppercase tracking-tight">
                      {dept.title}
                    </h4>

                    <p className="text-slate-200 text-xs xl:text-sm leading-relaxed font-medium">
                      {dept.description}
                    </p>

                    {/* Subsystem Tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {dept.subsystems.map((sub) => (
                        <span
                          key={sub}
                          className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-slate-300 text-[11px] font-mono whitespace-nowrap"
                        >
                          ⚡ {sub}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* MOBILE VIEW: Interactive Tabbed Stage */}
        <div className="block lg:hidden space-y-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all border ${
                  activeDept === dept.id
                    ? "bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/20"
                    : "bg-white/[0.03] text-slate-300 border-white/10"
                }`}
              >
                {dept.shortTitle}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentActive.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-amber-500/30 overflow-hidden bg-white/[0.02] relative p-6 flex flex-col justify-end min-h-[380px]"
            >
              <Image
                src={currentActive.image}
                alt={currentActive.title}
                fill
                className="object-cover filter brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-mono font-bold inline-block">
                  {currentActive.badge}
                </span>

                <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                  {currentActive.title}
                </h4>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  {currentActive.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {currentActive.subsystems.map((sub) => (
                    <span
                      key={sub}
                      className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-slate-300 text-[11px] font-mono"
                    >
                      ⚡ {sub}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}