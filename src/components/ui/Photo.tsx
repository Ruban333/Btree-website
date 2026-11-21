import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** Rendered width hint so the browser downloads the right size, e.g. "(min-width: 900px) 33vw, 100vw" */
  sizes: string;
  /** CSS object-position, to choose which part of the photo survives the crop */
  position?: string;
  /** Hero only: load right away */
  eager?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/** A cropped photo that fills its box. The box needs a size (aspect-ratio or height) from `style`/`className`. */
export default function Photo({ src, alt, sizes, position = "50% 50%", eager = false, className = "", style }: Props) {
  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden", background: "var(--surface-2)", borderRadius: "var(--r-lg)", ...style }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition: position }}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
    </div>
  );
}
