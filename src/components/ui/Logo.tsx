import Image from "next/image";

/**
 * BTree wordmark. Pass alt="" when it sits inside a link that already has an accessible name,
 * so screen readers do not announce it twice.
 */
export default function Logo({
  className = "",
  alt = "BTree Systems",
  priority = false,
}: {
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Image
      className={`logo ${className}`}
      src="/images/logo.png"
      alt={alt}
      width={528}
      height={112}
      priority={priority}
    />
  );
}
