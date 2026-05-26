"use client";

import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { ReactNode, useRef, useState } from "react";
import { SITE } from "@/lib/site";

interface Props {
  icon: ReactNode;
  name: string;
  desc: string;
  price: string;
  duration: string;
}

export default function ServiceCard({ icon, name, desc, price, duration }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [touched, setTouched] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || !e.touches[0]) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.touches[0].clientX - left);
    mouseY.set(e.touches[0].clientY - top);
    setTouched(true);
  };

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(184, 148, 95, 0.18), transparent 60%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`group relative rounded-2xl border bg-stone-900/60 backdrop-blur p-8 lg:p-10 overflow-hidden transition-colors ${
        touched ? "border-cream/50" : "border-stone-800"
      }`}
    >
      <motion.div
        style={{ background }}
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 ${
          touched ? "opacity-100" : "opacity-0"
        }`}
      />
      <motion.div
        style={{
          background: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, rgba(184, 148, 95, 0.5), transparent 70%)`,
        }}
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100 ${
          touched ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-px rounded-2xl bg-stone-900/95" />
      </motion.div>

      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center mb-8 text-cream">
          {icon}
        </div>

        <h3 className="font-display text-2xl lg:text-3xl mb-3 tracking-tight uppercase">
          {name}
        </h3>
        <p className="text-stone-400 text-sm font-light mb-10 leading-relaxed">
          {desc}
        </p>

        <div className="flex items-end justify-between mb-6">
          <span className="font-display text-3xl lg:text-4xl text-cream">{price}</span>
          <span className="text-stone-500 text-sm font-light">{duration}</span>
        </div>

        <a
          href={SITE.booking.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-stone-200 hover:text-cream group-active:text-cream transition-colors"
        >
          Book This Service
          <span className="transition-transform group-hover:translate-x-1 group-active:translate-x-1">→</span>
        </a>
      </div>
    </motion.div>
  );
}
