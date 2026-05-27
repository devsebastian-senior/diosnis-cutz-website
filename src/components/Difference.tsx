"use client";

import { motion } from "motion/react";
import { Reveal, RevealGroup, fadeUp } from "./motion-helpers";

const principles = [
  {
    title: "Precisión sin prisa",
    desc: "Cada corte se toma el tiempo necesario. Sin atajos, sin clientes apurados.",
  },
  {
    title: "Productos premium",
    desc: "Trabajamos con marcas profesionales que respetan tu piel y cabello.",
  },
  {
    title: "Ambiente exclusivo",
    desc: "Espacio diseñado para que te relajes mientras trabajamos en tu look.",
  },
  {
    title: "Asesoría personal",
    desc: "Analizamos tu rostro, estilo de vida y rutina para recomendarte lo ideal.",
  },
  {
    title: "Higiene rigurosa",
    desc: "Herramientas esterilizadas y protocolos estrictos en cada cliente.",
  },
  {
    title: "Resultados garantizados",
    desc: "Si no estás 100% satisfecho, lo arreglamos. Sin excusas.",
  },
];

export default function Difference() {
  return (
    <section className="py-28 lg:py-40 bg-stone-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
          <Reveal>
            <p className="eyebrow text-stone-400 mb-6">La diferencia Dionis</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-6xl leading-[1.05] tracking-tight uppercase">
              La diferencia Dionis —<br />
              <span>por qué los clientes</span>{" "}
              <span className="text-gold">nos eligen</span>
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-2xl border border-stone-800 bg-stone-900/40 p-8 lg:p-10 hover:border-stone-700 hover:bg-stone-900/70 active:border-stone-600 active:bg-stone-900/80 transition-colors"
            >
              <p className="text-stone-500 text-sm font-light mb-8">
                0{i + 1}.
              </p>
              <h3 className="font-sans font-black text-xl lg:text-2xl uppercase tracking-tight mb-5 leading-tight">
                {p.title}
              </h3>
              <p className="text-stone-400 leading-relaxed font-light text-sm lg:text-base">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
