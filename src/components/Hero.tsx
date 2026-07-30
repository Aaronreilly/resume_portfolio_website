import React, { useState, useEffect } from 'react';
import {
  Download,
  Mail,
  Send,
  Github,
  Linkedin,
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioConfig } from '../portfolioConfig';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const { personalInfo } = portfolioConfig;
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect for taglines
  useEffect(() => {
    const fullText = personalInfo.taglines[currentTaglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
      } else {
        setDisplayedText(
          isDeleting
            ? fullText.substring(0, displayedText.length - 1)
            : fullText.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTaglineIndex, personalInfo.taglines]);

  const handleDownloadResume = () => {
    // Fire confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#a855f7', '#ec4899', '#10b981'],
    });

    // Create a mock resume text download file
    const resumeContent = `=====================================================
${personalInfo.name} - ${personalInfo.title}
Contact: ${personalInfo.socials.email} | ${personalInfo.socials.phone}
LinkedIn: ${personalInfo.socials.linkedin} | GitHub: ${personalInfo.socials.github}
Location: ${personalInfo.socials.location}
=====================================================

CAREER OBJECTIVE:
${personalInfo.careerObjective}

TECHNICAL SKILLS:
- Languages: Python, Java, C/C++, JavaScript, TypeScript, SQL
- Frontend: React.js, Next.js, Tailwind CSS, HTML5, CSS3, Bootstrap
- Backend: FastAPI, Flask, Node.js, REST APIs
- Databases: PostgreSQL, MySQL
- Developer Tools: Git, GitHub, VS Code, Docker, Tableau, Figma
- Core Concepts: DBMS, OOP, DSA, Operating Systems, Computer Networks, Quantum Computing

EDUCATION:
Bachelor of Technology in Computer Science & Engineering
Karunya University of Technology (2024 - 2028) | CGPA: 7.44 / 10.0

FEATURED PROJECTS:
1. VernaCheck - AI Fake News Detection System (Python, FastAPI, PyTorch, React)
2. Smart Agriculture Intelligence Portal (IoT, React, Node.js, TensorFlow)
3. Blood Bank Management System (PostgreSQL, ACID, Express, React)
4. Quantum State & Machine Learning Simulator (Qiskit, Three.js, Python)

EXPERIENCE & INTERNSHIPS:
- Software Engineering Intern @ Apex Global Tech Labs (Summer 2025)
- Machine Learning Research Intern @ Cognitive AI Systems (Spring 2025)

CERTIFICATIONS:
- DataCamp (python-Pandas and Numpy)
- Mongodb Certifications
- Forage(delloite-Data Analytics Job Simulation)

=====================================================`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume_2026.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Summer Internships & Full-Time Roles 2026</span>
            </div>

            {/* Main Greeting & Animated Name */}
            <div>
              <h2 className={`text-lg font-medium font-mono ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                Hello, world! I am
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-1">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Dynamic Typing Subtitle */}
            <div className="h-12 flex items-center">
              <p className={`text-xl sm:text-2xl font-mono font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                I build{' '}
                <span className="text-indigo-500 border-b-2 border-indigo-500 pb-0.5">
                  {displayedText}
                </span>
                <span className="animate-pulse text-indigo-500 font-normal">|</span>
              </p>
            </div>

            {/* Tagline / Bio summary */}
            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {personalInfo.bio} Dedicated to merging algorithmic precision with modern front-end craftsmanship to build enterprise-ready web applications.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all hover:scale-[1.02] cursor-pointer ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm'
                }`}
              >
                <Briefcase className="w-4 h-4 text-indigo-500" />
                <span>Hire Me</span>
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm transition-colors cursor-pointer ${
                  darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-slate-800/40 flex items-center gap-3">
              <span className={`text-xs font-mono uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-lg border transition-all hover:scale-110 ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-indigo-600'
                  }`}
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-lg border transition-all hover:scale-110 ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-indigo-600'
                  }`}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-lg border transition-all hover:scale-110 ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-amber-400 hover:border-amber-500' : 'bg-slate-100 border-slate-200 text-amber-600'
                  }`}
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className={`p-2 rounded-lg border transition-all hover:scale-110 ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-indigo-600'
                  }`}
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Column - Interactive Glass Card & Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-xl animate-pulse" />

              {/* Glass Container */}
              <div
                className={`relative rounded-3xl p-6 border backdrop-blur-xl shadow-2xl transition-all ${
                  darkMode
                    ? 'bg-slate-950/80 border-slate-800/80 text-white'
                    : 'bg-white/90 border-slate-200/90 text-slate-900'
                }`}
              >
                {/* Image Placeholder Frame */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-indigo-500/20 shadow-inner group">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                  {/* Top Badge overlay */}
                  <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Developer</span>
                  </div>

                  {/* Bottom overlay info */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="font-mono text-indigo-400">CGPA: 7.44 / 10.0</span>
                      <span className="font-mono text-purple-400">ATS Score: {personalInfo.atsScore}%</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badges around Card */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-lg font-bold text-indigo-500">7+</div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Projects</div>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-lg font-bold text-purple-500">6</div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Certificates</div>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-lg font-bold text-emerald-500">100+</div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">LeetCode</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
