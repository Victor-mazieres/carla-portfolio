import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
  /* === Données principales === */
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

  /* === Navigation === */
  const openImage = (gallery, index) => {
    setSelectedGallery(gallery);
    setSelectedIndex(index);
  };
  const closeImage = () => {
    setSelectedGallery(null);
    setSelectedIndex(null);
  };
  const showNext = () =>
    setSelectedIndex((prev) => (prev + 1) % selectedGallery.photos.length);
  const showPrev = () =>
    setSelectedIndex(
      (prev) =>
        (prev - 1 + selectedGallery.photos.length) %
        selectedGallery.photos.length
    );

  /* === Swipe mobile === */
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
    <main
      className="min-h-screen bg-background text-darkText pt-8 flex flex-col items-center"
      role="main"
    >
      {/* === SEO / METADATA === */}
      <Helmet>
        <title>Portfolio — Carla Lamerain Photographe</title>
        <meta
          name="description"
          content="Découvrez le portfolio de Carla Lamerain, photographe professionnelle : portraits, artisans, entreprises et projets créatifs."
        />
        <meta
          name="keywords"
          content="portfolio photographe, Carla Lamerain, portrait, artisan, reportage photo, communication visuelle"
        />
        <meta property="og:title" content="Portfolio — Carla Lamerain" />
        <meta
          property="og:description"
          content="Découvrez les réalisations photo et projets professionnels de Carla Lamerain."
        />
        <meta property="og:image" content="/Icons/LogoSansFond.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="canonical" href="https://www.carlalamerain.fr/portfolio" />
        <meta name="author" content="Carla Lamerain" />
        <meta name="robots" content="index, follow" />
        <link rel="preload" as="image" href="/Icons/LogoSansFond.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Portfolio de Carla Lamerain",
            creator: {
              "@type": "Person",
              name: "Carla Lamerain",
              jobTitle: "Photographe professionnelle",
            },
            image: "https://www.carlalamerain.fr/Icons/LogoSansFond.png",
            url: "https://www.carlalamerain.fr/portfolio",
            description:
              "Portfolio photographique présentant les travaux de Carla Lamerain : reportages, portraits et créations visuelles.",
          })}
        </script>
      </Helmet>

      {/* === HERO SECTION === */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-8 md:py-12 lg:py-14 max-w-5xl w-full"
        aria-label="Présentation du portfolio"
      >
        <motion.img
          src={logo}
          alt="Logo Carla Lamerain"
          width="400"
          height="200"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-56 sm:w-64 md:w-80 select-none"
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
            <img
              src={selectedGallery.photos[selectedIndex]}
              alt={`Photo de la galerie ${selectedGallery.title}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl select-none"
              loading="lazy"
              decoding="async"
              draggable={false}
            />

            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white hover:text-gold transition"
              aria-label="Fermer la photo"
            >
              <X size={36} />
            </button>

            <div className="hidden md:flex absolute justify-between w-full px-10 items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="text-white hover:text-gold transition"
                aria-label="Photo précédente"
              >
                <ChevronLeft size={48} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="text-white hover:text-gold transition"
                aria-label="Photo suivante"
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
  const hasPrimaryBackground = isSecondary;
  const bgColor = isSecondary
    ? "bg-secondary text-white"
    : "bg-background text-darkText";

  return (
    <section
      className={`relative w-full py-20 overflow-hidden transition-all duration-500 ${bgColor}
        ${
          !hasPrimaryBackground
            ? "before:absolute before:inset-0 before:z-[5] before:shadow-[inset_0_40px_80px_rgba(0,0,0,0.08),inset_0_-40px_80px_rgba(0,0,0,0.08)] before:pointer-events-none"
            : ""
        }
      `}
      aria-labelledby={`gallery-${index}`}
    >
      {/* === PATTERN === */}
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

      {/* === CONTENU === */}
      <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
        <FocusCarousel
          title={title}
          photos={photos}
          onImageClick={onImageClick}
          isSecondary={isSecondary}
          id={`gallery-${index}`}
        />
      </div>
    </section>
  );
}
/* === CARROUSEL === */
function FocusCarousel({ title, photos, onImageClick, isSecondary, id }) {
  const [index, setIndex] = useState(0);
  const [ratios, setRatios] = useState({});

  /* === Préchargement pour connaître le ratio === */
  useEffect(() => {
    photos.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.loading = "lazy";
      img.decoding = "async";
      img.onload = () => {
        const ratio = img.width / img.height;
        setRatios((prev) => ({
          ...prev,
          [src]: ratio > 1.3 ? "16:9" : "1:1",
        }));
      };
    });
  }, [photos]);

  /* === Navigation === */
  const next = () => setIndex((i) => (i + 1) % photos.length);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);

  /* === Swipe mobile === */
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) next();
    if (distance < -50) prev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  /* === Positionnement dynamique avec effet 3D === */
  const getPosition = (i) => {
    const total = photos.length;
    let diff = (i - index + total) % total;
    if (diff > total / 2) diff -= total;

    let xBase = 140;
    if (window.innerWidth >= 768 && window.innerWidth < 1024) xBase = 220;
    if (window.innerWidth >= 1024) xBase = 280;

    const positions = {
      "-2": { x: -xBase * 2, scale: 0.7, opacity: 0.7, z: 5 },
      "-1": { x: -xBase, scale: 0.85, opacity: 0.9, z: 10 },
      "0": { x: 0, scale: 1.05, opacity: 1, z: 20 },
      "1": { x: xBase, scale: 0.85, opacity: 0.9, z: 10 },
      "2": { x: xBase * 2, scale: 0.7, opacity: 0.7, z: 5 },
    };
    return positions[diff] || { x: diff * xBase * 2, scale: 0.5, opacity: 0 };
  };

  return (
    <section
      className="flex flex-col items-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* === Titre === */}
      <h2
        id={id}
        className={`font-title font-semibold mb-8 w-full 
        text-center sm:text-left md:text-center 
        text-4xl sm:text-3xl md:text-4xl tracking-tight select-none
        ${isSecondary ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>

      {/* === Carrousel principal === */}
      <div className="relative w-full flex flex-col items-center justify-center overflow-visible perspective-1000">
        {/* Images avec effet 3D */}
        <div className="relative w-full min-h-[280px] sm:min-h-[380px] md:min-h-[460px] flex items-center justify-center overflow-visible">
          {photos.map((src, i) => {
            const { x, scale, opacity, z } = getPosition(i);
            const ratio = ratios[src] || "1:1";
            const isWide = ratio === "16:9";

            return (
              <motion.div
                key={i}
                style={{
                  transform: `translateX(${x}px) scale(${scale})`,
                  opacity,
                  zIndex: z,
                }}
                className="absolute flex-shrink-0 cursor-pointer rounded-3xl overflow-hidden shadow-2xl hover:brightness-110 transition-all duration-300 ease-out"
                onClick={() => onImageClick(i)}
              >
                <img
  src={src}
  alt={`${title} — photo ${i + 1}`}
  loading="lazy"
  decoding="async"
  className={`object-cover object-center rounded-3xl ${
    isWide
      ? "w-[80vw] max-w-[380px] sm:max-w-[520px] md:max-w-[700px] h-[400px] sm:h-[420px] md:h-[460px]"
      : "w-[65vw] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-[400px] sm:h-[420px] md:h-[460px]"
  }`}
  style={{ aspectRatio: isWide ? "16/9" : "3/4" }}
/>

              </motion.div>
            );
          })}
        </div>

        {/* === Boutons sous les images (tablette & desktop uniquement) === */}
        <div className="hidden md:flex items-center justify-center gap-8 mt-10">
          <button
            onClick={prev}
            aria-label="Photo précédente"
            className={`rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-md ${
              isSecondary
                ? "bg-primary/90 hover:bg-primary/70 text-white"
                : "bg-secondary/80 hover:bg-secondary text-white"
            }`}
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={next}
            aria-label="Photo suivante"
            className={`rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-md ${
              isSecondary
                ? "bg-primary/90 hover:bg-primary/70 text-white"
                : "bg-secondary/80 hover:bg-secondary text-white"
            }`}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      {/* === Indicateurs === */}
      <div className="flex flex-col items-center mt-6 space-y-2">
        <p
          className={`text-xs sm:text-sm ${
            isSecondary ? "text-white/70" : "text-darkText/70"
          }`}
        >
          {index + 1} / {photos.length}
        </p>
        <p className="md:hidden text-xs text-darkText/60 italic">
          Swipe pour faire défiler →
        </p>
      </div>
    </section>
  );
}
