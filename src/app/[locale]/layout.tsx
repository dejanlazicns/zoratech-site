import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import CookieBanner from "@/components/CookieBanner";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "ZoraTech — Where warm technology meets human clarity",
  description: "ZoraTech creates digital systems that bring clarity, warmth and intelligence into everyday life.",
};

const locales = ["en", "sr"];

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
