"use client";

import React from "react";
import Link from "next/link";
import { Shield, Send, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07090e] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center font-black text-black text-lg">
                UC
              </div>
              <span className="font-extrabold text-lg text-white">
                PUBG<span className="text-amber-500">UC</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-400">
              O&apos;zbekistonda PUBG Mobile o&apos;yinchilari uchun eng tezkor, arzon va ishonchli UC yetkazib berish xizmati.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <Shield className="w-4 h-4" />
              100% Xavfsiz & Rasmiy ID orqali
            </div>
          </div>

          {/* Col 2: Sahifalar */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Sahifalar</h4>
            <ul className="space-y-2">
              <li><Link href="/packages" className="hover:text-amber-400 transition">Paketlar & Narxlar</Link></li>
              <li><Link href="/how-it-works" className="hover:text-amber-400 transition">Qanday ishlaydi?</Link></li>
              <li><Link href="/reviews" className="hover:text-amber-400 transition">Mijozlar Fikrlari</Link></li>
              <li><Link href="/faq" className="hover:text-amber-400 transition">Yordam & Savollar</Link></li>
            </ul>
          </div>

          {/* Col 3: To'lov usullari */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">To&apos;lov Tizimlari</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="p-2 rounded bg-[#0f1322] border border-slate-800 text-slate-300">Click Up</span>
              <span className="p-2 rounded bg-[#0f1322] border border-slate-800 text-slate-300">Payme</span>
              <span className="p-2 rounded bg-[#0f1322] border border-slate-800 text-slate-300">Uzcard</span>
              <span className="p-2 rounded bg-[#0f1322] border border-slate-800 text-slate-300">Humo</span>
              <span className="p-2 rounded bg-[#0f1322] border border-slate-800 text-slate-300">Uzum Bank</span>
              <span className="p-2 rounded bg-[#0f1322] border border-slate-800 text-slate-300">Paynet</span>
            </div>
          </div>

          {/* Col 4: Bog'lanish */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Bog&apos;lanish</h4>
            <p className="text-xs text-slate-400">Har qanday savol yoki yordam uchun 24/7 aloqadamiz:</p>
            <div className="space-y-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition border border-blue-500/30"
              >
                <Send className="w-4 h-4" />
                <span>@pubg_uc_admin</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300 text-xs">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+998 (90) 000-00-00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © 2026 PUBG UC Uzbekistan. Barcha huquqlar himoyalangan.
          </p>
          <p className="flex items-center gap-1">
            Geymerlar uchun mehr bilan yaratilgan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
