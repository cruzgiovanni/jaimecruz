import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenText, ExternalLink, Newspaper, PenLine } from "lucide-react";
import { blogEntries, getBlogEntryHref, isManualBlogPost } from "@/data/blogPosts";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog e Notícias",
  description:
    "Publicações, artigos e links para notícias sobre Jaime Cruz, sua trajetória pública, o livro Entre Frestas e Horizontes e reportagens na imprensa.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog e Notícias — Jaime Cruz",
    description:
      "Artigos próprios e links para portais de notícias sobre Jaime Cruz.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE.url}/blog`,
    images: [SITE.defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog e Notícias — Jaime Cruz",
    description:
      "Artigos próprios e links para portais de notícias sobre Jaime Cruz.",
    images: [SITE.defaultOgImage],
  },
};

const manualPostsCount = blogEntries.filter(isManualBlogPost).length;
const externalLinksCount = blogEntries.length - manualPostsCount;

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE.url}/blog#page`,
  name: "Blog e Notícias — Jaime Cruz",
  description:
    "Publicações, artigos e links para notícias sobre Jaime Cruz.",
  url: `${SITE.url}/blog`,
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE.url}/#person` },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: blogEntries.length,
    itemListElement: blogEntries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: isManualBlogPost(entry)
        ? `${SITE.url}/blog/${entry.slug}`
        : entry.url,
      name: entry.title,
    })),
  },
};

function EntryTypeIcon({ kind }: { kind: "post" | "external" }) {
  if (kind === "post") {
    return <PenLine aria-hidden="true" className="h-4 w-4" />;
  }

  return <ExternalLink aria-hidden="true" className="h-4 w-4" />;
}

function BlogEntryCard({ entry }: { entry: (typeof blogEntries)[number] }) {
  const href = getBlogEntryHref(entry);
  const isPost = isManualBlogPost(entry);
  const cta = isPost ? "Ler publicação" : `Abrir em ${entry.source}`;

  const card = (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold-muted px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
          <EntryTypeIcon kind={entry.kind} />
          {isPost ? "Artigo" : "Link externo"}
        </span>
        <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {entry.category}
        </span>
      </div>

      <h3 className="text-xl font-semibold leading-tight text-card-foreground transition-colors group-hover:text-gold md:text-2xl">
        {entry.title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground md:text-base">
        {entry.description}
      </p>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5 text-sm">
        <span className="text-muted-foreground">
          {isPost ? "Publicação interna" : entry.source}
        </span>
        <span className="inline-flex items-center gap-2 font-medium text-gold transition-all group-hover:gap-3">
          {cta}
          {isPost ? null : <ExternalLink aria-hidden="true" className="h-4 w-4" />}
        </span>
      </div>
    </article>
  );

  if (isPost) {
    return (
      <Link href={href} aria-label={`Ler publicação: ${entry.title}`}>
        {card}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir notícia externa: ${entry.title}`}
    >
      {card}
    </a>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <JsonLd data={collectionSchema} />

      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--gold)/0.18),transparent_32rem)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
          >
            ← Voltar ao início
          </Link>

          <div className="mt-12 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <Newspaper aria-hidden="true" className="h-4 w-4" />
              Blog · Notícias
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Publicações, notícias e registros da trajetória.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Um espaço para reunir textos próprios, comunicados e links para
              portais de notícias sobre Jaime Cruz, sua história pública e seus
              projetos.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
            <div className="rounded-2xl border border-border bg-card/70 p-5">
              <div className="flex items-center gap-3 text-gold">
                <BookOpenText aria-hidden="true" className="h-5 w-5" />
                <span className="text-2xl font-semibold">{manualPostsCount}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                posts manuais preparados para leitura no próprio site
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-5">
              <div className="flex items-center gap-3 text-gold">
                <ExternalLink aria-hidden="true" className="h-5 w-5" />
                <span className="text-2xl font-semibold">{externalLinksCount}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                links para reportagens e portais externos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Arquivo
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground">
                Últimas publicações
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Cards marcados como artigo abrem dentro do site. Cards marcados
              como link externo levam para o portal de origem.
            </p>
          </div>

          {blogEntries.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {blogEntries.map((entry, index) => (
                <BlogEntryCard
                  key={`${entry.kind}-${getBlogEntryHref(entry)}-${index}`}
                  entry={entry}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
              <h3 className="text-xl font-semibold text-card-foreground">
                Nenhuma publicação cadastrada ainda.
              </h3>
              <p className="mt-3 text-muted-foreground">
                Novos posts e links de notícias aparecerão aqui.
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-sm leading-7 text-muted-foreground">
        <p>© {new Date().getFullYear()} — Jaime Cesar da Cruz</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://giovannicruz.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
          >
            giovannicruz.dev
          </a>
        </p>
      </footer>
    </main>
  );
}
