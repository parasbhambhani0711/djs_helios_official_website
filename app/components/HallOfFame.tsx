"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type SubTab = "achievements" | "timeline";

interface AchievementItem {
  id: string;
  title: string;
  category: string;
  image: string;
  highlight: string;
  description: string;
}

interface CarItem {
  version: string;
  name: string;
  year: string;
  image: string;
  status: string;
  specs: { label: string; value: string }[];
  summary: string;
}

const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "1",
    title: "Championship Victory & National Trophies",
    category: "Overall Champions",
    image: "/hall-of-fame/trophy.png",
    highlight: "Dual Title Winners",
    description: "First team ever to secure both the ESVC (Electric Solar Vehicle Championship) and IASC (Indo Asian Solar Challenge) overall champion titles simultaneously.",
  },
  {
    id: "2",
    title: "Highest Cash Prize & Merit Awards",
    category: "Financial & Merit Award",
    image: "/hall-of-fame/cheque.png",
    highlight: "Top Cash Prize Winner",
    description: "Awarded top financial honors for best design, fastest acceleration, best telemetry, and endurance test dominance across competition rounds.",
  },
  {
    id: "3",
    title: "Team Engineering & Track Scrutiny Excellence",
    category: "Technical Distinction",
    image: "/hall-of-fame/team.png",
    highlight: "100% Technical Scrutiny Clearance",
    description: "Recognized for flawless technical inspection clearance, pit-stop execution, and unmatched teamwork on and off the track.",
  },
  {
    id: "4",
    title: "National Media & Press Coverage",
    category: "Public Recognition",
    image: "/hall-of-fame/news.png",
    highlight: "Featured in Top Publications",
    description: "Featured across prominent national newspapers and engineering journals for pioneering student-led green technology in India.",
  },
];

const PAST_CARS: CarItem[] = [
  {
    version: "v0.0",
    name: "Helios 0.0 (Concept Prototype)",
    year: "2018 - 2019",
    image: "/hall-of-fame/version0.png",
    status: "R&D Prototype",
    specs: [
      { label: "Powertrain", value: "BLDC Hub Motor" },
      { label: "Solar Array", value: "Custom Silicon" },
      { label: "Focus", value: "Proof of Concept" },
    ],
    summary: "The founding testbed for DJS Helios. Used to validate structural geometry, fundamental battery telemetry, and basic solar charge controller integration.",
  },
  {
    version: "v1.0",
    name: "Helios 1.0 (First Race Generation)",
    year: "2019 - 2021",
    image: "/hall-of-fame/version1.png",
    status: "ESVC Debuter",
    specs: [
      { label: "Chassis", value: "Spaceframe" },
      { label: "Peak Power", value: "1.2 kW Solar" },
      { label: "Top Speed", value: "55 km/h" },
    ],
    summary: "Our debut competition vehicle at ESVC. Introduced custom MPPT solar tracking and lightweight aluminum steering dynamics.",
  },
  {
    version: "v2.0",
    name: "Helios 2.0 (Aerodynamic Upgrade)",
    year: "2021 - 2023",
    image: "/hall-of-fame/version2.png",
    status: "Podium Winner",
    specs: [
      { label: "Body", value: "Fiberglass Composite" },
      { label: "Telemetry", value: "Real-Time IoT" },
      { label: "Efficiency", value: "Regen Braking" },
    ],
    summary: "Engineered with advanced aerodynamic fairings, real-time wireless telemetry, and optimized solar cell layout for long-distance endurance runs.",
  },
  {
    version: "v3.0",
    name: "Helios 3.0 (Championship Flagship)",
    year: "2023 - Present",
    image: "/hall-of-fame/version3.png",
    status: "Dual National Champions",
    specs: [
      { label: "Title", value: "ESVC & IASC Champ" },
      { label: "Solar Tech", value: "High-Eff PV" },
      { label: "Chassis", value: "Ultra-Light Frame" },
    ],
    summary: "The ultimate iteration that made history as Asia's dual solar champion. Features maximum powertrain efficiency, high solar absorption, and custom race ergonomics.",
  },
];

