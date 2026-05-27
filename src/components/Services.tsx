"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, RevealGroup, fadeUp } from "./motion-helpers";
import ServiceCard from "./ServiceCard";
import React from "react";

const ScissorsIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);
const CrownIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 17l4-10 6 6 6-6 4 10H2z" />
    <path d="M2 21h20" />
  </svg>
);
const BeardIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2a7 7 0 0 1 7 7v3a7 7 0 0 1-2 4.9l-1.5 1.5a5 5 0 0 1-7 0L7 17a7 7 0 0 1-2-4.9V9a7 7 0 0 1 7-7z" />
    <path d="M9 11h.01M15 11h.01" />
  </svg>
);
const RazorIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 4l-9 9 4 4 9-9-4-4z" />
    <path d="M14 4l4 4M5 13l-3 3 4 4 3-3" />
  </svg>
);
const DropIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2s-6 7-6 12a6 6 0 0 0 12 0c0-5-6-12-6-12z" />
  </svg>
);
const StarIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4-6.5 4 2-7L2 9h7z" />
  </svg>
);
const HandIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
);
const FootIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 18c-2 0-3-1.5-3-4 0-4 4-8 8-8 2 0 4 1 5 2 1 2 1 4 0 6-1 1.5-2 2-3 2H8c-1 0-2 1-2 2z" />
  </svg>
);

type Service = {
  icon: React.ReactNode;
  name: string;
  desc: string;
  price: string;
  duration: string;
};

const cortes: Service[] = [
  { icon: <ScissorsIcon />, name: "Corte Regular", desc: "Corte clásico con tijera y máquina adaptado a tu estilo y forma de rostro.", price: "$35", duration: "30 min" },
  { icon: <ScissorsIcon />, name: "Fade", desc: "Degradado limpio — skin, taper, mid o high — diseñado a tu cabeza.", price: "$40", duration: "35 min" },
  { icon: <RazorIcon />, name: "Corte a Tijera", desc: "Trabajo 100% a tijera para estilos más largos. Más lento, más preciso.", price: "$45", duration: "40 min" },
  { icon: <StarIcon />, name: "Corte de Niños", desc: "Atención paciente y especializada para clientes de 10 años o menos.", price: "$30", duration: "25 min" },
  { icon: <BeardIcon />, name: "Línea & Barba", desc: "Mantenimiento entre cortes: lineup, perfilado y arreglo de barba.", price: "$25", duration: "20 min" },
  { icon: <CrownIcon />, name: "Corte Regular & Barba", desc: "El combo más reservado: corte, lineup y barba en una sola visita.", price: "$45", duration: "45 min" },
];

const fullService: Service[] = [
  { icon: <CrownIcon />, name: "Fade Gold & Barba", desc: "Nuestro combo Gold: fade preciso, barba diseñada y toalla caliente al final.", price: "$50", duration: "50 min" },
  { icon: <StarIcon />, name: "Servicio Completo", desc: "Corte, barba, lavado, toalla caliente, máquina de steam, mascarilla negra y aftershave premium. La experiencia entera.", price: "$75", duration: "75 min" },
  { icon: <CrownIcon />, name: "Fade Servicio Completo", desc: "Todo lo del Servicio Completo más un fade al milímetro. Steam y mascarilla negra incluidos. Nuestro premium.", price: "$90", duration: "90 min" },
  { icon: <DropIcon />, name: "Color de Cabello", desc: "Tintes, mechas, blends de canas y diseños personalizados. Consulta previa incluida.", price: "$150+", duration: "120 min" },
];

const tabs = [
  { id: "cortes", label: "Cortes & Barba", labelMobile: "Cortes", data: cortes },
  { id: "full", label: "Premium & Color", labelMobile: "Premium", data: fullService },
];

export default function Services() {
  const [active, setActive] = useState("cortes");
  const current = tabs.find((t) => t.id === active)!;

  const TabsBar = (
    <div className="relative inline-flex rounded-full border border-stone-800 bg-stone-900/80 backdrop-blur p-1 shadow-2xl max-w-full">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => setActive(t.id)}
          className={`relative px-4 sm:px-6 lg:px-8 py-3 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] font-bold transition-colors z-10 whitespace-nowrap ${
            active === t.id ? "text-stone-950" : "text-stone-300 hover:text-cream"
          }`}
        >
          {active === t.id && (
            <motion.span
              layoutId="tab-bg"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 bg-cream rounded-full -z-10"
            />
          )}
          <span className="sm:hidden">{t.labelMobile}</span>
          <span className="hidden sm:inline">{t.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <section
      id="servicios"
      className="py-28 lg:py-40 bg-stone-950 border-t border-stone-900"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow text-cream mb-6">Lo que ofrecemos</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl lg:text-7xl leading-[1.02] tracking-tight mb-6">
              Afeitado, Barba <span className="italic-display text-gold">& Más</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone-400 text-lg font-light">
              Cada servicio es personal, enfocado en el detalle y diseñado para que
              luzcas impecable mucho después de salir.
            </p>
          </Reveal>
        </div>

        <div className="flex justify-center mb-8 lg:mb-12">
          {TabsBar}
        </div>

        <div className="relative">
          {/* Fades solo mobile */}
          <div className="lg:hidden absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-stone-950 to-transparent z-10 pointer-events-none" />
          <div className="lg:hidden absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-stone-950 to-transparent z-10 pointer-events-none" />

          <div
            className="services-scroll max-h-[70vh] overflow-y-auto overscroll-contain rounded-2xl lg:max-h-none lg:overflow-visible lg:overscroll-auto"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="py-4 px-1"
              >
                <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                  {current.data.map((s) => (
                    <motion.div key={s.name} variants={fadeUp}>
                      <ServiceCard {...s} />
                    </motion.div>
                  ))}
                </RevealGroup>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
