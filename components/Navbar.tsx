"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsClient } from "@/lib/use-is-client";
import "./navbar.css";

const routes = [
  { href: "/", label: "Início" },
  { href: "/livro", label: "Livro" },
  { href: "/blog", label: "Blog" },
  { href: "/absolvicao", label: "Absolvição" },
];

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsClient();

  const isDark = mounted && resolvedTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  if (pathname === "/livro/ler") {
    return null;
  }

  return (
    <nav className="site-navbar" aria-label="Navegação principal">
      <div className="site-navbar-inner">
        <Link href="/" className="site-navbar-brand">
          <span className="site-navbar-brand-mark">J</span>
          <span className="site-navbar-brand-name">Jaime Cruz</span>
        </Link>

        <div className="site-navbar-links">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`site-navbar-link ${
                pathname === route.href ||
                (route.href !== "/" && pathname.startsWith(route.href))
                  ? "is-active"
                  : ""
              }`}
            >
              {route.label}
            </Link>
          ))}
          <button
            type="button"
            className="site-navbar-theme"
            onClick={toggleTheme}
            aria-label={`Alternar para tema ${isDark ? "claro" : "escuro"}`}
            title={`Alternar para tema ${isDark ? "claro" : "escuro"}`}
          >
            {mounted ? (
              isDark ? (
                <Sun aria-hidden="true" size={17} strokeWidth={2} />
              ) : (
                <Moon aria-hidden="true" size={17} strokeWidth={2} />
              )
            ) : null}
          </button>
        </div>
      </div>
    </nav>
  );
}
