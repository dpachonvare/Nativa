"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface CounterItem {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const counters: CounterItem[] = [
  { value: 500, prefix: "+", suffix: "", label: "novias felices" },
  { value: 1200, prefix: "+", suffix: "", label: "eventos" },
  { value: 5, prefix: "+", suffix: "", label: "años de experiencia" },
  { value: 5.0, suffix: "", label: "en Google" },
];

function useCounter(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const isDecimal = end % 1 !== 0;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      if (isDecimal) {
        setCount(parseFloat((eased * end).toFixed(1)));
      } else {
        setCount(Math.floor(eased * end));
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    if (start) animate();
  }, [start, animate]);

  return count;
}

function CounterDisplay({
  item,
  started,
}: {
  item: CounterItem;
  started: boolean;
}) {
  const count = useCounter(item.value, 2000, started);

  const formatted =
    item.value >= 1000
      ? count.toLocaleString("es-CO")
      : item.value % 1 !== 0
      ? count.toFixed(1)
      : count.toString();

  return (
    <div className="text-center">
      <p className="font-[family-name:var(--font-display)] text-3xl text-nativa-terracota sm:text-4xl">
        {item.prefix}
        {formatted}
        {item.suffix}
        {item.label === "en Google" && (
          <span className="ml-1 text-nativa-oro" aria-hidden="true">
            &#9733;
          </span>
        )}
      </p>
      <p className="mt-1 text-sm text-nativa-humo">{item.label}</p>
    </div>
  );
}

export default function AnimatedCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="border-y border-nativa-canela/15 bg-nativa-arena py-12"
      role="region"
      aria-label="Estadísticas de NATIVA"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 lg:px-8">
        {counters.map((item, i) => (
          <CounterDisplay key={i} item={item} started={started} />
        ))}
      </div>
    </div>
  );
}
