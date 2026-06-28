import React from "react";
import { Check, Mail, Phone, Linkedin } from "lucide-react";
import { portfolioData } from "../data";
// @ts-ignore
import avatarImage from "../assets/images/professional_admin_avatar_1782571563538.jpg";

interface ProfileCardProps {
  copiedText: string;
  onCopy: (text: string, type: string) => void;
}

export default function ProfileCard({ copiedText, onCopy }: ProfileCardProps) {
  return (
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
                TEACHER & ADMIN SUPPORT
              </p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-4 text-slate-900">
            {portfolioData.title}
          </h2>

          <p className="text-slate-500 leading-relaxed text-sm mb-6 whitespace-pre-line">
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
                onClick={() => onCopy(portfolioData.email, "email")}
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
                  <p className="text-xs text-slate-700">khairatin-nazirah</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-400 hover:text-slate-900">Open</span>
            </a>
          </div>
        </div>

        <div className="space-y-4 mt-8 pt-6 border-t border-slate-100">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Kualifikasi Utama</p>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 bg-slate-50 rounded-sm border border-slate-100">
              <span className="block font-bold text-slate-900">3 Thn</span>
              <span className="text-[9px] text-slate-400">Pengalaman</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-sm border border-slate-100">
              <span className="block font-bold text-slate-900">S1 S.Pd.</span>
              <span className="text-[9px] text-slate-400">UNIMED</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-sm border border-slate-100">
              <span className="block font-bold text-slate-900">A1</span>
              <span className="text-[9px] text-slate-400">Bahasa Jerman</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
