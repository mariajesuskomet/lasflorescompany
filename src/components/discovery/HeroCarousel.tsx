'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Product } from '@/lib/types';
import HeroCard from './HeroCard';
import Link from 'next/link';
import { LOGIN_URL } from '@/lib/routing';

const SLOT_W = 270;

export default function HeroCarousel({ products }: { products: Product[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = useMemo(() => products.slice(0, 7), [products]);

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
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollBy = (dx: number) =>
    scroller.current?.scrollBy({ left: dx, behavior: 'smooth' });

  return (
    <section className="w-full bg-[#F7F8FA]">
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
      <div className="flex items-center justify-between py-6 md:py-8">
  <h2 className="text-[24px] font-bold leading-7 text-[#121619] m-0">New Arrivals</h2>
  <Link
    href={LOGIN_URL}
    prefetch={false}
    className="inline-flex items-center gap-1.5 text-[#628000] hover:underline text-sm font-medium"
  >
    View All
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M10 6l6 6-6 6-1.41-1.41L12.17 12 8.59 8.41z"/></svg>
  </Link>
</div>


        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-l from-transparent to-[#F7F8FA]/80" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-[#F7F8FA]/80" />

          <div ref={scroller} className="flex gap-6 overflow-x-auto scroll-smooth pb-2 snap-x">
            {items.map((p, i) => (
              <div key={p.id ?? i} className="snap-start shrink-0" style={{ width: SLOT_W }}>
                <HeroCard p={p} focused={i === active} />
              </div>
            ))}
          </div>

          <button
            aria-label="Prev"
            onClick={() => scrollBy(-SLOT_W - 8)}
            className="absolute left-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-xl bg-[#F7F8FA] shadow"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#628000]"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(SLOT_W + 8)}
            className="absolute right-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-xl bg-[#F7F8FA] shadow"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#628000]"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
