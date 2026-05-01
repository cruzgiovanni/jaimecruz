import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ReactLenis } from "@/lib/lenis"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/Navbar"
import { ThemeProvider } from "@/components/ThemeProvider"

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

export const metadata: Metadata = {
  title: {
    default: "Jaime Cruz",
    template: "%s | Jaime Cruz",
  },
  description: "Jaime Cesar da Cruz — Vinhedo, SP.",
  authors: [{ name: "Jaime Cruz" }],
  robots: "index, follow",
  openGraph: {
    title: "Jaime Cruz",
    description: "Jaime Cesar da Cruz — Vinhedo, SP.",
    type: "website",
    locale: "pt_BR",
    url: "https://jaimecruz.vercel.app/",
    images: [
      {
        url: "/jc-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jaime Cruz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaime Cruz",
    description: "Jaime Cesar da Cruz — Vinhedo, SP.",
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
