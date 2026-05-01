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
  title: "Entre Frestas e Horizontes — Jaime Cruz",
  description:
    "Uma travessia de vida, fé e serviço público. O livro de Jaime Cruz.",
  openGraph: {
    title: "Entre Frestas e Horizontes — Jaime Cruz",
    description:
      "Uma travessia de vida, fé e serviço público. O livro de Jaime Cruz.",
    type: "book",
    locale: "pt_BR",
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
