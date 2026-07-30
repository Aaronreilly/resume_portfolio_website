import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';
import { ProjectItem } from '../types';

interface ProjectsProps {
  darkMode: boolean;
  onSelectProject: (p: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode, onSelectProject }) => {
  const { projects } = portfolioConfig;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Featured', 'AI / ML', 'Full Stack Web', 'Systems & DB', 'Data Science'];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return p.featured;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04 // FEATURED PROJECTS & CASE STUDIES</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Production Software & Systems
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Deep-dive client & academic projects with complete architecture breakdowns, challenges, metrics, and live interactive demos.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-3xl border overflow-hidden flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl ${
                darkMode
                  ? 'bg-slate-950/70 border-slate-800/80 hover:border-indigo-500/50 text-slate-200'
                  : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800 shadow-sm'
              }`}
            >
              <div>
                {/* Thumbnail Image Frame */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Category Pill Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold text-indigo-400 border border-indigo-500/30">
                    {project.category}
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-amber-500/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-amber-400 border border-amber-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Featured</span>
                    </div>
                  )}

                  {/* Quick Case Study Overlay Trigger */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="absolute inset-0 flex items-center justify-center bg-indigo-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>View Case Study & Demo</span>
                    </span>
                  </button>
                </div>

                {/* Card Info Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className={`text-xl font-extrabold group-hover:text-indigo-400 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-400 mt-0.5">{project.subtitle}</p>
                  </div>

                  <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold tracking-wide border transition-all ${
                          darkMode
                            ? 'bg-indigo-950/40 border-indigo-500/25 text-indigo-300 hover:border-indigo-400'
                            : 'bg-slate-100 border-slate-200/90 text-slate-800 hover:border-indigo-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-slate-400 bg-slate-900/40 border border-slate-800">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Action Links */}
              <div className="p-6 pt-0 border-t border-slate-800/40 mt-4 flex items-center gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-mono font-bold shadow-sm hover:shadow-indigo-500/25 transition-all cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                  aria-label="Source Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
