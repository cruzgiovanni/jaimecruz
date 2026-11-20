import Link from "next/link";
import { BookMockup } from "@/components/ninguem-errou/BookMockup";
import { BuyBar } from "@/components/ninguem-errou/BuyBar";
import { NeighborhoodScene } from "@/components/ninguem-errou/NeighborhoodScene";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const book = SITE.launchBook;
const PAGE_URL = `${SITE.url}${book.path}`;
const COVER_ALT = `Capa do livro ${book.title} — ${book.subtitle}, de Jaime Cruz`;

const HERO_BUY_ID = "comprar-topo";
const CLOSING_BUY_ID = "comprar-fim";

const steps = ["Escola", "Saúde", "Conselho", "Justiça"];

const parts = [
  {
    number: "Parte I",
    title: "Fundamentos",
    items: [
      "Quem é a criança: desenvolvimento, ACEs e o modelo bioecológico",
      "A construção histórica dos direitos da infância",
      "Do direito ao sistema: ECA e Sistema de Garantia",
      "O fenômeno da violência, com os dados",
    ],
  },
  {
    number: "Parte II",
    title: "Governança",
    items: [
      "Um modelo conceitual de governança da proteção",
      "O município como espaço da coordenação",
      "Planejamento estratégico e indicadores",
      "Monitoramento e revisão sistêmica de caso",
      "Matriz de maturidade em oito dimensões",
    ],
  },
  {
    number: "Parte III",
    title: "Instrumentos",
    items: [
      "Planos municipais e plano decenal",
      "Protocolos e fluxos integrados",
      "Decisão, Conselho Tutelar e atores da rede",
      "Informação, sigilo e escuta",
      "Depoimento especial e a fronteira da prova",
      "Roteiro de implantação em doze meses",
    ],
  },
];

const features = [
  {
    title: "Uma matriz de maturidade",
    text: "Oito dimensões em cinco níveis, para o município descobrir onde está antes de decidir para onde vai.",
  },
  {
    title: "Um roteiro de doze meses",
    text: "Mês a mês, da decisão normativa ao fluxo publicado e à rede formada — com as oito armadilhas mais comuns.",
  },
  {
    title: "Um caso real e verificável",
    text: "O fluxo de Monte Mor/SP, instituído pelo Decreto nº 7.023/2026, aparece em quinze boxes NA PRÁTICA: oito meses da portaria ao decreto.",
  },
  {
    title: "Um apêndice para quem não é da área",
    text: "“O que fazer se você suspeita que uma criança está sendo violentada” — sinais, o que dizer, o que nunca dizer, a quem recorrer.",
  },
];

const audience = [
  "Secretários e técnicos municipais",
  "Conselheiros tutelares",
  "Conselheiros de direitos (CMDCA)",
  "Diretores, coordenadores e professores",
  "Equipes de CRAS, CREAS e acolhimento",
  "Profissionais de saúde e ACS",
  "Ministério Público e Defensoria",
  "Estudantes e pesquisadores",
  "Vereadores e assessores legislativos",
  "Quem já se perguntou o que fazer diante de uma suspeita",
];

const specs = [
  { label: "Formato", value: "PDF" },
  { label: "Páginas", value: String(book.pages) },
  { label: "Edição", value: "1ª, 2026" },
  { label: "ISBN", value: book.isbn },
  { label: "Entrega", value: "Imediata" },
  { label: "Garantia", value: "7 dias" },
];

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${PAGE_URL}#book`,
  name: book.title,
  alternateName: `${book.title} — ${book.subtitle}`,
  description: book.description,
  isbn: book.isbn,
  numberOfPages: book.pages,
  bookEdition: book.edition,
  bookFormat: "https://schema.org/EBook",
  inLanguage: book.inLanguage,
  datePublished: book.datePublished,
  url: PAGE_URL,
  image: `${SITE.url}${book.cover}`,
  author: { "@id": `${SITE.url}/#person` },
  publisher: { "@id": `${SITE.url}/#person` },
  offers: {
    "@type": "Offer",
    price: book.price.toFixed(2),
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: book.checkoutUrl,
    eligibleRegion: { "@type": "Country", name: "BR" },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
    { "@type": "ListItem", position: 2, name: book.title, item: PAGE_URL },
  ],
};

