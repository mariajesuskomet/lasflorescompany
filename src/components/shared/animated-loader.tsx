'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Flower2 } from 'lucide-react';

export function AnimatedLoader() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/catalog');
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="relative flex items-center justify-center">
        <Flower2 className="text-primary w-24 h-24 animate-spin-slow" />
        <div className="absolute flex items-center justify-center w-full h-full">
            <Flower2 className="text-accent w-16 h-16 animate-ping opacity-75" />
        </div>
      </div>
      <p className="mt-8 text-lg font-semibold text-primary-foreground tracking-widest">LAS FLORES</p>
      <p className="text-muted-foreground">Cultivating your perfect bouquet...</p>
    </div>
  );
}
