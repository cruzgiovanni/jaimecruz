import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ReactLenis } from "@/lib/lenis"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/Navbar"
import { ThemeProvider } from "@/components/ThemeProvider"
import { JsonLd } from "@/components/JsonLd"
import { SITE } from "@/lib/site"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f6ef" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

const KEYWORDS = [
  "Jaime Cruz",
  "Jaime Cesar da Cruz",
  "Jaime Cruz Vinhedo",
  "prefeito Jaime Cruz",
  "ex-prefeito de Vinhedo",
  "Jaime Cruz prefeito Vinhedo",
  "Vinhedo SP",
  "Entre Frestas e Horizontes",
  "livro Jaime Cruz",
  "PUC-Campinas filosofia",
  "vereador Vinhedo",
  "Secretaria de Habitação Vinhedo",
  "vitória judicial Jaime Cruz",
  "cartel da merenda Vinhedo",
]

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Jaime Cruz — Ex-Prefeito de Vinhedo · Trajetória e Livro",
    template: "%s · Jaime Cruz",
  },
  description:
    "Site oficial de Jaime Cesar da Cruz, ex-prefeito de Vinhedo (2014–2020). Conheça a trajetória de três décadas de serviço público, o livro Entre Frestas e Horizontes e o caso da absolvição definitiva no processo do cartel da merenda.",
  applicationName: "Jaime Cruz",
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  keywords: KEYWORDS,
  category: "politics",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Jaime Cruz — Ex-Prefeito de Vinhedo",
    description:
      "Trajetória, livro e absolvição definitiva. Site oficial de Jaime Cesar da Cruz.",
    siteName: SITE.name,
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    images: [
      {
        url: SITE.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Jaime Cruz — Ex-Prefeito de Vinhedo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaime Cruz — Ex-Prefeito de Vinhedo",
    description:
      "Trajetória, livro e absolvição definitiva. Site oficial de Jaime Cesar da Cruz.",
    images: [SITE.defaultOgImage],
  },
  formatDetection: {
    telephone: false,
  },
  // Para Search Console: descomente e cole o código que o Google fornece
  // verification: { google: "COLE_O_CODIGO_AQUI" },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/#person`,
  name: SITE.fullName,
  alternateName: ["Jaime Cruz", "Prefeito Jaime Cruz"],
  givenName: "Jaime",
  additionalName: "Cesar",
  familyName: "Cruz",
  url: SITE.url,
  image: `${SITE.url}${SITE.defaultOgImage}`,
  jobTitle: SITE.jobTitle,
  description: SITE.bio,
  birthDate: SITE.birthDate,
  birthPlace: {
    "@type": "Place",
    name: SITE.birthPlace,
  },
  nationality: { "@type": "Country", name: "Brasil" },
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: SITE.country,
    },
  },
  alumniOf: SITE.alumniOf.map((name) => ({
    "@type": "EducationalOrganization",
    name,
  })),
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Prefeito de Vinhedo",
      occupationLocation: { "@type": "City", name: "Vinhedo, SP" },
      startDate: "2014",
      endDate: "2020",
    },
    {
      "@type": "Occupation",
      name: "Vice-Prefeito de Vinhedo",
      occupationLocation: { "@type": "City", name: "Vinhedo, SP" },
      startDate: "2008",
      endDate: "2016",
    },
    {
      "@type": "Occupation",
      name: "Vereador de Vinhedo",
      occupationLocation: { "@type": "City", name: "Vinhedo, SP" },
      startDate: "1993",
      endDate: "2000",
    },
  ],
  sameAs: [SITE.social.linkedin, SITE.social.instagram, SITE.social.facebook],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.shortBio,
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE.url}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <JsonLd data={[personSchema, websiteSchema]} />
      </head>
      <body className={`${inter.className} antialiased pt-16`}>
        <ThemeProvider>
          <ReactLenis root>
            <Navbar />
            {children}
            <Analytics />
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  )
}
