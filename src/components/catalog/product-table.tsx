'use client';
import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { BOX_CAPACITY } from '@/lib/cartMath';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/cart-context';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { getProductImageUrl, getAltText } from '@/lib/images';

function TableRow({ p }: { p: Product }) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(0);

  const unitsPerBox = BOX_CAPACITY?.[p.boxType] ?? 0;

  const [src, setSrc] = useState(() => getProductImageUrl(p));
  const alt = getAltText(p);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(p, quantity);
      toast({ title: `${quantity} x ${p.name} added to cart` });
      setQuantity(0); // Reset after adding
    }
  };

  return (
    <tr className="border-t">
      <td className="p-3">{p.vendor}</td>
      <td className="p-3">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-md overflow-hidden bg-gray-100 shrink-0">
          <Image
    src={src}
    alt={alt}
    fill
    sizes="40px"
    className="object-cover"
    onError={() => setSrc('/images/products/fallback.jpg')}
  />
          </div>
          <div className="font-medium">{p.name}</div>
        </div>
      </td>
      <td className="p-3">${p.unitPrice.toFixed(2)} /{p.unitType.toLowerCase()}</td>
      <td className="p-3">—</td>
      <td className="p-3">{p.stockUnits}</td>
      <td className="p-3">{p.boxType}</td>
      <td className="p-3">{unitsPerBox || '—'}</td>
      <td className="p-3 text-center">
        <Input
          type="number"
          min={0}
          value={quantity === 0 ? '' : quantity}
          onChange={(e) => {
            const n = Number(e.target.value);
            setQuantity(Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0);
          }}
          className="w-16 text-center"
          placeholder="0"
        />
      </td>
      <td className="p-3 text-center">
        <Button onClick={handleAddToCart} size="sm" disabled={quantity === 0}>
          Add
        </Button>
      </td>
    </tr>
  );
}

export function ProductTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="p-3 text-left">Vendor</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Unit Price</th>
            <th className="p-3 text-left">Stems/Bunch</th>
            <th className="p-3 text-left">Available Qty</th>
            <th className="p-3 text-left">Box Type</th>
            <th className="p-3 text-left">Units/Box</th>
            <th className="p-3 text-center">Order Qty (Boxes)</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <TableRow key={p.id} p={p} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
