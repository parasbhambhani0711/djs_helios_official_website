"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type SubTab = "achievements" | "timeline" | "media";

interface AchievementItem {
  id: string;
  year: string;
  title: string;
  category: string;
  image: string;
  highlight: string;
  description: string;
  bullets: string[];
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

interface MediaItem {
  id: string;
  outlet: string;
  headline: string;
  date: string;
  badge: string;
  image: string;
  summary: string;
  highlights: string[];
}

const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "sevc-2026",
    year: "2026",
    title: "Solar Electric Vehicle Championship (SEVC 2026)",
    category: "Overall & Merit Excellence",
    image: "/hall-of-fame/achievements/2026.jpg",
    highlight: "5th Rank Overall",
    description: "Competed at Coimbatore, Tamil Nadu in the Battery Electric Vehicle category against top national institutes.",
    bullets: [
      "5th Rank Overall (Battery Electric Vehicle)",
      "2nd Rank in Business Plan",
      "3rd Rank in Innovation Round",
      "Flawless dynamic track & technical scrutiny clearance",
    ],
  },
  {
    id: "sevc-bsvc-2025",
    year: "2024 - 2025",
    title: "SEVC 2025 & BSVC 2024 National Campaigns",
    category: "Endurance & Speed",
    image: "/hall-of-fame/achievements/2025.jpg",
    highlight: "AIR 5 (SEVC) / AIR 6 (BSVC)",
    description: "Demonstrated consistent national top-10 finishes across consecutive competition seasons.",
    bullets: [
      "All India Rank 5 at SEVC 2025",
      "All India Rank 6 at BSVC 2024",
      "Consistent 70 km single-charge track endurance run",
    ],
  },
  {
    id: "esvc-2019",
    year: "2019",
    title: "Electric Solar Vehicle Championship (ESVC 2019)",
    category: "Defending Champions",
    image: "/hall-of-fame/achievements/2019.jpg",
    highlight: "AIR 7 Out of 120 Teams",
    description: "Returned as defending champions to compete against teams from all across Asia with Version 03 (The Defender).",
    bullets: [
      "Ranked 7th Overall against 120 participating teams",
      "1st Place in Business Plan and Cost Report",
      "2nd Place in Acceleration Round",
      "2nd Place in Pre-Virtual Events",
    ],
  },
  {
    id: "esvc-2018",
    year: "2018",
    title: "ESVC 2018 — Crowned 'Champions of Asia'",
    category: "Asian Champions",
    image: "/hall-of-fame/achievements/2018-esvc.jpg",
    highlight: "Champions of Asia 2018",
    description: "Achieved a quantum leap outperforming ~120 teams to claim the overall Asian Championship title.",
    bullets: [
      "1st Rank in ESVC 2018 Adventure Class Vehicles",
      "1st Place in Acceleration Test, Hill Climb & Business Plan/Cost Report",
      "Runners-Up in Endurance (Maximum Laps Completed)",
      "Runners-Up in Solar Performance, Design & Innovation, and People's Choice",
      "3rd Rank in Crosspad",
    ],
  },
  {
    id: "iasc-2018",
    year: "2018",
    title: "Indo Asian Solar Challenge (IASC 2018)",
    category: "Dual Title Victory",
    image: "/hall-of-fame/achievements/2018-iasc.jpg",
    highlight: "Champions of IASC 2018",
    description: "Became the ONLY student team ever to hold both the ESVC and IASC Overall Champions titles simultaneously.",
    bullets: [
      "1st Rank in IASC 2018 Adventure Class Vehicles",
      "1st Place in Endurance & Overall Vehicle Design",
      "Runners-Up in Solar Performance, Innovations & Business Plan",
      "3rd Rank in Acceleration & Auto-Cross",
    ],
  },
  {
    id: "esvc-2017",
    year: "2017",
    title: "ESVC 2017 — Debut Competition Run",
    category: "Pioneer Entry",
    image: "/hall-of-fame/achievements/2017.jpg",
    highlight: "Go Green Award Winner",
    description: "Designed and manufactured Version 01, our very first competitive vehicle in team history.",
    bullets: [
      "Ranked 22nd Overall out of 137 participating teams",
      "Won the prestigious Go Green Award",
      "Successfully completed all dynamic track rounds",
      "Runners-Up in People's Choice Award",
    ],
  },
];

