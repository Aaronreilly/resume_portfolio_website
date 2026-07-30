import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Heart } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface FooterProps {
  darkMode: boolean;
  onOpenDocs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenDocs }) => {
  const { personalInfo } = portfolioConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 overflow-hidden border-t border-slate-800/80">
      
      {/* Animated SVG Wave Effect */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none opacity-20 pointer-events-none">
        <svg
          className="relative block w-full h-12 text-indigo-500"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-[7px] bg-slate-950 flex items-center justify-center font-bold text-xs text-white">
                  AV
                </div>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {personalInfo.title}. Designed with modern React, Tailwind CSS, and optimized for deployment across GitHub Pages, Vercel, and Cloud Run.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-2 text-slate-400">
              <span className="text-white font-bold block mb-1">NAVIGATION</span>
              <button onClick={() => scrollToSection('hero')} className="block hover:text-indigo-400 cursor-pointer">00 // Home</button>
              <button onClick={() => scrollToSection('about')} className="block hover:text-indigo-400 cursor-pointer">01 // About</button>
              <button onClick={() => scrollToSection('skills')} className="block hover:text-indigo-400 cursor-pointer">02 // Skills</button>
              <button onClick={() => scrollToSection('education')} className="block hover:text-indigo-400 cursor-pointer">03 // Education</button>
              <button onClick={() => scrollToSection('projects')} className="block hover:text-indigo-400 cursor-pointer">04 // Projects</button>
            </div>
            <div className="space-y-2 text-slate-400">
              <span className="text-white font-bold block mb-1">MORE & DOCS</span>
              <button onClick={() => scrollToSection('certifications')} className="block hover:text-indigo-400 cursor-pointer">05 // Certs</button>
              <button onClick={() => scrollToSection('internships')} className="block hover:text-indigo-400 cursor-pointer">06 // Experience</button>
              <button onClick={() => scrollToSection('resume')} className="block hover:text-indigo-400 cursor-pointer">09 // Resume</button>
              <button onClick={onOpenDocs} className="block hover:text-indigo-400 text-indigo-400 font-bold cursor-pointer">📖 Guide & Setup</button>
            </div>
          </div>

          {/* Back To Top Button */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-indigo-500 transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-indigo-400" />
            </button>
          </div>

        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with precision & passion</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
