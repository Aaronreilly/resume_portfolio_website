import React, { useState } from 'react';
import {
  X,
  BookOpen,
  FolderTree,
  Terminal,
  Globe,
  Settings,
  Image as ImageIcon,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface DocDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const DocDrawer: React.FC<DocDrawerProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'structure' | 'setup' | 'deployment' | 'customization' | 'images'>('structure');
  const [copiedCode, setCopiedCode] = useState(false);

  const folderStructureText = `portfolio-website/
├── .env.example              # Environment variables template
├── index.html                # App HTML entry point
├── metadata.json             # AI Studio metadata & capabilities
├── package.json              # Project dependencies & scripts
├── vite.config.ts            # Vite build configuration
├── server.ts                 # Express Node.js backend server (optional)
└── src/
    ├── portfolioConfig.ts    # 🌟 SINGLE CENTRAL CONFIG FILE (Update everything here!)
    ├── types.ts              # TypeScript interface definitions
    ├── App.tsx               # Main application wrapper
    ├── main.tsx              # React DOM render entry
    ├── index.css             # Tailwind CSS global styles
    └── components/
        ├── Navbar.tsx        # Sticky glassmorphic navbar with ATS badge
        ├── Hero.tsx          # Hero intro with typing animation & download CTA
        ├── About.tsx         # Personal bio, objectives & career timeline
        ├── Skills.tsx        # Categorized skill progress bars
        ├── Education.tsx     # Academic timeline & coursework chips
        ├── Projects.tsx      # Project grid & case study triggers
        ├── ProjectModal.tsx  # Detailed case study drawer & live interactive demo
        ├── Certifications.tsx# Certificate gallery & verification modal
        ├── Internship.tsx   # Experience timeline & key outcomes
        ├── AcademicJourney.tsx# Specialized engineering domains breakdown
        ├── Achievements.tsx # Awards, hackathons & honors grid
        ├── ResumeSection.tsx# ATS Score indicator (96%) & text preview
        ├── Testimonials.tsx # Testimonials gallery & add modal
        ├── ContactSection.tsx # Contact form & location preview
        ├── Footer.tsx        # Animated wave footer & back to top
        ├── BackgroundCanvas.tsx # Canvas ambient particle visualizer
        ├── CustomCursor.tsx  # Smooth optional cursor follower ball
        └── DocDrawer.tsx     # In-app Documentation modal`;

  const setupCommands = `# 1. Clone your repository
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website

# 2. Install npm packages
npm install

# 3. Start local development server (runs at http://localhost:3000)
npm run dev

# 4. Build for production distribution
npm run build`;

  const ghPagesDeploy = `# Deploying to GitHub Pages (Static Hosting):

1. Install gh-pages helper package:
   npm install -D gh-pages

2. In package.json, add these scripts:
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }

3. In vite.config.ts, set the base path if using project subpath:
   base: '/portfolio-website/',

4. Run the deploy command:
   npm run deploy`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden ${
          darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold font-mono">Developer & Customization Guide</h2>
              <p className="text-xs text-slate-400">Complete setup, single-file config update, and deployment instructions</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              darkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 hover:bg-slate-200'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 p-3 border-b border-slate-800/40 bg-slate-900/40 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('structure')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-colors ${
              activeTab === 'structure' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>Folder Structure</span>
          </button>

          <button
            onClick={() => setActiveTab('customization')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-colors ${
              activeTab === 'customization' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Customization File</span>
          </button>

          <button
            onClick={() => setActiveTab('setup')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-colors ${
              activeTab === 'setup' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Setup Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('deployment')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-colors ${
              activeTab === 'deployment' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Deployment Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('images')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-colors ${
              activeTab === 'images' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Image Specs</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm font-sans">
          
          {activeTab === 'structure' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold font-mono text-indigo-400">Complete Codebase Architecture</h3>
              <p className="text-slate-400">
                All component views receive their content dynamically from <code>src/portfolioConfig.ts</code>. You can easily modify your entire portfolio without digging through component JSX files.
              </p>
              <pre className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                {folderStructureText}
              </pre>
            </div>
          )}

          {activeTab === 'customization' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold font-mono text-indigo-400">How to Update Portfolio Content</h3>
              <p className="text-slate-400">
                Open <code>/src/portfolioConfig.ts</code>. It exports a single TypeScript object named <b>portfolioConfig</b>.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="font-mono text-emerald-400 font-bold">1. Change Personal Info, Name, Bio, Social Links:</h4>
                  <pre className="text-xs font-mono text-slate-300 bg-slate-950 p-2.5 rounded-xl">
{`personalInfo: {
  name: "Your Full Name",
  title: "Full Stack Developer",
  avatarUrl: "https://your-domain.com/photo.jpg",
  socials: {
    github: "https://github.com/your-user",
    linkedin: "https://linkedin.com/in/your-user",
    email: "your.email@example.com"
  }
}`}
                  </pre>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="font-mono text-purple-400 font-bold">2. Add New Projects or Interactive Case Studies:</h4>
                  <p className="text-slate-400">Add a new object item to the <code>projects</code> array inside <code>portfolioConfig.ts</code> with problem statement, architecture steps, and metrics.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="font-mono text-amber-400 font-bold">3. Add New Certificates:</h4>
                  <p className="text-slate-400">Add a new object to <code>certificates</code> with issue date, credential ID, and verification URL.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'setup' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold font-mono text-indigo-400">Local Environment Setup</h3>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">Terminal Shell Commands:</span>
                  <button
                    onClick={() => copyToClipboard(setupCommands)}
                    className="flex items-center gap-1 text-xs font-mono text-indigo-400 hover:text-indigo-300"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-slate-200 overflow-x-auto">
                  {setupCommands}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'deployment' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold font-mono text-indigo-400">Deploying to Web Hosting Platforms</h3>
              
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="font-mono text-emerald-400 font-bold">Option A: GitHub Pages Deployment</h4>
                  <pre className="text-xs font-mono text-slate-300 bg-slate-950 p-2.5 rounded-xl overflow-x-auto">
                    {ghPagesDeploy}
                  </pre>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="font-mono text-indigo-400 font-bold">Option B: Vercel / Netlify Deployment</h4>
                  <p className="text-slate-400">
                    1. Connect your GitHub repository to Vercel or Netlify.<br />
                    2. Set Build Command: <code>npm run build</code><br />
                    3. Set Output Directory: <code>dist</code><br />
                    4. Deploy instantly with automatic SSL certificates!
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold font-mono text-indigo-400">Recommended Asset Aspect Ratios & Resolutions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-indigo-400">Profile / Avatar Photo</span>
                  <p className="text-xs text-slate-400">Square 1:1 Aspect Ratio (e.g. 600x600 px PNG/JPG)</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-purple-400">Project Thumbnails</span>
                  <p className="text-xs text-slate-400">16:9 Aspect Ratio (e.g. 1280x720 px or 800x450 px)</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-amber-400">Certificates Gallery</span>
                  <p className="text-xs text-slate-400">16:10 Aspect Ratio (e.g. 1000x625 px)</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
