import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "../data";

export default function CompetenciesSection() {
  return (
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
  );
}
