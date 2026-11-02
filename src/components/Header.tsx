"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Zap, Headphones, Flame, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/packages", label: "Paketlar & Narxlar", icon: Flame, color: "text-amber-500" },
    { href: "/how-it-works", label: "Qanday ishlaydi?", icon: Zap, color: "text-amber-500" },
    { href: "/reviews", label: "Mijozlar fikri", icon: ShieldCheck, color: "text-emerald-400" },
    { href: "/faq", label: "Yordam", icon: Headphones, color: "text-blue-400" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0c14]/80 border-b border-amber-500/20 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-[2px] shadow-md shadow-amber-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d101d] rounded-[10px] flex items-center justify-center">
                <span className="text-2xl font-black bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
                  UC
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0a0c14] animate-pulse"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-wider text-white">
                  PUBG<span className="text-amber-500">UC</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-widest">
                  UZBEKISTAN
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Tezkor & Ishonchli Diller</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    isActive ? "text-amber-400 font-bold border-b-2 border-amber-400 pb-1" : "text-slate-300 hover:text-amber-400"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${link.color}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/packages"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-black transition-all bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 rounded-xl hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-500/25 active:scale-95"
            >
              UC Sotib Olish
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 space-y-3 bg-[#0a0c14]/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  pathname === link.href
                    ? "text-amber-400 bg-amber-500/10 font-bold"
                    : "text-slate-300 hover:text-amber-400 hover:bg-slate-900/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/packages"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-2.5 text-sm font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl"
              >
                UC Sotib Olish
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
