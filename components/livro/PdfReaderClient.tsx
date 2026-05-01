"use client";

import dynamic from "next/dynamic";

const PdfReader = dynamic(() => import("./PdfReader"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-text-muted)",
        fontSize: "0.9rem",
      }}
    >
      Carregando livro…
    </div>
  ),
});

export default function PdfReaderClient() {
  return <PdfReader />;
}
