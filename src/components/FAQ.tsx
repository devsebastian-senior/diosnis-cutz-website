"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, RevealGroup, fadeUp } from "./motion-helpers";

const faqs = [
  { q: "¿Necesito cita previa?", a: "Recomendamos reservar para garantizar tu horario, pero también recibimos walk-ins sujetos a disponibilidad." },
  { q: "¿Cuánto dura un corte?", a: "Un corte clásico toma alrededor de 45 minutos. Combos de corte + barba alrededor de 75 minutos." },
  { q: "¿Aceptan tarjeta?", a: "Sí, aceptamos efectivo, tarjeta y transferencia." },
  { q: "¿Tienen estacionamiento?", a: "Contamos con estacionamiento gratuito para clientes." },
  { q: "¿Cuál es su política de cancelación?", a: "Cancelaciones con menos de 2 horas de anticipación pueden tener cargo del 50%." },
  { q: "¿Atienden niños?", a: "Sí, ofrecemos cortes infantiles con atención especializada para los más pequeños." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 lg:py-40 bg-stone-950">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <Reveal>
            <p className="eyebrow text-cream mb-6">Preguntas frecuentes</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl lg:text-7xl leading-[1.02] tracking-tight">
              <span className="italic-display text-gold">Todo</span> lo que necesitas saber.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="border-t border-stone-800">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border-b border-stone-800"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 lg:py-8 text-left group"
              >
                <span className="font-display text-xl lg:text-2xl group-hover:text-cream transition-colors tracking-tight pr-6">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-cream text-2xl flex-shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-stone-400 leading-relaxed font-light pb-8">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
