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

  // src estable + fallback por onError (igual que antes)
  const [src, setSrc] = useState(() => getProductImageUrl(p));
  const alt = getAltText(p);

  // 🔽 lectura robusta de Stem/Bun desde el XLSX (solo UI)
  const stemBunRaw =
    (p as any).stemBun ??
    (p as any).stem_bun ??
    (p as any).unitSale ??
    (p as any).unitSales ??
    (p as any).unitsPerBunch;
  const stemBun =
    stemBunRaw !== undefined && String(stemBunRaw).trim() !== ''
      ? String(stemBunRaw).trim()
      : undefined;

  const dec = () => setQty(q => Math.max(0, q - 1));
  const inc = () => setQty(q => q + 1);

  const handleAdd = () => {
    if (qty === 0) return;
    addToCart(p, qty);
    toast({ title: `${qty} x ${p.name} added to cart` });
    setQty(0);
  };

  return (
    <article
      className="w-full inline-flex flex-col gap-2 bg-white p-3 rounded-2xl outline outline-1 outline-[#CEDBE8] shadow-[0_0_1px_rgba(9,30,66,0.08)]"
      style={{ outlineOffset: '-1px' }}
    >
      {/* Imagen (136px alto, bordes 8) */}
      <div className="relative h-[136px] w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width:1280px) 20vw, (min-width:768px) 33vw, 100vw"
          onError={() => setSrc('/images/products/fallback.jpg')}
        />
      </div>

      {/* Título + Precio */}
      <div className="flex flex-col gap-1 min-w-0">
        {/* 🔽 Título en una sola línea con truncado */}
        <h3 className="text-[14px] leading-5 font-semibold text-[#121619] truncate">
          {p.name}
        </h3>

        {/* Precio: 16 semibold + unidad 10 */}
        <div className="flex items-center gap-1">
          <span className="text-[16px] leading-5 font-semibold text-[#121619]">
            ${(p.unitPrice || 0).toFixed(2)}
          </span>
          <span className="text-[10px] leading-5 text-[#121619]">
            /{p.unitType?.toLowerCase?.()}
          </span>
        </div>
      </div>

      {/* Specs (color terciario #567094, 10px con tracking) */}
      <div className="flex flex-col gap-1">
        {/* Fila 1: Length + Color */}
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

        {/* Fila 2: Box + Unit Sale */}
        <div className="flex items-center gap-3 overflow-hidden">
          {p.boxType ? (
            <div className="flex items-center gap-1">
              <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Box:</span>
              <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094]">
                {p.boxType}
              </span>
            </div>
          ) : null}

          {stemBun ? (
            <div className="flex items-center gap-1">
              <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Unit Sale:</span>
              <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094]">
                {stemBun} Stem/Bun
              </span>
            </div>
          ) : null}
        </div>

        {/* Fila 3: Stock + Vendor (vendor 1 línea truncado) */}
        <div className="flex items-center gap-3 overflow-hidden">
          {p.stockUnits != null ? (
            <div className="flex items-center gap-1">
              <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Stock:</span>
              <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094]">
                {p.stockUnits}
              </span>
            </div>
          ) : null}

          {p.vendor ? (
            <div className="flex items-center gap-1 min-w-0">
              <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Vendor:</span>
              <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094] truncate">
                {p.vendor}
              </span>
            </div>
          ) : null}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#CEDBE8] my-1" />

      {/* Acciones (24px alto) */}
      <div className="flex items-center gap-2">
        {/* Stepper (ancho ~88px como Figma) */}
        <div className="w-[88px] flex items-center justify-center gap-1">
          <button
            type="button"
            onClick={dec}
            disabled={qty === 0}
            aria-label="Decrease quantity"
            className={`w-6 h-6 rounded-lg grid place-items-center ${
              qty === 0 ? 'bg-[#E8EBEF] text-[#ADB7C2] cursor-not-allowed' : 'bg-[#E8EBEF] text-[#121619]'
            }`}
          >
            –
          </button>

          <span className="w-6 text-center text-[12px] leading-4" aria-live="polite">
            {qty}
          </span>

          <button
            type="button"
            onClick={inc}
            aria-label="Increase quantity"
            className="w-6 h-6 rounded-lg grid place-items-center bg-[#789D00] text-white"
          >
            +
          </button>
        </div>

        {/* Botón Add compacto 24px alto */}
        <button
          type="button"
          onClick={handleAdd}
          disabled={qty === 0}
          className={`flex-1 h-6 rounded-lg px-2 text-white text-[12px] font-semibold grid place-items-center ${
            qty === 0 ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'
          }`}
        >
          Add
        </button>
      </div>
    </article>
  );
}
