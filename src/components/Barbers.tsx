"use client";

import { motion } from "motion/react";
import { Reveal, RevealGroup, fadeUp } from "./motion-helpers";
import { SITE } from "@/lib/site";

const barbers = [
  {
    name: "Dionis",
    role: "Master Barber · Founder",
    quote: "Cada corte cuenta una historia. Mi trabajo es escribirla bien.",
    img: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?auto=format&fit=crop&w=1400&q=85",
    specialty: "Fades · Diseños · Color",
  },
  {
    name: "Carlos",
    role: "Senior Barber",
    quote: "La barba es la firma del hombre. La diseño con respeto.",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=85",
    specialty: "Barba · Afeitado clásico",
  },
];

export default function Barbers() {
  return (
    <section id="barberos" className="py-28 lg:py-40 bg-stone-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow text-stone-400 mb-6">Meet the team</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-6xl leading-[1.05] tracking-tight uppercase mb-6">
              Conoce a nuestros <span className="text-cream">expertos</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone-400 text-base lg:text-lg font-light">
              Cada barbero aporta su propia experiencia, visión y responsabilidad por el
              resultado. Elige el tuyo.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {barbers.map((b) => (
            <motion.div
              key={b.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group rounded-2xl border border-stone-800 bg-stone-900/40 p-5 lg:p-6 hover:border-stone-700 hover:bg-stone-900/70 active:border-stone-600 transition-colors"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  src={b.img}
                  alt={b.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="px-3 pb-3">
                <p className="font-sans font-black text-2xl lg:text-3xl uppercase tracking-tight mb-2">
                  {b.name}
                </p>
                <p className="eyebrow text-stone-400 mb-5">
                  {b.role} · {b.specialty}
                </p>

                <p className="italic-display text-stone-300 text-lg mb-8 leading-relaxed">
                  &ldquo;{b.quote}&rdquo;
                </p>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={SITE.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-stone-950 px-6 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:bg-stone-100 transition-colors text-center"
                >
                  Book with {b.name}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
