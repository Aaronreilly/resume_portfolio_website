import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, Award, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface InternshipProps {
  darkMode: boolean;
}

export const Internship: React.FC<InternshipProps> = ({ darkMode }) => {
  const { internships } = portfolioConfig;

  return (
    <section id="internships" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>06 // INTERNSHIPS & WORK EXPERIENCE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Industry Experience & Impact
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Hands-on work building production software, microservices, and AI models in Agile engineering teams.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {internships.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-950/70 border-slate-800/80 hover:border-indigo-500/40 text-slate-200'
                  : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800 shadow-sm'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                    {item.company}
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-extrabold mt-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6 space-y-2">
                <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Key Responsibilities & Deliverables:
                </h4>
                <div className="space-y-2">
                  {item.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Outcomes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h5 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5 mb-2">
                    <Award className="w-4 h-4" />
                    Key Achievements
                  </h5>
                  <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {item.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>

                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h5 className="text-xs font-mono uppercase font-bold text-emerald-400 flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Learning Outcomes
                  </h5>
                  <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {item.learningOutcomes.map((lo, i) => (
                      <li key={i}>{lo}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-slate-800/40 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold tracking-wide border transition-all ${
                        darkMode
                          ? 'bg-indigo-950/40 border-indigo-500/25 text-indigo-300 hover:border-indigo-400'
                          : 'bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={item.certificateUrl}
                  className="text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  <span>Completion Proof</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
