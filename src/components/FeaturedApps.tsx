"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const apps = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    name: "App Name",
    description: "A brief description of what this app does and how it helps users in their daily life.",
    href: "/apps",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    name: "App Name",
    description: "A brief description of what this app does and how it helps users in their daily life.",
    href: "/apps",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    name: "App Name",
    description: "A brief description of what this app does and how it helps users in their daily life.",
    href: "/apps",
  },
];

function AppCard({ icon, name, description, href, index }: { icon: React.ReactNode; name: string; description: string; href: string; index: number }) {
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
      <div className="text-[#F6C98F] mb-6">{icon}</div>
      <h3 className="font-playfair text-white font-semibold text-xl mb-3">
        {name}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">{description}</p>
      <Link href={href}>
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
          {apps.map((app, i) => (
            <AppCard key={i} {...app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
