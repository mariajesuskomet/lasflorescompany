'use client';

import * as React from 'react';
import type { Product } from '@/lib/types';
import { getAltText, getProductImageUrl } from '@/lib/images';

const CARD_W = 352;
const CARD_H = 150;
const IMG_W  = 136;

function candidates(p: Product) {
  const a = getProductImageUrl(p);
  const b = `/images/products/${String(p.id).toLowerCase()}.jpg`;
  const c = (p as any).image ? `/images/products/${String((p as any).image).toLowerCase()}` : '';
  return Array.from(new Set([a, b, c].filter(Boolean))).concat('/images/products/fallback.jpg');
}

export default function DiscoveryCardHorizontal({ p, tagLabel }: { p: Product; tagLabel?: string; }) {
  const cands = React.useMemo(() => candidates(p), [p]);
  const [i, setI] = React.useState(0);
  const src = cands[Math.min(i, cands.length - 1)];
  const alt = getAltText(p);

  return (
    <div
      className="flex items-center gap-3 rounded-2xl bg-white outline outline-1 outline-[#CEDBE8] p-3"
      style={{ width: CARD_W, height: CARD_H }}
    >
      {/* Columna texto */}
      <div className="flex-1 h-full flex flex-col justify-center gap-2">
        {tagLabel ? (
          <span className="inline-flex items-center rounded-md bg-[#FFC400] px-2 py-0.5 text-[12px] leading-5 text-[#121619] w-fit">
            {tagLabel}
          </span>
        ) : null}

        <h3 className="text-[16px] font-semibold leading-[22px] text-[#121619] line-clamp-1">
          {p.name}
        </h3>

        <div className="flex flex-wrap items-center gap-1 text-[11px] leading-4 tracking-[0.06em] text-[#567094]">
          {(p as any).unitType && <span>{(p as any).unitType}</span>}
          {p.color && <span>• {p.color}</span>}
          {p.boxType && <span>• {p.boxType}</span>}
        </div>

        <a
          href="https://lasflorescompany.vercel.app"
          className="inline-flex h-9 items-center justify-center rounded-md px-3 text-white text-sm font-semibold w-[128px]"
          style={{ background: '#789D00' }}
        >
          Shop Now
        </a>
      </div>

      {/* Imagen (asegura que la outline superior sea visible) */}
      <div className="relative h-full overflow-hidden rounded-lg shrink-0" style={{ width: IMG_W }}>
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
          onError={() => setI(n => (n + 1 < cands.length ? n + 1 : n))}
        />
      </div>
    </div>
  );
}
