"use client";

import { motion } from "motion/react";
import { Reveal, RevealGroup, fadeUp } from "./motion-helpers";
import { SITE } from "@/lib/site";

const barbers = [
  {
    name: "Dionis",
    role: "Maestro Barbero · Fundador",
    quote: "Cada corte cuenta una historia. Mi trabajo es escribirla bien.",
    img: "/barbers/dionis.jpg",
    specialty: "Fades · Diseños · Color",
    bookingUrl: "https://booksy.com/en-us/1555912_dioniscutz_barber-shop_15889_miami#ba_s=seo",
  },
  {
    name: "Jesus Mr Iconicutz",
    role: "Barbero Senior",
    quote: "Fades y barbas. Ese es todo el trabajo.",
    img: "/barbers/Mriconicutz.jpg",
    specialty: "Fades · Línea de Barba · Diseños",
    bookingUrl: "https://booksy.com/en-us/910914_mr-iconic-cutz_barber-shop_15889_miami",
  },
  {
    name: "Sebastian Tobon",
    role: "Barbero Senior · Estación #2",
    quote: "Si quieres el corte exactamente como lo describes, siéntate aquí.",
    img: "/barbers/sebastian.jpg",
    specialty: "Precisión · Fades · Estilos modernos",
    bookingUrl: "tel:+14077938183",
  },
  {
    name: "Jesus Lopez",
    role: "Barbero Senior",
    quote: "La barba es la firma del hombre. La diseño con respeto.",
    img: "/barbers/jesuslopez.jpg",
    specialty: "Barba · Afeitado clásico",
    bookingUrl: "https://booksy.com/en-us/1093810_jesusbarberr_barber-shop_15889_miami",
  },
  {
    name: "Juan",
    role: "Barber",
    quote: "Cada cliente sale como nuevo. Esa es la regla.",
    img: "/barbers/juan.jpg",
    specialty: "Cortes urbanos · Texturas · Diseños",
    bookingUrl: "https://booksy.com/en-us/1555909_kindocutz_barber-shop_15889_miami",
  },
];

export default function Barbers() {
  return (
    <section id="barberos" className="py-28 lg:py-40 bg-stone-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow text-stone-400 mb-6">Conoce el equipo</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-6xl leading-[1.05] tracking-tight uppercase mb-6">
              Conoce a nuestros <span className="text-gold">expertos</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone-400 text-base lg:text-lg font-light">
              Cada barbero aporta su propia experiencia, visión y responsabilidad por el
              resultado. Elige el tuyo.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700"
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
                  href={b.bookingUrl ?? SITE.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-stone-950 px-6 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:bg-stone-100 transition-colors text-center"
                >
                  Reservar con {b.name}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
