"use client";

import React from "react";
import { ShieldCheck, Zap, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-yellow-600/10 to-transparent blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              Yangi Mavsum Aksiya: Barcha paketlarga +25% gacha bonus!
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              PUBG Mobile UC <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                Tezkor va Arzon Narxlarda
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              O&apos;yindagi hisobingizga to&apos;g&apos;ridan-to&apos;g&apos;ri <strong>1 daqiqa ichida</strong> ID orqali UC yetkazib beramiz. Parol talab qilinmaydi, 100% kafolatlangan va xavfsiz xizmat.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#121626]/80 border border-slate-800/80 px-3 py-2.5 rounded-xl">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>30-60 soniyada yetkazish</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#121626]/80 border border-slate-800/80 px-3 py-2.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Parol talab qilinmaydi</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#121626]/80 border border-slate-800/80 px-3 py-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Click, Payme, Uzum</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#packages"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 transition-all shadow-xl shadow-amber-500/20 text-center flex items-center justify-center gap-2 group"
              >
                Paketni Tanlash & Xarid Qilish
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#calculator"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/60 transition-all text-center flex items-center justify-center gap-2"
              >
                Kalkulyatorda hisoblash
              </a>
            </div>

            {/* Trust badge */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0a0c14] bg-amber-600 flex items-center justify-center text-white font-bold text-[10px]">A</div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0a0c14] bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">J</div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0a0c14] bg-emerald-600 flex items-center justify-center text-white font-bold text-[10px]">M</div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0a0c14] bg-purple-600 flex items-center justify-center text-white font-bold text-[10px]">S</div>
              </div>
              <p>
                <strong className="text-amber-400">18,500+</strong> dan ortiq muvaffaqiyatli yetkazilgan buyurtmalar
              </p>
            </div>
          </div>

          {/* Right Visual / Hero Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing back aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 to-yellow-500/20 rounded-3xl blur-2xl transform rotate-2"></div>

              {/* Foreground card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#161b30] to-[#0d101d] border border-amber-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                
                {/* Header of card */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl shadow-inner">
                      🪙
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">VIP Royallik Paketi</h3>
                      <p className="text-xs text-amber-400 flex items-center gap-1 font-medium">
                        <TrendingUp className="w-3.5 h-3.5" /> Eng mashhur tanlov
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full border border-amber-500/30">
                    AKSIYA
                  </span>
                </div>

                {/* Amount display */}
                <div className="py-6 text-center">
                  <div className="text-5xl font-black text-white tracking-tight flex items-center justify-center gap-2">
                    <span>600</span>
                    <span className="text-amber-400">+ 60</span>
                    <span className="text-2xl font-bold text-amber-500">UC</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Elite Royale Pass olish uchun yetarli</p>

                  <div className="mt-5 inline-block bg-[#0b0e1a] px-4 py-2 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 line-through mr-2">120,000 so&apos;m</span>
                    <span className="text-xl font-extrabold text-emerald-400">104,000 so&apos;m</span>
                  </div>
                </div>

                {/* Interactive perks checklist */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Yetkazish vaqti:</span>
                    <span className="font-semibold text-emerald-400">~ 45 soniya</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Kerakli ma&apos;lumot:</span>
                    <span className="font-semibold text-white">Faqat Player ID</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Kafolat:</span>
                    <span className="font-semibold text-amber-400">100% rasmiy diller</span>
                  </div>
                </div>

                {/* Direct action in hero card */}
                <div className="mt-6">
                  <a
                    href="#packages"
                    className="w-full block py-3 text-center text-sm font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 rounded-xl hover:brightness-110 transition shadow-lg shadow-amber-500/20"
                  >
                    Shu Paketni Olish
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
