import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Link from "next/link";
import { ShieldCheck, Zap, Lock, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Qanday Ishlaydi? | PUBG UC Yetkazib Berish Qo'llanmasi",
  description: "PUBG Mobile hisobingizga qanday qilib 1 daqiqada UC tushirish mumkinligini bilib oling.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c14]">
      <Header />
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            Qadamma-Qadam Qo&apos;llanma
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Qanday qilib UC xarid qilinadi?
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Hech qanday parol va murakkab ro&apos;yxatdan o&apos;tishlarsiz, faqatgina o&apos;yinchi ID orqali to&apos;lov qiling.
          </p>
        </div>

        <HowItWorks />

        {/* Detailed Explanation Cards */}
        <section className="py-12 bg-[#0d101d] border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Nima uchun bizning xizmat xavfsiz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0a0c14] border border-slate-800 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Parolsiz va 100% Xavfsiz</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Biz hech qachon akkaunt parolini yoki ijtimoiy tarmoq loginlarini so&apos;ramaymiz. Tizim faqat ochiq Player ID orqali ishlaydi.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0c14] border border-slate-800 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Tezkor Avtomatlashtirilgan Diller</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  To&apos;lov amalga oshirilishi bilan botimiz orqali o&apos;yin hisobingizga UC 30-60 soniya ichida yetib boradi.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0c14] border border-slate-800 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">24/7 Qo&apos;llab-quvvatlash</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Har qanday tushunmovchilik yoki yordam kerak bo&apos;lganda Telegram orqali mutaxassislarimiz har doim yordamga tayyor.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-sm rounded-xl shadow-lg shadow-amber-500/20 hover:brightness-110 transition"
              >
                Paketlarni ko&apos;rish va sotib olish →
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
