"use client";

import { motion } from "motion/react";
import PhoneIcon from "./ui/PhoneIcon";
import { SITE } from "@/lib/site";

export default function MobileCTABar() {
  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 px-4"
    >
      {/* Backdrop blur + gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/95 to-stone-950/70 backdrop-blur-xl" />
      {/* Top accent line */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#CABA57] to-transparent opacity-60" />

      <div className="relative flex gap-2.5 max-w-md mx-auto">
        {/* CALL */}
        <motion.a
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.02 }}
          href={`tel:${SITE.phone.tel}`}
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
            <PhoneIcon className="w-4 h-4" />
          </motion.span>
          Llamar
        </motion.a>

        {/* BOOK ONLINE */}
        <motion.a
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.02 }}
          href={SITE.booking.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-1 group overflow-hidden bg-white text-stone-950 px-4 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 shadow-[0_8px_24px_-6px_rgba(202,186,87,0.45)]"
        >
          {/* Shimmer sweep */}
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
          {/* Pulsing gold halo */}
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
    </motion.div>
  );
}
