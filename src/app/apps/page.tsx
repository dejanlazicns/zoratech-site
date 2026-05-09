"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import { liveApps, upcomingApps, type App } from "@/lib/apps-data";

function LiveAppCard({ app, index }: { app: App; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="zora-card flex flex-col p-8 rounded-2xl bg-[#1A2A4F]/50 border border-white/5 hover:border-[#F6C98F]/20 group"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-4xl">{app.icon}</span>
        <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
          Live
        </span>
      </div>
      <h3 className="font-playfair text-white font-semibold text-xl mb-3">{app.name}</h3>
      <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">{app.description}</p>
      <div className="flex gap-3">
        <Link href={`/apps/${app.id}`} className="flex-1">
          <button type="button" className="w-full px-4 py-2.5 border border-[#F6C98F]/40 text-[#F6C98F] text-sm font-medium rounded-full hover:border-[#F6C98F] hover:bg-[#F6C98F]/10 transition-all duration-300">
            Learn More
          </button>
        </Link>
        <a href={app.downloadUrl ?? "#"} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button type="button" className="w-full px-4 py-2.5 bg-[#F6C98F] text-[#0F1A2E] text-sm font-semibold rounded-full hover:bg-[#FAD7C4] transition-all duration-300">
            Open App
          </button>
        </a>
      </div>
    </motion.div>
  );
}

function UpcomingAppCard({ app, index }: { app: App; index: number }) {
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

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-[#0F1A2E]">
      <Navbar />

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

      {/* Our Apps — Live */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="font-playfair text-2xl font-semibold text-white">Our Apps</h2>
            <p className="text-white/40 text-sm mt-1">Ready to use, right now.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveApps.map((app, i) => (
              <LiveAppCard key={app.id} app={app} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gold separator */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#F6C98F]/40 to-transparent" />
      </div>

      {/* Coming Soon */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <h2 className="font-playfair text-2xl font-semibold text-white">Coming Soon</h2>
            <p className="text-white/40 text-sm mt-1">Join the waitlist and be first to know.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingApps.map((app, i) => (
              <UpcomingAppCard key={app.id} app={app} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
