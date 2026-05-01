import HeroSection from "@/components/livro/HeroSection";
import AboutBookSection from "@/components/livro/AboutBookSection";
import QuoteBreak from "@/components/livro/QuoteBreak";
import ChaptersSection from "@/components/livro/ChaptersSection";
import AboutAuthorSection from "@/components/livro/AboutAuthorSection";
import TestimonialSection from "@/components/livro/TestimonialSection";
import CTASection from "@/components/livro/CTASection";
import LivroFooter from "@/components/livro/LivroFooter";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${SITE.url}/livro#book`,
  name: SITE.book.title,
  alternateName: `${SITE.book.title}: ${SITE.book.subtitle}`,
  headline: SITE.book.subtitle,
  description:
    "Autobiografia de Jaime Cesar da Cruz, ex-prefeito de Vinhedo. Do rancho de madeira no interior do Paraná aos cargos públicos em Vinhedo, SP — uma travessia de vida, fé e serviço público.",
  bookFormat: "https://schema.org/EBook",
  inLanguage: SITE.book.inLanguage,
  datePublished: SITE.book.datePublished,
  numberOfPages: 156,
  url: `${SITE.url}/livro`,
  image: `${SITE.url}${SITE.defaultOgImage}`,
  author: { "@id": `${SITE.url}/#person` },
  publisher: { "@type": "Organization", name: SITE.book.publisher },
  potentialAction: [
    {
      "@type": "ReadAction",
      target: `${SITE.url}/livro/ler`,
      expectsAcceptanceOf: {
        "@type": "Offer",
        category: "free",
        price: 0,
        priceCurrency: "BRL",
        eligibleRegion: { "@type": "Country", name: "BR" },
      },
    },
    {
      "@type": "DownloadAction",
      target: SITE.book.pdfUrl,
      expectsAcceptanceOf: {
        "@type": "Offer",
        category: "free",
        price: 0,
        priceCurrency: "BRL",
        eligibleRegion: { "@type": "Country", name: "BR" },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: SITE.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Livro",
      item: `${SITE.url}/livro`,
    },
  ],
};

export default function LivroPage() {
  return (
    <main>
      <JsonLd data={[bookSchema, breadcrumbSchema]} />
      <HeroSection />
      <AboutBookSection />
      <QuoteBreak variant="A" />
      <ChaptersSection />
      <AboutAuthorSection />
      <QuoteBreak variant="B" />
      <TestimonialSection />
      <CTASection />
      <LivroFooter />
    </main>
  );
}
