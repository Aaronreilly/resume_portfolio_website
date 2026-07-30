import React from 'react';
import { Cpu, Database, Globe, BarChart3, Brain, Code, CheckCircle2, FolderGit2, BookOpen, Layers } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface AcademicJourneyProps {
  darkMode: boolean;
}

export const AcademicJourney: React.FC<AcademicJourneyProps> = ({ darkMode }) => {
  const { technicalDomains, academicHighlights } = portfolioConfig;

  // Icon mapping helper
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
      case 'Cpu':
        return Brain;
      case 'BarChart3':
        return BarChart3;
      case 'Database':
        return Database;
      case 'Globe':
        return Globe;
      default:
        return Code;
    }
  };

  return (
    <section id="academic" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>07 // TECHNICAL DOMAINS & ACADEMICS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Specialized Engineering & Research Focus
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Deep expertise across Data Science, Machine Learning, Analytics, Full-Stack Web, and Relational Databases.
          </p>
        </div>

        {/* Technical Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {technicalDomains.map((domain, index) => {
            const IconComponent = getDomainIcon(domain.icon);
            return (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-md space-y-5 transition-all duration-300 hover:shadow-xl group ${
                  darkMode
                    ? 'bg-slate-950/70 border-slate-800/80 hover:border-indigo-500/50 text-slate-200'
                    : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {domain.domain}
                    </h3>
                    <span className="text-xs font-mono text-indigo-400 font-medium">Domain Architecture</span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {domain.summary}
                </p>

                {/* Key Projects */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Featured Projects:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {domain.keyProjects.map((proj, pIdx) => (
                      <span
                        key={pIdx}
                        className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"
                      >
                        <FolderGit2 className="w-3 h-3" />
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills badges */}
                <div className="pt-3 border-t border-slate-800/40">
                  <div className="flex flex-wrap gap-1.5">
                    {domain.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono ${
                          darkMode ? 'bg-slate-900 border border-slate-800 text-slate-300' : 'bg-slate-100 border border-slate-200 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Highlights Section */}
        {academicHighlights && academicHighlights.length > 0 && (
          <div className="space-y-6">
            <h3 className={`text-xl font-bold font-mono text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Academic Milestones & Coursework Highlights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {academicHighlights.map((ah, idx) => (
                <div
                  key={ah.id || idx}
                  className={`p-6 rounded-3xl border backdrop-blur-md space-y-4 ${
                    darkMode ? 'bg-slate-950/60 border-slate-800/80 text-slate-200' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                      {ah.semester}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">GPA: {ah.gpa}</span>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">Core Subjects & Modules:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {ah.subjects.map((sub, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">Research & Lab Focus:</h4>
                    <p className="text-xs text-indigo-400 font-medium">{ah.researchInterest}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};