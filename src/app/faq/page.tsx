import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import { Send, Phone, Clock, MessageSquare, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Yordam va Savol-Javoblar | PUBG UC Support",
  description: "PUBG Mobile UC bo'yicha ko'p beriladigan savollar va 24/7 qo'llab-quvvatlash xizmati.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c14]">
      <Header />
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            24/7 Qo&apos;llab-quvvatlash
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Qo&apos;llab-quvvatlash & Yordam Markazi
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Savollaringiz bo&apos;lsa yoki xarid davomida yordam kerak bo&apos;lsa, quyidagi ma&apos;lumotlar orqali darhol javob topishingiz mumkin.
          </p>
        </div>

        {/* Support contact channels */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-gradient-to-b from-[#131b34] to-[#0a0d18] border border-blue-500/30 hover:border-blue-500 transition group block"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Telegram Operator</h3>
              <p className="text-xs text-slate-400 mb-3">O&apos;rtacha javob vaqti: 2 daqiqa</p>
              <span className="text-xs font-bold text-blue-400 flex items-center gap-1">
                Yozish @pubg_uc_admin →
              </span>
            </a>

            <div className="p-6 rounded-2xl bg-[#0e1222] border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Ish Tartibi</h3>
              <p className="text-xs text-slate-400 mb-3">Haftaning 7 kuni, dam olish kunlarisiz</p>
              <span className="text-xs font-bold text-amber-400">
                24/7 Avtomatlashtirilgan Tizim
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e1222] border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Mablag&apos; Kafolati</h3>
              <p className="text-xs text-slate-400 mb-3">UC hisobingizga tushmasa</p>
              <span className="text-xs font-bold text-emerald-400">
                100% Pul Qaytarish Kafolati
              </span>
            </div>

          </div>
        </div>

        <FaqSection />
      </div>
      <Footer />
    </div>
  );
}
