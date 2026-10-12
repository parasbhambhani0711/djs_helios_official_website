"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const emailAddress = "djshelios@gmail.com";
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

  const socials = [
    {
      name: "LinkedIn",
      handle: "DJS Helios",
      link: "https://linkedin.com/company/djs-helios",
      logo: "/socials/linkedin.png",
      borderColor: "hover:border-blue-600/50",
    },
    {
      name: "Instagram",
      handle: "@djs_helios",
      link: "https://www.instagram.com/djs_helios/",
      logo: "/socials/instagram.png",
      borderColor: "hover:border-pink-500/50",
    },
    {
      name: "Facebook",
      handle: "DJSHelios",
      link: "https://www.facebook.com/DJSHelios/",
      logo: "/socials/facebook.png",
      borderColor: "hover:border-blue-500/50",
    },
    {
      name: "X (Twitter)",
      handle: "@djs_helios",
      link: "https://x.com/djs_helios",
      logo: "/socials/x.png",
      borderColor: "hover:border-slate-400/50",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-helios-dark relative overflow-hidden border-t border-white/5">
      
      {/* Lightweight Static Solar Glows (No continuous re-renders) */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase inline-block mb-3">
            Connect With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-slate-300 mt-3 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Get in touch with DJS Helios to learn more about our work and how you can get involved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Action & Socials */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Email Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="p-7 rounded-3xl bg-gradient-to-br from-amber-500/10 via-black to-black border border-amber-500/30 shadow-xl relative overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative z-10">
                <div>
                  <span className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider block mb-1">
                    ⚡ Fast Response
                  </span>
                  <h3 className="text-2xl font-bold text-white">Email Our Team</h3>
                  <p className="text-sm text-slate-300 mt-1 font-mono">{emailAddress}</p>
                </div>
                
                <a
                  href={mailtoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Us</span>
                </a>
              </div>
            </motion.div>

            {/* Captain & College Address */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-7 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col gap-6"
            >
              {/* Captain */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl font-bold flex-shrink-0">
                  👑
                </div>
                <div>
                  <span className="text-xs text-amber-400 uppercase font-mono font-bold tracking-wider block">
                    Helios Captain
                  </span>
                  <h4 className="text-lg font-bold text-white mt-0.5">Ved Singh</h4>
                  <a
                    href="tel:+919920960017"
                    className="text-amber-400 hover:text-amber-300 font-mono text-sm font-medium mt-0.5 inline-block transition-colors"
                  >
                    +91 99209 60017
                  </a>
                </div>
              </div>

              <div className="border-t border-white/5" />

              {/* College */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl font-bold flex-shrink-0">
                  📍
                </div>
                <div>
                  <span className="text-xs text-emerald-400 uppercase font-mono font-bold tracking-wider block">
                    College Address
                  </span>
                  <p className="text-sm text-slate-200 mt-1 leading-relaxed font-medium">
                    Plot No. U-15, J.V.P.D Scheme, Bhaktivedanta Swami Marg, Vile Parle West, Mumbai, Maharashtra 400056
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Media Handles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10"
            >
              <span className="text-xs text-slate-400 uppercase font-mono font-bold tracking-wider block mb-4">
                Official Social Media Handles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 ${social.borderColor} flex items-center gap-3 transition-all duration-200 group`}
                  >
                    {/* Container with rounded clipping & mix-blend-multiply to remove white backgrounds */}
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10 p-0.5">
                      <Image
                        src={social.logo}
                        alt={`${social.name} Logo`}
                        width={28}
                        height={28}
                        className="object-contain w-full h-full mix-blend-multiply"
                      />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="text-white font-bold text-xs truncate">
                        {social.name}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono truncate group-hover:text-amber-300 transition-colors">
                        {social.handle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Performant Google Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl overflow-hidden border border-white/10 relative min-h-[380px] lg:min-h-full flex flex-col bg-black/40"
          >
            <iframe
              title="DJSCE Mumbai Map Location"
              src="https://maps.google.com/maps?q=Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering%20Vile%20Parle%20West%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
              allowFullScreen
            />

            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/90 border border-white/10 text-xs text-slate-200 font-medium flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold text-white">Our College on Google Maps</span>
              </div>
              <span className="text-amber-400 font-mono text-[11px]">Vile Parle (W), Mumbai</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}