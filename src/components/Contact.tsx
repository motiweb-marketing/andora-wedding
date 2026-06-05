import React from "react";
import { Phone, MapPin, Clock, MessageSquare, Instagram, Map, ArrowUpRight, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="py-24 bg-white relative scroll-mt-20 overflow-hidden"
    >
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-champagne-100/30 filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">
            İLETİŞİM BİLGİLERİ & YOL TARİFİ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Bizimle İletişime Geçin
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            Salonumuz haftanın her günü randevu usulüyle gezilebilmektedir. Telefonda bekletmeden fiyata dayalı hızlı bilgi almak için bizi arayabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Cards, Phone, Working Times */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Massive Call Card */}
            <div className="bg-gradient-to-tr from-champagne-850 to-champagne-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-champagne-700 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 bg-white/10 text-champagne-300 rounded-bl-3xl">
                <Sparkles className="w-5 h-5" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-champagne-200 block mb-2">
                HEMEN ARA — ÜCRETSİZ KEŞİF YAPIN
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight mb-4">
                Andora Rezervasyon Telefonu
              </h3>
              
              <a
                href="tel:+905303992336"
                className="inline-flex items-center gap-3 bg-white text-slate-900 font-extrabold text-2xl sm:text-3xl px-6 py-4 rounded-2xl shadow-lg transition-transform hover:scale-102 active:scale-98"
              >
                <Phone className="w-6 h-6 text-champagne-600 animate-bounce" />
                <span>0530 399 23 36</span>
              </a>

              <p className="text-champagne-100 text-xs sm:text-sm mt-5 leading-normal">
                📞 Telefonla aranıldığında ekiplerimiz müsaitlik takvimini ve salonun o günkü güncel ikram detaylarını anında paylaşır.
              </p>
            </div>

            {/* Structured Location Table */}
            <div className="space-y-4">
              
              {/* Address card */}
              <div className="bg-champagne-50/40 border border-champagne-100 rounded-2xl p-5 flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl text-champagne-600 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                    SALON ADRESİ
                  </span>
                  <span className="block text-slate-800 font-bold text-sm sm:text-base">
                    Andora Wedding & Events, Ankara, Türkiye
                  </span>
                  <span className="block text-slate-500 text-xs leading-normal">
                    Merkezi koordinatlar, çevre bağlantı yolları ve toplu taşıma hatlarına saniyeler uzaklıkta şık lokasyon.
                  </span>
                </div>
              </div>

              {/* Working hours card */}
              <div className="bg-champagne-50/40 border border-champagne-100 rounded-2xl p-5 flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl text-champagne-600 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 font-medium">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                    ZİYARET SAATLERİ
                  </span>
                  <span className="block text-slate-800 font-bold text-sm sm:text-base">
                    Pazartesi – Cumartesi: 09:00 – 21:00
                  </span>
                  <span className="block text-slate-500 text-xs">
                    Pazar Günü: Randevu usulüyle (Sadece etkinlik sahipleri)
                  </span>
                </div>
              </div>

              {/* Quick social channel buttons */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                
                <a
                  href="https://wa.me/905303992336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-1.5 transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-600 fill-emerald-100 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">WhatsApp</span>
                  <span className="text-[10px] text-slate-500">Çevrimiçi Destek</span>
                </a>

                <a
                  href="https://www.instagram.com/andoraweddingevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-50 hover:bg-pink-100 border border-pink-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-1.5 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-pink-650 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Instagram</span>
                  <span className="text-[10px] text-slate-500">@andoraweddingevents</span>
                </a>

              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Interactive Mock Area */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-b from-slate-50 to-champagne-50/10 border border-champagne-105 rounded-3xl p-4 shadow-sm relative">
              
              {/* Mock locator pin box */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md border border-champagne-150 rounded-2xl p-4 shadow-xl max-w-[270px] z-10 hidden sm:block">
                <div className="flex gap-2 items-start">
                  <div className="p-2 bg-champagne-100 rounded-xl text-champagne-700 font-bold text-sm">
                    ✨
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Andora Wedding & Events</h4>
                    <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                      Ankara'nın prestijli düğün, nişan ve kına organizasyon salonu.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mock Map Canvas */}
              <div className="bg-slate-100 aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden relative border border-champagne-100 flex items-center justify-center group">
                
                {/* SVG/CSS Map Layout Grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#ddd_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-70" />
                <div className="absolute inset-0 bg-slate-200/40 pointer-events-none" />
                
                {/* Simulated route lines */}
                <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,100 L400,100 L600,300 L800,200" stroke="#c9a84c" strokeWidth="8" fill="none" />
                  <path d="M200,0 L200,400" stroke="#fff" strokeWidth="4" fill="none" />
                  <path d="M0,300 L950,150" stroke="#fff" strokeWidth="6" fill="none" />
                </svg>

                {/* Main GPS Pin Marker animation */}
                <div className="relative z-10 flex flex-col items-center justify-center cursor-pointer">
                  <div className="relative">
                    <span className="absolute -top-1.5 -left-1.5 w-12 h-12 bg-champagne-500/30 rounded-full animate-ping" />
                    <div className="bg-gradient-to-tr from-champagne-600 to-champagne-400 text-white rounded-2xl p-3 shadow-xl relative z-10 border-2 border-white">
                      <MapPin className="w-7 h-7 animate-pulse fall-animation" />
                    </div>
                  </div>
                  <span className="mt-3 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md z-15">
                    Andora Events Ankara
                  </span>
                </div>

                {/* "Haritada Aç / Yol Tarifi" Bottom overlay link */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md flex items-center justify-between border border-champagne-100">
                  <div className="flex gap-2 items-center text-xs text-slate-600 font-semibold">
                    <Map className="w-4 h-4 text-champagne-500" />
                    <span>En Hızlı Rotalar (GPS)</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Andora+Wedding+Events+Ankara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-champagne-800 hover:text-champagne-950 hover:underline"
                  >
                    <span>Yol Tarifi Al</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
              
              <p className="text-[11px] text-center text-slate-400 mt-3 font-medium">
                📍 Ankara içi otoyol ve çevre bağlantı hatlarına çok yakın, trafik yoğunluğu olmayan şanslı bölge.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
