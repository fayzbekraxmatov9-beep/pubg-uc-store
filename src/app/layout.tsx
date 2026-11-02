import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PUBG Mobile UC Store | Tezkor va Ishonchli UC Xaridi",
  description: "PUBG Mobile uchun arzon va 1 daqiqada hisobingizga tushadigan UC to'plamlari. Uzcard, Humo, Click, Payme orqali xavfsiz to'lov.",
  keywords: "pubg uc sotib olish, arzon pubg uc, uzbekistan uc pubg, click uc, payme uc, tezkor uc",
  openGraph: {
    title: "PUBG Mobile UC Store - O'zbekistondagi 1-raqamli UC xizmati",
    description: "Eng arzon narxlarda 1 daqiqa ichida o'yindagi hisobingizga UC o'tkazib beramiz!",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth dark">
      <body className={`${inter.className} bg-[#0a0c14] text-slate-100 min-h-screen selection:bg-amber-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
