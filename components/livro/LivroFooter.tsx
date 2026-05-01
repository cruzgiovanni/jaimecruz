"use client";

export default function LivroFooter() {
  return (
    <footer
      className="px-6 py-16 text-center"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="mx-auto w-full max-w-[760px]">
        <p
          className="livro-serif italic"
          style={{
            color: "var(--livro-gold)",
            fontSize: "0.95rem",
          }}
        >
          Entre Frestas e Horizontes
        </p>
        <p
          className="livro-sans mt-2"
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.78rem",
            letterSpacing: "0.04em",
          }}
        >
          Uma travessia de vida, fé e serviço público
        </p>

        <div
          className="livro-sans mt-8 space-y-1"
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.75rem",
            lineHeight: 1.7,
          }}
        >
          <p>© 2026 — Jaime Cesar da Cruz</p>
          <p>Todos os direitos reservados.</p>
          <p>Edição privada · Vinhedo – SP · CDD: 920</p>
        </div>

        <hr
          className="mx-auto mt-10"
          style={{
            border: "none",
            borderTop: "1px solid var(--color-border)",
            width: 80,
          }}
        />

        <p
          className="livro-sans mt-8"
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.75rem",
          }}
        >
          Desenvolvido por{" "}
          <a
            href="https://giovannicruz.dev/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--livro-gold)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            giovannicruz.dev
          </a>
        </p>
      </div>
    </footer>
  );
}
