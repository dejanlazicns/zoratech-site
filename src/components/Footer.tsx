"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const links = [
    { label: tNav("apps"), href: "/apps" },
    { label: tNav("upcoming"), href: "/upcoming" },
    { label: tNav("about"), href: "/about" },
    { label: tNav("blog"), href: "/blog" },
    { label: tNav("contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-zt-bg border-t border-zt-text/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="ZoraTech Logo" width={36} height={36} className="object-contain" />
              <span className="font-playfair text-2xl font-bold text-zt-gold">ZoraTech</span>
            </div>
            <p className="text-zt-text/40 text-sm max-w-xs text-center md:text-left">{t("tagline")}</p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-zt-text/50 hover:text-zt-gold transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-zt-text/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zt-text/25 text-sm">{t("copyright")}</p>
          <nav className="flex flex-wrap justify-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-zt-text/25 hover:text-zt-gold transition-colors duration-300">{t("privacy")}</Link>
            <Link href="/cookie-policy" className="text-xs text-zt-text/25 hover:text-zt-gold transition-colors duration-300">{t("cookies")}</Link>
            <Link href="/terms" className="text-xs text-zt-text/25 hover:text-zt-gold transition-colors duration-300">{t("terms")}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
