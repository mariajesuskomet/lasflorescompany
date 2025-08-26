'use client';

import { Logo } from '@/components/brand/logo';
import { LogOut } from 'lucide-react';
import { CartButton } from '@/components/cart/cart-button';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export function Header() {
  const router = useRouter();

  const handleLogout = () => router.replace('/');

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/catalog" className="flex items-center gap-2">
          {/* altura 32–48 suele verse bien en header */}
          <Logo height={32} ratio={4.2} />
        </Link>

        <div className="flex items-center gap-2">
          <CartButton />
          <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Logout">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}