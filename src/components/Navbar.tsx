"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import PhoneIcon from "./ui/PhoneIcon";
import { SITE } from "@/lib/site";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#barberos", label: "Barberos" },
  { href: "#galeria", label: "Galería" },
  { href: "#reseñas", label: "Reseñas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-950/85 backdrop-blur-md py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Dionis Cutz Barbershop"
            width={300}
            height={300}
            priority
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-36 lg:h-44" : "h-44 lg:h-64"
            }`}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-xs uppercase tracking-[0.2em] text-stone-200 hover:text-cream font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a
            href={SITE.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-stone-950 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-100 transition-colors"
          >
            Reservar
          </a>
          <a
            href={`tel:${SITE.phone.tel}`}
            className="border border-stone-500 text-stone-100 px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:border-cream hover:text-cream transition-colors flex items-center gap-2"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            Llamar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-stone-100"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 17h16"}
            />
          </svg>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden bg-stone-950/95 backdrop-blur-xl border-t border-stone-800"
        >
          <nav className="flex flex-col px-6 py-6 gap-1">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.05 + i * 0.06,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileTap={{ scale: 0.97, x: 4 }}
                className="group relative flex items-center justify-between text-stone-200 hover:text-cream uppercase tracking-[0.2em] text-sm font-medium py-3 border-b border-stone-800/60 active:text-cream"
              >
                <span className="relative">
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#CABA57] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity" />
                  {l.label}
                </span>
                <motion.span
                  className="text-[#CABA57] opacity-50 group-hover:opacity-100 group-active:opacity-100 transition-opacity"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </motion.a>
            ))}
            <div className="flex gap-3 mt-2">
              {/* CALL */}
              <motion.a
                whileTap={{ scale: 0.94 }}
                whileHover={{ scale: 1.02 }}
                href={`tel:${SITE.phone.tel}`}
                onClick={() => setOpen(false)}
                className="relative flex-1 overflow-hidden border border-stone-700 text-stone-100 active:border-cream active:text-cream px-4 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 bg-stone-900/60 backdrop-blur"
              >
                <motion.span
                  animate={{ rotate: [0, -12, 12, -12, 12, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="flex"
                >
                  <PhoneIcon className="w-3.5 h-3.5" />
                </motion.span>
                Llamar
              </motion.a>

              {/* BOOK */}
              <motion.a
                whileTap={{ scale: 0.94 }}
                whileHover={{ scale: 1.02 }}
                href={SITE.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="relative flex-1 group overflow-hidden bg-white text-stone-950 px-4 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 shadow-[0_8px_24px_-6px_rgba(202,186,87,0.45)]"
              >
                <motion.span
                  initial={{ x: "-150%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#CABA57]/40 to-transparent pointer-events-none"
                />
                <motion.span
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-px rounded-full pointer-events-none"
                  style={{
                    boxShadow:
                      "0 0 0 2px rgba(202, 186, 87, 0.35), 0 0 18px rgba(226, 209, 115, 0.5)",
                  }}
                />
                <span className="relative">Reservar</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
