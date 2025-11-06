import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Globe, ChevronUp } from "lucide-react";
import portrait from "../../public/Icons/CarlaSansFond.png";

export default function Apropos() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-28 pb-8"
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
      <section className="relative w-full bg-secondary px-6 flex justify-center overflow-hidden">
        {/* === BANDE DIAGONALE EN ARRIÈRE PLAN === */}
        <div className="absolute right-0 top-0 h-full w-[45%] bg-primary/10 transform -skew-x-12 origin-right pointer-events-none"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl z-10">
          {/* === IMAGE === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Halo doux */}
            <div className="absolute inset-0 w-full h-full blur-xl bg-primary/25 rounded-full scale-100"></div>

            <img
              src={portrait}
              alt="Carla Lamerain"
              className="relative w-64 sm:w-80 md:w-96 object-contain drop-shadow-2xl z-10"
            />
          </motion.div>

          {/* === TEXTE + FLÈCHES === */}
          <div className="relative flex items-center justify-center md:justify-start gap-6">
            {/* Flèches rouges à gauche du texte */}
            <div className="flex flex-col gap-4 text-primary items-center">
  {[...Array(5)].map((_, i) => (
    <ChevronUp
      key={i}
      size={64}
      strokeWidth={2}
      className="text-white opacity-70 blur-[1px] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
    />
  ))}
</div>


            {/* === TEXTE === */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-text text-sm sm:text-base md:text-lg leading-relaxed text-left max-w-2xl text-darkText"
            >
              <p>
                <strong>Carla Lamerain</strong>, créatrice d’images et de vidéos, accompagne{" "}
                <strong>professionnels, artisans et particuliers</strong> dans la mise en valeur
                de leur univers visuel.
              </p>
              <br />
              <p>
                Son approche repose sur la lumière, la sincérité et l’émotion : chaque cliché est
                pensé pour <strong>raconter une histoire et sublimer le savoir-faire</strong> de ceux
                qu’elle photographie.
              </p>
              <br />
              <p className="italic text-darkText/80">
                « J’imagine, j’image votre savoir-faire pour vos réseaux sociaux. »
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === CONTACT === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center gap-4 text-darkText font-text text-center mt-8"
      >
        <p className="text-lg font-semibold text-primary">On en discute ?</p>

<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-2">
  <a
    href="mailto:clamerain.photo@gmail.com"
    className="flex items-center gap-2 hover:text-primary transition"
  >
    <Mail size={18} /> clamerain.photo@gmail.com
  </a>

  <a
    href="tel:0647159369"
    className="flex items-center gap-2 hover:text-primary transition"
  >
    <Phone size={18} /> 06 47 15 93 69
  </a>

  <a
    href="https://www.instagram.com/car_laphotographie"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
    className="flex items-center gap-2 hover:text-primary transition"
  >
    <Instagram size={22} />
    <span>@car_laphotographie</span>
  </a>
</div>

      </motion.div>
    </motion.main>
  );
}
