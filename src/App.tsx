/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import CompetenciesSection from "./components/CompetenciesSection";
import CredentialsSection from "./components/CredentialsSection";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  // Handle copying email/phone with instant visual feedback
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B] selection:bg-slate-900 selection:text-white">
      {/* Header / Brand Rail */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 no-print">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT COLUMN: Personal Identity Card */}
          <ProfileCard copiedText={copiedText} onCopy={handleCopy} />

          {/* RIGHT COLUMN: Experiences & Core Competencies */}
          <section className="lg:col-span-8 flex flex-col gap-12">
            <AboutSection />
            <ExperienceSection />
            <CompetenciesSection />
            <CredentialsSection />
          </section>

        </div>
      </main>

      {/* Footer Info */}
      <Footer />

      {/* CV Printable Modal Trigger */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
