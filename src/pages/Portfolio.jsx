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
} from "../components/Patterns";
import logo from "../../public/Icons/LogoSansFond.png";

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

  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (gallery, index) => {
    setSelectedGallery(gallery);
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedGallery(null);
    setSelectedIndex(null);
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev + 1) % selectedGallery.photos.length);
  };

  const showPrev = () => {
    setSelectedIndex(
      (prev) =>
        (prev - 1 + selectedGallery.photos.length) %
        selectedGallery.photos.length
    );
  };

  // --- Swipe mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    if (distance > 50) showNext();
    if (distance < -50) showPrev();

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <main className="min-h-screen bg-background text-darkText pt-8 flex flex-col items-center">
      {/* === HERO SECTION === */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-8 md:py-12 lg:py-14 max-w-5xl w-full">
        <motion.img
          src={logo}
          alt="Logo Carla Lamerain"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-56 sm:w-64 md:w-80"
        />

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-logo text-4xl sm:text-5xl md:text-6xl text-primary tracking-wide"
        >
          Carla Lamerain
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-sublogo text-base sm:text-lg md:text-xl mt-3 text-darkText"
        >
          Image votre savoir-faire
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-sm sm:text-base italic text-darkText/80 max-w-lg"
        >
          Créatrice d’images et de vidéos – j’imagine, j’image votre savoir-faire
          pour vos réseaux sociaux.
        </motion.p>
      </section>

      {/* === GALERIES === */}
      {galleries.map((gallery, index) => (
        <GallerySection
          key={index}
          index={index}
          title={gallery.title}
          photos={gallery.photos}
          onImageClick={(i) => openImage(gallery, i)}
        />
      ))}

      {/* === MODALE IMAGE (GRANDE) === */}
      <AnimatePresence>
        {selectedGallery && selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeImage}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image affichée sans animation */}
            <img
              src={selectedGallery.photos[selectedIndex]}
              alt="Photo agrandie"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl select-none"
              draggable={false}
            />

            {/* Bouton fermer */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white hover:text-gold transition"
            >
              <X size={36} />
            </button>

            {/* Boutons de navigation uniquement sur desktop */}
            <div className="hidden md:flex absolute justify-between w-full px-10 items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="text-white hover:text-gold transition"
              >
                <ChevronLeft size={48} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="text-white hover:text-gold transition"
              >
                <ChevronRight size={48} />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* === SECTION GALERIE === */
function GallerySection({ index, title, photos, onImageClick }) {
  const isSecondary = index % 2 === 0;
  const bgColor = isSecondary
    ? "bg-secondary text-white"
    : "bg-background text-darkText";

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

/* === CARROUSEL SANS ANIMATION === */
function FocusCarousel({ title, photos, onImageClick, isSecondary }) {
  const [index, setIndex] = useState(0);
  const [ratios, setRatios] = useState({});

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
      <h2
        className={`font-title font-semibold mb-8 w-full 
        text-center sm:text-left md:text-center 
        text-4xl sm:text-3xl md:text-4xl tracking-tight select-none
        ${isSecondary ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>

      <div className="relative w-full flex items-center justify-center">
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

        <div className="relative w-full h-[400px] flex items-center justify-center">
          {photos.map((src, i) => {
            const { x, scale, opacity, z } = getPosition(i);
            const ratio = ratios[src] || "1:1";
            const isWide = ratio === "16:9";

            return (
              <div
                key={i}
                style={{
                  transform: `translateX(${x}px) scale(${scale})`,
                  opacity,
                  zIndex: z,
                  transition: "none",
                }}
                className="absolute flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:brightness-110 duration-0"
                onClick={() => onImageClick(i)}
              >
                <img
                  src={src}
                  alt={title}
                  className={`object-cover rounded-2xl ${
                    isWide
                      ? "w-112 h-56 sm:w-128 sm:h-64 md:w-160 md:h-80"
                      : "w-64 h-64 sm:w-64 sm:h-64 md:w-80 md:h-80"
                  }`}
                />
              </div>
            );
          })}
        </div>

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
