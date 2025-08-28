'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Product } from '@/lib/types';
import DiscoveryCardHorizontal from './DiscoveryCardHorizontal';
import Link from 'next/link';
import { toLoginWithNext } from '@/lib/routing';
import { LOGIN_URL } from '@/lib/routing';

type Props = {
  title: string;        // nombre del tag, ej. "Best Sellers"
  products: Product[];  // ya filtrados por ese tag
  showViewAll?: boolean;
};

const SLOT_W = 352; // igual al ancho de DiscoveryCardHorizontal

export default function SecondaryCarousel({ title, products, showViewAll = true }: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const items = useMemo(() => products.slice(0, 8), [products]);

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

  const scrollBy = (dx: number) => scroller.current?.scrollBy({ left: dx, behavior: 'smooth' });

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
        {/* Header sección */}
        <div className="flex items-center justify-between py-6 md:py-8">
  <h2 className="m-0 text-[24px] font-bold leading-7 text-[#121619]">{title}</h2>
  {showViewAll && (
    <Link
      href={LOGIN_URL}
      prefetch={false}
      className="text-[#628000] text-sm font-semibold hover:underline"
    >
      View All
    </Link>
  )}
</div>

        {/* Carrusel */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-l from-transparent to-white/70" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/70" />

          <div ref={scroller} className="flex gap-6 overflow-x-auto scroll-smooth pb-2 snap-x">
            {items.map((p, i) => (
              <div key={p.id ?? i} className="snap-start shrink-0" style={{ width: SLOT_W }}>
                <DiscoveryCardHorizontal p={p} tagLabel={title} />
              </div>
            ))}
          </div>

          {/* Flechas */}
          <button
            aria-label="Prev"
            onClick={() => scrollBy(-(SLOT_W + 16))}
            className="absolute left-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-xl bg-[#F7F8FA] shadow"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#628000]"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(SLOT_W + 16)}
            className="absolute right-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-xl bg-[#F7F8FA] shadow"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#628000]"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
