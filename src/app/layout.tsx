import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZoraTech — Where warm technology meets human clarity",
  description: "ZoraTech creates digital systems that bring clarity, warmth and intelligence into everyday life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
