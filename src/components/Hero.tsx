"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import PhoneIcon from "./ui/PhoneIcon";
import { SITE } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=2400&q=85')",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-transparent to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 lg:pb-32 pt-56 lg:pt-72"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow text-cream mb-8"
          >
            Premium Barbershop · Est. 2020
          </motion.p>

          <h1 className="font-display font-medium text-[3.5rem] sm:text-7xl lg:text-[7.5rem] leading-[0.95] mb-8 tracking-tight overflow-hidden">
            <motion.span
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="block"
            >
              Look sharp.
            </motion.span>
            <motion.span
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="block"
            >
              <span className="italic-display text-gold">Stay</span> unstoppable.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg lg:text-xl text-stone-300 max-w-xl mb-12 leading-relaxed font-light"
          >
            En Dionis Cutz el grooming no es rutina, es estándar. Cortes de precisión,
            afeitado clásico y atención al detalle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={SITE.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-stone-950 px-10 py-5 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:bg-stone-100 transition-colors text-center"
            >
              Book Online
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${SITE.phone.tel}`}
              className="border border-stone-400/60 text-stone-100 px-10 py-5 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:border-cream hover:text-cream transition-colors flex items-center justify-center gap-2.5"
            >
              <PhoneIcon className="w-4 h-4" />
              Call {SITE.phone.display}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-6 text-stone-300 text-sm"
          >
            <div className="flex gap-1 text-cream">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.08 }}
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118L10 14.347l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.644 8.354c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </motion.svg>
              ))}
            </div>
            <span className="font-light tracking-wide">5.0 on Google · +200 clientes</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-end gap-2 text-stone-400 text-xs uppercase tracking-[0.3em]"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-stone-400 origin-top"
        />
      </motion.div>
    </section>
  );
}
