"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Hall of Fame", href: "#hall-of-fame" },
    { name: "Gallery", href: "#gallery" },
    { name: "Partners", href: "#partners" },
    { name: "Support Us", href: "#support" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 shadow-2xl">
        
        {/* Brand / Logo - Stacked Typography Matching Brand Identity */}
        <Link href="#hero" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-full bg-black border border-white/20 flex items-center justify-center p-1 group-hover:border-amber-400 group-hover:scale-105 transition-all shadow-lg">
            <Image
              src="/helios-logo.jpg"
              alt="DJS Helios Official Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Exact DJS / HELIOS Stacked Typography */}
          <div className="flex flex-col font-helios justify-center leading-none">
            <span className="font-extrabold text-white text-base md:text-lg tracking-[0.18em] uppercase">
              DJS
            </span>
            <span className="font-black text-amber-400 text-lg md:text-xl tracking-[0.12em] uppercase mt-0.5">
              HELIOS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 p-6 rounded-2xl bg-black/90 backdrop-blur-lg border border-white/10 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}