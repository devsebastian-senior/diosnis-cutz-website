"use client";

import { motion } from "motion/react";
import PhoneIcon from "./ui/PhoneIcon";
import { SITE } from "@/lib/site";

export default function MobileCTABar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex gap-2.5 max-w-md mx-auto">
        <motion.a
          whileTap={{ scale: 0.95 }}
          href={`tel:${SITE.phone.tel}`}
          className="flex-1 border border-stone-600 text-stone-100 active:bg-stone-800 px-4 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2"
        >
          <PhoneIcon className="w-3.5 h-3.5" />
          Call
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.95 }}
          href={SITE.booking.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white text-stone-950 active:bg-stone-200 px-4 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-center"
        >
          Book Online
        </motion.a>
      </div>
    </motion.div>
  );
}
