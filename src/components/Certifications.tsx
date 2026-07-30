import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, X, Eye } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';
import { CertificateItem } from '../types';

interface CertificationsProps {
  darkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const { certificates } = portfolioConfig;
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [activeCertModal, setActiveCertModal] = useState<CertificateItem | null>(null);

  const groups = [
    'All',
    'Cloud',
    'AI',
    'Web Development',
    'Database',
    'Python',
    'Programming',
  ];

  const filteredCerts =
    selectedGroup === 'All'
      ? certificates
      : certificates.filter((c) => c.group === selectedGroup);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05 // CERTIFICATIONS & CREDENTIALS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Verified Industry Credentials
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Professional certifications from AWS, DeepLearning.AI, Meta, Google, and IBM with official verification credentials.
          </p>
        </div>

        {/* Group Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                selectedGroup === group
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Certificate Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl group ${
                darkMode
                  ? 'bg-slate-950/70 border-slate-800/80 hover:border-indigo-500/50 text-slate-200'
                  : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800 shadow-sm'
              }`}
            >
              <div>
                {/* Image Aspect ratio frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={cert.certificateImage}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{cert.group}</span>
                  </div>

                  {/* View Certificate Modal Trigger overlay */}
                  <button
                    onClick={() => setActiveCertModal(cert)}
                    className="absolute inset-0 flex items-center justify-center bg-indigo-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold">
                      <Eye className="w-4 h-4" />
                      <span>View Certificate</span>
                    </span>
                  </button>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-mono text-indigo-400 font-semibold uppercase">
                      {cert.organization} • {cert.issueDate}
                    </span>
                    <h3 className={`text-lg font-bold group-hover:text-indigo-400 transition-colors mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {cert.detailedReview}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skillsLearned.slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold tracking-wide border transition-all ${
                          darkMode
                            ? 'bg-indigo-950/40 border-indigo-500/25 text-indigo-300'
                            : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-800/40 mt-3 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">ID: {cert.credentialId}</span>
                <button
                  onClick={() => setActiveCertModal(cert)}
                  className="text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Details</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal Popup */}
      {activeCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl p-6 overflow-hidden space-y-5 ${
              darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                  VERIFIED CERTIFICATE CREDENTIAL
                </span>
                <h3 className="text-xl font-extrabold mt-1">{activeCertModal.title}</h3>
                <p className="text-xs text-slate-400">{activeCertModal.organization} • Issued {activeCertModal.issueDate}</p>
              </div>
              <button
                onClick={() => setActiveCertModal(null)}
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  darkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Preview Graphic */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src={activeCertModal.certificateImage}
                alt={activeCertModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Detailed Review & Skills */}
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1">Key Knowledge Gained:</h4>
                <p className="text-xs leading-relaxed text-slate-300">{activeCertModal.detailedReview}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">Skills Verified:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeCertModal.skillsLearned.map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Credential ID: {activeCertModal.credentialId}</span>
              <a
                href={activeCertModal.verificationLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold hover:bg-indigo-500"
              >
                <span>Verify Credential Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
