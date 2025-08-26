'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/cart-context';

import { lineTotal, unitsFor, summarize } from '@/lib/cartMath';
import type { CartItem } from '@/lib/types';
import { getProductImageUrl, getAltText } from '@/lib/images';

// --- Helper: adapta CartItem a la forma que aceptan getProductImageUrl/getAltText ---
function toHasImageLike(it: CartItem) {
  // CartItem.image puede ser string | StaticImport | undefined.
  // Aquí garantizamos string | undefined. Si NO es string, lo descartamos.
  const image =
    typeof (it as any).image === 'string' ? (it as any).image : undefined;

  // Si tienes un campo images en CartItem y es array de strings, lo pasamos; si no, undefined
  const images =
    Array.isArray((it as any).images) ? ((it as any).images as string[]) : undefined;

  return {
    image,
    images,
    name: it.name,
    color: it.color,
    boxType: it.boxType,
  };
}

type UpdateQuantity = (id: string, qty: number) => void;
type RemoveFromCart  = (id: string) => void;

interface CartModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

function CartRow({
  it,
  updateQuantity,
  removeFromCart,
}: {
  it: CartItem;
  updateQuantity: UpdateQuantity;
  removeFromCart: RemoveFromCart;
}) {
  const hi = toHasImageLike(it);
  const [src, setSrc] = useState(() => getProductImageUrl(it));
  const alt = getAltText(it);

  const totalUnits = unitsFor(it.boxType, it.quantity);
  const total = lineTotal(it.unitPrice, it.quantity, it.boxType);

  return (
    <tr className="border-t">
      <td className="p-3">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-md overflow-hidden bg-gray-100 shrink-0">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="48px"
              className="object-cover"
              onError={() => setSrc('/images/products/fallback.jpg')}
            />
          </div>
          <div>
            <div className="font-medium">{it.name}</div>
          </div>
        </div>
      </td>

      <td className="p-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => updateQuantity(it.id, Math.max(1, it.quantity - 1))}
            aria-label="Decrease quantity"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-4 text-center text-sm">{it.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => updateQuantity(it.id, it.quantity + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </td>

      <td className="p-3">{totalUnits || '-'}</td>
      <td className="p-3">{it.unitType.toLowerCase()}</td>
      <td className="p-3">${it.unitPrice.toFixed(2)}</td>
      <td className="p-3 text-right font-semibold">${total.toFixed(2)}</td>
      <td className="p-3 text-center">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-destructive h-8 w-8"
          onClick={() => removeFromCart(it.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </td>
    </tr>
  );
}

export function CartModal({ isOpen, onOpenChange }: CartModalProps) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();
  const summary = summarize(cart);

  const handleCheckout = () => {
    onOpenChange(false);
    toast({
      title: 'Checkout Initiated',
      description: 'Redirecting to our secure payment partner...',
    });
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col w-full sm:max-w-4xl">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>Review your items before checkout.</SheetDescription>
        </SheetHeader>

        {cart.length > 0 ? (
          <div className="flex gap-6 flex-grow overflow-hidden">
            {/* LEFT */}
            <div className="flex-1 rounded-lg border overflow-hidden bg-white flex flex-col">
              <div className="px-4 py-3 border-b text-base font-semibold">Shopping Cart</div>
              <div className="overflow-y-auto flex-grow">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-600 sticky top-0">
                    <tr>
                      <th className="p-3 text-left">Product</th>
                      <th className="p-3 text-left">Ordered</th>
                      <th className="p-3 text-left">Total Units</th>
                      <th className="p-3 text-left">Unit Type</th>
                      <th className="p-3 text-left">Unit Price</th>
                      <th className="p-3 text-right">Total</th>
                      <th className="p-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((it) => (
                      <CartRow
                        key={it.id}
                        it={it}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RIGHT */}
            <aside className="w-[320px] shrink-0 rounded-lg border bg-white h-fit">
              <div className="px-4 py-3 border-b text-base font-semibold">Order Summary</div>
              <div className="p-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal Items</span>
                  <span>${summary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Add. Charges</span>
                  <span>${summary.addCharges.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${summary.tax.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold text-base">
                  <span>Order Total</span>
                  <span>${summary.total.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-3" size="lg" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </div>
            </aside>
          </div>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center space-y-2">
            <ShoppingCart className="w-16 h-16 text-muted-foreground/50" />
            <p className="text-lg font-semibold">Your cart is empty</p>
            <p className="text-muted-foreground text-sm">Add some flowers to get started!</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
