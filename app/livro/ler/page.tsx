import type { Metadata } from "next";
import PdfReaderClient from "@/components/livro/PdfReaderClient";

export const metadata: Metadata = {
  title: "Ler online — Entre Frestas e Horizontes",
  description:
    "Leia online o livro Entre Frestas e Horizontes, de Jaime Cruz.",
  alternates: { canonical: "/livro/ler" },
  robots: { index: false, follow: true },
};

export default function LerPage() {
  return <PdfReaderClient />;
}
