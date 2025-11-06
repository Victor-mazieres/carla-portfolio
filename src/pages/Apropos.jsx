import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, ChevronUp } from "lucide-react";
import portrait from "../../public/Icons/CarlaSansFond.png";

export default function Apropos() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-28"
    >
      {/* === TITRE === */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="font-title text-3xl sm:text-4xl text-primary mb-6 text-center"
      >
        À propos de moi
      </motion.h1>

      {/* === BANDE PRINCIPALE === */}
      <section className="relative w-full bg-secondary px-6 sm:px-10 pb-10 sm:pb-0 flex justify-center overflow-hidden">
        {/* === BANDE DIAGONALE EN ARRIÈRE PLAN === */}
        <div className="absolute right-0 top-0 h-full w-[50%] bg-primary/10 transform -skew-x-12 origin-right pointer-events-none"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl z-10">
          {/* === MOBILE : IMAGE + FLÈCHES === */}
          <div className="relative flex flex-row items-center justify-center gap-4 sm:gap-6 md:hidden">
            {/* IMAGE (statique) */}
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 w-full h-full blur-2xl bg-primary/25 rounded-full scale-100"></div>
              <img
                src={portrait}
                alt="Carla Lamerain"
                className="relative w-64 sm:w-72 object-contain drop-shadow-2xl z-10"
              />
            </div>

            {/* FLÈCHES À DROITE SUR MOBILE */}
            <div className="flex flex-col gap-3 text-primary items-center">
              {[...Array(4)].map((_, i) => (
                <ChevronUp
                  key={i}
                  size={48}
                  strokeWidth={1.2}
                  className="text-white opacity-70 blur-[1px] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                />
              ))}
            </div>
          </div>

          {/* === TEXTE SOUS L’IMAGE SUR MOBILE === */}
          <motion.section
            id="apropos-mobile"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="block md:hidden text-center flex flex-col items-center border-t border-neutral/40 w-full pt-8"
          >
            <p className="max-w-3xl font-text text-base sm:text-lg leading-relaxed text-darkText/90 text-pretty">
              <strong className="font-semibold">
                Mon chemin vers la photographie est avant tout celui d'une passion.
              </strong>
              <br />
              <br />
              Depuis toujours, j’ai ce besoin d’immortaliser les moments, les lumières et les émotions.
              <br />
              <br />
              C’est en réalisant le pouvoir unique d'une image — celui de raconter une histoire
              ou de figer la beauté d'un instant fugace — que l'envie est née de mettre mon regard
              au service de vos projets professionnels et de vos précieux souvenirs personnels.
            </p>
          </motion.section>

          {/* === DESKTOP : IMAGE + FLÈCHES + TEXTE === */}
          <div className="hidden md:flex flex-row items-center justify-center gap-5 md:gap-5">
            {/* IMAGE (statique) */}
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 w-full h-full blur-2xl bg-primary/25 rounded-full scale-100"></div>
              <img
                src={portrait}
                alt="Carla Lamerain"
                className="relative w-72 md:w-96 object-contain drop-shadow-2xl z-10"
              />
            </div>

            {/* FLÈCHES + TEXTE */}
            <div className="relative flex items-center justify-center md:justify-start gap-8">
              {/* FLÈCHES À GAUCHE */}
              <div className="flex flex-col gap-4 text-primary items-center">
                {[...Array(5)].map((_, i) => (
                  <ChevronUp
                    key={i}
                    size={56}
                    strokeWidth={1.3}
                    className="text-white opacity-70 blur-[1px] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  />
                ))}
              </div>

              {/* TEXTE */}
              <motion.section
                id="apropos-desktop"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-left flex flex-col items-start border-t border-neutral/40 w-full pt-6 sm:pt-8"
              >
                <p className="max-w-2xl font-text text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose text-darkText text-pretty">
                  <strong className="font-semibold">
                    Mon chemin vers la photographie est avant tout celui d'une passion.
                  </strong>
                  <br />
                  <br />
                  Depuis toujours, j’ai ce besoin d’immortaliser les moments, les lumières et les émotions.
                  <br />
                  <br />
                  C’est en réalisant le pouvoir unique d'une image — celui de raconter une histoire
                  ou de figer la beauté d'un instant fugace — que l'envie est née de mettre mon regard
                  au service de vos projets professionnels et de vos précieux souvenirs personnels.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </section>

      {/* === MON OBJECTIF === */}
      <motion.section
        id="objectif"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 sm:px-10 py-16 sm:py-20 md:py-24 text-center flex flex-col items-center w-full space-y-8"
      >
        <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-primary">
          Mon objectif
        </h2>

        <p className="max-w-3xl font-text text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose text-darkText/90 text-pretty">
          <strong className="font-semibold text-darkText">
            Mettre en valeur votre activité professionnelle !
          </strong>
          <br />
          <br />
          Photographe pour professionnels, artisans et créateurs, je mets en lumière votre activité
          à travers des images naturelles, actuelles et impactantes.
          <br />
          <br />
          Ensemble, nous créons un reportage visuel pour vos réseaux sociaux, votre site web ou vos supports
          de communication.
          <br />
          <br />
          Je réalise aussi des séances photo pour les particuliers — portraits, photos de famille ou tout autre projet personnel.
          <br />
          <br />
          <em className="text-primary font-medium">Une image vaut mille mots.</em>
        </p>

        {/* === BARRE DE SÉPARATION === */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-[3px] w-1/3 bg-primary rounded-full origin-center"
        ></motion.div>
      </motion.section>

      {/* === BANDEAU MONTAGNE / CONTACT === */}
      <section className="relative w-full overflow-hidden">
        {/* --- SVG Montagnes intégré dans le fond --- */}
        <div className="absolute inset-0 -z-10">
          <svg
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0,170 L100,130 L250,150 L400,100 L600,160 L800,90 L1000,130 L1200,160 L1200,300 L0,300 Z"
              fill="#a26740"
              opacity="0.6"
            />
            <path
              d="M0,190 L120,140 L300,190 L500,120 L700,180 L900,130 L1100,200 L1200,180 L1200,300 L0,300 Z"
              fill="#e7dacc"
              opacity="0.7"
            />
            <path
              d="M0,220 L150,150 L350,210 L550,160 L750,210 L950,140 L1150,210 L1200,190 L1200,300 L0,300 Z"
              fill="#ece3d9"
            />
          </svg>
        </div>

        {/* --- Contenu du bandeau --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-beige px-6 sm:px-10 py-5 sm:py-20 md:py-24 flex flex-col items-center justify-center text-center space-y-6"
        >
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl mb-2 text-beige">
            On en discute ?
          </h2>

          <p className="font-text text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-beige/90">
            Vous souhaitez collaborer ou simplement échanger sur un projet photo ?
            <br />
            Je serai ravie d’en discuter autour d’un café ou par message.
          </p>

          {/* --- Liens de contact --- */}
          <div className="flex flex-row justify-center items-center gap-12 sm:gap-8 mt-6 flex-wrap">
            <a
              href="mailto:clamerain.photo@gmail.com"
              className="flex items-center justify-center gap-2 bg-beige/10 sm:px-5 sm:py-2 rounded-full hover:bg-beige/20 transition"
            >
              <Mail className="w-7 h-7 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">clamerain.photo@gmail.com</span>
            </a>

            <a
              href="tel:0647159369"
              className="flex items-center justify-center gap-2 bg-beige/10 sm:px-5 sm:py-2 rounded-full hover:bg-beige/20 transition"
            >
              <Phone className="w-7 h-7 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">06 47 15 93 69</span>
            </a>

            <a
              href="https://www.instagram.com/car_laphotographie"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center gap-2 bg-beige/10 sm:px-5 sm:py-2 rounded-full hover:bg-beige/20 transition"
            >
              <Instagram className="w-8 h-8 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">@car_laphotographie</span>
            </a>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
