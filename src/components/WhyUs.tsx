import React from "react";
import { Sparkles, Volume2, PiggyBank, HeartHandshake, Flower2, Compass, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const safetyCards = [
    {
      title: "Şık & Modern Salon Mimarisi",
      description: "Kolonsuz, yüksek tavanlı salon yapımızda her davetliniz sahneye ve masalara tam hakimdir. Ferah havalandırma donanımı eşlik eder.",
      icon: <Sparkles className="w-5 h-5 text-champagne-600" />,
    },
    {
      title: "Profesyonel Işık & Ses Sistemi",
      description: "Son teknoloji akustik hoparlör kolonları, kristal sahne mikrofonları ve ortam moduna göre değişen akıllı robot LED aydınlatmalar.",
      icon: <Volume2 className="w-5 h-5 text-champagne-600" />,
    },
    {
      title: "Esnek Paket & Bütçe Seçenekleri",
      description: "Yemekli, yemeksiz, kokteyl veya nişan/kına özel bütçelerinize göre modüler fiyatlandırma. Ödeme vadelerinde Ankara dostu kolaylık.",
      icon: <PiggyBank className="w-5 h-5 text-champagne-600" />,
    },
    {
      title: "Deneyimli Organizasyon Ekibi",
      description: "Daha önce yüzlerce lüks daveti yönetmiş koordinasyon liderlerimiz, sunucularımız, usta şeflerimiz ve güler yüzlü servis personelimiz.",
      icon: <HeartHandshake className="w-5 h-5 text-champagne-600" />,
    },
    {
      title: "Özel Dekorasyon & Çiçek Tasarımı",
      description: "Gold, şampanya ve pudra tonlarında lüks şamdanlar, özel arka plan panoları, gelin tagı süsleri ve estetik masa düzenleri.",
      icon: <Flower2 className="w-5 h-5 text-champagne-600" />,
    },
    {
      title: "Ankara Merkezi Konum & Kolay Ulaşım",
      description: "Çevre yollarına ve otoyola yakın konumu ile misafirlerinizin bulmakta zorlanmayacağı, otoparkı sıkıntısız merkezi davet adresi.",
      icon: <Compass className="w-5 h-5 text-champagne-600" />,
    },
  ];

  return (
    <section
      id="neden-andora"
      className="py-24 bg-gradient-to-b from-champagne-50/25 to-white relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">
            NEDEN ANDORA WEDDING CO?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Ankara'da Bizi Farklı Kılan Özelliklerimiz
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            Andora Wedding & Events ekibi olarak en mutlu gününüzü riske atmıyoruz. Altı temel sütunumuzla düğününüzün her anını güvenceye alıyoruz.
          </p>
        </div>

        {/* 6 security grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-champagne-100 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-champagne-300"
            >
              <div className="space-y-4">
                {/* Visual Circle Icon Frame */}
                <div className="w-11 h-11 rounded-2xl bg-champagne-100/70 border border-champagne-200/40 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>

                {/* Headings */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-champagne-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>

              {/* Onaylı Güvence label */}
              <div className="flex items-center gap-1.5 mt-6 pt-4 border-t border-champagne-50 text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-champagne-650 transition-colors">
                <ShieldCheck className="w-4 h-4 text-champagne-500 shrink-0" />
                <span>Onaylı Güvence & Denetim</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom review badge */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
            🛡️ RESMİ RUHSATLI, İTFAİYE ONAYLI VE KESİNTİSİZ GÜÇ JENERATÖRLÜ ORGANİZASYON MEKANI
          </p>
        </div>

      </div>
    </section>
  );
}
