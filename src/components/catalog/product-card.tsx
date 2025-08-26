'use client';
import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { useCart } from '@/contexts/cart-context';
import { useToast } from '@/hooks/use-toast';
import { getProductImageUrl, getAltText } from '@/lib/images';

type Props = { p: Product };

export default function ProductCard({ p }: Props) {
  const [qty, setQty] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();

  // src estable + fallback por onError
  const [src, setSrc] = useState(() => getProductImageUrl(p));
  const alt = getAltText(p);

  const dec = () => setQty(q => Math.max(0, q - 1));
  const inc = () => setQty(q => q + 1);

  const handleAdd = () => {
    if (qty === 0) return;
    addToCart(p, qty);
    toast({ title: `${qty} x ${p.name} added to cart` });
    setQty(0);
  };

  return (
    <article className="w-full rounded-xl border bg-white shadow-sm flex flex-col">
      <div className="w-full aspect-square overflow-hidden rounded-t-xl relative bg-gray-100">
      <Image src={src} alt={alt} fill sizes="(min-width:1280px) 20vw, (min-width:768px) 33vw, 100vw" className="object-cover" onError={() => setSrc('/images/products/fallback.jpg')} />
      </div>

      <div className="p-2 flex flex-col flex-grow">
        <h3 className="text-sm font-medium leading-snug line-clamp-2 flex-grow">{p.name}</h3>

        <div className="mt-1 text-base font-semibold">
          ${(p.unitPrice || 0).toFixed(2)}
          <span className="text-xs font-normal text-gray-500"> /{p.unitType.toLowerCase()}</span>
        </div>

        <ul className="mt-1 text-[11px] text-gray-600 space-y-0.5">
          <li><strong>Color:</strong> {p.color}</li>
          <li><strong>Box:</strong> {p.boxType}</li>
          <li><strong>Stock:</strong> {p.stockUnits}</li>
          <li><strong>Vendor:</strong> {p.vendor}</li>
        </ul>

        <div className="mt-2 flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-1.5">
            <button type="button" onClick={dec} className="w-7 h-7 rounded border text-base leading-none" aria-label="Decrease quantity">–</button>
            <span className="w-5 text-center" aria-live="polite">{qty}</span>
            <button type="button" onClick={inc} className="w-7 h-7 rounded border text-base leading-none" aria-label="Increase quantity">+</button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            disabled={qty === 0}
            className={`px-2.5 py-1.5 rounded text-white text-sm font-semibold ${qty === 0 ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'}`}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
