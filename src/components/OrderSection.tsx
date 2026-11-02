"use client";

import React, { useState } from "react";
import { Check, Flame, ShieldAlert, Sparkles, CreditCard, User } from "lucide-react";
import { UC_PACKAGES, UcPackage, PAYMENT_METHODS, PaymentMethod } from "@/data/mockData";
import confetti from "canvas-confetti";

export default function OrderSection() {
  const [selectedPackage, setSelectedPackage] = useState<UcPackage>(UC_PACKAGES[2]); // default 600+60
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(PAYMENT_METHODS[0]);
  const [playerId, setPlayerId] = useState("");
  const [playerNickname, setPlayerNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleVerifyId = () => {
    if (!playerId || playerId.trim().length < 7) {
      setErrorMessage("Iltimos, haqiqiy PUBG ID raqamini kiriting (kamida 7-10 raqam)!");
      return;
    }
    setErrorMessage("");
    setIsVerifying(true);
    // Simulate API lookup
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
      setPlayerNickname("Player_" + playerId.slice(-4));
    }, 900);
  };

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerId || playerId.trim().length < 7) {
      setErrorMessage("O'yinchi ID raqamini kiritish shart!");
      return;
    }
    if (!phone || phone.trim().length < 9) {
      setErrorMessage("To'lov cheki va bildirishnoma uchun telefon raqamingizni kiriting!");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      // Send order to API (which forwards to Telegram Admin)
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playerId,
          playerNickname,
          packageInfo: selectedPackage,
          paymentMethod: selectedPayment,
          phone,
        }),
      });
    } catch (err) {
      console.warn("Order notification error:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // ignore
      }
    }, 1200);
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#0a0c14] relative">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-amber-500" />
            Eng Foydali Tariflar
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            PUBG Mobile UC Paketlari
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            O&apos;zingizga ma&apos;qul bo&apos;lgan UC to&apos;plamini tanlang, ID raqamingizni kiriting va 1 daqiqada hisobingizni to&apos;ldiring.
          </p>
        </div>

        {/* Main Grid: Packages on Left, Checkout Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Package Selector (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>1. UC Paketini Tanlang</span>
              <span className="text-xs font-normal text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded">
                Bonuslar avtomatik qo&apos;shiladi
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {UC_PACKAGES.map((pkg) => {
                const isSelected = selectedPackage.id === pkg.id;
                const totalUc = pkg.uc + pkg.bonus;

                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`cursor-pointer relative rounded-2xl p-5 border transition-all duration-200 ${
                      isSelected
                        ? "bg-gradient-to-b from-[#1c223a] to-[#121626] border-amber-500 shadow-xl shadow-amber-500/20 scale-[1.02]"
                        : "bg-[#0f1322]/80 hover:bg-[#14192d] border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    {/* Badge */}
                    {pkg.badge && (
                      <div className="absolute -top-2.5 right-4">
                        <span className="px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-500 to-yellow-400 text-black rounded-full shadow-sm">
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#090b14] border border-amber-500/20 flex items-center justify-center text-2xl shrink-0">
                          {pkg.image}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-2xl font-black text-white">{pkg.uc}</span>
                            {pkg.bonus > 0 && (
                              <span className="text-xs font-bold text-amber-400 bg-amber-500/20 px-1.5 py-0.5 rounded">
                                +{pkg.bonus}
                              </span>
                            )}
                            <span className="text-xs font-bold text-amber-500">UC</span>
                          </div>
                          <p className="text-xs text-slate-400">
                            Jami: <strong className="text-slate-200">{totalUc} UC</strong>
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        {pkg.oldPriceUzs && (
                          <div className="text-[11px] text-slate-500 line-through">
                            {pkg.oldPriceUzs.toLocaleString("uz-UZ")} so&apos;m
                          </div>
                        )}
                        <div className="text-base font-extrabold text-emerald-400">
                          {pkg.priceUzs.toLocaleString("uz-UZ")} so&apos;m
                        </div>
                      </div>
                    </div>

                    {/* Radio checkmark */}
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400">
                        {pkg.popular ? "⭐ Eng ko'p tanlangan" : "Tezkor tushish"}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                          isSelected
                            ? "bg-amber-500 border-amber-400 text-black font-bold"
                            : "border-slate-600 bg-transparent"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Checkout & Verification Box (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl bg-gradient-to-b from-[#13172b] to-[#0d101d] border border-amber-500/30 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              
              {/* Gold gradient top highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600"></div>

              {orderSuccess ? (
                /* Success Screen */
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black text-white">Buyurtma Qabul Qilindi!</h3>
                  <p className="text-sm text-slate-300">
                    Sizning <strong>{selectedPackage.uc + selectedPackage.bonus} UC</strong> xaridingiz qabul qilindi. 
                    Tizim orqali Player ID ({playerId}) hisobingizga avtomatik o&apos;tkazilmoqda.
                  </p>

                  <div className="p-4 rounded-xl bg-[#090b14] border border-slate-800 text-left text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Player ID:</span>
                      <span className="font-bold text-amber-400">{playerId}</span>
                    </div>
                    {playerNickname && (
                      <div className="flex justify-between">
                        <span className="text-slate-400">Nik:</span>
                        <span className="font-bold text-white">{playerNickname}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-400">To&apos;lov usuli:</span>
                      <span className="font-bold text-white">{selectedPayment.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Summa:</span>
                      <span className="font-bold text-emerald-400">{selectedPackage.priceUzs.toLocaleString("uz-UZ")} so&apos;m</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800 pt-2">
                      <span className="text-slate-400">Holat:</span>
                      <span className="font-bold text-amber-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                        Hisobga o&apos;tkazilmoqda (30-60 sek)
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setOrderSuccess(false);
                      setPlayerId("");
                      setPhone("");
                      setIsVerified(false);
                    }}
                    className="w-full py-3 text-sm font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition"
                  >
                    Yangi Buyurtma Berish
                  </button>
                </div>
              ) : (
                /* Checkout Form */
                <form onSubmit={handleOrder} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <User className="w-5 h-5 text-amber-400" />
                      2. Buyurtmani Rasmiylashtirish
                    </h3>
                  </div>

                  {/* Selected Summary Card */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#090b15] border border-amber-500/20">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{selectedPackage.image}</span>
                      <div>
                        <div className="text-sm font-bold text-white">
                          {selectedPackage.uc} {selectedPackage.bonus > 0 && `+ ${selectedPackage.bonus}`} UC
                        </div>
                        <div className="text-[11px] text-amber-400">Tezkor avto-yetkazish</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-extrabold text-emerald-400">
                        {selectedPackage.priceUzs.toLocaleString("uz-UZ")} so&apos;m
                      </div>
                    </div>
                  </div>

                  {/* Player ID Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">
                      PUBG Mobile Player ID <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex">
                      <input
                        type="text"
                        value={playerId}
                        onChange={(e) => {
                          setPlayerId(e.target.value.replace(/[^0-9]/g, ""));
                          setIsVerified(false);
                        }}
                        placeholder="Masalan: 5123456789"
                        maxLength={12}
                        className="w-full bg-[#090b14] border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none pr-28 transition"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyId}
                        disabled={isVerifying}
                        className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 text-xs font-bold rounded-lg transition border border-amber-500/30 flex items-center gap-1 disabled:opacity-50"
                      >
                        {isVerifying ? "Tekshiruv..." : isVerified ? "✓ Tekshirildi" : "Tekshirish"}
                      </button>
                    </div>

                    {isVerified && playerNickname && (
                      <p className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                        ✓ O&apos;yinchi topildi: <strong>{playerNickname}</strong>
                      </p>
                    )}
                  </div>

                  {/* Phone number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">
                      Telefon raqamingiz (SMS va Chek uchun) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+998 (90) 123-45-67"
                      className="w-full bg-[#090b14] border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition"
                    />
                  </div>

                  {/* Payment method selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-300 flex items-center gap-1">
                      <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                      To&apos;lov Tizimini Tanlang
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {PAYMENT_METHODS.map((pm) => {
                        const isPaySelected = selectedPayment.id === pm.id;
                        return (
                          <button
                            type="button"
                            key={pm.id}
                            onClick={() => setSelectedPayment(pm)}
                            className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition ${
                              isPaySelected
                                ? "bg-amber-500/10 border-amber-500 text-white"
                                : "bg-[#090b14] border-slate-800 text-slate-300 hover:border-slate-700"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{pm.icon}</span>
                              <div>
                                <div className="text-xs font-bold">{pm.name}</div>
                                <div className="text-[10px] text-slate-400">{pm.badge}</div>
                              </div>
                            </div>
                            <div
                              className={`w-3.5 h-3.5 rounded-full border ${
                                isPaySelected ? "bg-amber-500 border-amber-400" : "border-slate-700"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-base font-black text-black bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl transition shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        To&apos;lovga o&apos;tkazilmoqda...
                      </span>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 fill-black" />
                        <span>To&apos;lash ({selectedPackage.priceUzs.toLocaleString("uz-UZ")} so&apos;m)</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                    <span>100% xavfsiz to&apos;lov va tezkor avtomatik yetkazish</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
