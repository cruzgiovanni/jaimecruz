import Link from "next/link";
import { Playfair_Display, Geist } from "next/font/google";
import "./not-found.css";

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

export default function NotFound() {
  return (
    <div className={`${playfair.variable} ${geist.variable} notfound-root`}>
      <div className="notfound-content">
        <span className="notfound-code">404</span>
        <h1 className="notfound-title">Página não encontrada</h1>
        <p className="notfound-text">
          A página que você procura não existe ou foi movida.
        </p>
        <Link href="/" className="notfound-link">
          ← Voltar ao início
        </Link>
      </div>
    </div>
  );
}