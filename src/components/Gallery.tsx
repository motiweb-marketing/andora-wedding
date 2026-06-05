import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X, Instagram, Heart, ArrowRight } from "lucide-react";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<"all" | "interior" | "decoration" | "henna" | "exterior">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      category: "interior",
      categoryLabel: "Salon İç Mekan",
      title: "Görkemli Aydınlatma ve Kolonsuz Tasarım",
      imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "gal-2",
      category: "decoration",
      categoryLabel: "Düğün Dekorasyonu",
      title: "Gold Şamdanlar ve Premium Masa Dizaynı",
      imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "gal-3",
      category: "henna",
      categoryLabel: "Nişan & Kına",
      title: "Aşkın İlk Adımları ve Heyecan Verici Seremoniler",
      imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "gal-4",
      category: "exterior",
      categoryLabel: "Dış Mekan & Giriş",
      title: "Karşılama Kokteyli Alanı ve Kırmızı Halı Detayı",
      imageUrl: "https://images.unsplash.com/photo-1507504038482-76210f5c0be1?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "gal-5",
      category: "interior",
      categoryLabel: "Salon İç Mekan",
      title: "Gelin & Damat İlk Dans Romantizmi",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "gal-6",
      category: "decoration",
      categoryLabel: "Düğün Dekorasyonu",
      title: "Sıcak Peri Işıkları ve Şık Mum Ayrıntıları",
      imageUrl: "https://images.unsplash.com/photo-1519225495810-7517c29a2e19?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const categories: { id: "all" | "interior" | "decoration" | "henna" | "exterior"; label: string }[] = [
    { id: "all", label: "Tümü" },
    { id: "interior", label: "Salon İç Mekan" },
    { id: "decoration", label: "Düğün Dekorasyonu" },
    { id: "henna", label: "Nişan & Kına Gecesi" },
    { id: "exterior", label: "Dış Mekan & Giriş" },
  ];

  return (
    <section
      id="galeri"
      className="py-24 bg-white relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-champagne-600 block">
            DAVETLERİMİZDEN KARELER
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Salonumuz ve Dekorasyon Galerisi
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-champagne-500 to-champagne-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            Andora salonunun zengin masa yapısını, ışıltılı dekor konseptlerini ve unutulmaz anları birinci gözden keşfedin. (Büyütmek için görsellere tıklayın)
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-champagne-50/50 text-slate-700 hover:bg-champagne-100 border border-champagne-101"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid layout images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-champagne-100 bg-slate-50 aspect-4/3 shadow-2xs hover:shadow-lg transition-all"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Hover overlay mask */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10" />

                {/* Content Overlay Layout */}
                <div className="absolute inset-y-0 inset-x-0 p-6 flex flex-col justify-between text-white z-20 pointer-events-none transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="w-fit bg-champagne-500 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full text-white">
                    {item.categoryLabel}
                  </span>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-1.5">
                    <h3 className="font-display font-bold text-lg sm:text-xl leading-tight text-champagne-100">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Büyütmek için dokunun</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Instatram Action block */}
        <div className="mt-16 text-center border-t border-champagne-100/60 pt-10">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">
            <Heart className="w-4 h-4 text-pink-400 fill-pink-450" />
            Sosyal Medyada Canlı Yayınlar
          </span>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Haftalık düğünlerimizden en trend dekorları, gelinlerin heyecanlı hazırlık anlarını ve ses sistemlerimizi her hafta storylerimizde yayınlıyoruz.
          </p>
          <a
            href="https://www.instagram.com/andoraweddingevents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-champagne-700 font-bold bg-champagne-50 hover:bg-champagne-100/80 px-6 py-3.5 rounded-full border border-champagne-205 transition-colors group"
          >
            <Instagram className="w-5 h-5 text-pink-500" />
            <span>Daha fazlası için Instagram'ımızı ziyaret edin</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      {/* Fullscreen interactive zoom Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            
            {/* Modal Closer Mask click trigger */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[85vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 z-50 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative flex-1 overflow-hidden flex items-center justify-center">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-h-[65vh] w-full object-contain"
                  referrerPolicy="no-referrer"
                />
                
                {/* Upper Closer Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors focus:outline-none"
                  aria-label="Kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lower Descriptive Bar */}
              <div className="bg-slate-950 px-6 py-5 border-t border-slate-850 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs text-champagne-500 font-bold uppercase tracking-wider block mb-1">
                    {selectedImage.categoryLabel}
                  </span>
                  <h4 className="text-white font-display text-lg sm:text-xl font-bold">
                    {selectedImage.title}
                  </h4>
                </div>
                
                <a
                  href="#rezervasyon"
                  onClick={() => setSelectedImage(null)}
                  className="bg-gradient-to-r from-champagne-600 to-champagne-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl hover:shadow-lg transition-transform active:scale-95 whitespace-nowrap text-center"
                >
                  Bu Konseptle Teklif Al
                </a>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
