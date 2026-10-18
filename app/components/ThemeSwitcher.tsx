// components/ThemeSwitcher.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Sparkles, ChevronDown } from 'lucide-react';

export interface ThemeOption {
  id: string;
  name: string;
  tagline: string;
  primaryColor: string;    // Main Accent (Hex)
  secondaryColor: string;  // Supporting Accent (Hex)
  bgColor: string;         // Base Background (Hex)
  cardBg: string;          // Card Surface (Hex)
  textColor: string;       // Primary Text (Hex)
  glowColor: string;       // Box Shadow / Glow Accent
  cssVars: Record<string, string>;
}

export const ThemeSwitcherPresets: ThemeOption[] = [
  {
    id: 'solar-yellow',
    name: 'Solar Yellow',
    tagline: 'Bright Amber & Gold',
    primaryColor: '#f59e0b',
    secondaryColor: '#eab308',
    bgColor: '#08090d',
    cardBg: '#10121a',
    textColor: '#f8fafc',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    cssVars: {
      '--color-accent-primary': '#f59e0b',
      '--color-accent-secondary': '#fbbf24',
      '--color-bg-base': '#08090d',
      '--color-card-surface': '#10121a',
      '--color-border-subtle': 'rgba(245, 158, 11, 0.25)'
    }
  },
  {
    id: 'cyber-green',
    name: 'Cyber Green',
    tagline: 'Vibrant Lime & Emerald',
    primaryColor: '#10b981',
    secondaryColor: '#84cc16',
    bgColor: '#03140a',
    cardBg: '#072414',
    textColor: '#f0fdf4',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    cssVars: {
      '--color-accent-primary': '#10b981',
      '--color-accent-secondary': '#84cc16',
      '--color-bg-base': '#03140a',
      '--color-card-surface': '#072414',
      '--color-border-subtle': 'rgba(16, 185, 129, 0.25)'
    }
  },
  {
    id: 'neon-pink',
    name: 'Neon Pink',
    tagline: 'Cyberpunk Magenta & Fuchsia',
    primaryColor: '#ec4899',
    secondaryColor: '#d946ef',
    bgColor: '#0f051d',
    cardBg: '#1a0a2a',
    textColor: '#fdf4ff',
    glowColor: 'rgba(236, 72, 153, 0.25)',
    cssVars: {
      '--color-accent-primary': '#ec4899',
      '--color-accent-secondary': '#d946ef',
      '--color-bg-base': '#0f051d',
      '--color-card-surface': '#1a0a2a',
      '--color-border-subtle': 'rgba(236, 72, 153, 0.25)'
    }
  },
  {
    id: 'hyper-orange',
    name: 'Hyper Orange',
    tagline: 'High-Energy Motorsport Orange',
    primaryColor: '#f97316',
    secondaryColor: '#fb923c',
    bgColor: '#120702',
    cardBg: '#200d04',
    textColor: '#fff7ed',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    cssVars: {
      '--color-accent-primary': '#f97316',
      '--color-accent-secondary': '#fb923c',
      '--color-bg-base': '#120702',
      '--color-card-surface': '#200d04',
      '--color-border-subtle': 'rgba(249, 115, 22, 0.25)'
    }
  },
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    tagline: 'Motorsport Cyan & Cobalt',
    primaryColor: '#06b6d4',
    secondaryColor: '#3b82f6',
    bgColor: '#030a16',
    cardBg: '#09152a',
    textColor: '#f0f9ff',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    cssVars: {
      '--color-accent-primary': '#06b6d4',
      '--color-accent-secondary': '#3b82f6',
      '--color-bg-base': '#030a16',
      '--color-card-surface': '#09152a',
      '--color-border-subtle': 'rgba(6, 182, 212, 0.25)'
    }
  },
  {
    id: 'velocity-red',
    name: 'Velocity Red',
    tagline: 'Aggressive Crimson & Scarlet',
    primaryColor: '#ef4444',
    secondaryColor: '#f87171',
    bgColor: '#120303',
    cardBg: '#220808',
    textColor: '#fef2f2',
    glowColor: 'rgba(239, 68, 68, 0.25)',
    cssVars: {
      '--color-accent-primary': '#ef4444',
      '--color-accent-secondary': '#f87171',
      '--color-bg-base': '#120303',
      '--color-card-surface': '#220808',
      '--color-border-subtle': 'rgba(239, 68, 68, 0.25)'
    }
  }
];

const applyDOMTheme = (theme: ThemeOption) => {
  const root = document.documentElement;
  Object.entries(theme.cssVars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  root.setAttribute('data-theme', theme.id);
  localStorage.setItem('djs-helios-theme', theme.id);
};

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<string>('solar-yellow');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const savedThemeId = localStorage.getItem('djs-helios-theme');
    const matchedTheme = ThemeSwitcherPresets.find((t) => t.id === savedThemeId);
    if (matchedTheme) {
      applyDOMTheme(matchedTheme);
      setTimeout(() => {
        setActiveTheme(matchedTheme.id);
      }, 0);
    }
  }, []);

  const handleThemeSelect = (theme: ThemeOption) => {
    applyDOMTheme(theme);
    setActiveTheme(theme.id);
    setIsOpen(false);
  };

  const currentThemeObj =
    ThemeSwitcherPresets.find((t) => t.id === activeTheme) || ThemeSwitcherPresets[0];

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 shadow-2xl backdrop-blur-md transition-all active:scale-95 cursor-pointer group"
          style={{ borderColor: currentThemeObj.primaryColor }}
        >
          <Palette
            className="w-4 h-4 transition-transform group-hover:rotate-45"
            style={{ color: currentThemeObj.primaryColor }}
          />
          <span className="text-xs font-bold tracking-wide">Theme</span>
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: currentThemeObj.primaryColor }}
          />
          <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 bottom-14 w-80 rounded-2xl bg-slate-950/95 border border-slate-800 p-3 shadow-2xl backdrop-blur-xl space-y-2 z-50 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>DJS HELIOS PALETTES</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  {ThemeSwitcherPresets.length} Options
                </span>
              </div>

              <div className="space-y-1.5 pt-1">
                {ThemeSwitcherPresets.map((theme) => {
                  const isSelected = theme.id === activeTheme;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeSelect(theme)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-slate-900 border-amber-500/50 shadow-md'
                          : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-white">{theme.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <p className="text-[10px] text-slate-400">{theme.tagline}</p>
                      </div>

                      <div className="flex items-center space-x-1 pl-2 shrink-0">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/30 shadow-sm"
                          style={{ backgroundColor: theme.primaryColor }}
                          title="Primary Accent"
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/30 shadow-sm"
                          style={{ backgroundColor: theme.secondaryColor }}
                          title="Secondary Accent"
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/30 shadow-sm"
                          style={{ backgroundColor: theme.bgColor }}
                          title="Base Background"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}