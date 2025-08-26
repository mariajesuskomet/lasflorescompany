'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/cart-context';
import { CartModal } from './cart-modal';
import { useState } from 'react';

export function CartButton() {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Open cart</span>
      </Button>
      <CartModal isOpen={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}
