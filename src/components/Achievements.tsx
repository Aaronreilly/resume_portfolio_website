import React from 'react';
import { Trophy, Star, Award, Cpu, Code2, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface AchievementsProps {
  darkMode: boolean;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  Trophy,
  Star,
  Cpu,
  BookOpen,
};

export const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const { achievements } = portfolioConfig;

  const getIcon = (iconName?: string, idx?: number) => {
    if (iconName && iconMap[iconName]) return iconMap[iconName];
    const fallbacks = [Trophy, Star, Award, Cpu, Code2, BookOpen];
    return fallbacks[(idx ?? 0) % fallbacks.length];
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>08 // ACHIEVEMENTS &amp; RECOGNITION</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Milestones &amp; Accomplishments
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Awards, certifications, competitive rankings, and academic recognition earned throughout the journey.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = getIcon(item.icon, idx);
            return (
              <div
                key={item.id}
                className={`p-6 rounded-3xl border backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl group ${
                  darkMode
                    ? 'bg-slate-950/70 border-slate-800/80 hover:border-amber-500/40 text-slate-200'
                    : 'bg-white border-slate-200 hover:border-amber-400 text-slate-800 shadow-sm'
                }`}
              >
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500" />

                {/* Icon + Badge row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-lg">{item.badge}</span>
                </div>

                {/* Title */}
                <h3 className={`text-base font-extrabold mb-1 group-hover:text-amber-400 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>

                {/* Issuer + Date */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-full border ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-indigo-400'
                      : 'bg-slate-50 border-slate-200 text-indigo-600'
                  }`}>
                    {item.category}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {item.issuer} · {item.date}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
