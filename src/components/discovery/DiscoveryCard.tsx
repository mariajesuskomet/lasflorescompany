'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { nextCatalogWithProduct, toLoginWithNext } from '@/lib/routing';
import type { Product } from '@/lib/types';
import { getProductImageUrl, getAltText } from '@/lib/images';

const FALLBACK = '/images/products/fallback.jpg';

export default function DiscoveryCard({ p }: { p: Product }) {
  const href = toLoginWithNext(nextCatalogWithProduct(p.id));
  const [src, setSrc] = useState(() => getProductImageUrl(p));
  const unoptimized = useMemo(() => src === FALLBACK, [src]);
  const alt = getAltText(p);

  return (
    <Link
      href={href}
      className="block rounded-2xl overflow-hidden bg-white shadow-sm transition-transform duration-200 hover:scale-[1.04]"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 100vw"  // ← nuevo
          unoptimized={unoptimized}                                        // ← nuevo (solo cuando es fallback)
          onError={() => setSrc(FALLBACK)}
        />
      </div>
      <div className="p-3">
        <div className="font-medium line-clamp-2">{p.name}</div>
        {p.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-1">
            {p.tags.slice(0, 3).map(t => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                {t}
              </span>
            ))}
          </div>
        ) : null}
        <div
          className="mt-3 h-10 grid place-items-center rounded-md text-white"
          style={{ backgroundColor: '#789D00' }}
        >
          Shop Now
        </div>
      </div>
    </Link>
  );
}
