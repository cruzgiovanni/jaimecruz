import { Playfair_Display, Geist } from "next/font/google";
import "./artigos.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export default function ArtigosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${geist.variable} artigos-root`}>
      {children}
    </div>
  );
}