export default function HallOfFame() {
  const [activeTab, setActiveTab] = useState<SubTab>("timeline");

  return (
    <section id="hall-of-fame" className="py-20 md:py-24 px-4 md:px-8 bg-helios-dark relative border-t border-white/5 overflow-hidden">
      
      {/* Background Solar Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-amber-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase inline-block mb-3">
            Legacy & Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            HALL OF FAME
          </h2>
          <p className="text-slate-400 mt-3 md:mt-4 text-xs md:text-base leading-relaxed">
            Exploring our vehicle evolution timeline, championship trophies, press recognitions, and merit awards.
          </p>
        </div>

        {/* Sub-Tabs Selector */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "timeline"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🏎️ Timeline & Past Cars</span>
            </button>

            <button
              onClick={() => setActiveTab("achievements")}
              className={`px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "achievements"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🏆 Achievements & Awards</span>
            </button>
          </div>
        </div>

        {/* Dynamic Sub-Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "timeline" ? (
            
            /* TAB 1: PERFECT DUAL-RESPONSIVE TIMELINE FLOW */
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl mx-auto"
            >
              {/* Vertical Thread: Left (Mobile) / Center (Desktop) */}
              <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-amber-500/80 via-amber-400/40 to-emerald-400/80 -translate-x-1/2 rounded-full" />

              <div className="flex flex-col gap-12 md:gap-20 relative">
                {PAST_CARS.map((car, index) => {
                  const isEven = index % 2 === 0;

                  // Text Details Card
                  const ContentCard = (
                    <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-2xl backdrop-blur-xl group">
                      <div className="flex items-center justify-between mb-3 md:mb-4">
                        <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
                          {car.version}
                        </span>
                        <span className="text-xs font-mono text-slate-400 font-semibold">
                          {car.year}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-3xl font-black text-white group-hover:text-amber-400 transition-colors mb-1">
                        {car.name}
                      </h3>

                      <span className="inline-block text-xs font-mono text-emerald-400 font-bold mb-3 md:mb-4">
                        STATUS: {car.status}
                      </span>

                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 font-medium">
                        {car.summary}
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                        {car.specs.map((spec, idx) => (
                          <div key={idx} className="p-2 md:p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                            <span className="text-[9px] md:text-[10px] text-slate-400 font-mono block uppercase truncate">
                              {spec.label}
                            </span>
                            <span className="text-[11px] md:text-xs font-bold text-slate-100 mt-0.5 block truncate">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );

                  // Car Photo Card
                  const ImageBlock = (
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl group hover:border-amber-500/40 transition-all duration-300">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                      <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-black/80 border border-white/20 text-white font-mono text-[10px] md:text-xs font-bold backdrop-blur-md">
                          {car.version} Photo
                        </span>
                      </div>
                    </div>
                  );

                  return (
                    <motion.div
                      key={car.version}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 pl-10 md:pl-0"
                    >
                      {/* Numbered Pin (1, 2, 3, 4) - Absolutely Positioned so it doesn't displace flex columns */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-black border-2 border-amber-400 flex items-center justify-center text-amber-400 font-mono font-extrabold text-xs md:text-sm shadow-xl shadow-amber-500/30">
                          {index + 1}
                        </div>
                      </div>

                      {/* Left Column (50% on Desktop) */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] order-1 md:order-none">
                        {isEven ? ContentCard : ImageBlock}
                      </div>

                      {/* Right Column (50% on Desktop) */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] order-2 md:order-none">
                        {isEven ? ImageBlock : ContentCard}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          ) : (

            /* TAB 2: ACHIEVEMENTS GRID */
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {ACHIEVEMENTS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-amber-500/40 transition-all group flex flex-col justify-between"
                >
                  <div className="relative w-full aspect-[16/10] bg-black/80 border-b border-white/5 overflow-hidden flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/90 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold backdrop-blur-md">
                        {item.highlight}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg md:text-2xl font-extrabold text-white mb-2 md:mb-3 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

          )}
        </AnimatePresence>

      </div>
    </section>
  );
}