"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { liveApps, type App } from "@/lib/apps-data";

function LiveAppCard({ app, index }: { app: App; index: number }) {
  const t = useTranslations("apps");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="zora-card flex flex-col p-8 rounded-2xl bg-zt-surface/50 border border-zt-text/5 hover:border-zt-gold/20 group"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-4xl">{app.icon}</span>
        <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
          {t("live")}
        </span>
      </div>
      <h3 className="font-playfair text-zt-text font-semibold text-xl mb-3">{app.name}</h3>
      <p className="text-zt-text/50 text-sm leading-relaxed flex-1 mb-6">{app.description}</p>
      <div className="flex gap-3">
        <Link href={`/apps/${app.id}`} className="flex-1">
          <button type="button" className="w-full px-4 py-2.5 border border-zt-gold/40 text-zt-gold text-sm font-medium rounded-full hover:border-zt-gold hover:bg-zt-gold/10 transition-all duration-300">
            {t("learnMore")}
          </button>
        </Link>
        <a href={app.downloadUrl ?? "#"} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button type="button" className="w-full px-4 py-2.5 bg-zt-gold text-[#0F1A2E] text-sm font-semibold rounded-full hover:bg-zt-gold-hover transition-all duration-300">
            {t("openApp")}
          </button>
        </a>
      </div>
    </motion.div>
  );
}

export default function AppsPage() {
  const t = useTranslations("apps");

  return (
    <main className="min-h-screen bg-zt-bg">
      <Navbar />

      <section className="pt-40 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-4">{t("label")}</p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-zt-text mb-4">
            {t("h1")}
          </h1>
          <p className="text-zt-text/50 text-lg">{t("sub")}</p>
        </motion.div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveApps.map((app, i) => (
              <LiveAppCard key={app.id} app={app} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
