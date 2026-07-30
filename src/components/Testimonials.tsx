import React, { useState } from 'react';
import { MessageSquare, Star, Plus, User, CheckCircle2, X } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';
import { TestimonialItem } from '../types';

interface TestimonialsProps {
  darkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const [items, setItems] = useState<TestimonialItem[]>(portfolioConfig.testimonials);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newOrg, setNewOrg] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newContent) return;

    const newItem: TestimonialItem = {
      id: `test-${Date.now()}`,
      name: newName,
      role: newRole || 'Software Engineer',
      companyOrCollege: newOrg || 'Tech Partner',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      content: newContent,
      rating: newRating,
      date: 'Just Now',
    };

    setItems([newItem, ...items]);
    setShowAddModal(false);
    setNewName('');
    setNewRole('');
    setNewOrg('');
    setNewContent('');
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>11 // ENDORSEMENTS & REVIEWS</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              What Mentors & Peers Say
            </h2>
            <p className={`mt-2 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Endorsements from professors, engineering managers, and hackathon teammates.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold shadow-lg hover:bg-indigo-500 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Testimonial</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div
              key={t.id}
              className={`p-6 rounded-3xl border backdrop-blur-md flex flex-col justify-between space-y-4 ${
                darkMode ? 'bg-slate-950/70 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
              }`}
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm italic leading-relaxed text-slate-300">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/40 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-indigo-500/30"
                />
                <div>
                  <h4 className={`text-sm font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {t.name}
                  </h4>
                  <span className="text-[11px] font-mono text-indigo-400 block">
                    {t.role} • {t.companyOrCollege}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Add Testimonial Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <form
            onSubmit={handleAddTestimonial}
            className={`w-full max-w-lg rounded-3xl border shadow-2xl p-6 space-y-4 ${
              darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold font-mono text-indigo-400">Add Recommendations & Endorsement</h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-mono text-slate-400 mb-1">Full Name *</label>
                <input
                  required
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono"
                  placeholder="e.g. Sarah Connor"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-mono text-slate-400 mb-1">Role / Designation</label>
                  <input
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono"
                    placeholder="e.g. Tech Lead"
                  />
                </div>
                <div>
                  <label className="block font-mono text-slate-400 mb-1">Company / University</label>
                  <input
                    type="text"
                    value={newOrg}
                    onChange={(e) => setNewOrg(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono"
                    placeholder="e.g. Google"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-slate-400 mb-1">Endorsement / Recommendation *</label>
                <textarea
                  required
                  rows={4}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono"
                  placeholder="Share feedback on technical skills, collaboration, and code quality..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold hover:bg-indigo-500 cursor-pointer"
            >
              Post Endorsement
            </button>
          </form>
        </div>
      )}
    </section>
  );
};
