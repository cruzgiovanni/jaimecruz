"use client";

import Reveal from "./Reveal";

export default function AboutBookSection() {
  return (
    <section
      id="sobre-o-livro"
      className="px-6 py-32"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center">
        <Reveal>
          <span className="label-eyebrow">Sobre o livro</span>
        </Reveal>

        <Reveal delay={120}>
          <h2
            className="livro-serif mt-8"
            style={{
              color: "var(--color-heading)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              lineHeight: 1.15,
              fontWeight: 500,
            }}
          >
            Este livro não nasceu
            <br />
            para exaltar cargos.
          </h2>
        </Reveal>

        <Reveal delay={240}>
          <div
            className="livro-sans mt-12 space-y-6 text-left sm:text-center"
            style={{
              color: "var(--color-text)",
              fontSize: "1.0625rem",
              lineHeight: 1.85,
            }}
          >
            <p>Nasceu para dar sentido a uma travessia.</p>

            <p>
              <em
                className="livro-serif"
                style={{ color: "var(--color-heading)" }}
              >
                Entre Frestas e Horizontes
              </em>{" "}
              é o registro de uma vida construída em meio à escassez concreta
              — migração forçada, trabalho precoce, perdas irreversíveis e uma
              fé que nunca foi discurso, mas sustentação silenciosa.
            </p>

            <p>
              Não há narrativa idealizada de superação.
              <br />
              Não há romantização da pobreza.
            </p>

            <div className="space-y-3">
              <p>Há infância marcada por limitações reais.</p>
              <p>Há juventude atravessada por responsabilidades precoces.</p>
              <p>Há decisões que exigiram renúncia.</p>
              <p>Há perdas que não se superam — apenas se assimilam.</p>
            </div>

            <p>
              Mas há, sobretudo,{" "}
              <strong style={{ color: "var(--color-heading)" }}>
                escolhas
              </strong>
              .
            </p>

            <p>
              A política, quando reduzida à disputa, empobrece.
              <br />
              Quando compreendida como serviço, transforma.
            </p>

            <p>Esta obra é testemunho disso.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
