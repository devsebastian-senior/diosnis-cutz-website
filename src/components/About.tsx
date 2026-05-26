"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./motion-helpers";

const slides = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1521490683765-fb2b86f0b1e7?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=85",
];

const features = [
  "Ubicación Premium",
  "Barberos Expertos",
  "Cita o Walk-in",
];

export default function About() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-28 lg:py-40 bg-stone-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={idx}
                  src={slides[idx]}
                  alt={`Dionis Cutz interior ${idx + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="group h-2 flex items-center"
                  aria-label={`Ir a slide ${i + 1}`}
                >
                  <motion.span
                    animate={{
                      width: idx === i ? 28 : 16,
                      backgroundColor:
                        idx === i ? "#efe6d2" : "rgba(168, 162, 158, 0.4)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="h-1 rounded-full block"
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-stone-400 mb-6">About Dionis Cutz</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-sans font-black text-4xl lg:text-6xl leading-[1.05] tracking-tight uppercase mb-8">
              Premium Men&apos;s
              <br />
              Grooming in
              <br />
              <span className="text-cream">Tu Ciudad.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone-300 text-base lg:text-lg leading-relaxed font-light mb-12 max-w-xl">
              Dionis Cutz es una barbería premium. Abierta todos los días de 9 AM a 8
              PM. Ofrecemos cortes de precisión, afeitado con toalla caliente, diseño
              de barba, color, manicure y pedicure masculino — todo adaptado a tu
              cabello, rostro y estilo personal. El grooming en Dionis Cutz es
              estándar, no rutina.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-xl">
              {features.map((f) => (
                <div key={f}>
                  <div className="w-10 h-px bg-cream mb-4" />
                  <p className="text-xs lg:text-sm uppercase tracking-[0.2em] font-bold text-stone-100">
                    {f}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
