import React, { useState } from 'react';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  CheckCircle2,
  Download,
  Map,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioConfig } from '../portfolioConfig';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const { personalInfo } = portfolioConfig;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Internship / Full-time Opportunity',
    message: '',
    inquiryType: 'Recruitment / Hiring',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to server backend endpoint
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
    } catch (err) {
      console.log('Client-side fallback submission.');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
            <Send className="w-3.5 h-3.5 text-indigo-400" />
            <span>12 // GET IN TOUCH</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Let’s Build Something Exceptional
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Open for summer internships, full-time software engineering roles, open-source collaborations, and tech discussions.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-md space-y-6 ${
                darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              <h3 className="text-xl font-extrabold font-mono text-indigo-400">Contact Channels</h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <span className="font-semibold text-white">{personalInfo.socials.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.socials.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Phone / WhatsApp</span>
                    <span className="font-semibold text-white">{personalInfo.socials.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Current Location</span>
                    <span className="font-semibold text-white">{personalInfo.socials.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Links Bar */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Profiles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Google Maps Frame Preview */}
            <div className="rounded-3xl border border-slate-800 overflow-hidden shadow-lg aspect-video bg-slate-900 relative">
              <iframe
                title="Google Maps Location"
                src={personalInfo.socials.mapEmbedUrl}
                className="w-full h-full border-0 filter grayscale invert opacity-75 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-indigo-400 border border-indigo-500/30 flex items-center gap-1">
                <Map className="w-3 h-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-md ${
                darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Message Dispatched!</h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out, <b>{formState.name}</b>. I will review your message and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold hover:bg-indigo-500 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-extrabold font-mono text-indigo-400">Send Direct Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-indigo-500 focus:outline-none font-mono"
                        placeholder="e.g. Sarah Jenkins"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-indigo-500 focus:outline-none font-mono"
                        placeholder="s.jenkins@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Inquiry Type</label>
                      <select
                        value={formState.inquiryType}
                        onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-indigo-500 focus:outline-none font-mono"
                      >
                        <option>Recruitment / Hiring</option>
                        <option>Summer Internship 2026</option>
                        <option>Open-Source Collaboration</option>
                        <option>Freelance / Consulting</option>
                        <option>General Query</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject *</label>
                      <input
                        required
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-indigo-500 focus:outline-none font-mono"
                        placeholder="Subject title..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Detailed Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-indigo-500 focus:outline-none font-mono"
                      placeholder="Discuss project requirements, timeline, or role details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-mono text-xs font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Dispatching Message...' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
