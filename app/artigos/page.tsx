import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/artigos/ArticleCard";
import { ArtigosFooter } from "@/components/artigos/ArtigosFooter";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const DESCRIPTION =
  "Artigos de Jaime Cruz, ex-prefeito de Vinhedo, sobre planejamento urbano, desenvolvimento regional, o Distrito Turístico Serra Azul e o futuro de Vinhedo.";

export const metadata: Metadata = {
  title: "Artigos",
  description: DESCRIPTION,
  alternates: { canonical: "/artigos" },
  openGraph: {
    title: "Artigos — Jaime Cruz",
    description: DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    url: `${SITE.url}/artigos`,
    images: [SITE.defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artigos — Jaime Cruz",
    description: DESCRIPTION,
    images: [SITE.defaultOgImage],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE.url}/artigos#page`,
  name: "Artigos — Jaime Cruz",
  description: DESCRIPTION,
  url: `${SITE.url}/artigos`,
  inLanguage: "pt-BR",
  author: { "@id": `${SITE.url}/#person` },
  publisher: { "@id": `${SITE.url}/#person` },
  blogPost: articles.map((article) => ({
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    url: `${SITE.url}/artigos/${article.slug}`,
    author: { "@id": `${SITE.url}/#person` },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Artigos",
      item: `${SITE.url}/artigos`,
    },
  ],
};

export default function ArtigosPage() {
  return (
    <>
      <JsonLd data={[blogSchema, breadcrumbSchema]} />

      <main className="mx-auto w-full max-w-[760px] px-6 pt-14 pb-24 sm:px-8 sm:pt-20">
        <Link href="/" className="a-back a-fade">
          <span aria-hidden="true">←</span> Início
        </Link>

        <header className="mt-12 sm:mt-16">
          <span
            className="a-eyebrow a-fade block"
            style={{ animationDelay: "60ms" }}
          >
            Jaime Cruz · Opinião
          </span>
          <h1
            className="a-page-title a-fade mt-5"
            style={{ animationDelay: "120ms" }}
          >
            Artigos
          </h1>
          <p
            className="a-intro a-fade mt-6"
            style={{ animationDelay: "180ms" }}
          >
            Reflexões sobre planejamento urbano, desenvolvimento regional e o
            futuro de Vinhedo.
          </p>
          <hr
            className="a-rule a-fade mt-10"
            style={{ animationDelay: "240ms" }}
          />
        </header>

        {articles.length > 0 ? (
          <ol className="mt-12 flex flex-col gap-6 sm:mt-14">
            {articles.map((article, index) => (
              <li
                key={article.slug}
                className="a-fade"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <ArticleCard article={article} />
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-12 text-center" style={{ color: "var(--a-muted)" }}>
            Nenhum artigo publicado ainda.
          </p>
        )}
      </main>

      <ArtigosFooter />
    </>
  );
}
