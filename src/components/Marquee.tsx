const items = [
  "Cabello",
  "Barba",
  "Afeitado",
  "Diseño",
  "Color",
  "Niños",
];

export default function Marquee() {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="bg-cream text-stone-950 py-6 overflow-hidden border-y border-stone-800">
      <div className="flex marquee-track whitespace-nowrap">
        {loop.map((it, i) => (
          <span
            key={i}
            className="font-display text-3xl lg:text-5xl italic-display mx-12 flex items-center"
          >
            {it}
            <span className="ml-12 w-2 h-2 rounded-full bg-stone-950" />
          </span>
        ))}
      </div>
    </div>
  );
}
