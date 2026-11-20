import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import { SITE } from "@/lib/site";
import "./ninguem-errou.css";

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

const book = SITE.launchBook;

const TITLE = `${book.title} — ${book.subtitle}`;
const DESCRIPTION = `Novo livro de Jaime Cruz. ${book.description} eBook em PDF, ${book.pages} páginas, ${book.priceLabel}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Ninguém Errou",
    "livro Jaime Cruz",
    "proteção integral da criança e do adolescente",
    "governança da proteção da infância",
    "rede de proteção municipal",
    "Sistema de Garantia de Direitos",
    "Conselho Tutelar",
    "CMDCA",
    "ECA",
    "violência contra crianças",
    "fluxo de escuta e proteção",
  ],
  alternates: { canonical: book.path },
  openGraph: {
    title: `${TITLE} · Jaime Cruz`,
    description: DESCRIPTION,
    type: "book",
    locale: "pt_BR",
    url: `${SITE.url}${book.path}`,
    images: [
      {
        url: book.ogImage,
        width: 1200,
        height: 630,
        alt: `Capa do livro ${book.title} — ${book.subtitle}, de Jaime Cruz`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · Jaime Cruz`,
    description: DESCRIPTION,
    images: [book.ogImage],
  },
};

export default function NinguemErrouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${geist.variable} ne-root`}>
      {children}
    </div>
  );
}
