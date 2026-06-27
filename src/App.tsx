/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Briefcase, 
  Award, 
  BookOpen, 
  FileText, 
  Download, 
  Send, 
  Check, 
  CheckCircle2, 
  Sparkles, 
  ClipboardCheck, 
  MessageSquare,
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  Languages,
  User,
  ArrowRight
} from "lucide-react";
import { portfolioData } from "./data";
import ResumeModal from "./components/ResumeModal";
// @ts-ignore
import avatarImage from "./assets/images/professional_admin_avatar_1782571563538.jpg";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Handle copying email/phone with instant visual feedback
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  // Handle mock message submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B] selection:bg-slate-900 selection:text-white">
      {/* Header / Brand Rail */}
      <header className="h-20 border-b border-slate-200 bg-white sticky top-0 z-30 no-print">
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">KN</span>
            </div>
            <span className="font-display font-semibold tracking-tight text-lg text-slate-900">
              Khairatin Nadzirah
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Tersedia untuk Pekerjaan
            </span>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-5 py-2 bg-slate-900 text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Unduh CV Resmi
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 no-print">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Personal Identity Card */}
          <section className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28">
            <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative shrink-0">
                    <img
                      src={avatarImage}
                      alt="Khairatin Nadzirah"
                      className="w-20 h-20 rounded-lg object-cover border border-slate-200 shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-slate-900 text-white p-1 rounded-sm shadow-xs">
                      <Check className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                      {portfolioData.name}
                    </h1>
                    <p className="text-xs text-slate-400 font-medium font-mono uppercase tracking-wider mt-1">
                      ADMIN & OPERATIONS
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-light leading-tight mb-4 text-slate-900">
                  Administrative <br />
                  <span className="font-bold">Operations Specialist</span>
                </h2>
                
                <p className="text-slate-500 leading-relaxed text-sm mb-6">
                  {portfolioData.about}
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-3 min-w-0">
                      <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email</p>
                        <p className="text-xs font-mono text-slate-700 truncate">{portfolioData.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(portfolioData.email, "email")}
                      className="p-1 text-slate-400 hover:text-slate-800 rounded-md transition-colors cursor-pointer text-[10px] font-bold"
                    >
                      {copiedText === "email" ? "Copied" : "Copy"}
                    </button>
                  </div>

                  <a
                    href={portfolioData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">WhatsApp / Tel</p>
                        <p className="text-xs font-mono text-slate-700">{portfolioData.phone}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 hover:text-slate-900">Chat</span>
                  </a>

                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Linkedin className="w-4 h-4 text-slate-400 shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">LinkedIn</p>
                        <p className="text-xs text-slate-700">khairatin-nadzirah</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 hover:text-slate-900">Open</span>
                  </a>
                </div>
              </div>

              <div className="space-y-4 mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Komitmen Kinerja</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 bg-slate-50 rounded-sm border border-slate-100">
                    <span className="block font-bold text-slate-900">5+ Thn</span>
                    <span className="text-[9px] text-slate-400">Pengalaman</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-sm border border-slate-100">
                    <span className="block font-bold text-slate-900">100%</span>
                    <span className="text-[9px] text-slate-400">Akurasi</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-sm border border-slate-100">
                    <span className="block font-bold text-slate-900">30%</span>
                    <span className="text-[9px] text-slate-400">Efisiensi</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN: Experiences & Core Competencies */}
          <section className="lg:col-span-8 flex flex-col gap-12">
            
            {/* 1. TENTANG SAYA */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-6 flex items-center">
                Tentang Saya
                <span className="ml-4 h-px flex-1 bg-slate-200"></span>
              </h2>
              
              <div className="p-8 bg-white border border-slate-200 rounded-xl">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {portfolioData.about}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-100">
                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center">
                      <FileSpreadsheet className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Organisasi Terstruktur</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Mengelola dokumen dan arsip digital secara rapi, konsisten, dan terstruktur.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Akurasi & Detil</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Sangat detail dalam verifikasi laporan, rekap data, dan administrasi perkantoran.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Kepatuhan Tinggi</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Menjaga kerahasiaan data bisnis, korespondensi direksi, dan integritas operasional.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. PENGALAMAN PROFESSIONAL */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-8 flex items-center">
                Pengalaman Profesional
                <span className="ml-4 h-px flex-1 bg-slate-200"></span>
              </h2>

              <div className="space-y-8">
                {portfolioData.experiences.map((exp, idx) => (
                  <div key={exp.id} className="relative pl-8 border-l-2 border-slate-100 group">
                    {/* Node */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white ${idx === 0 ? "bg-slate-900" : "bg-slate-200"}`} />
                    
                    <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-xs font-mono font-bold text-slate-400 italic">{exp.period}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 font-medium">
                      {exp.company} — <span className="text-slate-400 font-normal">{exp.location}</span>
                    </p>

                    <ul className="space-y-2.5 mb-4">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements with subtle minimalism */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-3 p-4 bg-slate-50 border border-slate-100 rounded-lg">
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1.5 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Pencapaian Utama:
                        </p>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {exp.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-1.5">
                              <span className="text-slate-400">•</span>
                              <span className="italic">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. CORE COMPETENCIES */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-8 flex items-center">
                Kompetensi Utama
                <span className="ml-4 h-px flex-1 bg-slate-200"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolioData.skillCategories.map((cat, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-200/80 rounded-xl">
                    <p className="text-sm font-bold mb-4 text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                      {cat.category}
                    </p>
                    <div className="space-y-4">
                      {cat.skills.map((skill, si) => (
                        <div key={si}>
                          <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                            <span>{skill.name}</span>
                            <span className="text-slate-400">{skill.level}%</span>
                          </div>
                          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-slate-900 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. LANGUAGES & CREDENTIALS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bahasa */}
              <div className="p-6 bg-white border border-slate-200 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4">Kemampuan Bahasa</p>
                <div className="space-y-4">
                  {portfolioData.languages.map((lang, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <p className="text-sm font-medium text-slate-900">{lang.name}</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">{lang.proficiency}</p>
                      </div>
                      <div className="flex space-x-1">
                        <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-900" style={{ width: `${lang.percentage}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sertifikasi */}
              <div className="p-6 bg-white border border-slate-200 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4">Sertifikasi Resmi</p>
                <div className="space-y-3">
                  {portfolioData.certifications.map((cert, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <div className="p-1 bg-slate-100 text-slate-700 rounded-sm shrink-0 mt-0.5">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-800 leading-tight">
                          {cert.split(" - ")[0]}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
                          {cert.split(" - ")[1] || ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. CONTACT FORM */}
            <div id="contact-section" className="p-8 bg-white border border-slate-200 rounded-xl">
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-4 flex items-center">
                Hubungi Khairatin
                <span className="ml-4 h-px flex-1 bg-slate-200"></span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Gunakan formulir minimal di bawah ini untuk mengirimkan tawaran kerja, undangan koordinasi administrasi, atau permohonan asisten eksekutif.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-6 bg-slate-50 border border-slate-200 rounded-lg text-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-slate-900 mx-auto mb-3" />
                  <p className="text-sm font-bold text-slate-900">Pesan Terkirim</p>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Terima kasih atas pesan Anda. Khairatin Nadzirah akan meninjau rincian Anda dan segera merespons dalam 1x24 jam kerja.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white focus:outline-hidden rounded-lg px-4 py-2.5 text-xs transition-all"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Alamat Email Anda"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white focus:outline-hidden rounded-lg px-4 py-2.5 text-xs transition-all"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Subjek Pesan"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white focus:outline-hidden rounded-lg px-4 py-2.5 text-xs transition-all"
                  />

                  <textarea
                    required
                    rows={4}
                    placeholder="Isi pesan operasional / administratif Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white focus:outline-hidden rounded-lg px-4 py-2.5 text-xs transition-all resize-none"
                  />

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan</span>
                  </button>
                </form>
              )}
            </div>

          </section>

        </div>
      </main>

      {/* Footer Info */}
      <footer className="h-16 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center px-6 lg:px-12 justify-between text-center gap-2 py-4 no-print mt-16">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          Tersedia untuk relokasi atau remote administrasi di wilayah Indonesia & Singapura
        </p>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          Portfolio {new Date().getFullYear()} © Khairatin Nadzirah
        </p>
      </footer>

      {/* CV Printable Modal Trigger */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
