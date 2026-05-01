import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Absolvição de Jaime Cruz — Vitória da Justiça no Caso da Merenda",
  description:
    "Jaime Cruz, ex-prefeito de Vinhedo, foi absolvido definitivamente pela Justiça no caso do cartel da merenda escolar. Reúne reportagens da Terra, UOL, Jovem Pan, IstoÉ Dinheiro, Revista Oeste e outros veículos.",
  keywords: [
    "absolvição Jaime Cruz",
    "Jaime Cruz absolvido",
    "ex-prefeito Vinhedo absolvido",
    "cartel da merenda Vinhedo",
    "merenda escolar Vinhedo",
    "Justiça Federal Vinhedo",
    "Jaime Cesar da Cruz absolvido",
    "vitória judicial Jaime Cruz",
    "prefeito Vinhedo merenda",
  ],
  alternates: { canonical: "/absolvicao" },
  openGraph: {
    title: "Absolvição de Jaime Cruz — Vitória da Justiça",
    description:
      "Ex-prefeito de Vinhedo absolvido definitivamente no caso do cartel da merenda escolar. Reportagens dos principais veículos do Brasil.",
    type: "article",
    locale: "pt_BR",
    url: "https://jaimecruz.com.br/absolvicao",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/933998ff-5ff7-4fd1-8589-c8a94956fcbf.jpg?token=M9VAgcewcg71EAIm_5aKB8xbnzY0Q_AC_0QGOgr6yuE&height=630&width=1200&expires=33288695844",
        width: 1200,
        height: 630,
        alt: "Jaime Cruz — Vitória da Justiça",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Absolvição de Jaime Cruz — Vitória da Justiça",
    description:
      "Ex-prefeito de Vinhedo absolvido definitivamente no caso do cartel da merenda escolar.",
    images: [
      "https://opengraph.b-cdn.net/production/images/933998ff-5ff7-4fd1-8589-c8a94956fcbf.jpg?token=M9VAgcewcg71EAIm_5aKB8xbnzY0Q_AC_0QGOgr6yuE&height=630&width=1200&expires=33288695844",
    ],
  },
};

export default function AbsolvicaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
