import React from "react";
import { portfolioData } from "../data";

export default function Footer() {
  return (
    <footer className="h-16 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center px-6 lg:px-12 justify-between text-center gap-2 py-4 no-print mt-16">
      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
        Tersedia untuk bidang administrasi, pendidikan, customer service, & data entry
      </p>
      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
        Portfolio {new Date().getFullYear()} © {portfolioData.name}
      </p>
    </footer>
  );
}
