import React from "react";
import { portfolioData } from "../data";

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  return (
    <header className="h-20 border-b border-slate-200 bg-white sticky top-0 z-30 no-print">
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-xs">KN</span>
          </div>
          <span className="font-display font-semibold tracking-tight text-lg text-slate-900">
            {portfolioData.name}
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Tersedia untuk Pekerjaan
          </span>
          <button
            onClick={onOpenResume}
            className="px-5 py-2 bg-slate-900 text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Unduh CV Resmi
          </button>
        </div>
      </div>
    </header>
  );
}
