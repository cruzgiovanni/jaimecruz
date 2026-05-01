import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./livro.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entre Frestas e Horizontes — Livro de Jaime Cruz",
  description:
    "Entre Frestas e Horizontes: o livro autobiográfico de Jaime Cesar da Cruz, ex-prefeito de Vinhedo. Uma travessia de vida, fé e serviço público — do rancho de madeira no Paraná aos cargos públicos em Vinhedo, SP. Leia online ou baixe o PDF gratuitamente.",
  keywords: [
    "Entre Frestas e Horizontes",
    "livro Jaime Cruz",
    "autobiografia Jaime Cruz",
    "Jaime Cruz Vinhedo",
    "ex-prefeito Vinhedo livro",
    "livro prefeito Vinhedo",
    "Jaime Cesar da Cruz",
    "memorial Jaime Cruz",
  ],
  alternates: { canonical: "/livro" },
  openGraph: {
    title: "Entre Frestas e Horizontes — Livro de Jaime Cruz",
    description:
      "Autobiografia de Jaime Cesar da Cruz, ex-prefeito de Vinhedo. Leia online ou baixe o PDF.",
    type: "book",
    locale: "pt_BR",
    url: "https://jaimecruz.com.br/livro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entre Frestas e Horizontes — Livro de Jaime Cruz",
    description:
      "Autobiografia de Jaime Cesar da Cruz, ex-prefeito de Vinhedo. Leia online ou baixe o PDF.",
  },
};

export default function LivroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${geist.variable} livro-root`}>
      {children}
    </div>
  );
}
