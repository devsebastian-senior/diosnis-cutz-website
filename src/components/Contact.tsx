"use client";

import { motion } from "motion/react";
import { Reveal } from "./motion-helpers";
import PhoneIcon from "./ui/PhoneIcon";
import { SITE } from "@/lib/site";

const PinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" strokeLinecap="round" />
  </svg>
);
const UsersIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
  </svg>
);

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-28 lg:py-40 bg-stone-950 border-t border-stone-900"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <p className="eyebrow text-stone-400 mb-6">Find us</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-6xl leading-[1.05] tracking-tight uppercase mb-10">
              Visita Dionis Cutz —{" "}
              <span className="text-cream">North Miami Beach, FL</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4 text-stone-200">
                <span className="text-cream mt-0.5 flex-shrink-0">
                  <PinIcon />
                </span>
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream font-light"
                >
                  {SITE.address.full}
                </a>
              </li>
              <li className="flex items-center gap-4 text-stone-200">
                <span className="text-cream flex-shrink-0">
                  <PhoneIcon className="w-5 h-5" />
                </span>
                <a
                  href={`tel:${SITE.phone.tel}`}
                  className="hover:text-cream font-light"
                >
                  {SITE.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-4 text-stone-200">
                <span className="text-cream flex-shrink-0">
                  <ClockIcon />
                </span>
                <span className="font-light">
                  L-V 9:00-20:00 · Sáb 9:00-21:00 · Dom 10:00-18:00
                </span>
              </li>
              <li className="flex items-center gap-4 text-stone-200">
                <span className="text-cream flex-shrink-0">
                  <UsersIcon />
                </span>
                <span className="font-light">Walk-ins welcome</span>
              </li>
              <li className="flex items-center gap-4 text-stone-200">
                <span className="text-cream flex-shrink-0">
                  <InstagramIcon />
                </span>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream font-light"
                >
                  Follow {SITE.social.instagramHandle}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
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
                className="border border-stone-500 text-stone-100 hover:border-cream hover:text-cream px-10 py-5 rounded-full text-xs uppercase tracking-[0.25em] font-bold transition-colors flex items-center justify-center gap-2.5"
              >
                <PhoneIcon className="w-4 h-4" />
                Call Now
              </motion.a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-stone-800 bg-stone-900">
            <iframe
              title="Ubicación Dionis Cutz"
              src={SITE.address.embedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.5) invert(0.92) contrast(0.95) hue-rotate(180deg)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
