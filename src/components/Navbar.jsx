import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/Icons/LogoSansFond.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Prestations / Tarifs", path: "/prestations" },
    { name: "À propos", path: "/apropos" },
    { name: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: { x: "100%", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md shadow-sm z-50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* === LOGO === */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setMenuOpen(false)}
        >
          <motion.img
            src={logo}
            alt="Logo Carla Lamerain"
            className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105"
            whileHover={{ rotate: 3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <span className="font-logo text-xl sm:text-2xl text-primary tracking-wide select-none">
            Carla Lamerain
          </span>
        </Link>

        {/* === NAV LINKS (DESKTOP) === */}
        <ul className="hidden md:flex gap-8 font-title text-darkText relative">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="relative group">
                <NavLink
                  to={link.path}
                  className={`transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }`}
                >
                  {link.name}
                </NavLink>

                {/* === BARRE ANIMÉE SOUS LE LIEN ACTIF === */}
                {isActive && (
                  <motion.div
                    layoutId="active-link-underline"
                    className="absolute bottom-[-4px] left-0 right-0 mx-auto h-[2px] bg-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* === BURGER MENU (MOBILE) === */}
        <div className="md:hidden flex items-center gap-2 text-white">
          <motion.span
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="font-title tracking-wide text-base sm:text-lg text-darkText select-none"
          >
            Menu
          </motion.span>
          <button
            className="text-darkText hover:text-primary transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-screen w-4/5 sm:w-2/3 bg-background/95 backdrop-blur-lg shadow-2xl z-40 border-l border-primary/20"
          >
            <div className="flex justify-end p-5">
              <button
                className="text-darkText hover:text-primary transition"
                onClick={() => setMenuOpen(false)}
              >
                <X size={30} />
              </button>
            </div>

            <motion.ul
              className="flex flex-col items-center justify-center gap-8 mt-10 font-title text-darkText text-lg"
              initial="hidden"
              animate="visible"
              variants={menuVariants}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.li key={link.path} variants={linkVariants} className="relative">
                    <NavLink
                      to={link.path}
                      className={`block text-center text-3xl sm:text-2xl transition-colors ${
                        isActive
                          ? "text-primary font-semibold"
                          : "hover:text-primary"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>

                    {/* Barre sous le lien actif sur mobile aussi */}
                    {isActive && (
  <motion.div
    layoutId="mobile-active-link"
    className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    exit={{ scaleX: 0 }}
    transition={{ duration: 0.3 }}
    style={{ transformOrigin: "left" }}
  />
)}
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 left-0 w-full text-center text-sm text-darkText/70 font-text"
            >
              © {new Date().getFullYear()} Carla Lamerain – Photographe
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
