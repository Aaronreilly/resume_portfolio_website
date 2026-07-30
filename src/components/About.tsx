import React from 'react';
import { User, Target, Zap, Code2 } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { personalInfo } = portfolioConfig;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Who I Am
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {personalInfo.bio}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Career Objective */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-md ${
              darkMode
                ? 'bg-slate-950/70 border-slate-800/80 text-slate-200'
                : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Career Objective
              </h3>
            </div>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Right: Technical Interests */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-md ${
              darkMode
                ? 'bg-slate-950/70 border-slate-800/80 text-slate-200'
                : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Technical Interests
              </h3>
            </div>
            <ul className="space-y-2">
              {personalInfo.technicalInterests.map((interest, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Code2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};