"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function CalculatorSection() {
  const [targetUc, setTargetUc] = useState<number>(660);

  // 1 UC approx ~ 165 UZS on average, with bulk discounts
  const calculatePrice = (uc: number) => {
    let rate = 175; // small amounts
    if (uc >= 6000) rate = 135;
    else if (uc >= 3000) rate = 145;
    else if (uc >= 1500) rate = 155;
    else if (uc >= 600) rate = 160;

    const raw = Math.round(uc * rate);
    return Math.ceil(raw / 1000) * 1000; // round to thousands
  };

  const estimatedPrice = calculatePrice(targetUc);
  const bonusUc = targetUc >= 6000 ? Math.floor(targetUc * 0.35) : targetUc >= 1500 ? Math.floor(targetUc * 0.2) : targetUc >= 600 ? 60 : 0;

  return (
    <section id="calculator" className="py-16 bg-[#0d101d] border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-blue-400" />
              Aqlli UC Kalkulyatori
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Qancha UC kerakligini o&apos;zingiz belgilang
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              O&apos;yin ichidagi istalgan qurol yoki skin uchun qancha mablag&apos; ketishini aniq hisoblang. Qancha ko&apos;p UC olsangiz, shuncha ko&apos;p chegirma va bonus olasiz!
            </p>

            <div className="p-4 rounded-2xl bg-[#0a0c14] border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Tezkor hisob-kitob va real vaqt dilleri narxi</span>
              </div>
              <p className="text-slate-400">
                Katta miqdordagi buyurtmalar uchun maxsus shaxsiy menejer va qo&apos;shimcha 5-10% chegirmalar mavjud.
              </p>
            </div>
          </div>

          {/* Right Interactive Slider Box */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-br from-[#15192c] to-[#0a0d18] border border-slate-800 p-6 sm:p-8 shadow-2xl">
              
              {/* Slider header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Kerakli UC Miqdori:</span>
                <span className="text-3xl font-black text-amber-400">
                  {targetUc.toLocaleString()} <span className="text-base font-bold text-white">UC</span>
                </span>
              </div>

              {/* Range slider */}
              <input
                type="range"
                min="60"
                max="18000"
                step="60"
                value={targetUc}
                onChange={(e) => setTargetUc(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
              />

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 mt-4 pt-2">
                {[60, 300, 660, 1800, 3850, 8100, 16200].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setTargetUc(amount)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      targetUc === amount
                        ? "bg-amber-500 text-black font-bold"
                        : "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {amount} UC
                  </button>
                ))}
              </div>

              {/* Calculation Result preview */}
              <div className="mt-8 p-5 rounded-2xl bg-[#090b14]/90 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Taxminiy Narx:</div>
                  <div className="text-3xl font-black text-emerald-400">
                    {estimatedPrice.toLocaleString("uz-UZ")} <span className="text-sm font-bold text-slate-300">so&apos;m</span>
                  </div>
                  {bonusUc > 0 && (
                    <div className="text-xs text-amber-400 font-bold flex items-center gap-1 mt-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      +{bonusUc} UC Bonus taqdim etiladi!
                    </div>
                  )}
                </div>

                <a
                  href="#packages"
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  Tanlash & Xarid Qilish
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
