"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PhoneIcon from "./ui/PhoneIcon";
import { SITE } from "@/lib/site";

const links = [
  { href: "#servicios", label: "Services" },
  { href: "#barberos", label: "Our Barbers" },
  { href: "#galeria", label: "Gallery" },
  { href: "#reseñas", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-950/85 backdrop-blur-md py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Dionis Cutz Barbershop"
            width={300}
            height={300}
            priority
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-36 lg:h-44" : "h-44 lg:h-64"
            }`}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-xs uppercase tracking-[0.2em] text-stone-200 hover:text-cream font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a
            href={SITE.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-stone-950 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-100 transition-colors"
          >
            Book Online
          </a>
          <a
            href={`tel:${SITE.phone.tel}`}
            className="border border-stone-500 text-stone-100 px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:border-cream hover:text-cream transition-colors flex items-center gap-2"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            Call
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-stone-100"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 17h16"}
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-stone-950/95 backdrop-blur border-t border-stone-800">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-stone-200 hover:text-cream uppercase tracking-[0.2em] text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 mt-2">
              <a
                href={SITE.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex-1 bg-white text-stone-950 px-6 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-center"
              >
                Book Online
              </a>
              <a
                href={`tel:${SITE.phone.tel}`}
                onClick={() => setOpen(false)}
                className="flex-1 border border-stone-500 text-stone-100 px-6 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-3.5 h-3.5" />
                Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