const PAST_CARS: CarItem[] = [
  {
    version: "v3.0",
    name: "Helios 3.0",
    year: "2026",
    image: "/hall-of-fame/timeline/2026.jpg",
    status: "SEVC 2026 Competitor",
    specs: [
      { label: "Chassis", value: "3-Wheeler Custom" },
      { label: "Top Speed", value: "60 km/h" },
      { label: "Range", value: "70 km" },
    ],
    summary: "Engineered for the Solar Electrical Vehicle Championship (SEVC 2026). Features a lightweight 3-wheeler aerodynamic chassis, high-efficiency solar PV cell array, and direct-drive BLDC hub motor.",
  },
  {
    version: "v2.5",
    name: "Helios 2.5",
    year: "2024 - 2025",
    image: "/hall-of-fame/timeline/2024&2025.jpg",
    status: "AIR 5 (SEVC) / AIR 6 (BSVC)",
    specs: [
      { label: "Chassis", value: "3-Wheeler Spaceframe" },
      { label: "Motor", value: "BLDC Hub Motor" },
      { label: "Range", value: "70 km" },
    ],
    summary: "Competed at SEVC 2025 (All India Rank 5) and BSVC 2024 (All India Rank 6). Achieved a reliable 70 km single-charge track range with consistent top speed performance.",
  },
  {
    version: "v3",
    name: "Version 03 (The Defender)",
    year: "2019",
    image: "/hall-of-fame/timeline/2019.jpg",
    status: "AIR 7 at ESVC 2019",
    specs: [
      { label: "Rank", value: "7th / 120 Teams" },
      { label: "Cost & B-Plan", value: "1st Place" },
      { label: "Acceleration", value: "2nd Place" },
    ],
    summary: "Returned to ESVC 2019 as defending champions. Ranked 7th overall out of 120 participating teams, securing 1st in Business Plan and Cost Report, 2nd in Acceleration round, and 2nd in Pre-Virtuals.",
  },
  {
    version: "v2",
    name: "Merlin (Version 02)",
    year: "2018",
    image: "/hall-of-fame/timeline/2018.jpg",
    status: "Dual Champions (ESVC & IASC)",
    specs: [
      { label: "Titles", value: "Champions of Asia" },
      { label: "Dynamic", value: "1st in 5 Events" },
      { label: "Endurance", value: "1st Place" },
    ],
    summary: "The legendary Asian Champion. Made history as the only student team ever to hold both the ESVC 2018 and IASC 2018 overall titles simultaneously, sweeping 1st place in Acceleration, Hill Climb, B-Plan, Endurance, and Design.",
  },
  {
    version: "v1",
    name: "Version 01 (The First Step)",
    year: "2017",
    image: "/hall-of-fame/timeline/2017.jpg",
    status: "Go Green Award Winner",
    specs: [
      { label: "ESVC 2017", value: "22nd / 137 Teams" },
      { label: "Award", value: "Go Green Winner" },
      { label: "People's Choice", value: "Runners-up" },
    ],
    summary: "The founding competition car for ESVC 2017. Ranked 22nd out of 137 national teams, won the prestigious Go Green Award, and successfully completed all dynamic track rounds.",
  },
];

