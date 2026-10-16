"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WISHLIST = [
  {
    title: "Mechanical",
    icon: "⚙️",
    accent: "amber",
    items: [
      "Advanced fabrication & machining support",
      "Access to precision testing & calibration rigs",
      "Structural design validation & optimization",
      "Manufacturing guidance & prototype reviews",
    ],
  },
  {
    title: "Electronics",
    icon: "⚡",
    accent: "emerald",
    items: [
      "Solar PV array & telemetry collaboration",
      "Power systems, BMS & safety resources",
      "Lab access for electrical testing & tuning",
      "High-efficiency motor & drive controllers",
    ],
  },
  {
    title: "Coding & Software",
    icon: "💻",
    accent: "amber",
    items: [
      "Software / tools access & licenses (ANSYS, CAD)",
      "Mentorship on motor control & IoT telemetry",
      "CI / testing infrastructure assistance",
      "Embedded C / C++ & cloud pipeline support",
    ],
  },
  {
    title: "Marketing & Outreach",
    icon: "📣",
    accent: "emerald",
    items: [
      "Brand & content collaboration",
      "Media partnerships & press coverage",
      "Event presence & promotional engagement",
      "Digital outreach & public relations support",
    ],
  },
];

const STEPS = [
  { num: "01", title: "Submit Interest", desc: "Share your focus and preferred support mode." },
  { num: "02", title: "Alignment Call", desc: "Scope impact areas, timing, and deliverables." },
  { num: "03", title: "MoU / Agreement", desc: "Confirm terms, recognition, and approvals." },
  { num: "04", title: "Delivery / Payment", desc: "Funds transfer or in-kind logistics." },
  { num: "05", title: "Acknowledgment", desc: "We implement and share visible outcomes." },
];

const FAQS = [
  {
    q: "Do you offer sponsorship tiers?",
    a: "Yes, we offer structured sponsorship tiers based on contribution value, unlocking specific logo placements on our solar vehicle, apparel, team website, and national press coverage.",
  },
  {
    q: "Can support be in-kind?",
    a: "Absolutely! In-kind support for raw materials, CNC machining, solar PV cells, software licenses, or transportation logistics is just as valuable to us as monetary funding.",
  },
  {
    q: "What documentation do you provide?",
    a: "We provide official MoUs, formal institutional receipts from DJSCE, tax exemption documentation (where applicable), and detailed post-season partner impact reports.",
  },
];

export default function SupportUs() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [supportType, setSupportType] = useState<string>("Monetary");

  return (
    <section id="support" className="min-h-screen bg-helios-dark pt-28 pb-24 px-4 md:px-8 relative overflow-hidden">
      
      {/* Background Solar Ambient Light Beams */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 1. HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase inline-flex items-center gap-2 mb-5 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              PARTNER WITH US
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
              SUPPORT <span className="text-amber-400 font-helios">DJS HELIOS</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
              Fuel innovation in solar electric mobility. Your support—monetary or in-kind—directly powers R&D, chassis fabrication, and competition readiness.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact-form"
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
              >
                Sponsor Us
              </a>
              <a
                href="/DJS_Helios_Pitch_Deck.pdf"
                target="_blank"
                className="px-8 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
              >
                Download Brochure
              </a>
            </div>
          </motion.div>
        </div>

        {/* 2. WAYS TO SUPPORT (MONETARY VS IN-KIND) */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              WAYS TO SUPPORT
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              Monetary or in-kind. Choose what suits you best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monetary Card */}
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-2xl backdrop-blur-xl group relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase">
                    Direct Funding
                  </span>
                  <span className="text-2xl">💰</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                  Monetary Support
                </h3>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                  Accelerate builds and testing cycles. Funds are allocated across fabrication, testing, safety, travel, and contingencies.
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/5">
                  {[
                    "Direct impact on current prototype milestones",
                    "Transparent allocation and acknowledgments",
                    "Simple invoicing and receipts",
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <span className="text-amber-400 font-bold">⚡</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact-form"
                onClick={() => setSupportType("Monetary")}
                className="mt-8 py-3 rounded-xl bg-white/[0.04] hover:bg-amber-500 hover:text-black border border-white/10 text-white text-center font-bold text-xs uppercase tracking-wider transition-all"
              >
                Pledge Monetary Support →
              </a>
            </div>

            {/* In-Kind Card */}
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-2xl backdrop-blur-xl group relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase">
                    Components & Services
                  </span>
                  <span className="text-2xl">🛠️</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  In-Kind Support
                </h3>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                  Provide materials, components, services, or facilities. See our dynamic wishlist and timing needs below.
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/5">
                  {[
                    "Materials, components, fabrication and testing",
                    "Software licenses and professional services",
                    "Mentorship and training opportunities",
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <span className="text-emerald-400 font-bold">⚡</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact-form"
                onClick={() => setSupportType("In-Kind")}
                className="mt-8 py-3 rounded-xl bg-white/[0.04] hover:bg-emerald-500 hover:text-black border border-white/10 text-white text-center font-bold text-xs uppercase tracking-wider transition-all"
              >
                Provide In-Kind Support →
              </a>
            </div>
          </div>
        </div>

        {/* 3. IN-KIND WISHLIST GRID */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              IN-KIND WISHLIST
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              Items and services that create immediate impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WISHLIST.map((category, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold uppercase">
                      Sponsor
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5 mb-2">
                    {category.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-slate-200 text-xs font-medium hover:border-amber-400/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. HOW TO SPONSOR (5-STEP TIMELINE) */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              HOW TO SPONSOR
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              A transparent 5-step collaboration pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col items-center justify-between relative hover:border-amber-400/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-black border-2 border-amber-400 text-amber-400 font-mono font-black text-xs flex items-center justify-center mb-3 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                <p className="text-slate-400 text-[11px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. FAQ ACCORDION */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-white text-xs md:text-sm">{faq.q}</span>
                  <span className="text-amber-400 font-mono text-lg font-bold ml-4">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-3 font-medium">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* 6. GET IN TOUCH FORM */}
        <div id="contact-form" className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              GET IN TOUCH
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              Submit a sponsorship interest—monetary or in-kind—and we’ll reach out within 2 business days.
            </p>
          </div>

          <form className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  TYPE OF SUPPORT
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Monetary", "In-Kind", "Both", "Other"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSupportType(type)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                        supportType === type
                          ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/20"
                          : "bg-black/40 text-slate-300 border-white/10 hover:border-amber-400/40"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  ORGANIZATION
                </label>
                <input
                  type="text"
                  placeholder="Organization / Company"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                MESSAGE
              </label>
              <textarea
                rows={4}
                placeholder="Send us a message if you would like to discuss a potential sponsorship or partnership."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}