import React, { useState } from 'react';
import { Code2, Terminal, Layers, Database, Wrench, Brain } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const { skills } = portfolioConfig;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
    Programming: Terminal,
    Frontend: Layers,
    Backend: Code2,
    Database: Database,
    Tools: Wrench,
    Concepts: Brain,
  };

  const categories = ['All', ...skills.map((s) => s.category)];

  const filteredCategories =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL SKILLS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Proficiencies & Stack Mastery
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Comprehensive technical arsenal across full stack engineering, database architectures, and computational algorithms.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 ring-2 ring-indigo-500/30'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-10">
          {filteredCategories.map((group) => {
            const Icon = categoryIcons[group.category] || Code2;
            return (
              <div key={group.category} className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-xl font-bold font-mono tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:translate-y-[-2px] group ${
                        darkMode
                          ? 'bg-slate-950/70 border-slate-800/80 hover:border-indigo-500/40 text-slate-200'
                          : 'bg-white/90 border-slate-200 hover:border-indigo-400 text-slate-800 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm tracking-tight group-hover:text-indigo-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className={`w-full h-2 rounded-full overflow-hidden mb-2.5 ${darkMode ? 'bg-slate-800/80' : 'bg-slate-200'}`}>
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out shadow-sm"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
