"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function JoinTheDawn() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="join-section-bg py-32 px-6 relative overflow-hidden">
      <div className="gold-radial-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-10 blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[#F6C98F] text-xs font-medium tracking-widest uppercase mb-6">Join the Dawn</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Be the first to experience new apps, updates, and ideas.
          </h2>
          <p className="text-white/50 text-lg mb-12">
            Welcome to the dawn of intelligent systems.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 px-8 rounded-2xl bg-[#F6C98F]/10 border border-[#F6C98F]/30"
            >
              <p className="text-[#F6C98F] font-medium text-lg">You are in. Welcome to ZoraTech.</p>
              <p className="text-white/50 text-sm mt-2">We will reach out when something new is ready.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#F6C98F]/50 transition-colors duration-300"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-4 bg-[#F6C98F] text-[#0F1A2E] font-semibold rounded-full text-sm tracking-wide hover:bg-[#FAD7C4] transition-colors duration-300 whitespace-nowrap"
              >
                Join the Community
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
