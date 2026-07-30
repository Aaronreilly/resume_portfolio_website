import React, { useState } from 'react';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Sparkles,
  Award,
  BarChart3,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioConfig } from '../portfolioConfig';

interface ResumeSectionProps {
  darkMode: boolean;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ darkMode }) => {
  const { personalInfo } = portfolioConfig;
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });

    const textContent = `${personalInfo.name.toUpperCase()} - ${personalInfo.title}
Email: ${personalInfo.socials.email} | Phone: ${personalInfo.socials.phone}
LinkedIn: ${personalInfo.socials.linkedin} | GitHub: ${personalInfo.socials.github}

SUMMARY:
${personalInfo.bio}

CAREER OBJECTIVE:
${personalInfo.careerObjective}

EDUCATION:
Bachelor of Technology in Computer Science & Engineering (2022 - 2026)
GPA: 3.92 / 4.0 | CGPA: 9.6 / 10.0

CORE COMPETENCIES:
Python, JavaScript, TypeScript, Java, C++, React, Node.js, FastAPI, PostgreSQL, MySQL, Redis, AWS, Git, Quantum Computing, DSA, DBMS.

ATS OPTIMIZATION SCORE: ${personalInfo.atsScore}%`;

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${personalInfo.name.replace(/\s+/g, '_')}_Official_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyResumeText = () => {
    const textContent = `${personalInfo.name} - ${personalInfo.title}
${personalInfo.socials.email} | ${personalInfo.socials.phone}
GitHub: ${personalInfo.socials.github}

Objective: ${personalInfo.careerObjective}
Education: B.Tech CS (GPA 3.92/4.0)`;
    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-3">
            <FileText className="w-3.5 h-3.5 text-emerald-500" />
            <span>09 // OFFICIAL RESUME & ATS REPORT</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            ATS Optimized Resume & Metrics
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Engineered for top tech company recruitment filters with 96% ATS Compatibility Rating.
          </p>
        </div>

        {/* Main Resume Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: ATS Breakdown & Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* ATS Score Meter Box */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-md relative overflow-hidden ${
                darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">ATS COMPATIBILITY SCORE</span>
                <Sparkles className="w-5 h-5 text-emerald-400 animate-spin" />
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-6xl font-extrabold font-mono text-emerald-400">
                  {personalInfo.atsScore}%
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Targeted for Google, Meta, Microsoft & Top Tech HR systems
                </span>
              </div>

              {/* Progress Gauges */}
              <div className="space-y-3.5 text-xs font-mono">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Keyword Match Rate:</span>
                    <span className="text-emerald-400 font-bold">{personalInfo.atsBreakdown.keywordMatch}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${personalInfo.atsBreakdown.keywordMatch}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Formatting Structure:</span>
                    <span className="text-indigo-400 font-bold">{personalInfo.atsBreakdown.formattingScore}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${personalInfo.atsBreakdown.formattingScore}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Relevance Index:</span>
                    <span className="text-purple-400 font-bold">{personalInfo.atsBreakdown.relevanceIndex}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${personalInfo.atsBreakdown.relevanceIndex}%` }} />
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-mono text-xs font-bold shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>

                <button
                  onClick={handleCopyResumeText}
                  className={`px-4 py-3 rounded-xl border font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Resume Document Paper Card */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative overflow-hidden space-y-6 font-sans ${
                darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              {/* Document Header */}
              <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-indigo-400 font-semibold">{personalInfo.title}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {personalInfo.socials.email} • {personalInfo.socials.phone} • {personalInfo.socials.location}
                  </p>
                </div>
                <button
                  onClick={() => setShowFullPreview(!showFullPreview)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showFullPreview ? 'Collapse View' : 'Expand Full Document'}</span>
                </button>
              </div>

              {/* Education Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase font-bold text-indigo-400 border-b border-slate-800/80 pb-1 mb-2">
                  Education
                </h4>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between font-bold">
                    <span>State University of Technology — B.Tech Computer Science</span>
                    <span>CGPA: 9.6 / 10.0</span>
                  </div>
                  <p className="text-slate-400">Relevant Coursework: Data Structures, Operating Systems, DBMS, Artificial Intelligence, Quantum Information Science.</p>
                </div>
              </div>

              {/* Experience Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase font-bold text-indigo-400 border-b border-slate-800/80 pb-1 mb-2">
                  Technical Experience
                </h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between font-bold">
                      <span>Software Engineering Intern — Apex Global Tech Labs</span>
                      <span className="text-slate-400">Summer 2025</span>
                    </div>
                    <p className="text-slate-400 mt-0.5">
                      • Optimized PostgreSQL database queries, reducing average execution latency by 42%.<br />
                      • Developed 4 React microservice dashboards used by 20,000+ daily active users.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase font-bold text-indigo-400 border-b border-slate-800/80 pb-1 mb-2">
                  Technical Skills
                </h4>
                <div className="text-xs space-y-1 text-slate-300">
                  <p><b className="text-slate-400 font-mono">Languages:</b> Python, JavaScript, TypeScript, Java, C/C++, SQL</p>
                  <p><b className="text-slate-400 font-mono">Frameworks:</b> React, Next.js, FastAPI, Node.js, Express, Tailwind CSS</p>
                  <p><b className="text-slate-400 font-mono">Databases & Cloud:</b> PostgreSQL, MySQL, Redis, AWS (EC2, S3), Git</p>
                </div>
              </div>

              {showFullPreview && (
                <div className="space-y-4 pt-2 border-t border-slate-800/80 text-xs animate-in fade-in duration-300">
                  <div>
                    <h4 className="text-xs font-mono uppercase font-bold text-indigo-400 border-b border-slate-800/80 pb-1 mb-2">
                      Key Featured Projects
                    </h4>
                    <p className="text-slate-300">
                      • <b>VernaCheck AI:</b> Transformer fake news detection system using DeBERTa embeddings and FastAPI.<br />
                      • <b>Blood Bank Management System:</b> 3NF PostgreSQL emergency donor locator matching donors under 30s.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
