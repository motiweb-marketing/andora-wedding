import React from "react";
import { MessageSquare, Calendar, Palette, Sparkles, MessageCircle } from "lucide-react";
import { ProcessStep } from "../types";

export default function Process() {
  const steps: (ProcessStep & { icon: React.ReactNode })[] = [
    {
      stepNumber: 1,
      title: "İlk Görüşme",
      description: "Telefon, web formu, WhatsApp hattımız veya Instagram DM üzerinden bize ulaşın. İstediğiniz tarihi sorgulayın.",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      stepNumber: 2,
      title: "Salon Turu",
      description: "Andora'yı Ankara'daki yerinde ziyaret edin. Salon boyutlarını, akustik sistemi ve masa yerleşimlerimizi bizzat inceleyin.",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      stepNumber: 3,
      title: "Planlama & Tasarım",
      description: "Dileğiniz doğrultusunda menü kartelasını tadın; dekorasyon, çiçekler, kına tahtı rengi ve müzik listelerini birlikte kararlaştıralım.",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      stepNumber: 4,
      title: "Büyük Gün!",
      description: "Andora profesyonel koordinatör ekibi ve servis kadrosu her detayı saniyeler bazında yönetir. Siz sadece sevginizin tadını çıkarırsınız.",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="surec"
      className="py-24 bg-white relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">
            KUSURSUZ PLANLAMA ADIMLARI
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Sürecimiz Nasıl İşliyor?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            Hayalinizdeki geceye giden yol çok pratik. Sizi yormadan, tamamen şeffaf ve her adımı sizinle planlayarak ilerliyoruz.
          </p>
        </div>

        {/* 4 Steps Grid Layout */}
        <div className="relative">
          {/* Connector Horizontal line (only on large screen) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-champagne-100 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-champagne-105/70 shadow-2xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Num Tag */}
                  <div className="absolute -top-4 -left-2 bg-gradient-to-br from-champagne-600 to-champagne-400 text-white font-black text-sm w-9 h-9 rounded-xl flex items-center justify-center shadow-md">
                    0{step.stepNumber}
                  </div>

                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-2xl bg-champagne-50/80 border border-champagne-100 flex items-center justify-center text-champagne-700 group-hover:bg-champagne-100/90 transition-colors mb-6 mt-2 shadow-2xs">
                    {step.icon}
                  </div>

                  {/* Head & text */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-champagne-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-widest block border-t border-champagne-50 pt-3">
                  Adım {step.stepNumber} / 04
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Instant Support Hotline WhatsApp Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 bg-white text-emerald-600 rounded-2xl shadow-xs">
              <MessageCircle className="w-6 h-6 fill-emerald-100" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base text-slate-900">
                Süreç Boyunca WhatsApp Üzerinden Anlık Destek
              </p>
              <p className="text-xs text-slate-500">
                Mesaj yazmaktan veya soru sormaktan çekinmeyin. Organizatörlerimiz tüm sorularınızı dakikalar içinde yanıtlar.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/905303992336"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-emerald-500/20 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Canlı WhatsApp Danışma Hattı</span>
          </a>
        </div>

      </div>
    </section>
  );
}
