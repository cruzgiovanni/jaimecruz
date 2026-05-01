export default function TestimonialSection() {
  return (
    <section
      id="prefacio"
      className="px-6 py-32"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto w-full max-w-[760px]">
        <span className="label-eyebrow">Prefácio</span>

        <h2
          className="livro-serif mt-6"
          style={{
            color: "var(--color-heading)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            lineHeight: 1.25,
            fontWeight: 500,
            fontStyle: "italic",
          }}
        >
          "Um homem que escolheu gostar de gente."
        </h2>

        <div className="relative mt-12">
          <span
            aria-hidden
            className="livro-serif absolute"
            style={{
              top: "-2.5rem",
              left: "-0.5rem",
              fontSize: "5rem",
              lineHeight: 1,
              color: "var(--livro-gold-dark)",
              opacity: 0.4,
              pointerEvents: "none",
            }}
          >
            "
          </span>

          <div className="quote-block">
            <div
              className="space-y-5"
              style={{
                fontSize: "1.02rem",
                lineHeight: 1.8,
              }}
            >
              <p>
                O livro mostra exatamente esse lado humano. Entre Frestas e
                Horizontes passa longe de ser uma lista de cargos ou grandes
                feitos. O texto apresenta um relato de vida real, com
                desafios, escolhas duras e uma fé que serviu de alicerce
                silencioso em todos os momentos.
              </p>

              <p>
                O Jaime tinha outros rumos possíveis e poderia ter se
                conformado com o que a vida impôs. Em vez disso, escolheu o
                estudo, o serviço e o cuidado com o próximo. Decidiu estar
                presente onde a dor aperta em vez de virar as costas. Essa
                postura define quem ele é.
              </p>

              <p>
                Este não é só o livro de um homem público. É o registro de
                quem escolheu gostar e cuidar de gente e fez disso um
                destino.
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p
            className="livro-serif"
            style={{
              color: "var(--color-heading)",
              fontSize: "1.05rem",
              fontWeight: 500,
            }}
          >
            Eduardo Gurian
          </p>
          <p
            className="livro-sans mt-2"
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.8rem",
              lineHeight: 1.7,
            }}
          >
            Jornalista · Pós-graduação em Marketing e Negócios
            Internacionais
            <br />
            Professor universitário · 22 anos de comunicação pública
            <br />
            Apresentador do programa Conexões — Rádio Capela FM
          </p>
        </div>
      </div>
    </section>
  );
}
