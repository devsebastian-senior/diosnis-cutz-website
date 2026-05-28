import Image from "next/image";
import { SITE } from "@/lib/site";

const links = [
  { href: "#servicios", label: "Services" },
  { href: "#barberos", label: "Barbers" },
  { href: "#galeria", label: "Gallery" },
  { href: "#reseñas", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-950 border-t border-stone-900 pt-20 pb-28 lg:pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-stone-900">
          <div className="lg:col-span-5">
            <Image
              src="/logo.png"
              alt="Dionis Cutz Barbershop"
              width={300}
              height={300}
              className="h-64 w-auto mb-6 -ml-4"
            />
            <p className="text-stone-400 font-light leading-relaxed max-w-md">
              Premium barbershop en North Miami Beach. Cortes de precisión, afeitado
              clásico y atención al detalle. Donde el grooming es estándar, no rutina.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow text-cream mb-5">Navegación</p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-stone-300 hover:text-cream font-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-cream mb-5">Contacto</p>
            <ul className="space-y-3 text-stone-300 font-light">
              <li>
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.tel}`}
                  className="hover:text-cream"
                >
                  {SITE.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={SITE.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  Reservar en Booksy →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-stone-500 uppercase tracking-[0.2em]">
          <p>© {year} Dionis Cutz Barbershop · Todos los derechos reservados</p>
          <p className="font-light normal-case tracking-normal">
            Desarollado por Sebastian Tobon.
          </p>
        </div>
      </div>
    </footer>
  );
}
