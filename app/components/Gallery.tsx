"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "inspection" | "workshop" | "race" | "trophies";

interface GalleryItem {
  id: string;
  title: string;
  category: Category;
  type: "image" | "video";
  src: string;
  badge: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Official Inspection 'CLEARED' Badge",
    category: "inspection",
    type: "image",
    src: "/gallery/cleared-sticker.jpeg",
    badge: "Tech Inspection Passed",
  },
  {
    id: "2",
    title: "ESVC & IASC Championship Trophies",
    category: "trophies",
    type: "image",
    src: "/gallery/trophy-1.jpeg",
    badge: "Asia #1 Legacy",
  },
  {
    id: "3",
    title: "Championship Podium Celebration",
    category: "trophies",
    type: "image",
    src: "/gallery/trophy-2.jpeg",
    badge: "National Champions",
  },
  {
    id: "4",
    title: "Hands-on Chassis Welding & Fabrication",
    category: "workshop",
    type: "video",
    src: "/gallery/workshop.mp4",
    badge: "DJSCE Workshop",
  },
  {
    id: "5",
    title: "Solar Car On-Track Test Run",
    category: "race",
    type: "video",
    src: "/gallery/hero-track-mp4.mp4",
    badge: "Track Endurance",
  },
  {
    id: "6",
    title: "Race Track Testing & Profile",
    category: "race",
    type: "image",
    src: "/gallery/hero-track.png",
    badge: "Solar Vehicle",
  },
  {
    id: "7",
    title: "Corporate Sponsor Branding Banner",
    category: "race",
    type: "image",
    src: "/gallery/sponsor-banner.jpeg",
    badge: "Sponsor Visibility",
  },
  {
    id: "8",
    title: "Technical Scrutiny Round Passed",
    category: "inspection",
    type: "image",
    src: "/gallery/proof-1.jpeg",
    badge: "Competition Scrutiny",
  },
  {
    id: "9",
    title: "Dynamic Sunset Lap Test Run",
    category: "race",
    type: "image",
    src: "/gallery/proof-2.jpeg",
    badge: "Endurance Test",
  },
  {
    id: "10",
    title: "On-Site Competition Pit Execution",
    category: "inspection",
    type: "image",
    src: "/gallery/proof-3.jpeg",
    badge: "Race Pit Crew",
  },
];

export default function Gallery() {
  // State and Variables scope required for JSX below
  const [filter, setFilter] = useState<Category>("all");

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const categories: { label: string; value: Category }[] = [
    { label: "All Archives", value: "all" },
    { label: "Inspection Cleared", value: "inspection" },
    { label: "Workshop & Fabrication", value: "workshop" },
    { label: "Race Day & Track", value: "race" },
    { label: "Trophies & Wins", value: "trophies" },
  ];

  return (
    <section id="gallery" className="py-24 px-4 md:px-8 bg-helios-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
            Proven Track Record
          </h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            MEDIA & RACE ARCHIVE
          </p>
          <p className="text-slate-400 mt-4 text-sm md:text-base">
            Real competition inspection passes, championship trophies, on-track testing, and workshop fabrication.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${
                filter === cat.value
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20"
                  : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-black/60 border border-white/10 aspect-[4/3] flex flex-col justify-between p-6 shadow-xl"
              >
                {/* Media Layer (Video or Image) */}
                <div className="absolute inset-0 z-0 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>

                {/* Badge Overlay */}
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-semibold backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-base md:text-lg leading-tight group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}