"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

interface BuyBarProps {
  /** Elemento de compra do topo: a barra aparece depois que ele sai da tela. */
  startId: string;
  /** Elemento de compra do fim: a barra some quando ele entra na tela. */
  endId: string;
}

/** Barra fixa de compra, só no celular, entre o botão do topo e o do fim. */
export function BuyBar({ startId, endId }: BuyBarProps) {
  const [visible, setVisible] = useState(false);
  const book = SITE.launchBook;

  useEffect(() => {
    const start = document.getElementById(startId);
    const end = document.getElementById(endId);
    if (!start || !end) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const pastStart = start.getBoundingClientRect().bottom < 0;
      const beforeEnd = end.getBoundingClientRect().top > window.innerHeight;
      setVisible(pastStart && beforeEnd);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [startId, endId]);

  return (
    <div
      className={`ne-buybar${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="min-w-0">
        <p className="ne-buybar-title">{book.title}</p>
        <p className="ne-buybar-meta">
          {book.priceLabel} · eBook PDF · {book.pages} páginas
        </p>
      </div>
      <a href={book.checkoutUrl} className="ne-button">
        Comprar
      </a>
    </div>
  );
}
