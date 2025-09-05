import Image from "next/image";

type Props = {
  /** Altura deseada en px; el ancho se calcula proporcionalmente */
  size?: number;
  className?: string;
  priority?: boolean;
};

const NATURAL_WIDTH = 1027;
const NATURAL_HEIGHT = 243;
const RATIO = NATURAL_WIDTH / NATURAL_HEIGHT; // ≈ 4.2288

export function Logo({ size = 48, className, priority }: Props) {
  const height = size;                         // alto
  const width = Math.round(size * RATIO);      // ancho proporcional

  return (
    <Image
      src="/brand/logo.png"
      alt="Las Flores"
      width={width}
      height={height}
      style={{ height, width: "auto" }}
      className={className}
      priority={priority}
    />
  );
}
