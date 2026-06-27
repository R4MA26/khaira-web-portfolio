/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Award, BookOpen, Briefcase, FileText } from "lucide-react";
import { portfolioData } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      {/* Styles injected specifically for printing this CV */}
      <style>{`
        @media print {
          /* Hide all screen elements */
          body * {
            visibility: hidden !important;
          }
          /* Show only the CV container and its children */
          #printable-cv, #printable-cv * {
            visibility: visible !important;
          }
          #printable-cv {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 1.5cm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: black !important;
          }
          /* Prevent page breaks inside entries */
          .print-avoid-break {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      `}</style>

      {/* Modal Backdrop Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-transparent"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-4xl bg-slate-50 sm:rounded-2xl shadow-2xl flex flex-col h-screen sm:h-[90vh] overflow-hidden no-print z-10 border border-slate-200"
      >
        {/* Modal Header Controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-900 text-lg">Curriculum Vitae</h3>
              <p className="text-xs text-slate-500 font-sans">Preview & Cetak Resume Resmi</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100/50 flex justify-center">
          <div
            id="printable-cv"
            className="w-full max-w-[210mm] bg-white shadow-md border border-slate-200 p-6 sm:p-12 text-slate-800 font-sans text-sm leading-relaxed"
            style={{ minHeight: "297mm" }} // Standard A4 dimension guidance
          >
            {/* CV Title Header */}
            <div className="border-b-2 border-slate-900 pb-6 mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                    {portfolioData.name}
                  </h1>
                  <p className="text-slate-600 font-medium text-base mt-1.5 font-display tracking-wide uppercase">
                    {portfolioData.title}
                  </p>
                </div>

                {/* Direct Contacts Info */}
                <div className="flex flex-col gap-1.5 text-xs text-slate-600 md:text-right font-mono">
                  <div className="flex items-center gap-2 md:justify-end">
                    <span>{portfolioData.email}</span>
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <span>{portfolioData.phone}</span>
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <span>{portfolioData.location}</span>
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <span className="underline">linkedin.com/in/khairatin-nadzirah</span>
                    <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Executive Summary */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-2.5 font-display flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-700" /> Profil Profesional
              </h2>
              <p className="text-slate-700 leading-relaxed text-[13px]">
                {portfolioData.about}
              </p>
            </div>

            {/* Grid Layout for Two-Column CV Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column (2/3 width) - Work Experience */}
              <div className="md:col-span-2 flex flex-col gap-6">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-4 font-display flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-slate-700" /> Pengalaman Kerja
                  </h2>

                  <div className="space-y-5">
                    {portfolioData.experiences.map((exp) => (
                      <div key={exp.id} className="print-avoid-break">
                        <div className="flex justify-between items-baseline flex-wrap gap-1">
                          <h3 className="font-bold text-slate-900 text-sm">
                            {exp.role}
                          </h3>
                          <span className="text-[11px] font-mono font-medium text-slate-500">
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline text-xs text-slate-600 mb-2 font-medium">
                          <span>{exp.company}</span>
                          <span>{exp.location}</span>
                        </div>

                        {/* Responsibilities list */}
                        <ul className="list-disc pl-4 space-y-1 text-slate-700 text-[12px] mb-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>

                        {/* Achievements sub-list */}
                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="pl-4 mt-2 border-l-2 border-emerald-500 py-0.5">
                            <span className="block text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                              Pencapaian Utama:
                            </span>
                            <ul className="list-disc pl-4 space-y-0.5 text-slate-700 text-[12px]">
                              {exp.achievements.map((ach, idx) => (
                                <li key={idx} className="italic text-slate-600">
                                  {ach}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (1/3 width) - Skills, Languages, Education */}
              <div className="flex flex-col gap-6">
                {/* Keahlian (Skills) Summary */}
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3 font-display flex items-center gap-2">
                    <Award className="w-4 h-4 text-slate-700" /> Keahlian Utama
                  </h2>
                  <div className="space-y-3">
                    {portfolioData.skillCategories.map((cat, i) => (
                      <div key={i} className="print-avoid-break">
                        <h4 className="text-xs font-bold text-slate-900 mb-1.5 font-display tracking-wide uppercase">
                          {cat.category}
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {cat.skills.map((skill, si) => (
                            <span
                              key={si}
                              className="px-2 py-0.5 bg-slate-100 text-slate-800 text-[11px] rounded-sm font-medium border border-slate-200"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kemampuan Bahasa */}
                <div className="print-avoid-break">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3 font-display flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-700" /> Bahasa
                  </h2>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {portfolioData.languages.map((lang, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span className="font-semibold text-slate-900">{lang.name}</span>
                        <span className="text-slate-600 italic">{lang.proficiency}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Riwayat Pendidikan */}
                <div className="print-avoid-break">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3 font-display flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-700" /> Pendidikan
                  </h2>
                  {portfolioData.education.map((edu, idx) => (
                    <div key={idx} className="text-xs">
                      <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-slate-700 font-medium">{edu.institution}</p>
                      <p className="text-slate-500 font-mono text-[10px] my-0.5">{edu.period} | IPK: {edu.gpa}</p>
                      <p className="text-slate-600 text-[11px] mt-1">{edu.details}</p>
                    </div>
                  ))}
                </div>

                {/* Sertifikasi Resmi */}
                {portfolioData.certifications && (
                  <div className="print-avoid-break">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3 font-display flex items-center gap-2">
                      <Award className="w-4 h-4 text-slate-700" /> Sertifikasi
                    </h2>
                    <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-700">
                      {portfolioData.certifications.map((cert, idx) => (
                        <li key={idx}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Sign-off (Professional touch) */}
            <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400 italic">
              Dokumen ini dihasilkan secara digital dari Portfolio Online Khairatin Nadzirah.
            </div>
          </div>
        </div>

        {/* Modal Footer (Screen-only, helper warning) */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 text-center text-xs text-slate-500 flex justify-between items-center flex-wrap gap-2 sticky bottom-0">
          <span>💡 <strong>Tips:</strong> Klik "Cetak / PDF" lalu pilih opsi <strong>"Save as PDF"</strong> pada tujuan pencetak untuk menyimpan CV secara lokal.</span>
          <span className="font-mono text-[11px]">S.AB / Admin & Operations</span>
        </div>
      </motion.div>
    </div>
  );
}
