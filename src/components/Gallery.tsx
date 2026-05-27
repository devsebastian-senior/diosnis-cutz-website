"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, RevealGroup, scaleIn } from "./motion-helpers";
import { SITE } from "@/lib/site";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
];

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-28 lg:py-40 bg-stone-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
          <Reveal>
            <p className="eyebrow text-stone-400 mb-6">Nuestro trabajo</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-6xl leading-[1.05] tracking-tight uppercase">
              Nuestro trabajo —{" "}
              <span className="text-gold">cortes & estilos</span>
            </h2>
          </Reveal>
        </div>

        <RevealGroup
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-16 lg:mb-20"
        >
          {images.map((src, i) => {
            const isHovered = hovered === i;
            const isDimmed = hovered !== null && !isHovered;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative aspect-[2/3] overflow-hidden bg-stone-800 rounded-2xl transition-all duration-500 ease-out ${
                  isHovered ? "scale-[1.04] z-10" : ""
                } ${isDimmed ? "opacity-50 blur-[3px]" : "opacity-100 blur-0"}`}
              >
                <img
                  src={src}
                  alt={`Corte ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </RevealGroup>

        <Reveal>
          <div className="max-w-2xl mx-auto rounded-2xl border border-stone-800 bg-stone-900/40 p-10 lg:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-stone-700 mb-6">
              <InstagramIcon className="w-6 h-6 text-stone-100" />
            </div>
            <h3 className="font-sans font-black text-2xl lg:text-3xl uppercase tracking-tight mb-3">
              Más en Instagram
            </h3>
            <p className="text-stone-400 font-light mb-8">
              Cortes frescos, transformaciones e inspiración diaria.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 lg:gap-3 max-w-full bg-stone-900 border border-stone-700 hover:border-cream text-stone-100 hover:text-cream px-5 sm:px-8 py-3.5 lg:py-4 rounded-full text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold transition-colors whitespace-nowrap"
            >
              <InstagramIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4 flex-shrink-0" />
              {SITE.social.instagramHandle}
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
