"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Human-Centered Intelligence",
    description: "Every system we build starts with the human in mind. Technology that adapts to you, not the other way around.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Warm & Calm Technology",
    description: "No noise. No overwhelm. Just clarity. We design with warmth so technology feels like a trusted companion.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Systems That Bring Order",
    description: "We create intelligent infrastructure that organizes complexity, giving you room to think, create, and live.",
  },
];

function PillarCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="zora-card flex flex-col items-center text-center p-8 rounded-2xl bg-zt-surface/50 border border-zt-text/5 hover:border-zt-gold/20"
    >
      <div className="text-zt-gold mb-5">{icon}</div>
      <h3 className="text-zt-text font-semibold text-lg mb-3 [font-family:'Playfair_Display',serif]">
        {title}
      </h3>
      <p className="text-zt-text/50 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function WhatIsZoraTech() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-4">What is ZoraTech</p>
          <p className="text-2xl md:text-3xl text-zt-text/80 max-w-3xl mx-auto leading-relaxed [font-family:'Playfair_Display',serif]">
            Technology should feel like light, not noise. ZoraTech creates digital systems that bring{" "}
            <span className="text-zt-gold">clarity, warmth and intelligence</span> into everyday life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} {...pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
