import React from "react";
import { Instagram, MapPin, Sparkles, HelpCircle } from "lucide-react";

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-champagne-50 filter blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Section: Images */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-champagne-100">
                <img
                  src="https://images.unsplash.com/photo-1544078751-58feb2d78f54?auto=format&fit=crop&q=80&w=800"
                  alt="Andora salon içi masa dizaynı detayları"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              
              {/* Overlapping small visual card */}
              <div className="absolute -bottom-6 -right-4 bg-gradient-to-tr from-champagne-600 to-champagne-500 text-white rounded-2xl p-5 shadow-lg max-w-[240px] border border-champagne-400">
                <span className="block font-semibold text-xs text-champagne-100 uppercase tracking-widest mb-1">KOLAY ULAŞIM</span>
                <span className="block text-sm font-medium leading-relaxed">
                  Ankara'nın merkezi lokasyonunda, geniş otopark imkanıyla konuklarınız için stressiz ulaşım.
                </span>
              </div>
            </div>
            
            {/* Auxiliary micro metric card */}
            <div className="bg-champagne-50/70 border border-champagne-100 rounded-2xl p-4 flex items-center gap-3 mt-8">
              <div className="p-2.5 bg-white rounded-xl text-champagne-600 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-500">Konum Avantajı</span>
                <span className="block text-sm font-bold text-slate-800">Çevreyolu & Toplu Taşımaya Çok Yakın</span>
              </div>
            </div>
          </div>

          {/* Right Column Section: Stories & Descriptions */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">
                HİKAYEMİZ & VİZYONUMUZ
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-905">
                Andora'da her detay, sizin hikayeniz için tasarlandı
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Ankara'nın elit etkinlik noktalarından biri olan <strong className="text-slate-900 font-semibold">Andora Wedding & Events</strong>, mutlu çiftlerin ve seçkin ailelerin heyecanlarını ilk günkü tutkuyla paylaşmaktadır. Modern mimari çizgileri, ferah tavan yüksekliği ve kolonsuz salon yapısı sayesinde her davetlinin sahneye tam hakim olduğu özel bir atmosfer sunuyoruz.
              </p>
              <p>
                Organizasyonun sadece bir salondan ibaret olmadığının bilinciyle; ses, sahne, dinamik LED ışıklandırma ve ikram sunumlarımızı dünya standartlarında güncelliyoruz. Alanında uzman koordinatörlerimiz, menü tadımlarından masa örtüsü renk kartelasına kadar tüm aşamaları çiftlerimizle el ele planlamaktadır.
              </p>
            </div>

            {/* "Biliyor muydunuz?" Planning Tip Box */}
            <div className="bg-blush-50/70 border border-blush-100 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 text-blush-500/20">
                <HelpCircle className="w-12 h-12" />
              </div>
              <div className="flex gap-3">
                <div className="p-2 bg-white rounded-xl text-blush-500 shadow-2xs h-fit">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    Andora Farkı Nedir?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Düğün planlarken en çok karşılaşılan "ekstra maliyet" sürprizlerinin önüne geçmek için tüm hizmet sözleşmelerimizi şeffaf, paket onaylı şekilde yapıyoruz. Anlaşma sonrasında asla gizli ücretlendirmeler ile karşılaşmazsınız.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Call to Actions */}
            <div className="pt-3 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/andoraweddingevents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
                <span>Instagram'da Bizi Takip Edin</span>
              </a>
              <a
                href="#iletisim"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-champagne-50 hover:bg-champagne-100 border border-champagne-200 text-slate-800 font-semibold text-sm transition-all"
              >
                <span>Konum & Telefon Bilgisi</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
