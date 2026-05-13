import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import CookieBanner from "@/components/CookieBanner";
import ThemeProvider from "@/components/ThemeProvider";

const BASE_URL = "https://zoratech.tech";
const locales = ["en", "sr"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isSr = locale === "sr";

  const title = isSr
    ? "ZoraTech — Gde topla tehnologija susreće ljudsku jasnoću"
    : "ZoraTech — Where warm technology meets human clarity";
  const description = isSr
    ? "ZoraTech stvara digitalne sisteme koji donose jasnoću, toplinu i inteligenciju u svakodnevni život."
    : "ZoraTech creates digital systems that bring clarity, warmth and intelligence into everyday life.";
  const url = isSr ? `${BASE_URL}/sr` : BASE_URL;

  return {
    title: { default: title, template: `%s | ZoraTech` },
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      languages: { en: BASE_URL, sr: `${BASE_URL}/sr` },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "ZoraTech",
      locale: isSr ? "sr_RS" : "en_US",
      alternateLocale: isSr ? ["en_US"] : ["sr_RS"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        {children}
        <CookieBanner />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
