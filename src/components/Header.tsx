"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Услуги", "/#services"],
  ["Пример работы", "/#case"],
  ["Демо-магазин", "/demo-store/"],
  ["Обо мне", "/#about"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const resolveHref = (href: string) =>
    pathname === "/" && href.startsWith("/#") ? href.slice(1) : href;

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Petrokas — на главную">
        <span className="brand-mark" aria-hidden="true">
          <span />
        </span>
        <span>Petrokas</span>
      </Link>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Основная навигация">
        {links.map(([label, href]) => (
          <Link key={href} href={resolveHref(href)} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="nav-cta" href={resolveHref("/#contact")} onClick={() => setOpen(false)}>
          Связаться
        </Link>
      </nav>
      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
