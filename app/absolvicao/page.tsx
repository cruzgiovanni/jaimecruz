"use client";

import { siteText } from "@/data/siteData";
import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import SocialDock from "@/components/SocialDock";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE.url}/absolvicao#page`,
  name: "Absolvição de Jaime Cruz — Vitória da Justiça",
  description:
    "Reportagens sobre a absolvição definitiva de Jaime Cruz, ex-prefeito de Vinhedo, no caso do cartel da merenda escolar.",
  url: `${SITE.url}/absolvicao`,
  inLanguage: "pt-BR",
  about: { "@id": `${SITE.url}/#person` },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: siteText.news.length,
    itemListElement: siteText.news.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: item.url,
      name: item.title,
      item: {
        "@type": "NewsArticle",
        headline: item.title,
        url: item.url,
        publisher: { "@type": "Organization", name: item.subtitle },
        about: { "@id": `${SITE.url}/#person` },
        inLanguage: "pt-BR",
      },
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Absolvição",
      item: `${SITE.url}/absolvicao`,
    },
  ],
};

export default function AbsolvicaoPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <JsonLd data={[collectionSchema, breadcrumbSchema]} />
      <Header
        headline={siteText.headline}
        subheadline={siteText.subheadline}
      />

      <NewsSection news={siteText.news} />

      <SocialDock socialLinks={siteText.socialLinks} />

      <Footer />
    </main>
  );
}
