import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  BarChart,
  Play,
  Cpu,
  RefreshCw,
  Search,
  Zap,
  ShieldCheck,
  Thermometer,
  Droplets,
  HeartPulse,
  DollarSign,
  ShoppingCart,
  CloudSun,
  Atom,
  Activity
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  const { caseStudy } = project;
  const [activeTab, setActiveTab] = useState<'case_study' | 'interactive_demo'>('case_study');

  // Interactive Demo State Simulators
  // 1. Fake News Scanner Demo
  const [fakeNewsInput, setFakeNewsInput] = useState(
    'BREAKING: Scientists discover revolutionary clean energy generator made entirely from ocean salt water.'
  );
  const [fakeNewsResult, setFakeNewsResult] = useState<{
    score: number;
    verdict: string;
    trustColor: string;
    flaggedPhrases: string[];
  } | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScanFakeNews = () => {
    setIsScanning(true);
    setTimeout(() => {
      const isFake = fakeNewsInput.toLowerCase().includes('revolutionary') || fakeNewsInput.toLowerCase().includes('secret');
      setFakeNewsResult({
        score: isFake ? 28 : 94,
        verdict: isFake ? 'High Misinformation Risk (Sensational Claims)' : 'Verified Credible News Source',
        trustColor: isFake ? 'text-rose-500 bg-rose-500/10 border-rose-500/30' : 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
        flaggedPhrases: isFake ? ['revolutionary clean energy generator', 'made entirely from ocean salt'] : [],
      });
      setIsScanning(false);
    }, 800);
  };

  // 2. Agri Moisture Simulator
  const [moistureLevel, setMoistureLevel] = useState(42);
  const [irrigationStatus, setIrrigationStatus] = useState(false);

  // 3. Blood Donor Match Simulator
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('O+');
  const [matchResults, setMatchResults] = useState<{ name: string; dist: string; phone: string }[] | null>(null);

  const handleFindDonors = () => {
    setMatchResults([
      { name: 'David Miller', dist: '1.2 km away', phone: '+1 (555) 019-2831' },
      { name: 'Sarah Jenkins', dist: '3.4 km away', phone: '+1 (555) 014-9922' },
      { name: 'Michael Chang', dist: '5.1 km away', phone: '+1 (555) 018-4411' },
    ]);
  };

  // 5. Health Sync AI Simulator State
  const [spo2Level, setSpo2Level] = useState(98);
  const [heartRate, setHeartRate] = useState(72);
  const [symptomInput, setSymptomInput] = useState('Mild fatigue, slight headache in the morning');
  const [healthAnalysis, setHealthAnalysis] = useState<{ riskTier: string; color: string; advice: string } | null>(null);

  const handleAnalyzeHealth = () => {
    setIsScanning(true);
    setTimeout(() => {
      let tier = 'Normal / Low Risk';
      let col = 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30';
      let adv = 'Vital signs are within optimal parameters. Hydrate well and maintain regular sleep schedule.';

      if (spo2Level < 94 || heartRate > 100) {
        tier = 'Moderate Anomaly Detected';
        col = 'text-amber-400 bg-amber-950/40 border-amber-500/30';
        adv = 'Slight elevation in heart rate or lowered SpO2. Consult your physician for a checkup.';
      }
      if (spo2Level < 90) {
        tier = 'Critical Oxygen Level Alert';
        col = 'text-rose-400 bg-rose-950/40 border-rose-500/30';
        adv = 'Oxygen saturation below threshold. Urgent medical attention advised.';
      }

      setHealthAnalysis({ riskTier: tier, color: col, advice: adv });
      setIsScanning(false);
    }, 700);
  };

  // 6. Tremor Hand Detection Simulator State
  const [tremorFrequency, setTremorFrequency] = useState(6.2); // Hz
  const [tremorAmplitude, setTremorAmplitude] = useState(3.5); // mm
  const [tremorResult, setTremorResult] = useState<{ severity: string; score: string; color: string } | null>(null);

  const handleAnalyzeTremor = () => {
    setIsScanning(true);
    setTimeout(() => {
      let sev = 'Minimal / Normal Motor Control';
      let c = 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30';

      if (tremorFrequency >= 4 && tremorFrequency <= 8 && tremorAmplitude > 4) {
        sev = 'Resting Tremor Pattern Detected (UPDRS Grade 2 - Moderate)';
        c = 'text-amber-400 bg-amber-950/40 border-amber-500/30';
      } else if (tremorAmplitude > 7) {
        sev = 'High Amplitude Tremor Spike (UPDRS Grade 3 - Severe)';
        c = 'text-rose-400 bg-rose-950/40 border-rose-500/30';
      }

      setTremorResult({
        severity: sev,
        score: `${tremorFrequency.toFixed(1)} Hz Peak | ${tremorAmplitude.toFixed(1)} mm displacement`,
        color: c
      });
      setIsScanning(false);
    }, 600);
  };

  // 7. Quantum Gate Simulator State
  const [qubitState, setQubitState] = useState({ theta: 0, phi: 0, alpha: '1.0', beta: '0.0' });

  const applyQuantumGate = (gate: 'H' | 'X' | 'Z') => {
    if (gate === 'H') {
      setQubitState({ theta: Math.PI / 2, phi: 0, alpha: '0.707 (|0⟩)', beta: '0.707 (|1⟩)' });
    } else if (gate === 'X') {
      setQubitState({ theta: Math.PI, phi: 0, alpha: '0.0 (|0⟩)', beta: '1.0 (|1⟩)' });
    } else if (gate === 'Z') {
      setQubitState({ theta: 0, phi: Math.PI, alpha: '1.0 (|0⟩)', beta: '-0.0 (|1⟩)' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden ${
          darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800/60">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
              {project.category} // CASE STUDY
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold">{project.title}</h2>
            <p className="text-xs text-slate-400">{project.subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('case_study')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition-colors ${
                activeTab === 'case_study'
                  ? 'bg-indigo-600 text-white'
                  : darkMode ? 'bg-slate-900 text-slate-400' : 'bg-slate-100 text-slate-600'
              }`}
            >
              Case Study
            </button>

            <button
              onClick={() => setActiveTab('interactive_demo')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition-colors ${
                activeTab === 'interactive_demo'
                  ? 'bg-emerald-600 text-white'
                  : darkMode ? 'bg-slate-900 text-emerald-400' : 'bg-slate-100 text-emerald-700'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Live Interactive Demo</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {activeTab === 'case_study' ? (
            <>
              {/* Banner & Metrics Row */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 rounded-2xl overflow-hidden border border-slate-800 shadow-md aspect-video">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-5 space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">Project Impact Metrics:</h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {caseStudy.metrics.map((m, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl border flex items-center justify-between ${
                          darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span className="text-xs font-medium text-slate-400">{m.label}</span>
                        <span className="text-sm font-extrabold font-mono text-indigo-400">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Problem Statement & Audience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className="text-sm font-bold font-mono text-rose-400 flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Problem Statement</span>
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">{caseStudy.problemStatement}</p>
                </div>

                <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className="text-sm font-bold font-mono text-indigo-400 flex items-center gap-2 mb-2">
                    <Layers className="w-4 h-4" />
                    <span>Target Audience</span>
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">{caseStudy.targetAudience}</p>
                </div>
              </div>

              {/* Solution Architecture Pipeline */}
              <div>
                <h4 className="text-base font-bold font-mono text-indigo-400 flex items-center gap-2 mb-3">
                  <Cpu className="w-5 h-5" />
                  <span>Solution Architecture & System Pipeline</span>
                </h4>
                <div className="space-y-2">
                  {caseStudy.solutionArchitecture.map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
                        darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full bg-indigo-600/20 text-indigo-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h4 className="text-base font-bold font-mono text-emerald-400 flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Key Features</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-medium ${
                        darkMode ? 'bg-slate-900/40 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenges & Solutions */}
              <div>
                <h4 className="text-base font-bold font-mono text-amber-400 flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5" />
                  <span>Engineering Challenges & Technical Fixes</span>
                </h4>
                <div className="space-y-3">
                  {caseStudy.technicalChallenges.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border space-y-2 ${
                        darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Challenge: {item.challenge}</span>
                      </div>
                      <div className="text-xs font-medium text-emerald-400 flex items-start gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>Solution: {item.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learnings & Future Scope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold font-mono text-purple-400 mb-2">Key Engineering Learnings:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-400">
                    {caseStudy.learnings.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold font-mono text-indigo-400 mb-2">Future Roadmap & Scope:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-400">
                    {caseStudy.futureScope.map((fs, i) => (
                      <li key={i}>{fs}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            /* Interactive Demo Tab */
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs flex items-center gap-2">
                <Play className="w-4 h-4 text-indigo-400" />
                <span>This is an interactive simulation playground embedded for evaluating <b>{project.title}</b> live in the browser.</span>
              </div>

              {/* Project Specific Interactive Widget */}
              {caseStudy.demoType === 'health_sync' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold text-cyan-400">Health Sync AI Diagnostic Simulator</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span>Oxygen Saturation (SpO2)</span>
                        <span className="font-bold text-cyan-400">{spo2Level}%</span>
                      </div>
                      <input
                        type="range"
                        min="80"
                        max="100"
                        value={spo2Level}
                        onChange={(e) => setSpo2Level(Number(e.target.value))}
                        className="w-full accent-cyan-500"
                      />
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span>Pulse Heart Rate</span>
                        <span className="font-bold text-blue-400">{heartRate} BPM</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="140"
                        value={heartRate}
                        onChange={(e) => setHeartRate(Number(e.target.value))}
                        className="w-full accent-blue-500"
                      />
                    </div>
                  </div>
                  <textarea
                    value={symptomInput}
                    onChange={(e) => setSymptomInput(e.target.value)}
                    rows={2}
                    className="w-full p-3 rounded-xl border border-slate-800 bg-slate-900 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    placeholder="Describe symptoms..."
                  />
                  <button
                    onClick={handleAnalyzeHealth}
                    disabled={isScanning}
                    className="px-5 py-2.5 rounded-xl bg-cyan-600 text-white font-mono text-xs font-bold hover:bg-cyan-500 flex items-center gap-2 cursor-pointer"
                  >
                    {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Activity className="w-4 h-4" />}
                    <span>{isScanning ? 'Running Diagnostic Models...' : 'Run AI Health Diagnostics'}</span>
                  </button>
                  {healthAnalysis && (
                    <div className={`p-4 rounded-2xl border space-y-1.5 ${healthAnalysis.color}`}>
                      <div className="font-mono font-bold text-sm flex items-center justify-between">
                        <span>Status: {healthAnalysis.riskTier}</span>
                      </div>
                      <p className="text-xs">{healthAnalysis.advice}</p>
                    </div>
                  )}
                </div>
              )}

              {caseStudy.demoType === 'tremor_detection' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold text-blue-400">OpenCV Tremor Waveform Simulator</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span>Tremor Frequency</span>
                        <span className="font-bold text-blue-400">{tremorFrequency} Hz</span>
                      </div>
                      <input
                        type="range"
                        min="1.0"
                        max="15.0"
                        step="0.1"
                        value={tremorFrequency}
                        onChange={(e) => setTremorFrequency(Number(e.target.value))}
                        className="w-full accent-blue-500"
                      />
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span>Displacement Amplitude</span>
                        <span className="font-bold text-cyan-400">{tremorAmplitude} mm</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="12.0"
                        step="0.1"
                        value={tremorAmplitude}
                        onChange={(e) => setTremorAmplitude(Number(e.target.value))}
                        className="w-full accent-cyan-500"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleAnalyzeTremor}
                    disabled={isScanning}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold hover:bg-blue-500 flex items-center gap-2 cursor-pointer"
                  >
                    {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Cpu className="w-4 h-4" />}
                    <span>{isScanning ? 'Processing Spatial Coordinates...' : 'Analyze Tremor Waveform'}</span>
                  </button>
                  {tremorResult && (
                    <div className={`p-4 rounded-2xl border space-y-1.5 ${tremorResult.color}`}>
                      <div className="font-mono font-bold text-xs">{tremorResult.severity}</div>
                      <div className="text-[11px] font-mono opacity-80">{tremorResult.score}</div>
                    </div>
                  )}
                </div>
              )}

              {caseStudy.demoType === 'fake_news' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold text-indigo-400">VernaCheck AI Detector Simulator</h3>
                  <textarea
                    value={fakeNewsInput}
                    onChange={(e) => setFakeNewsInput(e.target.value)}
                    rows={4}
                    className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-900 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
                    placeholder="Paste article headline or snippet to analyze..."
                  />
                  <button
                    onClick={handleScanFakeNews}
                    disabled={isScanning}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold hover:bg-indigo-500 flex items-center gap-2 cursor-pointer"
                  >
                    {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                    <span>{isScanning ? 'Analyzing Transformers...' : 'Run Misinformation Scan'}</span>
                  </button>

                  {fakeNewsResult && (
                    <div className={`p-4 rounded-2xl border space-y-2 ${fakeNewsResult.trustColor}`}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-sm">Truth Index Score: {fakeNewsResult.score}%</span>
                        <span className="text-xs font-semibold">{fakeNewsResult.verdict}</span>
                      </div>
                      {fakeNewsResult.flaggedPhrases.length > 0 && (
                        <div className="text-xs">
                          <span className="font-semibold">Highlighted Sensational Phrases:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {fakeNewsResult.flaggedPhrases.map((p, idx) => (
                              <span key={idx} className="bg-rose-950 text-rose-300 px-2 py-0.5 rounded text-[11px] font-mono">
                                "{p}"
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {caseStudy.demoType === 'agri_portal' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold text-emerald-400">Smart Agri IoT Telemetry Simulator</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Droplets className="w-4 h-4 text-sky-400" />
                          Soil Moisture Level
                        </span>
                        <span className="font-bold text-sky-400">{moistureLevel}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="90"
                        value={moistureLevel}
                        onChange={(e) => setMoistureLevel(Number(e.target.value))}
                        className="w-full accent-sky-500"
                      />
                      <p className="text-[11px] text-slate-400">
                        {moistureLevel < 35 ? '⚠️ Soil Dry - Automated Irrigation Needed' : '✅ Moisture Optimal'}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                      <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                        <Thermometer className="w-4 h-4 text-emerald-400" />
                        Irrigation Valve Status
                      </span>
                      <button
                        onClick={() => setIrrigationStatus(!irrigationStatus)}
                        className={`w-full py-2 rounded-xl text-xs font-mono font-bold transition-colors ${
                          irrigationStatus ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        {irrigationStatus ? 'VALVE OPEN (Pumping Water...)' : 'VALVE CLOSED'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {caseStudy.demoType === 'blood_bank' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold text-rose-400">Emergency Blood Donor Matcher</h3>
                  <div className="flex items-center gap-3">
                    <select
                      value={selectedBloodGroup}
                      onChange={(e) => setSelectedBloodGroup(e.target.value)}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-white"
                    >
                      {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
                        <option key={bg} value={bg}>
                          Group {bg}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={handleFindDonors}
                      className="px-4 py-2.5 rounded-xl bg-rose-600 text-white font-mono text-xs font-bold hover:bg-rose-500"
                    >
                      Locate Donors
                    </button>
                  </div>

                  {matchResults && (
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        Matched {matchResults.length} Eligible Donors within 10km:
                      </span>
                      {matchResults.map((d, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                          <div>
                            <span className="font-bold text-white">{d.name}</span>
                            <span className="text-slate-400 text-[11px] block">{d.dist}</span>
                          </div>
                          <span className="font-mono text-indigo-400">{d.phone}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {caseStudy.demoType === 'quantum_sim' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold text-purple-400">Interactive Qubit Gate Simulator</h3>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <div className="text-xs font-mono text-slate-300">
                      Current Qubit State: <span className="text-indigo-400">|ψ⟩ = {qubitState.alpha} + {qubitState.beta}</span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => applyQuantumGate('H')}
                        className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-mono hover:bg-indigo-500"
                      >
                        Hadamard (H Gate)
                      </button>
                      <button
                        onClick={() => applyQuantumGate('X')}
                        className="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-mono hover:bg-purple-500"
                      >
                        Pauli-X (NOT Gate)
                      </button>
                      <button
                        onClick={() => applyQuantumGate('Z')}
                        className="px-3 py-1.5 rounded-lg bg-pink-600 text-white text-xs font-mono hover:bg-pink-500"
                      >
                        Pauli-Z (Phase Gate)
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Default Simulator fallback for other apps */}
              {!['fake_news', 'agri_portal', 'blood_bank', 'quantum_sim'].includes(caseStudy.demoType || '') && (
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
                  <Zap className="w-8 h-8 text-amber-400 mx-auto animate-bounce" />
                  <h4 className="text-sm font-bold text-white">Live Simulator Active</h4>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Interactive sandbox connected to mock REST API endpoints for {project.title}. All database queries execute in-memory.
                  </p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-mono hover:bg-indigo-500"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository Source Code</span>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
