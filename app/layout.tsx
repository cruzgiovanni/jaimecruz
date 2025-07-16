import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jaime Cruz - Vitória da Justiça | A Verdade Triunfa",
  description:
    "A verdade triunfa: A justiça e a luz da vitória em Jaime Cruz. Acompanhe as principais reportagens sobre a vitória judicial no caso do cartel da merenda escolar.",
  keywords:
    "Jaime Cruz, vitória judicial, cartel merenda escolar, justiça, Vinhedo, ex-prefeito",
  authors: [{ name: "Jaime Cruz" }],
  robots: "index, follow",
  openGraph: {
    images: [
      "https://opengraph.b-cdn.net/production/images/933998ff-5ff7-4fd1-8589-c8a94956fcbf.jpg?token=M9VAgcewcg71EAIm_5aKB8xbnzY0Q_AC_0QGOgr6yuE&height=630&width=1200&expires=33288695844",
    ],
    title: "Jaime Cruz - Vitória da Justiça",
    description:
      "A verdade triunfa: A justiça e a luz da vitória em Jaime Cruz",
    type: "website",
    locale: "pt_BR",
    url: "https://jaimecruz.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaime Cruz - Vitória da Justiça",
    description:
      "A verdade triunfa: A justiça e a luz da vitória em Jaime Cruz",
  },

  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
