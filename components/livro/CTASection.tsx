import { SITE } from "@/lib/site";

export default function CTASection() {
  return (
    <section
      id="contato"
      className="px-6 py-32"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center">
        <span className="label-eyebrow">Leia já, gratuitamente:</span>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/livro/ler"
            className="gold-button gold-button-inverse"
            aria-label="Ler o livro online"
          >
            <span aria-hidden>→</span> Ler online
          </a>
          <a
            href={SITE.book.pdfUrl}
            download="Entre Frestas e Horizontes - Jaime Cruz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button"
            aria-label="Baixar o livro em PDF"
          >
            <span aria-hidden>↓</span> Baixar PDF
          </a>
        </div>
      </div>
    </section>
  );
}
