"use client";

import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section
      id="contato"
      className="px-6 py-32"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center">
        <Reveal>
          <span className="label-eyebrow">Leia já, gratuitamente:</span>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/livro/ler"
              className="gold-button gold-button-inverse"
              aria-label="Ler o livro online"
            >
              <span aria-hidden>→</span> Ler online
            </a>
            <a
              href="https://mibfpndkbyqzc4ik.public.blob.vercel-storage.com/Entre_Frestas_e_Horizontes_%40_Jaime_Cruz.pdf"
              download="Entre Frestas e Horizontes - Jaime Cruz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button"
              aria-label="Baixar o livro em PDF"
            >
              <span aria-hidden>↓</span> Baixar PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
