"use client";

import React from "react";
import { Star, ShieldCheck, MessageSquare } from "lucide-react";
import { REVIEWS } from "@/data/mockData";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-[#0a0c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4 text-amber-500" />
            Haqiqiy Fikrlar
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Mijozlarimiz Nima Deyishadi?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            O&apos;zbekiston bo&apos;ylab minglab geymerlar har kuni bizning xizmatimizdan foydalanadilar.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl p-6 bg-gradient-to-b from-[#13172b] to-[#0a0c14] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white flex items-center gap-1">
                    {rev.name}
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">ID: {rev.playerId}</div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-amber-400 font-semibold">{rev.ucAmount}</div>
                  <div className="text-[10px] text-slate-500">{rev.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live notification ticker */}
        <div className="mt-12 inline-flex items-center justify-center w-full">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#121629] border border-slate-800 text-xs text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Hozirgina <strong>Akbar_UZ</strong> 660 UC xarid qildi (1 daqiqa oldin)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