const MEDIA_COVERAGE: MediaItem[] = [
  {
    id: "news1",
    outlet: "National Educational Press",
    headline: "25 Engineering Students Build Zero-Emission Solar Car in 9 Months",
    date: "2017",
    badge: "Make In India Pioneer",
    image: "/hall-of-fame/media/news1.jpg",
    summary: "Featured DJSCE Mechanical, Electronics & Production students for constructing a dual-charging 45 km/h solar vehicle without ready-made imported equipment.",
    highlights: [
      "Built by 25 DJSCE students in 9 months without external equipment",
      "Dual solar & electrical simultaneous charge-and-drive system",
      "Promoted Make in India mission for affordable clean mobility",
    ],
  },
  {
    id: "news2",
    outlet: "State Leadership Showcase",
    headline: "DJS Helios Solar Innovation Presented to State Leadership",
    date: "2018",
    badge: "Dignitary Recognition",
    image: "/hall-of-fame/media/news2.jpg",
    summary: "Team DJS Helios presenting their custom solar vehicle technology and championship trophies directly to Maharashtra State Leadership at an official tech summit.",
    highlights: [
      "Honored by Chief Minister Devendra Fadnavis at state tech showcase",
      "Recognized for pioneering student EV research in Maharashtra",
      "Demonstrated custom solar array & chassis innovation",
    ],
  },
  {
    id: "news3",
    outlet: "Free Press Journal",
    headline: "Runs on Solar & Electricity: Mumbai's First Student Solar Automobile",
    date: "2017",
    badge: "FPJ Special Feature",
    image: "/hall-of-fame/media/news3.jpg",
    summary: "Highlighted DJS Helios as the first engineering group from Mumbai to build a dual-powered electric solar car capable of an 80 km operational radius.",
    highlights: [
      "First engineering team from Mumbai to build a dual solar-electric vehicle",
      "Capable of 80 km operational range at 45 km/h top speed",
      "Charges exposed to sunlight even while parked or on the move",
    ],
  },
  {
    id: "news4",
    outlet: "DNA India",
    headline: "DJS Helios Wins International Accolades & Sweeps Dual Championships",
    date: "2018",
    badge: "DNA National Press",
    image: "/hall-of-fame/media/news4.jpg",
    summary: "Covered DJS Helios dominating both the Indo Asian Solar Challenge (IASC 2018) and ESVC 2018 to establish Asia-Pacific student leadership.",
    highlights: [
      "Covered DJS Helios winning IASC 2018 & ESVC 2018 titles",
      "Praised by DJSCE Principal Dr. Hari Vasudevan for student excellence",
      "Set milestone for World Solar Challenge technical preparation",
    ],
  },
  {
    id: "news5",
    outlet: "Regional Media & Technology Press",
    headline: "Futuristic Clean Mobility: Student Solar Vehicle Achieving 45 km/h Speed",
    date: "2017 - 2018",
    badge: "Regional Tech Feature",
    image: "/hall-of-fame/media/news5.jpg",
    summary: "Detailed regional coverage analyzing the structural cost-efficiency, 4-hour solar charging time, and battery power controller developed by DJS Helios.",
    highlights: [
      "Detailed 4-hour solar vs 1-hour electrical charging dynamics",
      "Highlighted low-cost lightweight composite chassis engineering",
      "Ranked among Asia's top competitive entries at ESVC",
    ],
  },
];

const YEAR_FILTERS = ["All", "2026", "2024 - 2025", "2019", "2018", "2017"];

