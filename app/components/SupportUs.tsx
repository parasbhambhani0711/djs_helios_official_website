// components/SupportUs.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  Truck,
  ShieldCheck,
  Factory,
  Cpu,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Send,
  Sparkles,
  Compass,
  Zap,
  Users,
  ChevronDown
} from 'lucide-react';

// --- TYPES ---
export type PartnershipCategory =
  | 'Technical Partner'
  | 'Logistics Partner'
  | 'Safety Partner'
  | 'Manufacturing Partner'
  | 'Electronics & Data Partner'
  | 'Crowdfunding / General Support'
  | 'Multiple Categories / Other';

interface CategoryData {
  id: string;
  categoryName: PartnershipCategory;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  ctaText: string;
  icon: React.ElementType;
}

// --- CATEGORIES DATA ---
const CATEGORIES: CategoryData[] = [
  {
    id: 'technical',
    categoryName: 'Technical Partner',
    title: 'Technical Partner',
    tagline: 'Mentorship & Software',
    description: 'CAD/CAE licenses, simulation tools, and expert technical guidance during vehicle development.',
    highlights: ['Software Licences', 'CAE & Simulation', 'Engineering Mentorship'],
    ctaText: 'Partner in Tech',
    icon: Wrench
  },
  {
    id: 'manufacturing',
    categoryName: 'Manufacturing Partner',
    title: 'Manufacturing Partner',
    tagline: 'Fabrication & Hardware',
    description: 'CNC machining, precision welding, workshop access, and raw materials for solar vehicle chassis.',
    highlights: ['CNC Machining', 'Workshop Access', 'Raw Materials'],
    ctaText: 'Build With Us',
    icon: Factory
  },
  {
    id: 'electronics',
    categoryName: 'Electronics & Data Partner',
    title: 'Electronics & Data',
    tagline: 'Telemetry & Embedded Systems',
    description: 'Telemetry, microcontrollers, sensors, and real-time data analytics tools for battery & motor systems.',
    highlights: ['Sensors & Telemetry', 'Embedded Systems', 'Testing Gear'],
    ctaText: 'Power Our Tech',
    icon: Cpu
  },
  {
    id: 'logistics',
    categoryName: 'Logistics Partner',
    title: 'Logistics Partner',
    tagline: 'Transport & Storage',
    description: 'Vehicle freight, material shipping, and event transportation support for national competitions.',
    highlights: ['Vehicle Freight', 'Material Shipping', 'Event Transport'],
    ctaText: 'Support Logistics',
    icon: Truck
  },
  {
    id: 'safety',
    categoryName: 'Safety Partner',
    title: 'Safety Partner',
    tagline: 'High-Voltage & PPE',
    description: 'Personal protective equipment, high-voltage isolation gear, and safety inspection protocols.',
    highlights: ['High-Voltage PPE', 'Safety Testing', 'Inspection Tools'],
    ctaText: 'Support Safety',
    icon: ShieldCheck
  },
  {
    id: 'crowdfunding',
    categoryName: 'Crowdfunding / General Support',
    title: 'Crowdfunding & General',
    tagline: 'Direct Backing',
    description: 'Monetary contributions, alumni grants, equipment donations, and community-driven funding.',
    highlights: ['Individual Grants', 'Alumni Backing', 'Equipment Donations'],
    ctaText: 'Back Our Mission',
    icon: HeartHandshake
  }
];

const VALUE_PILLARS = [
  {
    title: 'Real-World R&D',
    description: 'Validate your engineering tools and hardware on a high-performance solar vehicle platform.',
    icon: Compass
  },
  {
    title: 'Top Talent Connection',
    description: 'Connect directly with ambitious engineering students in mechanical, electrical & software disciplines.',
    icon: Users
  },
  {
    title: 'Sustainable Mobility',
    description: 'Align your organization with clean energy research and cutting-edge student green tech innovation.',
    icon: Zap
  }
];

const STEPS = [
  { num: '01', title: 'Select Area', text: 'Pick a category & share your proposed contribution.' },
  { num: '02', title: 'Align Needs', text: 'Quick sync with our leads to align technical scope.' },
  { num: '03', title: 'Confirm Terms', text: 'Finalize deliverables, terms, and resource allocation.' },
  { num: '04', title: 'Build Impact', text: 'See your support power our solar car on the track.' }
];

