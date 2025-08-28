'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Props = {
  /** URL de login. Si quieres deep-link al catálogo, pásalo ya con ?next=%2Fcatalog */
  loginHref?: string;
  /** Ruta del logo en /public (o URL absoluta). */
  logoSrc?: string;
  /** Alt del logo. */
  logoAlt?: string;
};

export default function OpenDiscoveryHeader({
  loginHref = 'https://lasflorescompany.vercel.app/',
  logoSrc = '/brand/logo.png',
  logoAlt = 'Las Flores',
}: Props) {
  const [withShadow, setWithShadow] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(72); // espacio para empujar el contenido

  useEffect(() => {
    const onScroll = () => setWithShadow(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // medir la altura real del header para crear el spacer correcto
    const h = headerRef.current?.offsetHeight ?? 72;
    setOffset(h);
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className={[
          'fixed top-0 inset-x-0 z-50 bg-white border-b',
          'border-[#CEDBE8]',
          withShadow ? 'shadow-[0_0_1px_rgba(9,30,66,0.31)]' : 'shadow-none',
        ].join(' ')}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-8 w-[135px]">
          <Image
  src={logoSrc}
  alt={logoAlt}
  fill
  className="object-contain"
  sizes="(min-width:768px) 180px, 135px"        // ← ancho del contenedor (w-[135px])
  priority
/>
          </Link>

          {/* Botón Login */}
          <a
            href={loginHref}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-white"
            style={{ background: '#789D00' }}
            rel="noopener noreferrer"
          >
            <span className="text-[16px] font-medium leading-6">Login</span>
            {/* ícono simple de login */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
              <path d="M10 17l5-5-5-5v10z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Spacer para que el contenido no quede tapado por el header fijo */}
      <div style={{ height: offset }} aria-hidden />
    </>
  );
}
