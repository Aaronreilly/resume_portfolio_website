import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  FileText,
  Menu,
  X,
  Code2,
  BookOpen,
  Award,
  Briefcase,
  User,
  FolderGit2,
  Send,
  Sparkles,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenDocs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenDocs }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        'hero',
        'about',
        'skills',
        'education',
        'projects',
        'certifications',
        'internships',
        'academic',
        'achievements',
        'resume',
        'testimonials',
        'contact',
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'certifications', label: 'Certs', icon: Award },
    { id: 'internships', label: 'Experience', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-xs font-mono tracking-wider ${darkMode ? 'bg-slate-950 text-indigo-400' : 'bg-white text-indigo-950'}`}>
              {portfolioConfig.personalInfo.name.split(' ').map(n => n[0]).join('').substring(0, 3)}
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-base tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {portfolioConfig.personalInfo.name}
            </span>
            <span className="text-xs text-indigo-500 font-mono font-medium tracking-wide">
              &lt;FullStack.AI /&gt;
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/10 dark:bg-slate-800/30 p-1.5 rounded-full border border-slate-200/40 dark:border-slate-800/60 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : darkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions (ATS Pill, Theme, Docs, Menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* ATS Badge */}
          <button
            onClick={() => scrollToSection('resume')}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono font-semibold transition-transform hover:scale-105 cursor-pointer ${
              darkMode
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400'
                : 'bg-emerald-50 border-emerald-300 text-emerald-700'
            }`}
            title="ATS Optimization Rating"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>ATS: {portfolioConfig.personalInfo.atsScore}%</span>
          </button>

          {/* Setup / Docs Guide Button */}
          <button
            onClick={onOpenDocs}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            title="View Developer Documentation & Setup Guide"
          >
            <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
            <span className="hidden md:inline">Docs & Config</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-indigo-600 hover:bg-slate-200'
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-2 rounded-lg border cursor-pointer ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-white'
                : 'bg-slate-100 border-slate-200 text-slate-900'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden border-b px-4 py-4 space-y-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200 ${
            darkMode ? 'bg-slate-950/95 border-slate-800 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
          }`}
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-indigo-600 text-white'
                      : darkMode
                      ? 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
