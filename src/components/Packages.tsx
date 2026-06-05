import React from "react";
import { Check, HelpCircle, Heart, Star, Sparkles } from "lucide-react";
import { PackageItem } from "../types";

export default function Packages() {
  const packagesData: PackageItem[] = [
    {
      id: "pkg-1",
      name: "Gümüş Klasik Paket",
      capacity: "150 - 250 Davetli",
      badge: "Klasik & Şık",
      priceTag: "Fiyat/Performans Odaklı",
      features: [
        "Salon kiralama hakkı (tam klimalı ve jeneratörlü)",
        "Gümüş konsept masa şamdan & dekor giydirme",
        "Zengin kuru pasta, kuruyemiş ve meşrubat ikramı",
        "Profesyonel DJ performansı ve geniş repertuvar",
        "Merkezi havalandırma & ferah oturma düzeni",
        "Konforlu, aynalı gelin & damat hazırlanma süiti",
        "Standart ses sistemi ve genel salon ışıkları",
      ],
    },
    {
      id: "pkg-2",
      name: "Gold Premium Paket",
      capacity: "250 - 350 Davetli",
      badge: "En Çok Tercih Edilen",
      priceTag: "Yemekli & Eksiksiz",
      features: [
        "Tüm Gümüş Paket imkanlarına ek olarak:",
        "Zengin ana yemekli menü (kırmızı et veya beyaz et)",
        "Gold detaylı lüks masa giydirmesi ve yapay çiçekler",
        "Girişte karşılama kokteyli ve kırmızı halı seremonisi",
        "Profesyonel HD video kaydı ve 100 adet basılı fotoğraf",
        "Özel robotik LED sahne ışıklandırması ve sis şovu",
        "Düğün pastası kesim merasimi (özel maket ve volkanlar)",
      ],
    },
    {
      id: "pkg-3",
      name: "Exclusive Platinum Paket",
      capacity: "350 - 400 Davetli",
      badge: "Sınırsız Premium Lüks",
      priceTag: "Çiftlere Özel Saray Konsepti",
      features: [
        "Tüm Gold Paket imkanlarına ek olarak:",
        "Sınırsız gurme VIP mezeli & kırmızı et ana menü",
        "Tamamen canlı / taze çiçekli özel gala masa tasarımları",
        "Profesyonel orkestra canlı performans desteği",
        "Kına gecesi veya nişan için %25 erken rezervasyon indirimi",
        "Gelin arabası dış süslemesi (Andora partnerlik desteği)",
        "Girişte canlı keman resitali ile konuk karşılama",
        "Masa başı özel servis elemanı tahsisi",
      ],
    },
  ];

  return (
    <section
      id="paketler"
      className="py-24 bg-gradient-to-b from-white to-champagne-50/20 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">
            PAKET SEÇENEKLERİ & KAPASİTE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Hayalinizdeki Düğün İçin Esnek Paketlerimiz
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          
          {/* Capacity Alert */}
          <div className="inline-block mt-4 px-5 py-2.5 rounded-2xl bg-champagne-100/90 text-champagne-900 border border-champagne-200 text-xs sm:text-sm font-bold">
            🏢 Salon Kapasitemiz: 150 – 400 kişi arası esnek modüler oturma düzeni
          </div>
        </div>

        {/* 3 cards grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => {
            const isPopular = pkg.id === "pkg-2";
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-white border-2 border-champagne-500 shadow-xl ring-4 ring-champagne-105 transform -translate-y-2 lg:-translate-y-4"
                    : "bg-white border border-champagne-100 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Popular Badge Offset */}
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-champagne-600 to-champagne-500 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    En Çok Tercih Edilen
                  </span>
                )}

                <div>
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                      {pkg.priceTag}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {pkg.name}
                    </h3>
                    <div className="text-champagne-700 font-bold text-sm sm:text-base flex items-center gap-1 bg-champagne-50/50 w-fit px-3 py-1 rounded-lg">
                      <Sparkles className="w-4 h-4" />
                      <span>{pkg.capacity}</span>
                    </div>
                  </div>

                  {/* Feature Lists */}
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-champagne-50 pb-2">
                      DAHİL TÜM HİZMETLER
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => {
                        const isMainInclude = idx === 0 && (pkg.id === "pkg-2" || pkg.id === "pkg-3");
                        return (
                          <li
                            key={idx}
                            className={`flex gap-3 text-xs sm:text-[13px] ${
                              isMainInclude
                                ? "text-champagne-800 font-bold"
                                : "text-slate-700 font-medium"
                            }`}
                          >
                            <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${
                              isMainInclude
                                ? "bg-champagne-500 text-white"
                                : "bg-champagne-100 text-champagne-700"
                            }`}>
                              <Check className="w-3.5 h-3.5 stroke-[3px]" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Submit button wrapper */}
                <div className="pt-8 mt-6 border-t border-champagne-50">
                  <a
                    href="#rezervasyon"
                    className={`w-full py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 text-center block ${
                      isPopular
                        ? "bg-gradient-to-r from-champagne-600 to-champagne-500 hover:from-champagne-700 hover:to-champagne-600 text-white shadow-md shadow-champagne-500/20 active:scale-95"
                        : "bg-champagne-50 hover:bg-champagne-100 text-slate-800 border border-champagne-100"
                    }`}
                  >
                    Ücretsiz Teklif Al & Tarih Sorgula
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Customized Packaging Note Footer */}
        <div className="mt-16 bg-ivory-50 border border-champagne-150 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 items-start text-center md:text-left">
            <div className="p-3 bg-white rounded-2xl text-champagne-600 shadow-2xs shrink-0 hidden sm:block">
              <Heart className="w-6 h-6 text-champagne-500" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Kişiye Özel Konsept Paket Oluşturma
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Bütçenize ve hayalinize uymayan gereksiz kalemleri listenizden çıkararak, sadece istediğiniz dekorasyon ve ikramları içeren modüler paketler de tasarlayabiliriz. <strong>Andora'da sürpriz ve gizli ek ücretlere kesinlikle yer yoktur.</strong>
              </p>
            </div>
          </div>
          <a
            href="#rezervasyon"
            className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm shrink-0 whitespace-nowrap"
          >
            Özel Paket Tasarlat
          </a>
        </div>

      </div>
    </section>
  );
}
