/**
 * Artigos publicados em /artigos.
 *
 * Cada artigo é composto por blocos (parágrafos, listas, destaques e figuras),
 * renderizados como texto HTML — sem visualizador de PDF.
 *
 * Para adicionar um novo artigo, inclua um objeto em `articleList`.
 * A ordem de exibição é definida automaticamente pela data (mais recente primeiro).
 */

/** Trecho de texto com formatação opcional dentro de um parágrafo. */
export type InlineNode =
  | string
  | {
      text: string;
      italic?: boolean;
      bold?: boolean;
      /** Link interno (ex.: "/artigos/slug") ou externo (https://...). */
      href?: string;
    };

export interface ArticleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FigureLegendItem {
  /** Cor da amostra na legenda (hex). */
  color: string;
  label: string;
  detail?: string;
}

export type ArticleBlock =
  | { type: "paragraph"; content: string | InlineNode[] }
  | { type: "list"; items: string[] }
  /** Frase em destaque, com o mesmo texto do original. */
  | { type: "highlight"; content: string }
  | {
      type: "figure";
      image: ArticleImage;
      caption: string;
      legend?: FigureLegendItem[];
    };

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  /** Usado como resumo no card da listagem e na meta description. */
  description: string;
  category: string;
  /** Data ISO: "AAAA-MM-DD" ou, quando o dia não é conhecido, "AAAA-MM". */
  publishedAt: string;
  author: {
    name: string;
    credentials: string[];
  };
  blocks: ArticleBlock[];
}

const DECRETO_SERRA_AZUL_SLUG =
  "vinhedo-reconhece-vocacao-turistica-serra-azul";
const PLANO_DIRETOR_SERRA_AZUL_SLUG =
  "distrito-turistico-serra-azul-futuro-de-vinhedo-plano-diretor";

