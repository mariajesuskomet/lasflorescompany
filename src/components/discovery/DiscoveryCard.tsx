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

  // UI-only: leer Unit Sale desde XLSX (stemBun)
  const stemBun = (p as any).stemBun;

  return (
    <Link href={href} className="block">
      <div
        className="inline-flex w-full flex-col gap-2 bg-white p-3 rounded-2xl outline outline-1 outline-[#CEDBE8] shadow-[0_0_1px_rgba(9,30,66,0.08)] transition-transform duration-200 hover:scale-[1.04]"
        style={{ outlineOffset: '-1px' }}
      >
        {/* Imagen más grande (178px), bordes 8 */}
        <div className="relative h-[178px] w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 100vw"
            unoptimized={unoptimized}
            onError={() => setSrc(FALLBACK)}
          />
        </div>

        {/* Título: una sola línea truncada */}
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-[14px] leading-5 font-semibold text-[#121619] truncate">
            {p.name}
          </h3>
        </div>

        {/* Specs: Length + Color / Box + Unit Sale (Stem/Bun) */}
        <div className="flex flex-col gap-1">
          {/* Fila 1 */}
          <div className="flex items-center gap-3 overflow-hidden">
            {p.lengthCm ? (
              <div className="flex items-center gap-1">
                <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Length:</span>
                <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094]">
                  {p.lengthCm}cm
                </span>
              </div>
            ) : null}

            {p.color ? (
              <div className="flex items-center gap-1 min-w-0">
                <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Color:</span>
                <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094] truncate">
                  {p.color}
                </span>
              </div>
            ) : null}
          </div>

          {/* Fila 2 */}
          <div className="flex items-center gap-3 overflow-hidden">
            {p.boxType ? (
              <div className="flex items-center gap-1">
                <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Box:</span>
                <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094]">
                  {p.boxType}
                </span>
              </div>
            ) : null}

            {stemBun != null && String(stemBun).trim() !== '' ? (
              <div className="flex items-center gap-1">
                <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Unit Sale:</span>
                <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094]">
                  {stemBun} Stem/Bun
                </span>
              </div>
            ) : null}
          </div>
        </div>

        {/* (Opcional) Tags existentes: los dejamos tal cual si llegan */}
        {p.tags?.length ? (
          <div className="flex flex-wrap gap-1">
            {p.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Divider */}
        <div className="h-px w-full bg-[#CEDBE8]" />

        {/* Botón “Shop Now” compacto (24px alto) */}
        <div
          className="h-6 grid place-items-center rounded-lg text-white text-[12px] font-semibold"
          style={{ backgroundColor: '#789D00' }}
        >
          Shop Now
        </div>
      </div>
    </Link>
  );
}
