import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import Link from "next/link";
import { Star, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Mijozlar Fikrlari va Baholari | PUBG UC Store",
  description: "PUBG Mobile UC xarid qilgan minglab mamnun o'yinchilarning fikrlari va taassurotlari.",
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c14]">
      <Header />
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Haqiqiy Baholar
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Mijozlarimizning Fikrlari
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Xizmatimiz orqali har kuni yuzlab o&apos;yinchilar Royale Pass va qurollarini yangilamoqda.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-8 inline-flex items-center gap-6 px-6 py-4 rounded-2xl bg-[#121628] border border-amber-500/30">
            <div className="text-left">
              <div className="text-4xl font-black text-amber-400">4.9 / 5.0</div>
              <div className="text-xs text-slate-400">Umumiy reyting</div>
            </div>
            <div className="h-10 w-[1px] bg-slate-800"></div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-400 mt-1">1,400+ dan ortiq ijobiy fikrlar</div>
            </div>
          </div>
        </div>

        <ReviewsSection />

        {/* CTA Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-transparent border border-amber-500/30 text-center space-y-4">
            <h3 className="text-2xl font-black text-white">Siz ham o&apos;z hisobingizni to&apos;ldirmoqchimisiz?</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
              Tezkor yetkazib berish va arzon narxlar bilan hoziroq UC xarid qiling!
            </p>
            <Link
              href="/packages"
              className="inline-block px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-sm rounded-xl shadow-lg shadow-amber-500/25 hover:brightness-110 transition"
            >
              Hozir Xarid Qilish
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
