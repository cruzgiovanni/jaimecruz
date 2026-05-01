import { SITE } from "@/lib/site";

const PDF_URL = SITE.book.pdfUrl;

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-6 py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <span className="label-eyebrow" style={{ letterSpacing: "0.25em" }}>
          Jaime Cruz · 2026
        </span>

        <h1
          className="livro-serif mt-8"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 1.05,
            color: "var(--color-heading)",
            fontWeight: 500,
          }}
        >
          Entre Frestas
          <br />e Horizontes
        </h1>

        <p
          className="livro-sans mt-6"
          style={{
            color: "var(--color-text)",
            fontSize: "1.05rem",
            letterSpacing: "0.02em",
          }}
        >
          Uma travessia de vida, fé e serviço público
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/livro/ler"
            className="gold-button gold-button-inverse"
            aria-label="Ler o livro online"
          >
            <span aria-hidden>→</span> Ler online
          </a>
          <a
            href={PDF_URL}
            download="Entre Frestas e Horizontes - Jaime Cruz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button"
            aria-label="Baixar o livro em PDF"
          >
            <span aria-hidden>↓</span> Baixar PDF
          </a>
        </div>

        <div className="gold-rule" />

        <p
          className="livro-serif italic"
          style={{
            color: "var(--livro-gold-light)",
            fontSize: "1.25rem",
            maxWidth: "32rem",
            lineHeight: 1.5,
          }}
        >
          "mesmo quando a estrutura é frágil,
          <br />a luz encontra caminho."
        </p>

        <p
          className="livro-sans mt-10"
          style={{
            color: "var(--color-text)",
            maxWidth: "30rem",
            fontSize: "0.98rem",
            lineHeight: 1.75,
          }}
        >
          Um relato sem romantização. Sem atalhos. A história de quem nasceu
          em um rancho de madeira no interior do Paraná e, passo a passo,
          construiu uma vida pública de relevância — guiada por fé,
          responsabilidade e serviço.
        </p>

        <a
          href="#sobre-o-livro"
          className="livro-sans mt-10 inline-flex items-center gap-2"
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.78rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: "1px solid transparent",
            transition: "color 0.2s ease, border-color 0.2s ease",
          }}
          aria-label="Saber mais sobre a obra"
        >
          Saber mais sobre a obra <span aria-hidden>↓</span>
        </a>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="scroll-indicator" />
      </div>
    </section>
  );
}
