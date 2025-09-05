'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { getAltText, getProductImageUrl } from '@/lib/images';
import { nextCatalogWithProduct, toLoginWithNext } from '@/lib/routing';
import { LOGIN_URL } from '@/lib/routing';
import { getUnitOfSale } from '@/lib/product-format';

type Props = { p: Product; focused?: boolean };

const FALLBACK = '/images/products/fallback.jpg';

const CARD_W = 270; // Figma
const CARD_H = 270; // Figma
const IMG_H  = 250; // Figma

export default function HeroCard({ p }: Props) {
  const [src, setSrc] = useState(() => getProductImageUrl(p));
  const alt = getAltText(p);
  const href = toLoginWithNext(nextCatalogWithProduct(p.id));
  const unoptimized = useMemo(() => src === FALLBACK, [src]);
  const unit = getUnitOfSale(p);

  return (
    <div
      className={[
        'inline-flex flex-col justify-start items-start gap-3',
        'rounded-2xl bg-white outline outline-1 outline-[#CEDBE8]',
        'transition-transform duration-200 ease-out will-change-transform',
        'hover:scale-[1.03]',
      ].join(' ')}
      style={{
        width: CARD_W,
        height: CARD_H,
        padding: 12,
        outlineOffset: '-1px', // como en Figma
      }}
    >
      {/* content */}
      <div className="relative flex flex-col gap-2 w-full h-full">
        {/* imagen + overlay dentro del mismo wrapper recortado */}
        <div
          className="relative inline-flex justify-center items-center overflow-hidden rounded-lg w-full"
          style={{ height: IMG_H }}
        >
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes={`${CARD_W}px`}
              unoptimized={unoptimized}
              onError={() => setSrc(FALLBACK)}
            />
          </div>

          {/* overlay inferior (alineado al borde del wrapper) */}
          <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-[rgba(18,22,25,0.60)] px-3 pt-2 pb-4">
            {/* título */}
            <div className="w-full">
              <div className="text-white text-[14px] font-semibold leading-5 line-clamp-1">
                {p.name}
              </div>
            </div>

            {/* specs 1 */}
            <div className="w-full inline-flex items-center gap-2 overflow-hidden">
              {/* 10 Stem/Bun */}
              {p.stemBun != null && p.stemBun !== '' && (
                <div className="flex items-center gap-0.5">
                  <span className="text-white text-[10px] font-bold leading-[14px] tracking-[0.05em]">
                    {p.stemBun}
                  </span>
                  <span className="text-white text-[10px] font-bold leading-[14px] tracking-[0.05em]">
                    &nbsp;Stem/Bun
                  </span>
                </div>
              )}

              {/* separador | si hay ambos */}
              {p.stemBun != null &&
                p.stemBun !== '' &&
                p.totalUnits != null &&
                p.totalUnits !== '' && <span className="text-white/80">|</span>}

              {/* Unit/Box: 18 (solo número) */}
              <div className="flex items-center gap-0.5">
                <span className="text-white/90 text-[10px] font-normal leading-[14px] tracking-[0.05em]">
                  Unit/Box:
                </span>
                <span className="text-white text-[10px] font-bold leading-[14px] tracking-[0.05em]">
                  {p.totalUnits ?? '—'}
                </span>
              </div>
            </div>

            {/* specs 2 */}
            <div className="w-full inline-flex items-center gap-2 overflow-hidden mt-1">
              <div className="flex items-center gap-0.5">
                <span className="text-white/90 text-[10px] leading-[14px] tracking-[0.05em]">Box:</span>
                <span className="text-white text-[10px] font-bold leading-[14px] tracking-[0.05em]">
                  {p.boxType ?? '—'}
                </span>
              </div>
              <div className="flex items-center gap-0.5 min-w-0">
                <span className="text-white/90 text-[10px] leading-[14px] tracking-[0.05em]">Color:</span>
                <span className="text-white text-[10px] font-bold leading-[14px] tracking-[0.05em] truncate">
                  {p.color ?? '—'}
                </span>
              </div>
            </div>

            {/* botón */}
            <Link
              href={LOGIN_URL}
              className="w-full inline-flex justify-center items-center rounded-lg overflow-hidden" 
              style={{ height: 24, background: '#91B420'}}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