export default function NinguemErrouPage() {
  return (
    <>
      <JsonLd data={[bookSchema, breadcrumbSchema]} />

      <main>
        {/* ───────── Capa ───────── */}
        <section className="ne-band ne-band--hero">
          <div className="ne-container ne-hero">
            <div className="flex flex-col gap-6">
              <span className="ne-fade">
                <span className="ne-badge">
                  <span className="ne-badge-dot" aria-hidden="true" />
                  Lançamento · 2026
                </span>
              </span>

              <span
                className="ne-eyebrow ne-fade"
                style={{ animationDelay: "60ms" }}
              >
                Governança da proteção da infância
              </span>

              <h1 className="ne-h1 ne-fade" style={{ animationDelay: "120ms" }}>
                Ninguém
                <br />
                errou
              </h1>

              <p className="ne-sub ne-fade" style={{ animationDelay: "180ms" }}>
                {book.subtitle}
              </p>

              <hr
                className="ne-rule ne-fade"
                style={{ animationDelay: "220ms" }}
              />

              <p
                className="ne-lead ne-muted ne-fade max-w-[30rem]"
                style={{ animationDelay: "260ms" }}
              >
                {book.description}
              </p>

              <div
                id={HERO_BUY_ID}
                className="ne-buy ne-fade mt-2"
                style={{ animationDelay: "320ms" }}
              >
                <p className="ne-price">
                  {book.priceLabel}
                  <small>eBook · PDF · {book.pages} páginas</small>
                </p>
                <a href={book.checkoutUrl} className="ne-button">
                  Comprar o livro <span aria-hidden="true">→</span>
                </a>
              </div>

              <p
                className="ne-seals ne-fade"
                style={{ animationDelay: "360ms" }}
              >
                Entrega imediata após a compra · 7 dias de garantia
                <br />
                ISBN {book.isbn} · Câmara Brasileira do Livro
              </p>
            </div>

            <div
              className="ne-hero-art ne-stage ne-stage--glow ne-fade"
              style={{ animationDelay: "200ms" }}
            >
              <BookMockup alt={COVER_ALT} priority />
            </div>
          </div>
        </section>

        {/* ───────── A conta ───────── */}
        <section className="ne-band ne-band--alt" aria-labelledby="a-conta">
          <div className="ne-container ne-math">
            <div className="flex flex-col gap-7">
              <h2 id="a-conta" className="ne-eyebrow">
                A conta que abre o livro
              </h2>

              <div className="ne-steps" aria-hidden="true">
                {steps.map((step, index) => (
                  <div key={step} className="contents">
                    {index > 0 ? <span className="ne-step-arrow">→</span> : null}
                    <div className="ne-step">
                      <div className="ne-step-box">80%</div>
                      <div className="ne-step-label">{step}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="sr-only">
                Escola, Saúde, Conselho e Justiça funcionando bem em 80% das
                vezes cada uma.
              </p>

              <hr className="ne-divider" />

              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <p className="ne-result">41%</p>
                <p className="ne-muted max-w-[15rem] text-base leading-relaxed">
                  é a chance de o percurso inteiro funcionar.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="ne-lead">
                Um caso de violência contra uma criança atravessa, em média,
                quatro instituições antes de resultar em proteção efetiva. Se
                cada passagem funcionar bem em oito de cada dez vezes — taxa que
                a maioria dos gestores consideraria aceitável —, a conta dá 41%.
              </p>
              <p className="ne-quote">
                Com transições individualmente boas, o caminho falha na maioria
                das vezes. E ninguém errou.
              </p>
            </div>
          </div>
        </section>

        {/* ───────── A tese ───────── */}
        <section className="ne-band">
          <div className="ne-container ne-narrow flex flex-col gap-6">
            <span className="ne-eyebrow">A cadeira vazia</span>
            <h2 className="ne-h2">
              O Brasil criou as instituições. Não criou quem as faça funcionar
              juntas.
            </h2>
            <hr className="ne-rule" />
            <p className="ne-lead">
              O Conselho de Direitos formula a política e exerce o controle, mas
              não acompanha casos. O Conselho Tutelar aplica medidas e
              requisita, mas não coordena secretarias. Cada secretaria executa a
              sua política. O Ministério Público fiscaliza — e fiscalizar não é
              gerir.
            </p>
            <p className="ne-lead">
              Sobra uma cadeira vazia: ninguém é institucionalmente responsável
              por avaliar, direcionar e monitorar o funcionamento do conjunto.
              Este livro mostra por que essa cadeira existe, quem deve ocupá-la
              — o município — e, capítulo a capítulo, como.
            </p>
          </div>
        </section>

        {/* ───────── O que tem dentro ───────── */}
        <section className="ne-band ne-band--alt">
          <div className="ne-container flex flex-col gap-12">
            <div className="ne-narrow flex flex-col gap-4">
              <span className="ne-eyebrow">O que tem dentro</span>
              <h2 className="ne-h2">Vinte e dois capítulos, em três partes</h2>
            </div>

            <div className="ne-parts">
              {parts.map((part) => (
                <article key={part.number} className="ne-card">
                  <span className="ne-eyebrow">{part.number}</span>
                  <h3 className="ne-h3">{part.title}</h3>
                  <hr className="ne-card-rule" />
                  <ul className="ne-dots">
                    {part.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="ne-features mt-2">
              {features.map((feature) => (
                <div key={feature.title} className="ne-feature">
                  <hr className="ne-card-rule mt-0" />
                  <h3 className="ne-h3 mt-3">{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Para quem ───────── */}
        <section className="ne-band">
          <div className="ne-container flex flex-col gap-9">
            <div className="ne-narrow flex flex-col gap-4">
              <span className="ne-eyebrow">Para quem foi escrito</span>
              <h2 className="ne-h2">Para quem decide e para quem executa.</h2>
            </div>

            <ul className="ne-dots ne-audience">
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="ne-narrow ne-muted text-base leading-relaxed">
              Os capítulos são independentes: cada um abre com o problema que
              resolve e fecha com uma síntese. Dá para ler inteiro ou ir direto
              ao que o seu município precisa agora.
            </p>
          </div>
        </section>

        {/* ───────── O autor ───────── */}
        <section className="ne-band ne-band--alt">
          <div className="ne-container ne-narrow">
            <div className="ne-author">
              <span className="ne-initials" aria-hidden="true">
                JC
              </span>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="ne-eyebrow">O autor</span>
                  <h2 className="ne-h3" style={{ fontSize: "1.75rem" }}>
                    Jaime Cruz
                  </h2>
                </div>
                <p className="ne-muted text-base leading-relaxed">
                  Atua há mais de três décadas na gestão pública municipal.
                  Elegeu-se Vereador em 1992, aos vinte e quatro anos, presidiu a
                  Câmara Municipal e foi Secretário de Habitação, Vice-Prefeito,
                  Secretário Municipal de Educação e Prefeito. Licenciado em
                  Filosofia e especialista em Filosofia Social pela PUC-Campinas,
                  especializou-se no estudo da violência contra crianças e
                  adolescentes pelo LACRI/USP. Coordenou a sistematização e a
                  redação final do Fluxo Municipal de Escuta, Acolhimento e
                  Proteção Integral de Monte Mor/SP, instituído por decreto em
                  2026.
                </p>
                <p className="ne-muted text-base leading-relaxed">
                  Este livro não é um relato de experiência. A experiência
                  aparece em boxes identificados, sempre como demonstração de que
                  algo é exequível.
                </p>
                <Link href="/livro" className="ne-link mt-2">
                  Do mesmo autor: <em>{SITE.book.title}</em>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Comprar ───────── */}
        <section className="ne-band" id="comprar">
          <div className="ne-container flex flex-col gap-9">
            <div className="ne-narrow flex flex-col gap-4">
              <span className="ne-eyebrow">Ficha técnica</span>
              <h2 className="ne-h2">O que você recebe</h2>
            </div>

            <dl className="ne-specs">
              {specs.map((spec) => (
                <div key={spec.label} className="ne-spec">
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>

            <p className="ne-narrow ne-muted text-[0.92rem] leading-relaxed">
              Sumário clicável — cada entrada leva ao capítulo — e índice de
              marcadores no painel lateral do leitor. Referências por capítulo,
              apêndice prático e quadros de aplicação direta. Registro na Câmara
              Brasileira do Livro. Leitura em computador, tablet, celular ou
              leitor de tinta eletrônica.
            </p>

            <hr className="ne-divider" />

            <div className="ne-closing">
              <div className="ne-closing-art ne-stage">
                <BookMockup alt="" size="small" />
              </div>

              <div className="flex flex-col gap-5">
                <div id={CLOSING_BUY_ID} className="ne-buy">
                  <p className="ne-price">
                    {book.priceLabel}
                    <small>à vista ou parcelado</small>
                  </p>
                  <a
                    href={book.checkoutUrl}
                    className="ne-button ne-button--large"
                  >
                    Comprar o livro <span aria-hidden="true">→</span>
                  </a>
                </div>
                <p className="ne-seals">
                  Pagamento por cartão, Pix ou boleto · Processado pela Hotmart
                  <br />
                  Acesso imediato ao arquivo, sem prazo de validade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <NeighborhoodScene />
      </main>

      <footer className="ne-footer px-6 py-10">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-3 sm:flex-row sm:justify-between md:px-2">
          <p>© 2026 Jaime Cruz · Edição do autor · Vinhedo, SP</p>
          <p>ISBN {book.isbn}</p>
        </div>
        <p className="mx-auto mt-4 w-full max-w-[1100px] md:px-2">
          Desenvolvido por{" "}
          <a
            href="https://giovannicruz.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            giovannicruz.dev
          </a>
        </p>
      </footer>

      <BuyBar startId={HERO_BUY_ID} endId={CLOSING_BUY_ID} />
    </>
  );
}
