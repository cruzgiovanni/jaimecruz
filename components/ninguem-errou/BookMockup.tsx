import Image from "next/image";
import { SITE } from "@/lib/site";

interface BookMockupProps {
  /** Texto alternativo da capa. Use "" quando a capa já foi descrita antes. */
  alt: string;
  size?: "large" | "small";
  priority?: boolean;
}

/** Capa do livro com volume: lombada à esquerda e corte das páginas à direita. */
export function BookMockup({
  alt,
  size = "large",
  priority = false,
}: BookMockupProps) {
  const book = SITE.launchBook;

  return (
    <div className={`ne-book${size === "small" ? " ne-book--small" : ""}`}>
      <Image
        src={book.cover}
        width={book.coverWidth}
        height={book.coverHeight}
        alt={alt}
        priority={priority}
        sizes={size === "small" ? "200px" : "(min-width: 900px) 400px, 300px"}
      />
      <span className="ne-book-spine" aria-hidden="true" />
      <span className="ne-book-pages" aria-hidden="true" />
    </div>
  );
}
