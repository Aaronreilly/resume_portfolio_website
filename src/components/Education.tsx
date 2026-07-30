import React from 'react';
import { BookOpen, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const { education } = portfolioConfig;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>03 // ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Education & Academic Track
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Rigorous Computer Science curriculum emphasizing software engineering standards, database systems, and data science.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-950/70 border-slate-800/80 hover:border-indigo-500/40 text-slate-200'
                  : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800 shadow-sm'
              }`}
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-2">
                    {item.gpa}
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400 mt-1">
                    <span className="font-semibold text-indigo-400">{item.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {item.description}
              </p>

              {/* Highlights */}
              <div className="mb-6 space-y-2">
                <h4 className={`text-xs font-mono uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Academic Achievements:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Coursework Chips */}
              <div>
                <h4 className={`text-xs font-mono uppercase tracking-wider mb-2.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Relevant Coursework:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.relevantCoursework.map((course, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold tracking-wide border transition-all ${
                        darkMode
                          ? 'bg-indigo-950/40 border-indigo-500/25 text-indigo-300 hover:border-indigo-400'
                          : 'bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
