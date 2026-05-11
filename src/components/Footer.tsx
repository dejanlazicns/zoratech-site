"use client";

import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Apps", href: "/apps" },
  { label: "Upcoming", href: "/upcoming" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-zt-bg border-t border-zt-text/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="ZoraTech Logo" width={36} height={36} className="object-contain" />
              <span className="font-playfair text-2xl font-bold text-zt-gold">
                ZoraTech
              </span>
            </div>
            <p className="text-zt-text/40 text-sm max-w-xs text-center md:text-left">
              Where warm technology meets human clarity.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zt-text/50 hover:text-zt-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-zt-text/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zt-text/25 text-sm">
            © 2026 ZoraTech. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-zt-text/25 hover:text-zt-gold transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-xs text-zt-text/25 hover:text-zt-gold transition-colors duration-300">
              Cookie Policy
            </Link>
            <Link href="/terms" className="text-xs text-zt-text/25 hover:text-zt-gold transition-colors duration-300">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
