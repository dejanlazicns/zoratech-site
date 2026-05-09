"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const apps = [
  {
    id: "repuradar",
    icon: "📡",
    name: "RepuRadar",
    description: "AI reputation monitor for small businesses. Never miss a review again.",
    category: "AI",
    status: "upcoming",
    downloadUrl: null,
  },
  {
    id: "caresync",
    icon: "🏥",
    name: "CareSync",
    description: "Family care coordinator for elderly loved ones. Stay connected, stay informed.",
    category: "Health",
    status: "upcoming",
    downloadUrl: null,
  },
  {
    id: "grantpilot",
    icon: "📋",
    name: "GrantPilot",
    description: "AI assistant for writing and managing grants. Save 30 hours per application.",
    category: "Productivity",
    status: "upcoming",
    downloadUrl: null,
  },
  {
    id: "kidtrack",
    icon: "👧",
    name: "KidTrack",
    description: "Gamified habit tracker for kids. Make good habits fun and rewarding.",
    category: "Tools",
    status: "upcoming",
    downloadUrl: null,
  },
  {
    id: "veles",
    icon: "🌿",
    name: "Veles",
    description: "AI garden architect. Grow smarter, grow healthier, grow organic.",
    category: "AI",
    status: "upcoming",
    downloadUrl: null,
  },
  {
    id: "iva-companion",
    icon: "✨",
    name: "IVA Companion",
    description: "Your intelligent virtual assistant. Always there, always warm, always human.",
    category: "AI",
    status: "live",
    downloadUrl: "#",
  },
];

const filters = ["All", "Productivity", "Tools", "AI", "Health", "Utilities"];

function AppCard({ app, index }: { app: typeof apps[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="zora-card flex flex-col p-8 rounded-2xl bg-[#1A2A4F]/50 border border-white/5 hover:border-[#F6C98F]/20 group"
    >
      {/* Badge */}
      <div className="flex items-start justify-between mb-6">
        <span className="text-4xl">{app.icon}</span>
        {app.status === "live" ? (
          <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
            Live
          </span>
        ) : (
          <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-[#F6C98F]/40 text-[#F6C98F] bg-[#F6C98F]/10">
            Coming Soon
          </span>
        )}
      </div>

      <h3 className="font-playfair text-white font-semibold text-xl mb-3">{app.name}</h3>
      <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">{app.description}</p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href={`/apps/${app.id}`} className="flex-1">
          <button type="button" className="w-full px-4 py-2.5 border border-[#F6C98F]/40 text-[#F6C98F] text-sm font-medium rounded-full hover:border-[#F6C98F] hover:bg-[#F6C98F]/10 transition-all duration-300">
            Learn More
          </button>
        </Link>

        {app.status === "live" ? (
          <a href={app.downloadUrl ?? "#"} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button type="button" className="w-full px-4 py-2.5 bg-[#F6C98F] text-[#0F1A2E] text-sm font-semibold rounded-full hover:bg-[#FAD7C4] transition-all duration-300">
              Open App
            </button>
          </a>
        ) : (
          <button type="button" disabled className="flex-1 px-4 py-2.5 bg-white/5 text-white/25 text-sm font-medium rounded-full cursor-not-allowed">
            Coming Soon
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function AppsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? apps
    : apps.filter((a) => a.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#0F1A2E]">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[#F6C98F] text-xs font-medium tracking-widest uppercase mb-4">Apps</p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Every app we build solves a real problem.
          </h1>
          <p className="text-white/50 text-lg">Simple. Clear. Human.</p>
        </motion.div>
      </section>

      {/* Filter bar */}
      <section className="px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#F6C98F] text-[#0F1A2E]"
                  : "border border-white/10 text-white/50 hover:border-[#F6C98F]/40 hover:text-[#F6C98F]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Apps Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((app, i) => (
                <AppCard key={app.id} app={app} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white/30 text-sm mt-16"
            >
              No apps in this category yet.
            </motion.p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
