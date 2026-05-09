"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  };
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0" />
      <div className="hero-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] z-0 opacity-20 blur-3xl" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.p
          {...fadeUp(0.1)}
          className="text-[#F6C98F] text-sm font-medium tracking-widest uppercase mb-6"
        >
          Where warm technology meets human clarity
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Where warm technology meets human clarity.
        </motion.h1>

        <motion.p
          {...fadeUp(0.45)}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We build intelligent systems that feel like sunrise — calm, powerful, and human.
        </motion.p>

        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/apps">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#F6C98F] text-[#0F1A2E] font-semibold rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-[#FAD7C4]"
            >
              Explore Apps
            </motion.button>
          </Link>

          <Link href="/upcoming">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-[#F6C98F]/50 text-[#F6C98F] font-semibold rounded-full text-sm tracking-wide transition-all duration-300 hover:border-[#F6C98F] hover:bg-[#F6C98F]/10"
            >
              Upcoming Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#F6C98F]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
