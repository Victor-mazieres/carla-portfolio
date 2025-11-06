import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Prestations() {
  const prestations = [
    {
      title: "Flash",
      img: "/tarif1.jpg",
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
      img: "/tarif2.jpg",
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
      img: "/tarif3.jpg",
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
      <h1 className="font-title text-3xl sm:text-4xl text-primary mb-12 text-center">
        Prestations & Tarifs
      </h1>

      {/* === Grille des formules === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {prestations.map((p, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-lightBeige rounded-xl shadow-subtle overflow-hidden border border-neutral/30"
          >
            {/* Image */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />

            {/* Contenu texte */}
            <div className="flex flex-col justify-between flex-grow p-6 text-center">
              <h2 className="font-title text-2xl text-darkText mb-4">
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

{/* === Cercle crayonné réaliste (comme sur l’exemple exact) === */}
<div className="mt-auto relative flex justify-center items-center h-24">
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 220 100"
    className="absolute w-[180px] h-[80px] -rotate-2 z-0"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 1.8, ease: "easeInOut" }}
  >
    {/* Trait 1 (courbe ovale du bas) */}
    <path
      d="M15,55 C40,80 180,80 205,55 C175,88 45,88 15,55 Z"
      fill="none"
      stroke="#000"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Trait 2 (léger décalage, courbe ovale du haut) */}
    <path
      d="M20,50 C50,25 170,25 200,50 C170,78 50,78 20,50 Z"
      fill="none"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>

  <motion.span
    className="relative z-10 font-title text-3xl sm:text-4xl text-[#000]"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
    transition={{
      delay: 1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    }}
  >
    {p.price}
  </motion.span>
</div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* === Mini vidéo / Reel Instagram === */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center font-title text-darkText text-lg"
      >
        Mini vidéo / Reel Instagram :{" "}
        <span className="font-semibold text-primary">150€</span>
      </motion.p>

      {/* === Détails supplémentaires === */}
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
