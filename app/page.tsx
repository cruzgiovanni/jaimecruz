import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Geist } from "next/font/google";
import "./hub.css";

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
  title: "Jaime Cruz — Ex-Prefeito de Vinhedo · Trajetória e Livro",
  description:
    "Site oficial de Jaime Cesar da Cruz, ex-prefeito de Vinhedo (2014–2020). Conheça a trajetória, o livro Entre Frestas e Horizontes e o caso da absolvição definitiva no processo do cartel da merenda escolar.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jaime Cruz — Ex-Prefeito de Vinhedo",
    description:
      "Trajetória, livro e absolvição definitiva. Site oficial de Jaime Cesar da Cruz.",
    type: "website",
    locale: "pt_BR",
    url: "https://jaimecruz.com.br/",
  },
};

const cards = [
  {
    href: "/livro",
    eyebrow: "O Livro · 2026",
    title: "Entre Frestas e Horizontes",
    subtitle: "Uma travessia de vida, fé e serviço público.",
    cta: "Conhecer a obra",
    delay: 80,
  },
  {
    href: "/absolvicao",
    eyebrow: "Justiça · 2026",
    title: "A Verdade Triunfa",
    subtitle:
      "A vitória judicial no caso do cartel da merenda escolar — reportagens e documentos.",
    cta: "Ver as notícias",
    delay: 180,
  },
];

export default function HubPage() {
  return (
    <div className={`${playfair.variable} ${geist.variable} hub-root`}>
      <main className="mx-auto flex min-h-screen w-full max-w-[640px] flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-32">
        <span className="hub-eyebrow hub-fade" style={{ animationDelay: "0ms" }}>
          Jaime Cruz · Vinhedo, SP
        </span>

        <h1
          className="hub-serif hub-fade"
          style={{
            color: "var(--hub-heading)",
            fontSize: "clamp(2.5rem, 7vw, 4rem)",
            lineHeight: 1.05,
            fontWeight: 500,
            marginTop: "1.5rem",
            animationDelay: "100ms",
          }}
        >
          Jaime Cesar
          <br />
          da Cruz
        </h1>

        <p
          className="hub-fade"
          style={{
            color: "var(--hub-text-muted)",
            fontSize: "0.95rem",
            marginTop: "1.25rem",
            maxWidth: "28rem",
            lineHeight: 1.6,
            animationDelay: "200ms",
          }}
        >
          Três décadas de serviço público.
          <br />
          Uma travessia que escolheu gostar de gente.
        </p>

        <div
          className="hub-fade"
          style={{ animationDelay: "260ms" }}
        >
          <div className="hub-rule" />
        </div>

        <nav
          aria-label="Páginas principais"
          className="flex w-full flex-col gap-4"
        >
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="hub-card hub-fade"
              style={{ animationDelay: `${card.delay + 260}ms` }}
            >
              <span className="hub-card-eyebrow">{card.eyebrow}</span>
              <span className="hub-card-title">{card.title}</span>
              <span className="hub-card-subtitle">{card.subtitle}</span>
              <span className="hub-card-arrow">
                {card.cta} <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </nav>

        <footer
          className="hub-fade mt-20 text-center"
          style={{
            color: "var(--hub-text-muted)",
            fontSize: "0.72rem",
            lineHeight: 1.7,
            animationDelay: "560ms",
          }}
        >
          <p>© {new Date().getFullYear()} — Jaime Cesar da Cruz</p>
          <p style={{ marginTop: "0.4rem" }}>
            Desenvolvido por{" "}
            <a
              href="https://giovannicruz.dev/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--hub-gold)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              giovannicruz.dev
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
