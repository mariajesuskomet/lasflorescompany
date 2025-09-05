'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CartButton } from '@/components/cart/cart-button';
import { LogOut } from 'lucide-react';

export function Header() {
  return (
    <header
      className="
        sticky top-0 z-40 w-full
        bg-background/95 backdrop-blur-sm
        border-b border-b-[#CEDBE8]
        border-t-4 border-t-[#789D00]
      "
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo: MISMO tamaño que Open Discovery (32 x 135) y sin deformación */}
        <Link href="/catalog" className="relative block h-8 w-[135px]">
          <Image
            src="/brand/logo.png"
            alt="Las Flores"
            fill
            className="object-contain"
            sizes="135px"
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          <CartButton />

          {/* Logout: usa Link en vez de useRouter; misma función sin tipos raros */}
          <Link
            href="/"
            aria-label="Logout"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted/50"
          >
            <LogOut className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
