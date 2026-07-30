import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Certifications } from './components/Certifications';
import { Internship } from './components/Internship';
import { AcademicJourney } from './components/AcademicJourney';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DocDrawer } from './components/DocDrawer';
import { ProjectItem } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [docsOpen, setDocsOpen] = useState<boolean>(false);

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-500 selection:bg-indigo-500 selection:text-white ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Ambient Canvas Particles */}
      <BackgroundCanvas darkMode={darkMode} />

      {/* Custom Mouse Follower Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenDocs={() => setDocsOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10 space-y-12">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Projects darkMode={darkMode} onSelectProject={(p) => setSelectedProject(p)} />
        <Certifications darkMode={darkMode} />
        <Internship darkMode={darkMode} />
        <AcademicJourney darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <ResumeSection darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} onOpenDocs={() => setDocsOpen(true)} />

      {/* Detailed Case Study & Live Simulator Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />

      {/* In-app Developer & Customization Documentation Drawer */}
      <DocDrawer
        isOpen={docsOpen}
        onClose={() => setDocsOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
