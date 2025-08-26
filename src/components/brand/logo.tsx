'use client';

import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  /** Altura en px del logo (el ancho se calcula a proporción) */
  height?: number;
  /** Relación de aspecto (ancho/alto) de tu archivo: width / height */
  ratio?: number;
  withText?: boolean;
  className?: string;
  alt?: string;
};

/**
 * Muestra /brand/logo.png manteniendo proporción.
 * Cambia SOLO height; el ancho se ajusta en base a "ratio".
 */
export function Logo({
  height = 56,
  ratio = 4.2,         // ⬅️ Ajusta a la relación real de tu logo (ancho/alto)
  withText = false,
  className,
  alt = 'Las Flores',
}: Props) {
  const width = Math.round(height * ratio); // ancho proporcional

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <Image
        src="/brand/logo.png"      // Debe existir en /public/brand/logo.png
        alt={alt}
        width={width}              // requerido por Next/Image
        height={height}            // requerido por Next/Image
        // CSS final: solo fijamos altura; el ancho “auto” preserva la proporción
        style={{ height, width: 'auto', display: 'block' }}
        priority
      />
      {withText && <span className="font-semibold leading-none">Las Flores</span>}
    </div>
  );
}