import React from "react";
import { Sparkles } from "lucide-react";
import { portfolioData } from "../data";

export default function ExperienceSection() {
  return (
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
  );
}
