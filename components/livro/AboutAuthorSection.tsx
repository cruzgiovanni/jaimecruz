const timeline = [
  {
    period: "1992",
    title: "Presidente da Associação dos Sem Casa de Vinhedo",
    body: "Liderou a construção do Residencial Jardim Nova Canudos — 242 terrenos em regime de mutirão.",
  },
  {
    period: "1993 – 2000",
    title: "Vereador (1º e 2º mandatos)",
    body: "Terceiro mais votado em 1992; segundo mais votado em 2004.",
  },
  {
    period: "1997 – 2004",
    title: "Secretário Municipal de Habitação",
    body: "+1.000 lotes urbanizados, 384 apartamentos viabilizados.",
  },
  {
    period: "2005 – 2006",
    title: "Presidente da Câmara Municipal de Vinhedo",
    body: "Modernização administrativa e programa Câmara nos Bairros.",
  },
  {
    period: "2008 – 2016",
    title: "Vice-Prefeito (2 mandatos)",
    body: "Secretário de Educação (2009–2013).",
  },
  {
    period: "2014 – 2020",
    title: "Prefeito de Vinhedo",
    body: "Reeleito em 2016. Conduziu o município através de crise hídrica, greve dos caminhoneiros e pandemia de COVID-19. Reabertura da Santa Casa de Vinhedo.",
  },
  {
    period: "Regional",
    title: "Liderança intermunicipal",
    body: "Presidente do Conselho de Prefeitos da RMC. Presidente da ARES-PCJ · COHAB Campinas · Consórcio Intermunicipal das Frutas.",
  },
];

const formacao = [
  "Graduação em Filosofia — PUC-Campinas",
  "Especialização em Filosofia Social — PUC-Campinas",
  "Formação em Violência Doméstica contra Crianças e Adolescentes — USP",
];

export default function AboutAuthorSection() {
  return (
    <section
      id="sobre-o-autor"
      className="px-6 py-32"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto w-full max-w-[760px]">
        <span className="label-eyebrow">O autor</span>

        <h2
          className="livro-serif mt-6"
          style={{
            color: "var(--color-heading)",
            fontSize: "clamp(2.25rem, 4.5vw, 3rem)",
            lineHeight: 1.1,
            fontWeight: 500,
          }}
        >
          Jaime Cruz
        </h2>

        <p
          className="livro-sans mt-2"
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.85rem",
            letterSpacing: "0.05em",
          }}
        >
          Jaime Cesar da Cruz — Vinhedo, SP
        </p>

        <div
          className="livro-sans mt-10 space-y-5"
          style={{
            color: "var(--color-text)",
            fontSize: "1rem",
            lineHeight: 1.85,
          }}
        >
          <p>
            Nasceu em 26 de junho de 1968, em Rosário do Ivaí, no interior
            do Paraná. Sétimo de dez filhos. Chegou a Vinhedo aos 11 anos,
            em um barraco de 15 metros quadrados no Jardim Três Irmãos, sem
            água encanada e sem energia elétrica.
          </p>
          <p>
            Formou-se em Filosofia pela PUC-Campinas (1996) e construiu uma
            trajetória pública de três décadas, guiada pela coerência entre
            origem e responsabilidade.
          </p>
        </div>

        <div className="mt-16">
          <span className="label-eyebrow">Trajetória</span>
          <ol className="timeline mt-8">
            {timeline.map((item) => (
              <li key={item.period} className="timeline-item">
                <div
                  className="label-eyebrow"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                  }}
                >
                  {item.period}
                </div>
                <div
                  className="livro-sans mt-2"
                  style={{
                    color: "var(--color-heading)",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </div>
                <p
                  className="livro-sans mt-1"
                  style={{
                    color: "var(--color-text)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16">
          <span className="label-eyebrow">Formação</span>
          <ul className="mt-6 space-y-3">
            {formacao.map((f) => (
              <li
                key={f}
                className="livro-sans"
                style={{
                  color: "var(--color-text)",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: "var(--livro-gold)" }}>·</span> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
