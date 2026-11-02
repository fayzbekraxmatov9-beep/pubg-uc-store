"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/mockData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0d101d] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            Ko&apos;p Beriladigan Savollar
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Savollaringiz bormi?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Mijozlarimiz tomonidan eng ko&apos;p so&apos;raladigan savollarga javoblar.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-[#0a0c14] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-white font-bold hover:text-amber-400 transition"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Telegram help card */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-amber-900/20 border border-slate-800">
          <h4 className="text-white font-bold text-base mb-1">Boshqa savolingiz bormi?</h4>
          <p className="text-xs text-slate-400 mb-4">
            Bizning 24/7 operatorlarimiz Telegramda istalgan savolingizga javob berishga tayyor.
          </p>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition"
          >
            <span>💬 Telegram Qo&apos;llab-quvvatlash</span>
          </a>
        </div>

      </div>
    </section>
  );
}
