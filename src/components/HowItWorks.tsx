"use client";

import React from "react";
import { UserCheck, Shield, Zap, Gift } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Paketni Tanlang",
      description: "O'zingizga kerakli miqdordagi UC to'plamini yoki maxsus aksiya paketini tanlang.",
      icon: Gift,
      color: "text-amber-400",
      border: "border-amber-500/20",
    },
    {
      step: "02",
      title: "Player ID Kiriting",
      description: "O'yin profilingizdagi 10 talik raqamli ID'ingizni kiriting va 'Tekshirish'ni bosing.",
      icon: UserCheck,
      color: "text-blue-400",
      border: "border-blue-500/20",
    },
    {
      step: "03",
      title: "To'lovni Amalga Oshiring",
      description: "Uzcard, Humo, Click yoki Payme orqali xavfsiz va komissiyasiz to'lov qiling.",
      icon: Shield,
      color: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      step: "04",
      title: "1 Daqiqada UC Qabul Qiling!",
      description: "O'yinga kiring va hisobingizga kelib tushgan UC-lar bilan yangi skin va qurollardan rohatlaning!",
      icon: Zap,
      color: "text-yellow-400",
      border: "border-yellow-500/20",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#0a0c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Oson va Ishonchli Jarayon
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Qanday qilib UC sotib olinadi?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hech qanday murakkabliklarsiz, faqat 4 ta oddiy qadam orqali hisobingizni to&apos;ldiring.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 bg-gradient-to-b from-[#121628] to-[#0b0e1a] border ${item.border} hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Step indicator tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#090b14] border border-slate-800 flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <span className="text-3xl font-black text-slate-700/80 font-mono">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 text-2xl font-bold">
              🛡️
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Parol talab qilinmaydi!</h4>
              <p className="text-xs text-slate-400">
                Akkauntingiz xavfsizligi 100% kafolatlangan. Biz faqat rasmiy ID orqali xizmat ko&apos;rsatamiz.
              </p>
            </div>
          </div>

          <a
            href="#packages"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black text-xs sm:text-sm font-bold rounded-xl transition shadow-md shadow-amber-500/20 shrink-0"
          >
            Hozir Xarid Qilish
          </a>
        </div>

      </div>
    </section>
  );
}
