"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const upcoming = [
  {
    name: "Coming Soon",
    tag: "In Development",
    description: "Something new is forming. Be the first to know when it arrives.",
  },
  {
    name: "Coming Soon",
    tag: "Early Access",
    description: "A new tool built for clarity and calm. Join the waitlist.",
  },
  {
    name: "Coming Soon",
    tag: "Planning",
    description: "We are shaping the idea. Your input can influence what this becomes.",
  },
];

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
      className="upcoming-card-bg zora-card relative flex flex-col p-8 rounded-2xl border border-white/10 hover:border-[#F6C98F]/30 overflow-hidden group"
    >
      <div className="upcoming-card-inner-glow absolute top-0 right-0 w-32 h-32 opacity-10 blur-2xl" />
      <span className="inline-block text-xs font-medium text-[#F6C98F] tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-[#F6C98F]/30 w-fit">
        {tag}
      </span>
      <h3 className="font-playfair text-white font-semibold text-xl mb-3">
        {name}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed flex-1">{description}</p>
    </motion.div>
  );
}

export default function UpcomingApps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          <p className="text-[#F6C98F] text-xs font-medium tracking-widest uppercase mb-4">Upcoming</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            The future is already forming.
          </h2>
          <p className="text-white/50 text-lg">
            Join the waitlists and shape what comes next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {upcoming.map((item, i) => (
            <UpcomingCard key={i} {...item} index={i} />
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
              className="px-8 py-4 border border-[#F6C98F]/40 text-[#F6C98F] font-semibold rounded-full text-sm tracking-wide hover:border-[#F6C98F] hover:bg-[#F6C98F]/10 transition-all duration-300"
            >
              View All Upcoming Apps
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
