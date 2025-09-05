'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Product } from '@/lib/types';
import HeroCard from './HeroCard';
import Link from 'next/link';
import { toLoginWithNext } from '@/lib/routing';
import { LOGIN_URL } from '@/lib/routing';

// mismas medidas que HeroCard
const SLOT_W = 270;

export default function HeroCarousel({ products }: { products: Product[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = useMemo(() => products.slice(0, 7), [products]);

  // marcar “focused” el más centrado
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const box = el.getBoundingClientRect();
      let best = 0, bestDist = Infinity;
      Array.from(el.children).forEach((child, idx) => {
        const c = (child as HTMLElement).getBoundingClientRect();
        const dist = Math.abs(c.left + c.width / 2 - (box.left + box.width / 2));
        if (dist < bestDist) { bestDist = dist; best = idx; }
      });
      setActive(best);
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { el.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  const scrollBy = (dx: number) => {
    const el = scroller.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
  
    const atEnd   = scrollLeft + clientWidth >= scrollWidth - 2; // tolerancia
    const atStart = scrollLeft <= 2;
  
    if (dx > 0 && atEnd) {
      // ir al inicio
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (dx < 0 && atStart) {
      // ir al final
      el.scrollTo({ left: scrollWidth - clientWidth, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: dx, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full"> {/* sin fondo ni max-w aquí */}
      {/* Header sección */}
      <div className="flex items-center justify-between pt-6 md:pt-8 pb-2 md:pb-3">
        <h2 className="text-[24px] font-bold leading-7 text-[#121619] m-0">New Arrivals</h2>
        <Link href={LOGIN_URL} prefetch={false} className="text-[#628000] text-sm font-semibold hover:underline">
          View All
        </Link>
      </div>
  
      {/* Carrusel */}
      <div className="relative">
        {/* overlays laterales; usa el mismo color del fondo del padre (slate-50) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-l from-transparent to-slate-50/80" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-slate-50/80" />
  
        <div
  ref={scroller}
  className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x"
>
  {items.map((p, i) => (
    <div key={p.id ?? i} className="snap-start shrink-0" style={{ width: 270 }}>
      <HeroCard p={p} />
    </div>
  ))}
</div>
  
        {/* flechas */}
        <button
          aria-label="Prev"
          onClick={() => scrollBy(-SLOT_W - 8)}
          className="absolute left-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-xl bg-slate-50 shadow"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#628000]"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollBy(SLOT_W + 8)}
          className="absolute right-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-xl bg-slate-50 shadow"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#628000]"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        </button>
      </div>
    </div>
  );
  
}
