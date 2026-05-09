"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import { upcomingApps } from "@/lib/apps-data";

function UpcomingCard({ app, index }: { app: typeof upcomingApps[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="zora-card flex flex-col p-8 rounded-2xl bg-[#1A2A4F]/50 border border-white/5 hover:border-[#F6C98F]/20 group"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-4xl">{app.icon}</span>
        <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-[#F6C98F]/40 text-[#F6C98F] bg-[#F6C98F]/10">
          Coming Soon
        </span>
      </div>

      <h3 className="font-playfair text-white font-semibold text-xl mb-3">{app.name}</h3>
      <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">{app.description}</p>

      <Link href={`/apps/${app.id}`} className="mb-4">
        <span className="text-[#F6C98F] text-xs font-medium hover:underline underline-offset-4 transition-all duration-200">
          Learn More →
        </span>
      </Link>

      <div className="pt-4 border-t border-white/5">
        <WaitlistForm appId={app.id} />
      </div>
    </motion.div>
  );
}

export default function UpcomingPage() {
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
          <p className="text-[#F6C98F] text-xs font-medium tracking-widest uppercase mb-4">Upcoming</p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The future is already forming.
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Help shape the future of ZoraTech. Join waitlists, vote for features, and influence development.
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