const articleList: Article[] = [
  {
    slug: DECRETO_SERRA_AZUL_SLUG,
    title:
      "Prefeitura de Vinhedo reconhece por decreto a vocação turística do Serra Azul",
    description:
      "O Decreto nº 439/2026 reconhece a parcela vinhedense do Distrito Turístico Serra Azul e cria a Área de Interesse Turístico Específico. Um avanço que merece registro — mas quem decide o que poderá ser construído é o Plano Diretor.",
    category: "Planejamento urbano",
    publishedAt: "2026-11",
    author: {
      name: "Jaime Cruz",
      credentials: ["Ex-prefeito de Vinhedo"],
    },
    blocks: [
      {
        type: "paragraph",
        content:
          "A região do Serra Azul acaba de ganhar um reconhecimento formal que há muito tempo vinha sendo construído na prática. Parques temáticos, centros de compras, hotelaria e serviços consolidaram ali, ao longo de décadas, um dos maiores polos de turismo e entretenimento do interior paulista, e agora o poder público municipal oficializa essa realidade.",
      },
      {
        type: "paragraph",
        content:
          "Trata-se do Decreto nº 439, de 4 de novembro de 2026, publicado na mesma data no Boletim Municipal (Edição 2660 – Extra). Ele reconhece no âmbito municipal a parcela vinhedense do Distrito Turístico Serra Azul, de 7,51 km², e cria dentro dela a Área de Interesse Turístico Específico (AITE), no entorno do Hopi Hari, junto à divisa com Itupeva e Louveira. A área passa a ser território prioritário para infraestrutura viária, sinalização, mobilidade e captação de recursos, com atuação integrada das secretarias e cooperação com os demais municípios do Distrito.",
      },
      {
        type: "figure",
        image: {
          src: "/artigos/mapa-distrito-turistico-serra-azul-aite.png",
          alt: "Mapa de satélite da divisa entre Vinhedo, Itupeva e Louveira. Em cinza, a parcela de Vinhedo do Distrito Turístico Serra Azul; em verde, dentro dela, a Área de Interesse Turístico Específico (AITE).",
          width: 340,
          height: 279,
        },
        legend: [
          {
            color: "#C8C8C8",
            label: "Distrito Turístico Serra Azul – parcela de Vinhedo",
            detail: "(Decreto Estadual nº 66.273/2021)",
          },
          {
            color: "#A6DE7A",
            label: "Área de Interesse Turístico Específico – AITE",
            detail: "(Decreto Municipal nº 439/2026)",
          },
        ],
        caption:
          "Mapa de delimitação territorial – Anexo II do Decreto nº 439/2026. Fonte: Prefeitura Municipal de Vinhedo.",
      },
      {
        type: "paragraph",
        content:
          "É um avanço que merece registro. Mas é importante estabelecer, com serenidade e responsabilidade, qual é o seu real alcance. O próprio decreto afirma que não altera o zoneamento, os índices urbanísticos, as regras de uso e ocupação do solo nem as exigências de licenciamento (art. 8º). Afirma ainda que o reconhecimento da vocação turística não autoriza, por si só, nenhum novo empreendimento (art. 5º, §3º). Ou seja, neste momento não há qualquer proposta de alteração urbanística. E está correto que seja assim, porque decreto não muda zoneamento; isso cabe à lei, com estudos técnicos e participação popular.",
      },
      {
        type: "paragraph",
        content:
          "Na prática, novas edificações na área continuam submetidas às regras atuais. Isso inclui a anunciada ampliação do Hopi Hari, com hotel e centro de compras. A mudança real, se vier, virá pela revisão do Plano Diretor, hoje em sua fase final.",
      },
      {
        type: "paragraph",
        content: [
          "Esse foi o ponto central do ",
          {
            text: "artigo de minha autoria publicado em 22 de maio deste ano",
            href: `/artigos/${PLANO_DIRETOR_SERRA_AZUL_SLUG}`,
          },
          ", ao defender que o Distrito Turístico exige dos municípios regras urbanísticas específicas, compatíveis com a vocação da região. Na ocasião, alertei: ",
          {
            text: "“Vinhedo corre o risco de assistir passivamente ao desenvolvimento econômico regional acontecer ao seu redor sem participar plenamente dele.”",
            italic: true,
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "O decreto confirma o diagnóstico ao reconhecer a vocação, o território e a prioridade. Falta agora o passo decisivo: definir no novo Plano Diretor parâmetros claros para a área, com desenvolvimento qualificado, controle ambiental rigoroso, proteção dos recursos hídricos e contrapartidas. Naturalmente, ninguém defende o crescimento desordenado. O que se propõe é um planejamento moderno, técnico e sustentável.",
      },
      {
        type: "paragraph",
        content:
          "O decreto abre a porta, mas quem decide o que poderá ser construído é o Plano Diretor. É nele que Vinhedo mostrará se está, de fato, preparada para participar plenamente do futuro econômico do Distrito Turístico Serra Azul.",
      },
    ],
  },
  {
    slug: PLANO_DIRETOR_SERRA_AZUL_SLUG,
    title:
      "Distrito Turístico Serra Azul: a transformação econômica regional e o futuro de Vinhedo no novo Plano Diretor",
    subtitle:
      "Reflexões sobre planejamento territorial, competitividade regional e sustentabilidade urbana",
    description:
      "Mais do que uma discussão técnica sobre zoneamento, a revisão do Plano Diretor exige uma análise sobre qual papel Vinhedo pretende exercer na nova dinâmica econômica regional consolidada pelo Distrito Turístico Serra Azul.",
    category: "Planejamento urbano",
    publishedAt: "2026-05-22",
    author: {
      name: "Jaime Cruz",
      credentials: [
        "Prefeito de Vinhedo (2014–2020)",
        "Vice-Prefeito (2008–2013), Presidente da Câmara Municipal (2005–2006) e Vereador por três mandatos (1992, 1996 e 2004)",
      ],
    },
    blocks: [
      {
        type: "paragraph",
        content:
          "O atual processo de revisão do Plano Diretor de Vinhedo talvez represente uma das mais importantes oportunidades de reflexão estratégica sobre o futuro do município nas últimas décadas.",
      },
      {
        type: "paragraph",
        content:
          "Mais do que uma discussão técnica sobre zoneamento, parâmetros urbanísticos ou ocupação do solo, o momento exige uma análise mais ampla sobre qual papel Vinhedo pretende exercer dentro da nova dinâmica econômica regional consolidada pelo Distrito Turístico Serra Azul.",
      },
      {
        type: "paragraph",
        content:
          "A criação oficial do Distrito Turístico Serra Azul pelo Governo do Estado de São Paulo não ocorreu por acaso. Ela foi resultado de um longo processo de amadurecimento regional, articulação institucional e construção coletiva entre municípios que compreenderam, ainda há muitos anos, o enorme potencial econômico, turístico e estratégico existente naquele território compartilhado entre Vinhedo, Itupeva, Louveira e Jundiaí.",
      },
      {
        type: "paragraph",
        content:
          "Participei diretamente dos debates iniciais que ajudaram a consolidar essa visão regional. Naquele momento, já era possível perceber que a região do Serra Azul deixaria de ser apenas um eixo de passagem para se transformar, progressivamente, em um dos maiores polos turísticos, comerciais e de entretenimento do interior paulista. O que à época era uma visão de futuro, hoje tornou-se uma realidade concreta e oficialmente reconhecida pelo Estado de São Paulo.",
      },
      {
        type: "paragraph",
        content:
          "O próprio Plano Básico de Implementação do Distrito Turístico Serra Azul demonstra a dimensão territorial e econômica dessa transformação regional. O Distrito abrange atualmente cerca de 41,12 km² distribuídos entre os quatro municípios integrantes, sendo 17,744 km² em Itupeva, 9,65 km² em Jundiaí, 7,51 km² em Vinhedo e 6,22 km² em Louveira.",
      },
      {
        type: "paragraph",
        content:
          "Esses números não representam apenas uma delimitação geográfica. Eles revelam que Vinhedo ocupa posição territorial estratégica dentro do Distrito Turístico Serra Azul e participa diretamente do núcleo econômico regional que vem se consolidando nas últimas décadas.",
      },
      {
        type: "paragraph",
        content:
          "Hoje, a região abriga equipamentos turísticos e econômicos de grande relevância nacional, como parques temáticos, centros de compras, hotelaria, centros de convenções e empreendimentos voltados à economia da experiência. O próprio Plano Básico do Distrito já reconhece oficialmente o crescimento contínuo da atividade turística regional, a ampliação do fluxo de visitantes e a necessidade de expansão estruturada da infraestrutura econômica e turística.",
      },
      {
        type: "paragraph",
        content:
          "Mais importante ainda: o documento oficial do Distrito Turístico estabelece, de forma clara, a necessidade de os municípios integrantes promoverem adequações urbanísticas, revisões normativas e novos regramentos específicos compatíveis com a vocação econômica e turística regional.",
      },
      {
        type: "paragraph",
        content:
          "Esse ponto é central para a reflexão que Vinhedo precisa realizar neste momento.",
      },
      {
        type: "paragraph",
        content:
          "Enquanto o Distrito Turístico Serra Azul avança institucionalmente e os municípios vizinhos estruturam políticas urbanísticas mais alinhadas à nova realidade regional, Vinhedo ainda mantém parcela significativa de seu território estratégico submetida a parâmetros urbanísticos concebidos em uma realidade territorial anterior à consolidação do próprio Distrito Turístico.",
      },
      {
        type: "paragraph",
        content:
          "E aqui é importante estabelecer uma reflexão madura e responsável.",
      },
      {
        type: "paragraph",
        content:
          "O debate não pode ser reduzido à falsa dicotomia entre preservação ambiental e desenvolvimento econômico. Essa simplificação empobrece uma discussão que, na verdade, exige elevado grau de responsabilidade técnica, ambiental e institucional.",
      },
      {
        type: "paragraph",
        content:
          "Vinhedo possui patrimônio ambiental valioso, recursos hídricos importantes e características paisagísticas que precisam ser preservadas. Isso é indiscutível. Entretanto, também é verdade que o conceito contemporâneo de sustentabilidade evoluiu profundamente nas últimas décadas.",
      },
      {
        type: "paragraph",
        content:
          "Hoje, desenvolvimento sustentável não significa congelamento territorial permanente.",
      },
      {
        type: "paragraph",
        content:
          "O urbanismo contemporâneo trabalha justamente com a compatibilização entre:",
      },
      {
        type: "list",
        items: [
          "preservação ambiental;",
          "desenvolvimento econômico qualificado;",
          "controle urbanístico rigoroso;",
          "infraestrutura sustentável;",
          "proteção hídrica;",
          "ocupação inteligente do solo;",
          "adensamento qualificado associado a contrapartidas ambientais;",
          "mobilidade;",
          "geração de empregos;",
          "integração regional.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Os próprios municípios que integram o Distrito Turístico Serra Azul demonstram isso em seus instrumentos de planejamento territorial.",
      },
      {
        type: "paragraph",
        content:
          "O Plano Diretor de Itupeva, por exemplo, adota expressamente o conceito de desenvolvimento urbano sustentável e prevê a integração entre crescimento econômico, turismo, proteção ambiental e diversificação de usos urbanos. O município compreendeu que turismo, serviços, lazer, hospitalidade e sustentabilidade podem coexistir dentro de um modelo territorial planejado.",
      },
      {
        type: "paragraph",
        content:
          "Jundiaí, por sua vez, apresenta um dos modelos urbanísticos mais modernos da região, articulando desenvolvimento econômico sustentável, mobilidade, economia criativa, proteção ambiental e instrumentos urbanísticos contemporâneos. Seu Plano Diretor demonstra clara compreensão da importância estratégica do planejamento territorial integrado e da competitividade regional.",
      },
      {
        type: "paragraph",
        content:
          "Louveira também avança em uma lógica de desenvolvimento econômico articulado ao planejamento urbano, à logística, à ocupação racional do solo e à integração regional.",
      },
      {
        type: "paragraph",
        content:
          "Diante desse cenário, Vinhedo precisa fazer uma pergunta essencial:",
      },
      {
        type: "highlight",
        content:
          "O município está urbanisticamente preparado para participar plenamente do futuro econômico do Distrito Turístico Serra Azul?",
      },
      {
        type: "paragraph",
        content:
          "Essa talvez seja mais uma reflexão que deve emergir do atual processo de revisão do Plano Diretor.",
      },
      {
        type: "paragraph",
        content:
          "Porque enquanto os municípios vizinhos avançam na construção de ambientes urbanísticos compatíveis com o turismo sustentável, os serviços especializados, a economia da experiência, os complexos de hospitalidade, os centros de convenções e os polos de inovação em serviços, Vinhedo corre o risco de assistir passivamente ao desenvolvimento econômico regional acontecer ao seu redor sem participar plenamente dele.",
      },
      { type: "paragraph", content: "E isso teria consequências importantes:" },
      {
        type: "list",
        items: [
          "menor competitividade territorial;",
          "perda de investimentos;",
          "redução do potencial de arrecadação;",
          "menor geração de empregos;",
          "deslocamento da dinâmica econômica regional para municípios vizinhos.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Naturalmente, ninguém defende crescimento desordenado ou flexibilização irresponsável.",
      },
      {
        type: "paragraph",
        content:
          "O que se propõe é exatamente o contrário: planejamento moderno, técnico, sustentável e territorialmente eficiente.",
      },
      {
        type: "paragraph",
        content:
          "A revisão do Plano Diretor pode representar oportunidade histórica para Vinhedo construir um modelo inovador de desenvolvimento territorial sustentável dentro do Distrito Turístico Serra Azul.",
      },
      { type: "paragraph", content: "Um modelo baseado em:" },
      {
        type: "list",
        items: [
          "turismo qualificado;",
          "hospitalidade integrada;",
          "centros de convenções;",
          "ocupação inteligente do solo;",
          "integração paisagística;",
          "arquitetura sustentável;",
          "controle ambiental rigoroso;",
          "proteção de nascentes;",
          "corredores verdes;",
          "drenagem sustentável;",
          "adensamento qualificado com contrapartidas ambientais;",
          "geração de emprego e renda;",
          "fortalecimento do setor de serviços;",
          "ampliação da atividade econômica regional;",
          "atração de investimentos sustentáveis;",
          "desenvolvimento da nova economia do turismo e da hospitalidade.",
        ],
      },
      {
        type: "paragraph",
        content:
          "O Distrito Turístico Serra Azul não deve ser compreendido apenas como um polo de lazer e entretenimento, mas como um ambiente regional integrado de hospitalidade, convenções, serviços especializados, inovação e desenvolvimento econômico sustentável.",
      },
      {
        type: "paragraph",
        content:
          "A atração de âncoras de entretenimento, hospitalidade, convenções e serviços especializados representa uma das formas mais rápidas e sustentáveis de ampliar a arrecadação municipal, fortalecer o ISS e gerar empregos diretos e indiretos dentro da nova economia regional.",
      },
      {
        type: "paragraph",
        content:
          "O próprio Plano Básico de Implementação do Distrito Turístico Serra Azul reconhece a necessidade de os municípios participantes desenvolverem regras urbanísticas específicas, políticas de incentivo, melhorias de infraestrutura e mecanismos de apoio à consolidação do Distrito como vetor regional de desenvolvimento econômico e turístico.",
      },
      {
        type: "paragraph",
        content:
          "Portanto, o debate que Vinhedo precisa realizar neste momento não é se deve preservar ou desenvolver.",
      },
      {
        type: "paragraph",
        content:
          "A verdadeira discussão é: como desenvolver de forma sustentável, inteligente, equilibrada e compatível com a nova realidade regional.",
      },
      {
        type: "paragraph",
        content:
          "A revisão do Plano Diretor oferece uma oportunidade rara de reposicionar estrategicamente o município para as próximas décadas.",
      },
      {
        type: "paragraph",
        content:
          "Ignorar a transformação regional em curso talvez represente um grande risco.",
      },
      {
        type: "paragraph",
        content:
          "Planejar com responsabilidade, visão de futuro e capacidade de integração regional pode representar uma das maiores oportunidades econômicas, urbanísticas e institucionais da história contemporânea de Vinhedo.",
      },
    ],
  },
];

export const articles: Article[] = [...articleList].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getOtherArticles(slug: string, limit = 2): Article[] {
  return articles.filter((article) => article.slug !== slug).slice(0, limit);
}

function inlineToText(content: string | InlineNode[]): string {
  if (typeof content === "string") return content;
  return content
    .map((node) => (typeof node === "string" ? node : node.text))
    .join("");
}

export function getArticleText(article: Article): string {
  return article.blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return inlineToText(block.content);
        case "list":
          return block.items.join(" ");
        case "highlight":
          return block.content;
        case "figure":
          return "";
      }
    })
    .join(" ");
}

const WORDS_PER_MINUTE = 200;

export function getReadingMinutes(article: Article): number {
  const words = getArticleText(article).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

const MONTHS = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

/** "2026-05-22" → "22 de maio de 2026" · "2026-11" → "Novembro de 2026" */
export function formatArticleDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const monthName = MONTHS[month - 1];

  if (!day) {
    return `${monthName.charAt(0).toUpperCase()}${monthName.slice(1)} de ${year}`;
  }

  return `${day} de ${monthName} de ${year}`;
}

export function getArticleImages(article: Article): ArticleImage[] {
  return article.blocks.flatMap((block) =>
    block.type === "figure" ? [block.image] : [],
  );
}
