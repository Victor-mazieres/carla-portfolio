import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-lightBeige text-darkText pt-32 px-6 flex flex-col items-center"
    >
      <h1 className="font-title text-3xl sm:text-4xl text-primary mb-8 text-center">
        Contact
      </h1>

      <p className="max-w-xl text-center mb-10 font-text">
        Une question, un projet ou une demande de devis ?  
        N’hésitez pas à me contacter, je vous répondrai avec plaisir.
      </p>

      <form
        action="https://formspree.io/f/your-form-id" // tu mettras ton ID Formspree ici
        method="POST"
        className="bg-background shadow-soft p-8 rounded-xl w-full max-w-lg flex flex-col gap-4"
      >
        <input
          type="text"
          name="nom"
          placeholder="Votre nom / entreprise"
          className="border border-neutral/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-text"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre e-mail"
          className="border border-neutral/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-text"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Votre message"
          className="border border-neutral/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-text"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-white flex items-center justify-center gap-2 py-3 rounded-lg hover:brightness-110 transition font-title"
        >
          <Send size={18} />
          Envoyer
        </button>
      </form>
    </motion.main>
  );
}
