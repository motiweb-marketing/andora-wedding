import React from "react";
import { Star, Quote, MessageSquare, Heart } from "lucide-react";
import { TestimonialItem } from "../types";

export default function Testimonials() {
  const testimonialsData: TestimonialItem[] = [
    {
      id: "test-1",
      name: "Merve & Alperen Yılmaz",
      location: "Çankaya, Ankara",
      text: "Andora'da gerçekleşen düğünümüz tek kelimeyle harikaydı. Gelin yolu süslemelerinden pastamızın taze meyvelerine kadar her şey kusursuzdu. Organizasyon sorumlumuz tüm heyecanımızı yatıştırdı ve akışı harika yönetti. Misafirlerimiz salonun havalandırmasını ve kolonsuz yapısını çok övdüler. Gönül rahatlığıyla tavsiye ediyoruz!",
      rating: 5,
      date: "Eylül 2025",
    },
    {
      id: "test-2",
      name: "Selin & Burak Özkan",
      location: "Gölbaşı, Ankara",
      text: "Özellikle yemeklerin kalitesinden çok tereddüt etmiştik ama menü tadımında ne yediksek düğün gecesi 350 konuğumuza da aynısı taptaze ve sıcacık servis edildi. Esnek bütçe yapısı sayesinde asla sürpriz hiçbir masraflarla karşılaşmadık. Ses sistemi de pırıl pırıldı. Sonsuz teşekkürler Andora ekibi!",
      rating: 5,
      date: "Temmuz 2025",
    },
    {
      id: "test-3",
      name: "Ezgi & Görkem Demir",
      location: "Yenimahalle, Ankara",
      text: "Kına gecem için Andora'yı tercih etmiştim. Kına tahtının rengi, dekorları ve nedimelerin dans şovları gerçekten görkemliydi. Ankara'daki pek çok salonla kıyasladığımda hem şeffaflık hem lüks zerafet açısından burası açık ara önde. Tüm davet dertsiz ve tasasız aktı.",
      rating: 5,
      date: "Ağustos 2025",
    },
  ];

  return (
    <section
      id="testi"
      className="py-24 bg-gradient-to-b from-champagne-50/20 to-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">
            MUTLU ÇİFTLERİMİZİN DEĞERLENDİRMELERİ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Andora'da Evlenenler Ne Diyor?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            En kıymetli gecelerini profesyonel ellerimize teslim eden çiftlerimizin gerçek deneyimlerini okuyun. Mutluluğunuz, bizim en büyük başarı hikayemiz.
          </p>
        </div>

        {/* Testimonials 3 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-champagne-100 shadow-3xs flex flex-col justify-between relative hover:shadow-md transition-all group hover:border-champagne-300"
            >
              {/* Overlapping Quote graphic symbol */}
              <div className="absolute top-6 right-6 text-champagne-100 group-hover:text-champagne-200 transition-colors">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* 5 Stars row */}
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>

              {/* Couple bio card footer */}
              <div className="mt-6 pt-4 border-t border-champagne-50 flex items-center justify-between">
                <div>
                  <span className="block font-bold text-slate-900 text-sm">
                    {test.name}
                  </span>
                  <span className="block text-[11px] font-semibold text-slate-400">
                    {test.location}
                  </span>
                </div>
                <div className="bg-champagne-50/80 text-champagne-800 text-[10px] font-bold px-2.5 py-1 rounded-sm">
                  {test.date}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom invitation action */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 text-xs sm:text-sm inline-flex items-center gap-1.5 flex-wrap justify-center">
            <span>Siz de daha önce Andora salonumuzda davetli miydiniz?</span>
            <a
              href="https://www.instagram.com/andoraweddingevents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne-700 font-bold hover:underline inline-flex items-center gap-1"
            >
              <Heart className="w-4 h-4 fill-pink-100 text-pink-500" />
              <span>Görüşünüzü bizimle paylaşın</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
