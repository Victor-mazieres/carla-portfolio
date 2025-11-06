import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import logo from "../../public/Icons/logo_extrait_2_transparent.png"; // ton logo montagne+appareil photo

export default function Home() {
  return (
    <main className="bg-background text-darkText min-h-screen flex flex-col items-center font-text">

      {/* === HERO SECTION === */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 lg:py-40 max-w-5xl w-full">
        <motion.img
          src={logo}
          alt="Logo Carla Lamerain"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-40 sm:w-48 md:w-64 mb-8"
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
          Créatrice d’images et de vidéos – j’imagine, j’image votre savoir-faire pour vos réseaux sociaux.
        </motion.p>
      </section>

      {/* === MON OBJECTIF === */}
      <motion.section
        id="objectif"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-lightBeige py-20 md:py-28 px-6 text-center flex flex-col items-center w-full"
      >
        <h2 className="font-title text-3xl md:text-4xl text-primary mb-10">
          Mon objectif
        </h2>

        <p className="max-w-3xl font-text text-sm sm:text-base md:text-lg leading-relaxed text-darkText/90 space-y-2 text-pretty">
          <strong className="font-semibold text-darkText">
            Mettre en valeur votre activité professionnelle !
          </strong>{" "}
          <br />
          Photographe pour professionnels, artisans et créateurs, je mets en
          lumière votre activité à travers des images naturelles, actuelles et
          impactantes. <br />
          Ensemble, nous créons un reportage visuel pour vos réseaux sociaux,
          site web ou vos supports de communication. <br />
          Je réalise aussi des séances photo pour les particuliers, incluant des
          portraits, des photos de famille ou tout autre projet personnel. <br />
          <em className="text-primary font-medium">Une image vaut mille mots.</em>
        </p>
      </motion.section>

      {/* === À PROPOS === */}
      <motion.section
        id="apropos"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-background py-20 md:py-28 px-6 text-center flex flex-col items-center border-t border-neutral/40 w-full"
      >
        <h2 className="font-title text-3xl md:text-4xl text-primary mb-10">
          À propos de moi
        </h2>

        <p className="max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed font-text">
          <strong className="font-semibold">
            Mon chemin vers la photographie est avant tout celui d'une passion.
          </strong>{" "}
          Depuis toujours, j’ai ce besoin d’immortaliser les moments, les
          lumières et les émotions. C’est en réalisant le pouvoir unique d'une
          image, celui de raconter une histoire ou de figer la beauté d'un
          instant fugace, que l'envie est née de mettre mon regard au service de
          vos projets professionnels et de vos précieux souvenirs personnels.
        </p>
      </motion.section>

      {/* === FOOTER === */}
      <footer className="bg-secondary py-10 px-6 text-center mt-auto w-full">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-logo text-2xl md:text-3xl text-primary mb-6"
        >
          Carla Lamerain
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center gap-6 mb-6"
        >
          <a
            href="#"
            aria-label="Instagram"
            className="text-darkText hover:text-primary transition"
          >
            <Instagram size={26} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-darkText hover:text-primary transition"
          >
            <Facebook size={26} />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-text text-xs sm:text-sm md:text-base text-darkText/80"
        >
          © {new Date().getFullYear()} Carla Lamerain — Tous droits réservés
        </motion.p>
      </footer>
    </main>
  );
}
