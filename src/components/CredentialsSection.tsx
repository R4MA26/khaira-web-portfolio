import React from "react";
import { Award } from "lucide-react";
import { portfolioData } from "../data";

export default function CredentialsSection() {
  return (
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
  );
}
