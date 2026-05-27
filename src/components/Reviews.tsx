"use client";

import { Reveal } from "./motion-helpers";
import reviewsData from "@/data/reviews.json";

type Review = {
  text: string;
  name: string;
  source: string;
  rating: number;
};

const reviews: Review[] = reviewsData;

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="flex-shrink-0 w-[340px] lg:w-[420px] rounded-2xl border border-stone-800 bg-stone-900/40 p-8 lg:p-10 mx-3">
      <div className="flex gap-1 text-cream mb-6">
        {[...Array(r.rating)].map((_, j) => (
          <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118L10 14.347l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.644 8.354c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>
      <p className="italic-display text-stone-200 text-lg lg:text-xl leading-relaxed mb-8 min-h-[120px]">
        &ldquo;{r.text}&rdquo;
      </p>
      <div>
        <p className="font-bold text-stone-100 mb-1">{r.name}</p>
        <p className="text-stone-500 text-sm font-light">{r.source}</p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const loop = [...reviews, ...reviews];

  return (
    <section id="reseñas" className="py-28 lg:py-40 bg-stone-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 lg:mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <p className="eyebrow text-stone-400 mb-6">Reseñas de clientes</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-6xl leading-[1.05] tracking-tight uppercase mb-8">
              Reseñas de clientes —{" "}
              <span className="text-gold">5 estrellas</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-3 rounded-full border border-stone-800 bg-stone-900/60 px-5 py-2.5">
              <div className="flex gap-1 text-cream">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118L10 14.347l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.644 8.354c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-stone-100">5.0 en Google</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        className="group relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex marquee-reviews w-max">
          {loop.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
