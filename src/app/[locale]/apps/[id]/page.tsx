import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";
import { apps } from "@/lib/apps-data";

export function generateStaticParams() {
  const locales = ["en", "sr"];
  return locales.flatMap((locale) => apps.map((app) => ({ locale, id: app.id })));
}

export default async function AppDetailPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { id } = await params;
  const app = apps.find((a) => a.id === id);
  if (!app) notFound();

  const t = await getTranslations("appDetail");

  return (
    <main className="min-h-screen bg-zt-bg">
      <Navbar />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/apps" className="inline-flex items-center gap-2 text-zt-text/40 text-sm hover:text-zt-gold transition-colors duration-300 mb-12">
            {t("back")}
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-6xl">{app.icon}</span>
            {app.status === "live" ? (
              <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
                Live
              </span>
            ) : (
              <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-zt-gold/40 text-zt-gold bg-zt-gold/10">
                {t("comingSoon")}
              </span>
            )}
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-zt-text mb-4">{app.name}</h1>
          <p className="text-zt-gold text-sm font-medium tracking-widest uppercase mb-8">{app.category}</p>
          <p className="text-zt-text/70 text-lg leading-relaxed mb-12">{app.longDescription}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            {app.status === "live" ? (
              <a href={app.downloadUrl ?? "#"} target="_blank" rel="noopener noreferrer">
                <button type="button" className="px-8 py-4 bg-zt-gold text-[#0F1A2E] font-semibold rounded-full text-sm tracking-wide hover:bg-zt-gold-hover transition-all duration-300">
                  {t("openApp")}
                </button>
              </a>
            ) : (
              <button type="button" disabled className="px-8 py-4 bg-white/5 text-zt-text/25 text-sm font-medium rounded-full cursor-not-allowed">
                {t("comingSoon")}
              </button>
            )}
            <Link href="/apps">
              <button type="button" className="px-8 py-4 border border-zt-text/10 text-zt-text/50 text-sm font-medium rounded-full hover:border-zt-gold/40 hover:text-zt-gold transition-all duration-300">
                {t("viewAll")}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
