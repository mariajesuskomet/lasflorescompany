'use client';

import Link from 'next/link';
import type { Product } from '@/lib/types';
import { getAltText, getProductImageUrl } from '@/lib/images';
import { nextCatalogWithProduct, toLoginWithNext } from '@/lib/routing';
import { getUnitOfSale } from '@/lib/product-format';
import { LOGIN_URL } from '@/lib/routing';

type Props = { p: Product; focused?: boolean };

const CARD_W = 270;
const CARD_H = 270;
const IMG_H  = 250;

export default function HeroCard({ p, focused }: Props) {
  const img  = getProductImageUrl(p) || '/images/products/fallback.jpg';
  const alt  = getAltText(p);
  const href = toLoginWithNext(nextCatalogWithProduct(p.id));
  const unit = getUnitOfSale(p);

  return (
    <div
      className={[
        `w-[${CARD_W}px] rounded-2xl p-3 bg-white outline outline-1 outline-[#CEDBE8]`,
        'flex flex-col gap-3',
        focused ? 'shadow-[0_0_1px_rgba(9,30,66,0.31)]' : ''
      ].join(' ')}
      style={{ width: CARD_W, height: CARD_H } as any}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <div style={{ height: IMG_H }}>
          <img
            src={img}
            alt={alt}
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.src = '/images/products/fallback.jpg';
              e.currentTarget.onerror = null;
            }}
          />
        </div>

        {/* overlay */}
        <div className="absolute left-0 right-0 bottom-0 bg-[rgba(18,22,25,0.60)] rounded-b-lg px-4 py-3">
          <div className="space-y-1.5">
            <div className="text-white text-base font-semibold leading-6 line-clamp-1">
              {p.name}
            </div>
            <div className="flex flex-wrap items-center gap-1 text-[10px] leading-[14px] tracking-[0.05em] text-[#CEDBE8]">
              {unit && <span>{unit}</span>}
              {p.color && <span>• {p.color}</span>}
              {p.boxType && <span>• {p.boxType}</span>}
            </div>

            <Link
  href={LOGIN_URL}
  prefetch={false}
  className="mt-1 block w-full rounded-xl py-2.5 text-center text-[15px] font-medium"
  style={{ background: '#91B420', color: '#121619' }}
>
  Shop Now
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
