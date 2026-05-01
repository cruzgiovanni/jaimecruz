interface QuoteBreakProps {
  variant: "A" | "B";
}

export default function QuoteBreak({ variant }: QuoteBreakProps) {
  if (variant === "A") {
    return (
      <section
        className="px-6 py-24"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="mx-auto flex w-full max-w-[640px] flex-col items-center text-center">
          <span
            aria-hidden
            style={{
              width: 40,
              height: 1,
              background: "var(--livro-gold)",
              display: "block",
              marginBottom: "2.5rem",
            }}
          />

          <blockquote
            className="livro-serif italic"
            style={{
              color: "var(--livro-gold-light)",
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              lineHeight: 1.4,
            }}
          >
            "Origem não determina destino.
            <br />
            Mas responsabilidade determina legado."
          </blockquote>

          <span
            aria-hidden
            style={{
              width: 40,
              height: 1,
              background: "var(--livro-gold)",
              display: "block",
              margin: "2.5rem 0 1.25rem",
            }}
          />

          <cite
            className="livro-sans not-italic"
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            — Jaime Cruz
          </cite>
        </div>
      </section>
    );
  }

  return (
    <section
      className="px-6 py-24"
      style={{
        backgroundColor: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center text-center">
        <span
          aria-hidden
          style={{
            width: 40,
            height: 1,
            background: "var(--livro-gold)",
            display: "block",
            marginBottom: "2.5rem",
          }}
        />

        <blockquote
          className="livro-serif italic"
          style={{
            color: "var(--livro-gold-light)",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            lineHeight: 1.5,
          }}
        >
          "Se a vida lhe parecer estreita,
          <br />
          lembre-se: a luz não precisa
          <br />
          de grandes aberturas.
          <br />
          <br />
          <span
            className="livro-serif"
            style={{
              fontStyle: "normal",
              color: "var(--color-heading)",
              fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
              fontWeight: 500,
            }}
          >
            Basta uma fresta.
          </span>
          <br />
          E coragem para seguir."
        </blockquote>

        <span
          aria-hidden
          style={{
            width: 40,
            height: 1,
            background: "var(--livro-gold)",
            display: "block",
            margin: "2.5rem 0 1.25rem",
          }}
        />

        <cite
          className="livro-sans not-italic"
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          — Jaime Cruz
        </cite>
      </div>
    </section>
  );
}
