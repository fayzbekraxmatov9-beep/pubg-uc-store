import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderSection from "@/components/OrderSection";
import CalculatorSection from "@/components/CalculatorSection";

export const metadata: Metadata = {
  title: "PUBG UC Paketlar va Narxlar | Rasmiy Tariflar",
  description: "PUBG Mobile uchun barcha rasmiy UC paketlari va narxlari. Hisobingizga 1 daqiqa ichida tushadi.",
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c14]">
      <Header />
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Barcha Tariflar
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            PUBG Mobile UC Paketlari va Narxlari
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            O&apos;zingizga kerakli UC to&apos;plamini tanlang va Click, Payme yoki Uzum orqali komissiyasiz xarid qiling.
          </p>
        </div>
        <OrderSection />
        <CalculatorSection />
      </div>
      <Footer />
    </div>
  );
}
