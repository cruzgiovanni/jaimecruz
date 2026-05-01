"use client";

import Reveal from "./Reveal";

const parts = [
  {
    number: "Parte I",
    label: "Origem e Formação",
    title: "A luz que entrou pelas frestas",
    description:
      "Do rancho de madeira no interior do Paraná à chegada em Vinhedo — sem água encanada, sem energia elétrica. A infância construída entre a escassez e a fé.",
    chapters: [
      "Cap. 1 — A Luz Entre as Frestas",
      "Cap. 2 — Trabalho Precoce, Fé e Pertencimento",
      "Cap. 3 — A Perda do Pai e o Aumento da Responsabilidade",
    ],
  },
  {
    number: "Parte II",
    label: "Consciência e Início Público",
    title: "Da dor à organização",
    description:
      "A entrada no movimento de moradia, a eleição como presidente da associação e uma pergunta de um padre que mudou tudo: “Por que você não se candidata a vereador?”",
    chapters: [
      "Cap. 4 — A Luta por Moradia, Organização Popular e Despertar Político",
      "Cap. 5 — Vereador aos 24 Anos: Quando a Vida Pessoal Entra na Política",
    ],
  },
  {
    number: "Parte III",
    label: "Estrutura, Dor e Consolidação",
    title: "Perda, família e maturidade",
    description:
      "Graduação em Filosofia, Secretaria de Habitação, a perda do irmão Gilmar, o casamento, o nascimento do filho Giovanni e a consolidação de uma liderança pública.",
    chapters: [
      "Cap. 6 — Formação, Habitação e uma Nova Dor",
      "Cap. 7 — Família, Retorno à Câmara e Construção da Maturidade Pública",
    ],
  },
  {
    number: "Parte IV",
    label: "Gestão e Responsabilidade",
    title: "Quando governar exige mais que boa intenção",
    description:
      "Vice-prefeitura, Secretaria de Educação, crise hídrica, greve dos caminhoneiros, pandemia e a responsabilidade de conduzir um município em cenários extremos.",
    chapters: [
      "Cap. 8 — Vice-Prefeitura, Educação e o Desafio de Governar com Propósito",
      "Cap. 9 — Prefeitura, Crise e Responsabilidade Histórica",
    ],
  },
  {
    number: "Parte V",
    label: "Síntese e Legado",
    title: "O que permanece quando os cargos passam",
    description:
      "Fé, serviço e a síntese de uma travessia. A pergunta que atravessa tudo: o que fica quando o poder é temporário?",
    chapters: ["Cap. 10 — Fé, Serviço e Legado"],
  },
];

export default function ChaptersSection() {
  return (
    <section
      id="capitulos"
      className="px-6 py-32"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="label-eyebrow">A obra</span>
          </Reveal>
          <Reveal delay={120}>
            <h2
              className="livro-serif mt-6"
              style={{
                color: "var(--color-heading)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                lineHeight: 1.2,
                fontWeight: 500,
              }}
            >
              Cinco partes. Uma travessia.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {parts.map((part, idx) => (
            <Reveal
              key={part.number}
              delay={idx * 100}
              className={
                idx === parts.length - 1 && parts.length % 2 === 1
                  ? "md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto md:w-full"
                  : ""
              }
            >
              <article className="chapter-card h-full">
                <span
                  className="label-eyebrow"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    display: "block",
                  }}
                >
                  {part.number} — {part.label}
                </span>

                <h3
                  className="livro-serif mt-4"
                  style={{
                    color: "var(--color-heading)",
                    fontSize: "1.35rem",
                    lineHeight: 1.3,
                    fontWeight: 500,
                  }}
                >
                  {part.title}
                </h3>

                <span
                  aria-hidden
                  style={{
                    display: "block",
                    width: 32,
                    height: 1,
                    background: "var(--livro-gold-dark)",
                    marginTop: "1rem",
                    marginBottom: "1.25rem",
                  }}
                />

                <p
                  className="livro-sans"
                  style={{
                    color: "var(--color-text)",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                  }}
                >
                  {part.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {part.chapters.map((c) => (
                    <li
                      key={c}
                      className="livro-sans"
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.78rem",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "var(--livro-gold-dark)" }}>·</span>{" "}
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
