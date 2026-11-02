import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OrderSection from "@/components/OrderSection";
import CalculatorSection from "@/components/CalculatorSection";
import HowItWorks from "@/components/HowItWorks";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0a0c14] text-slate-100 selection:bg-amber-500 selection:text-black">
      <Header />
      <Hero />
      <OrderSection />
      <CalculatorSection />
      <HowItWorks />
      <ReviewsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
