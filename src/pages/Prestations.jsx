import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Prestations() {
  const prestations = [
    {
      title: "Flash",
      description: "CAPTURER L’ESSENTIEL DE VOTRE IMAGE",
      img: "../../public/Icons/Photo/Tarifs/Tatouage.png",
      desc: [
        "Idéal pour portrait",
        "5 photos numériques",
        "Séance 35 minutes",
        "Galerie envoyée sous 3 jours",
      ],
      price: "90€",
    },
    {
      title: "Lumière",
      description: "IMAGER VOTRE ACTIVITÉ ET VOTRE UNIVERS",
      img: "../../public/Icons/Photo/Tarifs/Chambre.png",
      desc: [
        "L’entre deux parfait",
        "10 photos numériques",
        "Séance 1 heure",
        "Galerie envoyée sous 7 jours",
      ],
      price: "170€",
    },
    {
      title: "Horizon",
      description: "RACONTER VOTRE HISTOIRE ET ENRICHIR VOS SUPPORTS VISUELS",
      img: "../../public/Icons/Photo/Tarifs/Lac.png",
      desc: [
        "Reportage complet",
        "20 photos numériques",
        "Séance 1h à 1h30",
        "Galerie envoyée sous 15 jours",
      ],
      price: "250€",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background text-darkText pt-28 pb-16 px-6 flex flex-col items-center"
    >
      {/* === TITRE === */}
      <h1 className="font-title text-3xl sm:text-4xl text-primary mb-12 text-center">
        Prestations & Tarifs
      </h1>

      {/* === GRILLE DES FORMULES === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        
        {prestations.map((p, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-lightBeige rounded-xl shadow-subtle overflow-hidden border border-neutral/30"
          >
            <h2 className=" text-center font-title font-bold text-xl mt-5 text-darkText mb-4">
                {p.description}
              </h2>
            {/* IMAGE */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-78 object-cover"
              loading="lazy"
            />

            {/* CONTENU */}
            <div className="flex flex-col justify-between flex-grow p-6 text-center bg-secondary">
              <h2 className="font-title font-bold text-4xl text-darkText mb-4">
                {p.title}
              </h2>

              <ul className="space-y-2 text-sm sm:text-base font-text mb-6">
                {p.desc.map((line, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-2 text-darkText/90"
                  >
                    <Check size={16} className="text-primary" />
                    {line}
                  </li>
                ))}
              </ul>

              {/* === ÉTIQUETTE PRIX (plus ovale) === */}
              <div className="mt-auto flex justify-center items-center h-24">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative px-12 py-3 bg-[#e7d6b0]/70 backdrop-blur-sm border border-[#b7a47d]/60 rounded-[9999px] shadow-[0_0_15px_rgba(0,0,0,0.05)]"
                  style={{
                    transform: "scaleX(1.25) scaleY(0.85)",
                  }}
                >
                  {/* Contours décalés effet crayonné propre */}
                  <div className="absolute inset-0 rounded-[9999px] border-[2.5px] border-[#000]/80 scale-[1.05] rotate-[1.5deg] opacity-70"></div>
                  <div className="absolute inset-0 rounded-[9999px] border-[1.5px] border-[#000]/60 scale-[0.97] -rotate-[1.5deg] opacity-60"></div>

                  {/* Texte prix */}
                  <span className="relative z-10 font-title text-3xl sm:text-4xl text-[#000] tracking-wide">
                    {p.price}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === MINI VIDÉO / REEL === */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center font-title text-darkText text-lg"
      >
        Mini vidéo / Reel Instagram :{" "}
        <span className="font-semibold text-primary">150€</span>
      </motion.p>

      {/* === DÉTAILS SUPPLÉMENTAIRES === */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-4xl mt-10 text-center text-sm sm:text-base font-text text-darkText/90 leading-relaxed border-t border-neutral/40 pt-8"
      >
        Chaque séance comprend : la prise de contact, les frais kilométriques,
        la cession de droits, la sélection des meilleures images, la retouche
        professionnelle et la livraison en haute définition via une galerie en
        ligne.
      </motion.p>
    </motion.main>
  );
}