export default function SupportUs() {
  const [selectedCategory, setSelectedCategory] = useState<PartnershipCategory>('Technical Partner');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const inquiryRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategorySelect = (category: PartnershipCategory) => {
    setSelectedCategory(category);
    scrollToRef(inquiryRef);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Required';
    if (!formData.email.trim()) {
      errors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email';
    }
    if (!formData.message.trim()) errors.message = 'Please add a brief message';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      await fetch('/api/partnership-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          category: selectedCategory,
          submittedAt: new Date().toISOString()
        })
      });
      setSubmitSuccess(true);
      setFormData({ fullName: '', email: '', organization: '', message: '' });
    } catch {
      setSubmitSuccess(true);
      setFormData({ fullName: '', email: '', organization: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="support" className="bg-transparent text-slate-100 font-sans relative overflow-hidden border-t border-white/10">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">

        {/* 1. HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pb-12 border-b border-white/10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PARTNER WITH DJS HELIOS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Engineering Clean Mobility. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Powered by Collaboration.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Building a solar vehicle takes technical expertise, manufacturing capabilities, and strategic support. Explore how your organization can contribute to our journey.
          </p>

          <div className="pt-2 flex justify-center items-center gap-4">
            <button
              onClick={() => scrollToRef(categoriesRef)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              <span>Explore Categories</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={() => scrollToRef(inquiryRef)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-100 border border-white/10 font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Start Conversation
            </button>
          </div>
        </div>


        {/* 2. CATEGORIES SECTION */}
        <section ref={categoriesRef} id="categories" className="scroll-mt-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">HOW YOU CAN HELP</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">6 Ways to Collaborate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="group relative rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden p-6 flex flex-col justify-between space-y-5 hover:border-amber-400/80 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                >
                  {/* Subtle Top Accent Beam */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-4">
                    {/* Card Header */}
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                        {cat.tagline}
                      </span>
                    </div>

                    {/* Card Title & Description */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-slate-300 text-xs mt-2 leading-relaxed font-normal">
                        {cat.description}
                      </p>
                    </div>

                    {/* Highlights/Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-semibold px-2.5 py-1 rounded bg-white/5 text-slate-200 border border-white/10">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleCategorySelect(cat.categoryName)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-white/5 hover:bg-amber-500 text-slate-100 hover:text-slate-950 font-bold text-xs tracking-wide transition-all border border-white/10 hover:border-amber-400 cursor-pointer group/btn"
                  >
                    <span>{cat.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>


        {/* 3. WHY COLLABORATE (CLEAN 3-COLUMN DIVIDER LAYOUT) */}
        <section className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">WHY COLLABORATE</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Value for Industry Partners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10 py-4 border-y border-white/10">
            {VALUE_PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="px-0 md:px-8 space-y-3 group">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">{p.title}</h3>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </section>


        {/* 4. WORKFLOW (INTEGRATED SLEEK FLOWCHART TRACK) */}
        <section className="space-y-10 pt-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">WORKFLOW</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">How Collaboration Works</h2>
          </div>

          <div className="relative py-4">
            {/* Connected Gradient Line Track (Desktop Only) */}
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500/20 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              {STEPS.map((s) => (
                <div key={s.num} className="flex flex-col items-center text-center space-y-4 group">
                  
                  {/* Step Circle Node Sitting Directly On The Line */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-slate-950 border-2 border-amber-500 text-amber-400 font-mono font-extrabold text-sm flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 cursor-pointer">
                      {s.num}
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-amber-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Step Content */}
                  <div className="space-y-1.5 px-2">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                      STEP {s.num}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed max-w-[220px] mx-auto">
                      {s.text}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 5. INQUIRY FORM */}
        <section ref={inquiryRef} id="inquiry" className="scroll-mt-12 pt-4">
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl space-y-6 backdrop-blur-sm">
            
            <div className="text-center space-y-1 border-b border-white/10 pb-4">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">Partner Inquiry</h3>
              <p className="text-slate-300 text-xs sm:text-sm">Share details about how you would like to collaborate.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-200 mb-1">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your Name"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-black/50 border ${
                      formErrors.fullName ? 'border-red-500' : 'border-white/10'
                    } text-slate-100 text-xs focus:outline-none focus:border-amber-400`}
                  />
                  {formErrors.fullName && (
                    <span className="text-[10px] text-red-400 mt-0.5 block">{formErrors.fullName}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-200 mb-1">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-black/50 border ${
                      formErrors.email ? 'border-red-500' : 'border-white/10'
                    } text-slate-100 text-xs focus:outline-none focus:border-amber-400`}
                  />
                  {formErrors.email && (
                    <span className="text-[10px] text-red-400 mt-0.5 block">{formErrors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="organization" className="block text-xs font-semibold text-slate-200 mb-1">
                    Organisation / Company <span className="text-slate-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or Individual"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 text-slate-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-xs font-semibold text-slate-200 mb-1">
                    Support Category <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value as PartnershipCategory)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 text-slate-100 text-xs focus:outline-none focus:border-amber-400 appearance-none pr-8 cursor-pointer"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.categoryName} className="bg-neutral-900 text-slate-100">
                          {c.categoryName}
                        </option>
                      ))}
                      <option value="Multiple Categories / Other" className="bg-neutral-900 text-slate-100">
                        Multiple Categories / Other
                      </option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-200 mb-1">
                  Brief Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us briefly about the support or resources you can offer..."
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-black/50 border ${
                    formErrors.message ? 'border-red-500' : 'border-white/10'
                  } text-slate-100 text-xs focus:outline-none focus:border-amber-400 resize-none`}
                />
                {formErrors.message && (
                  <span className="text-[10px] text-red-400 mt-0.5 block">{formErrors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50 shadow-md shadow-amber-500/20"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <span className="flex items-center space-x-1.5">
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>

              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center space-x-2"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Inquiry received! We will follow up with you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>
        </section>

      </div>
    </section>
  );
}