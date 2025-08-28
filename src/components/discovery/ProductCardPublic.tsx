'use client';

import * as React from 'react';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { getAltText, getProductImageUrl } from '@/lib/images';

const PRIMARY = '#789D00';

// Compute robust candidate list without touching ecommerce helpers
function imageCandidates(p: Product): string[] {
  const fromEcom = getProductImageUrl(p); // lo que funciona en el catálogo
  const byId     = `/images/products/${String(p.id).toLowerCase()}.jpg`;
  const fromCol  = (p as any).image ? `/images/products/${String((p as any).image).toLowerCase()}` : '';
  const withJpeg = fromCol && !/\.(jpg|jpeg)$/i.test(fromCol) ? `${fromCol}.jpg` : fromCol;

  const cands = [fromEcom, byId, withJpeg].filter(Boolean);
  // variantes .jpeg / .jpg
  const altExt = cands.flatMap(c =>
    /\.jpeg$/i.test(c) ? [c, c.replace(/\.jpeg$/i, '.jpg')] :
    /\.jpg$/i.test(c)  ? [c, c.replace(/\.jpg$/i, '.jpeg')] : [c]
  );

  // únicos + fallback final
  return Array.from(new Set(altExt)).concat('/images/products/fallback.jpg');
}

export default function ProductCardPublic({ p }: { p: Product }) {
  const [idx, setIdx] = React.useState(0);
  const cands = React.useMemo(() => imageCandidates(p), [p]);
  const src = cands[Math.min(idx, cands.length - 1)];
  const alt = getAltText(p);

  return (
    <div className="p-3 rounded-2xl border bg-card overflow-hidden shadow-sm flex flex-col">
      {/* Imagen */}
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
          onError={() => setIdx(i => (i + 1 < cands.length ? i + 1 : i))}
        />
      </div>

      {/* Detalles: tamaños como catálogo (sin vendor/precio) */}
      <div className="mt-3">
        <h3 className="text-[14px] font-medium leading-snug line-clamp-2 min-h-[40px]">
          {p.name}
        </h3>
        <ul className="mt-1 text-[11px] text-gray-600 space-y-0.5">
          {p.color && (<li><strong>Color:</strong> {p.color}</li>)}
          {p.boxType && (<li><strong>Box:</strong> {p.boxType}</li>)}
          {typeof (p as any).stockUnits !== 'undefined' && (
            <li><strong>Stock:</strong> {(p as any).stockUnits}</li>
          )}
        </ul>
      </div>

      {/* CTA */}
      <Link
        href="https://lasflorescompany.vercel.app"
        prefetch={false}
        className="mt-2 inline-flex h-9 items-center justify-center rounded-md w-full text-white text-sm font-semibold"
        style={{ backgroundColor: PRIMARY }}
      >
        Shop Now
      </Link>
    </div>
  );
}
