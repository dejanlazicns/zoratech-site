"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

function UpcomingCard({ name, tag, description, index }: { name: string; tag: string; description: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="upcoming-card-bg zora-card relative flex flex-col p-8 rounded-2xl border border-zt-text/10 hover:border-zt-gold/30 overflow-hidden group"
    >
      <div className="upcoming-card-inner-glow absolute top-0 right-0 w-32 h-32 opacity-10 blur-2xl" />
      <span className="inline-block text-xs font-medium text-zt-gold tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-zt-gold/30 w-fit">
        {tag}
      </span>
      <h3 className="font-playfair text-zt-text font-semibold text-xl mb-3">{name}</h3>
      <p className="text-zt-text/50 text-sm leading-relaxed flex-1">{description}</p>
    </motion.div>
  );
}

export default function UpcomingApps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = useTranslations("home.upcoming");

  const cards = [0, 1, 2].map((i) => ({
    tag: t(`cards.${i}.tag`),
    name: t(`cards.${i}.name`),
    desc: t(`cards.${i}.desc`),
  }));

  return (
    <section className="upcoming-section-bg py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-4">{t("label")}</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-zt-text mb-4">{t("h2")}</h2>
          <p className="text-zt-text/50 text-lg">{t("sub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((item, i) => (
            <UpcomingCard key={i} name={item.name} tag={item.tag} description={item.desc} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link href="/upcoming">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-zt-gold/40 text-zt-gold font-semibold rounded-full text-sm tracking-wide hover:border-zt-gold hover:bg-zt-gold/10 transition-all duration-300"
            >
              {t("viewAll")}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
