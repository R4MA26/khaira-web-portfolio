import React from "react";
import { FileSpreadsheet, Clock, ShieldCheck } from "lucide-react";
import { portfolioData } from "../data";

export default function AboutSection() {
  return (
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
  );
}
