import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Pattern1,
  Pattern2,
  Pattern3,
  Pattern4,
  Pattern5,
  Pattern6,
  Pattern7,
} from "../components/Patterns"; // <-- import des 7 patterns

export default function Portfolio() {
  const galleries = [
    {
      title: "Aura Wake Park",
      photos: [
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Cerf.jpeg",
        "/Icons/Photo/Cheval.jpg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Cerf.jpeg",
      ],
    },
    {
      title: "Artisan Tanneur",
      photos: [
        "/Icons/Photo/Chien.jpg",
        "/Icons/Photo/Renard.jpg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Cerf.jpeg",
      ],
    },
    {
      title: "Altiservice",
      photos: [
        "/Icons/Photo/Renard.jpg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Cheval.jpg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Cerf.jpeg",
      ],
    },
    {
      title: "Surf QuickPro",
      photos: [
        "/Icons/Photo/Cerf.jpeg",
        "/Icons/Photo/Chien.jpg",
        "/Icons/Photo/Renard.jpg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Cerf.jpeg",
      ],
    },
    {
      title: "Enfile Moi",
      photos: [
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Cerf.jpeg",
        "/Icons/Photo/Chien.jpg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Cerf.jpeg",
      ],
    },
    {
      title: "Insolite des Pyrénées",
      photos: [
        "/Icons/Photo/Cheval.jpg",
        "/Icons/Photo/Renard.jpg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Cerf.jpeg",
      ],
    },
    {
      title: "Tatoueur",
      photos: [
        "/Icons/Photo/Chien.jpg",
        "/Icons/Photo/Cerf.jpeg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Biche.jpg",
        "/Icons/Photo/Cerf.jpeg",
      ],
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen bg-background text-darkText pt-32 flex flex-col items-center">
      {/* === EN-TÊTE === */}
      <div className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto mb-20 text-center">
        <h1 className="font-title text-4xl text-primary mb-6">Portfolio</h1>
        <p className="max-w-2xl mx-auto text-base font-text">
          Découvrez mes séries photographiques : des moments uniques capturés
          avec sensibilité et passion.
        </p>
      </div>

      {/* === GALERIES === */}
      {galleries.map((gallery, index) => (
        <GallerySection
          key={index}
          index={index}
          title={gallery.title}
          photos={gallery.photos}
          onImageClick={setSelectedImage}
        />
      ))}

      {/* === MODALE D’IMAGE === */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Photo agrandie"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition"
            >
              <X size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* === SECTION GALERIE === */
function GallerySection({ index, title, photos, onImageClick }) {
  const isSecondary = index % 2 === 0;
  const bgColor = isSecondary ? "bg-secondary text-white" : "bg-background text-darkText";

  return (
    <section className={`relative w-full py-20 overflow-hidden ${bgColor}`}>
      {isSecondary && (
        <>
          {index === 0 && <Pattern1 />}
          {index === 2 && <Pattern2 />}
          {index === 4 && <Pattern3 />}
          {index === 6 && <Pattern4 />}
          {index === 8 && <Pattern5 />}
          {index === 10 && <Pattern6 />}
          {index === 12 && <Pattern7 />}
        </>
      )}

      <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
        <FocusCarousel
          title={title}
          photos={photos}
          onImageClick={onImageClick}
          isSecondary={isSecondary}
        />
      </div>
    </section>
  );
}

/* === CARROUSEL AVEC DÉTECTION AUTOMATIQUE DU RATIO === */
function FocusCarousel({ title, photos, onImageClick, isSecondary }) {
  const [index, setIndex] = useState(0);
  const [ratios, setRatios] = useState({});

  // Détection automatique du ratio (1:1 ou 16:9)
  useEffect(() => {
    photos.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const ratio = img.width / img.height;
        setRatios((prev) => ({
          ...prev,
          [src]: ratio > 1.3 ? "16:9" : "1:1",
        }));
      };
    });
  }, [photos]);

  const next = () => setIndex((i) => (i + 1) % photos.length);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);

  const getPosition = (i) => {
    const total = photos.length;
    let diff = (i - index + total) % total;
    if (diff > total / 2) diff -= total;

    const positions = {
      "-2": { x: -400, scale: 0.7, opacity: 1, z: 5 },
      "-1": { x: -200, scale: 0.85, opacity: 1, z: 10 },
      "0": { x: 0, scale: 1.1, opacity: 1, z: 20 },
      "1": { x: 200, scale: 0.85, opacity: 1, z: 10 },
      "2": { x: 400, scale: 0.7, opacity: 1, z: 5 },
    };

    return positions[diff] || { x: diff * 400, scale: 0.5, opacity: 0 };
  };

  return (
    <section className="flex flex-col items-center overflow-hidden">
      {/* === TITRE RESPONSIVE === */}
      <h2
        className={`font-title font-semibold mb-8 w-full 
        text-center sm:text-left md:text-center 
        text-4xl sm:text-3xl md:text-4xl tracking-tight select-none
        ${isSecondary ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>

      {/* === CONTENEUR === */}
      <div className="relative w-full flex items-center justify-center">
        {/* Bouton précédent */}
        <button
          onClick={prev}
          className={`absolute left-0 z-50 rounded-full p-2 transition-transform hover:scale-110 ${
            isSecondary
              ? "bg-primary/90 hover:bg-primary/70 text-white"
              : "bg-secondary/80 hover:bg-secondary text-white"
          }`}
        >
          <ChevronLeft size={28} />
        </button>

        {/* Carrousel */}
        <div className="relative w-full h-[400px] flex items-center justify-center">
          {photos.map((src, i) => {
            const { x, scale, opacity, z } = getPosition(i);
            const ratio = ratios[src] || "1:1";
            const isWide = ratio === "16:9";

            return (
              <motion.div
                key={i}
                animate={{ x, scale, opacity, zIndex: z }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 18,
                  mass: 0.8,
                }}
                className="absolute flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:brightness-110 transition-all duration-300"
                onClick={() => onImageClick(src)}
              >
                <motion.img
                  src={src}
                  alt={title}
                  initial={{ scale: 1 }}
                  animate={{ scale: i === index ? 1.05 : 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`object-cover rounded-2xl ${
                    isWide
                      ? "w-112 h-56 sm:w-128 sm:h-64 md:w-160 md:h-80"
                      : "w-64 h-64 sm:w-64 sm:h-64 md:w-80 md:h-80"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bouton suivant */}
        <button
          onClick={next}
          className={`absolute right-0 z-50 rounded-full p-2 transition-transform hover:scale-110 ${
            isSecondary
              ? "bg-primary/90 hover:bg-primary/70 text-white"
              : "bg-secondary/80 hover:bg-secondary text-white"
          }`}
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
