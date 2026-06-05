import React from "react";
import { Home, Sparkles, Heart, Phone, ClipboardCheck } from "lucide-react";

export default function MobileBottomNav() {
  return (
    <div
      id="mobile-nav"
      className="md:hidden fixed bottom-5 left-4 right-4 z-40 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl py-3 px-4 flex items-center justify-around text-slate-400"
    >
      {/* Home link */}
      <a
        href="#"
        className="flex flex-col items-center gap-1 hover:text-champagne-400 transition-colors"
      >
        <Home className="w-5 h-5 text-slate-350" />
        <span className="text-[10px] font-semibold tracking-wide">Ana Sayfa</span>
      </a>

      {/* Services link */}
      <a
        href="#hizmetler"
        className="flex flex-col items-center gap-1 hover:text-champagne-400 transition-colors"
      >
        <Sparkles className="w-5 h-5 text-slate-350" />
        <span className="text-[10px] font-semibold tracking-wide">Hizmetler</span>
      </a>

      {/* Booking button (Highly Prominent / Gold Highlighted) */}
      <a
        href="#rezervasyon"
        className="relative -top-5 flex flex-col items-center group"
      >
        <div className="w-14 h-14 bg-gradient-to-tr from-champagne-600 to-champagne-400 hover:from-champagne-700 hover:to-champagne-500 rounded-full text-white shadow-lg shadow-champagne-500/20 border-4 border-slate-900 flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
          <Heart className="w-6 h-6 fill-white/20 animate-pulse" />
        </div>
        <span className="text-[10px] text-champagne-400 font-extrabold tracking-wide mt-1">
          REZERVE ET
        </span>
      </a>

      {/* Packages link */}
      <a
        href="#paketler"
        className="flex flex-col items-center gap-1 hover:text-champagne-400 transition-colors"
      >
        <ClipboardCheck className="w-5 h-5 text-slate-350" />
        <span className="text-[10px] font-semibold tracking-wide">Paketler</span>
      </a>

      {/* Call Immediately line */}
      <a
        href="tel:+905303992336"
        className="flex flex-col items-center gap-1 hover:text-champagne-400 transition-colors"
      >
        <Phone className="w-5 h-5 text-slate-350" />
        <span className="text-[10px] font-semibold tracking-wide">Hemen Ara</span>
      </a>

    </div>
  );
}
