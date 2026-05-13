"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import { useTranslations } from "next-intl";
import { upcomingApps } from "@/lib/apps-data";

function UpcomingCard({ app, index }: { app: typeof upcomingApps[0]; index: number }) {
  const t = useTranslations("upcoming");
  const tDetail = useTranslations("appDetail");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="zora-card flex flex-col p-8 rounded-2xl bg-zt-surface/50 border border-zt-text/5 hover:border-zt-gold/20 group"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-4xl">{app.icon}</span>
        <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-zt-gold/40 text-zt-gold bg-zt-gold/10">
          {tDetail("comingSoon")}
        </span>
      </div>

      <h3 className="font-playfair text-zt-text font-semibold text-xl mb-3">{app.name}</h3>
      <p className="text-zt-text/50 text-sm leading-relaxed flex-1 mb-4">{app.description}</p>

      <Link href={`/apps/${app.id}`} className="mb-4">
        <span className="text-zt-gold text-xs font-medium hover:underline underline-offset-4 transition-all duration-200">
          {t("learnMore")}
        </span>
      </Link>

      <div className="pt-4 border-t border-zt-text/5">
        <WaitlistForm appId={app.id} />
      </div>
    </motion.div>
  );
}

export default function UpcomingPage() {
  const t = useTranslations("upcoming");

  return (
    <main className="min-h-screen bg-zt-bg">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-4">{t("label")}</p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-zt-text mb-6">
            {t("h1")}
          </h1>
          <p className="text-zt-text/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("sub")}
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingApps.map((app, i) => (
              <UpcomingCard key={app.id} app={app} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
