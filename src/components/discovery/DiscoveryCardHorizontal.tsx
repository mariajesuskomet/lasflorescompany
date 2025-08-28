'use client';

import { useState, useMemo } from 'react';           // ⬅️ nuevo
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { getAltText, getProductImageUrl } from '@/lib/images';
import { nextCatalogWithProduct, toLoginWithNext } from '@/lib/routing';
import { getUnitOfSale } from '@/lib/product-format';
import { LOGIN_URL } from '@/lib/routing';

type Props = {
  p: Product;
  tagLabel?: string;
};

const FALLBACK = '/images/products/fallback.jpg'; // ⬅️ nuevo

/** 60% de las medidas originales (586x250, img 226) */
const CARD_W = 352;  // ~586 * 0.6
const CARD_H = 150;  // ~250 * 0.6
const IMG_W  = 136;  // ~226 * 0.6

export default function DiscoveryCardHorizontal({ p, tagLabel }: Props) {
  const [src, setSrc] = useState(() => getProductImageUrl(p)); // ⬅️ nuevo
  const alt  = getAltText(p);
  const href = toLoginWithNext(nextCatalogWithProduct(p.id));
  const unoptimized = useMemo(() => src === FALLBACK, [src]);
  const unit = getUnitOfSale(p);

  return (
    <div
      className="flex items-center gap-3 rounded-2xl bg-white outline outline-1 outline-[#CEDBE8] p-2.5 pl-4"
      style={{ width: CARD_W, height: CARD_H }}
    >
      {/* Detalles */}
      <div className="flex-1 h-full flex flex-col justify-center gap-2.5">
  <div className="flex flex-col gap-1.5">
    {tagLabel ? (
      <span
        className="inline-flex items-center rounded-md bg-[#FFC400] px-2 py-0.5 text-[12px] leading-none text-[#121619]"
      >
        {tagLabel}
      </span>
    ) : null}

    <h3
      className="text-[16px] font-semibold leading-[22px] text-[#121619] truncate"
      title={p.name}
    >
      {p.name}
    </h3>

    <div className="flex flex-wrap items-center gap-1 text-[11px] leading-4 tracking-[0.06em] text-[#567094]">
      {unit && <span>{unit}</span>}
      {p.color && <span>• {p.color}</span>}
      {p.boxType && <span>• {p.boxType}</span>}
    </div>
  </div>

  {/* Botón igual al de los cards verticales */}
  <Link
    href={LOGIN_URL}
    prefetch={false}
    className="inline-flex items-center justify-center rounded-xl bg-[#628000] px-5 py-2 text-white text-sm font-semibold shadow hover:bg-[#4f6700] focus:outline-none focus:ring-2 focus:ring-[#628000]/30"
  >
    Shop Now
  </Link>
</div>

      {/* Imagen */}
      <div className="relative h-full overflow-hidden rounded-lg" style={{ width: IMG_W }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="136px"
          unoptimized={unoptimized}
          onError={() => setSrc(FALLBACK)}   // ⬅️ nuevo
        />
      </div>
    </div>
  );
}