export default function HallOfFame() {
  const [activeTab, setActiveTab] = useState<SubTab>("achievements");
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const filteredAchievements = selectedYear === "All"
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter((a) => a.year === selectedYear);

  return (
    <section id="hall-of-fame" className="py-20 md:py-24 px-4 md:px-8 bg-helios-dark relative border-t border-white/5 overflow-hidden">
      
      {/* Background Solar Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-amber-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase inline-block mb-3">
            Legacy & Recognition
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            HALL OF FAME
          </h2>
          <p className="text-slate-400 mt-3 md:mt-4 text-xs md:text-base leading-relaxed">
            Exploring our vehicle evolution timeline, national championships, merit awards, and media press features.
          </p>
        </div>

        {/* 3 Sub-Tabs Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("achievements")}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                activeTab === "achievements"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🏆 Achievements & Trophies</span>
            </button>

            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                activeTab === "timeline"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🏎️ Timeline & Past Cars</span>
            </button>

            <button
              onClick={() => setActiveTab("media")}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                activeTab === "media"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>📰 Media Coverage</span>
            </button>
          </div>
        </div>

        {/* Dynamic Sub-Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "achievements" && (
            
            /* TAB 1: YEAR-WISE ACHIEVEMENTS SHOWCASE */
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Year Filter Pills Bar */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
                {YEAR_FILTERS.map((year) => {
                  const isSelected = selectedYear === year;
                  return (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                        isSelected
                          ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/20"
                          : "bg-white/[0.02] text-slate-300 border-white/10 hover:border-amber-400/40 hover:bg-white/[0.05]"
                      }`}
                    >
                      {year === "All" ? "ALL SEASONS" : `${year} SEASON`}
                    </button>
                  );
                })}
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {filteredAchievements.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-amber-500/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Header with Year & Highlight Badges */}
                      <div className="relative w-full aspect-[16/9] bg-black/80 border-b border-white/5 overflow-hidden flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-black/90 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold backdrop-blur-md">
                            🏆 {item.highlight}
                          </span>
                        </div>

                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-mono font-bold">
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Achievement Details */}
                      <div className="p-6 md:p-8">
                        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-lg md:text-2xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium mb-4">
                          {item.description}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2 pt-3 border-t border-white/5">
                          {item.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-200 font-medium">
                              <span className="text-amber-400 font-bold">⚡</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-0">
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>VERIFIED DJS HELIOS TROPHY</span>
                        <span className="text-amber-400">{item.year} SEASON</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "timeline" && (
            
            /* TAB 2: TIMELINE (PAST CARS) */
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl mx-auto"
            >
              {/* Vertical Thread */}
              <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-amber-500/80 via-amber-400/40 to-emerald-400/80 -translate-x-1/2 rounded-full" />

              <div className="flex flex-col gap-12 md:gap-20 relative">
                {PAST_CARS.map((car, index) => {
                  const isEven = index % 2 === 0;

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

                  const ImageBlock = (
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl group hover:border-amber-500/40 transition-all duration-300">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.display = "none";
                        }}
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
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-black border-2 border-amber-400 flex items-center justify-center text-amber-400 font-mono font-extrabold text-xs md:text-sm shadow-xl shadow-amber-500/30">
                          {index + 1}
                        </div>
                      </div>

                      <div className="w-full md:w-[calc(50%-2.5rem)] order-1 md:order-none">
                        {isEven ? ContentCard : ImageBlock}
                      </div>

                      <div className="w-full md:w-[calc(50%-2.5rem)] order-2 md:order-none">
                        {isEven ? ImageBlock : ContentCard}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "media" && (

            /* TAB 3: MEDIA & PRESS COVERAGE SHOWCASE */
            <motion.div
              key="media"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {MEDIA_COVERAGE.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-amber-500/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Media Clipping Image Tile */}
                    <div className="relative w-full aspect-[4/3] bg-black/90 border-b border-white/5 overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.headline}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                        onError={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      {/* Outlet & Year Tags */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-black/80 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold backdrop-blur-md">
                          📰 {news.outlet}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-slate-200 text-[10px] font-mono font-bold backdrop-blur-md">
                          {news.date}
                        </span>
                      </div>
                    </div>

                    {/* Article Details */}
                    <div className="p-6">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold inline-block mb-3">
                        {news.badge}
                      </span>

                      <h3 className="text-lg font-black text-white mb-2.5 group-hover:text-amber-400 transition-colors leading-snug">
                        {news.headline}
                      </h3>

                      <p className="text-slate-300 text-xs leading-relaxed font-medium mb-4">
                        {news.summary}
                      </p>

                      {/* Quick Takeaway Bullets */}
                      <ul className="space-y-1.5 pt-3 border-t border-white/5">
                        {news.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>PRESS ARCHIVE</span>
                      <span className="text-amber-400/90 font-bold">VERIFIED ARTICLE</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}