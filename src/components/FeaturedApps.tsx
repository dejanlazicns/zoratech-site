"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { apps } from "@/lib/apps-data";

const featuredApps = apps.slice(0, 3);

function AppCard({ app, index }: { app: typeof apps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="zora-card flex flex-col p-8 rounded-2xl bg-[#1A2A4F]/50 border border-white/5 hover:border-[#F6C98F]/20 group"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-4xl">{app.icon}</span>
        {app.status === "live" ? (
          <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-green-400/40 text-green-400 bg-green-400/10">Live</span>
        ) : (
          <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-[#F6C98F]/40 text-[#F6C98F] bg-[#F6C98F]/10">Coming Soon</span>
        )}
      </div>
      <h3 className="font-playfair text-white font-semibold text-xl mb-3">{app.name}</h3>
      <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">{app.description}</p>
      <Link href={`/apps/${app.id}`}>
        <span className="text-[#F6C98F] text-sm font-medium group-hover:underline underline-offset-4 transition-all duration-200">
          Learn More →
        </span>
      </Link>
    </motion.div>
  );
}

export default function FeaturedApps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 bg-[#0F1A2E]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#F6C98F] text-xs font-medium tracking-widest uppercase mb-4">Featured Apps</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
            Tools that make life simpler.<br />
            <span className="text-[#F6C98F]">Intelligent. Warm. Useful.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredApps.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
