type Props = {
  what: string;
  file: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

/** Placeholder for a photo to shoot or supply. Swap for next/image once the file is in /public/images. */
export default function ImageSlot({ what, file, alt, className = "", style }: Props) {
  return (
    <div className={`img-slot ${className}`} style={style}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
      <p className="what">{what}</p>
      <p className="file">{file}</p>
      <p className="alt">alt: {alt}</p>
    </div>
  );
}
