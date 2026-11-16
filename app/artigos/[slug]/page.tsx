import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  formatArticleDate,
  getArticle,
  getArticleImages,
  getArticleText,
  getOtherArticles,
  getReadingMinutes,
} from "@/data/articles";
import { ArticleBody } from "@/components/artigos/ArticleBody";
import { ArticleCard } from "@/components/artigos/ArticleCard";
import { ArtigosFooter } from "@/components/artigos/ArtigosFooter";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  const url = `${SITE.url}/artigos/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author.name, url: SITE.url }],
    alternates: { canonical: `/artigos/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      locale: "pt_BR",
      url,
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      section: article.category,
      images: [SITE.defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [SITE.defaultOgImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const url = `${SITE.url}/artigos/${article.slug}`;
  const readingMinutes = getReadingMinutes(article);
  const otherArticles = getOtherArticles(article.slug);
  const images = getArticleImages(article);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    alternativeHeadline: article.subtitle,
    description: article.description,
    datePublished: article.publishedAt,
    inLanguage: "pt-BR",
    articleSection: article.category,
    wordCount: getArticleText(article).split(/\s+/).filter(Boolean).length,
    url,
    mainEntityOfPage: url,
    image: [
      `${SITE.url}${SITE.defaultOgImage}`,
      ...images.map((image) => `${SITE.url}${image.src}`),
    ],
    author: { "@id": `${SITE.url}/#person` },
    publisher: { "@id": `${SITE.url}/#person` },
    isPartOf: { "@id": `${SITE.url}/artigos#page` },
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
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <main>
        <article className="mx-auto w-full max-w-[720px] px-6 pt-14 pb-20 sm:px-8 sm:pt-20">
          <Link href="/artigos" className="a-back a-fade">
            <span aria-hidden="true">←</span> Todos os artigos
          </Link>

          <header className="mt-12 sm:mt-14">
            <span
              className="a-eyebrow a-fade block"
              style={{ animationDelay: "60ms" }}
            >
              Artigo · {article.category}
            </span>

            <h1
              className="a-title a-fade mt-5"
              style={{ animationDelay: "120ms" }}
            >
              {article.title}
            </h1>

            {article.subtitle ? (
              <p
                className="a-subtitle a-fade mt-5"
                style={{ animationDelay: "180ms" }}
              >
                {article.subtitle}
              </p>
            ) : null}

            <div
              className="a-byline a-fade mt-9"
              style={{ animationDelay: "240ms" }}
            >
              <span className="a-avatar" aria-hidden="true">
                J
              </span>
              <div>
                <p className="a-byline-name">Por {article.author.name}</p>
                <p className="a-byline-meta">
                  <time dateTime={article.publishedAt}>
                    {formatArticleDate(article.publishedAt)}
                  </time>{" "}
                  · {readingMinutes} min de leitura
                </p>
              </div>
            </div>
          </header>

          <hr
            className="a-rule a-fade my-10 sm:my-12"
            style={{ animationDelay: "300ms" }}
          />

          <div className="a-fade" style={{ animationDelay: "340ms" }}>
            <ArticleBody blocks={article.blocks} />
          </div>

          <footer className="mt-16 border-t pt-10" style={{ borderColor: "var(--a-border)" }}>
            <p className="a-signature-name">{article.author.name}</p>
            <div className="mt-2">
              {article.author.credentials.map((credential) => (
                <p key={credential} className="a-signature-credential">
                  {credential}
                </p>
              ))}
            </div>
          </footer>
        </article>

        {otherArticles.length > 0 ? (
          <aside
            aria-labelledby="leia-tambem"
            className="border-t py-16 sm:py-20"
            style={{ borderColor: "var(--a-border)" }}
          >
            <div className="mx-auto w-full max-w-[720px] px-6 sm:px-8">
              <h2 id="leia-tambem" className="a-eyebrow">
                Leia também
              </h2>
              <ul className="mt-6 grid gap-5">
                {otherArticles.map((other) => (
                  <li key={other.slug}>
                    <ArticleCard article={other} headingLevel="h3" compact />
                  </li>
                ))}
              </ul>
              <Link href="/artigos" className="a-back mt-10">
                Ver todos os artigos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        ) : null}
      </main>

      <ArtigosFooter />
    </>
  );
}
