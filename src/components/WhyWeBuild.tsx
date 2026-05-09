"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyWeBuild() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 bg-[#0F1A2E]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#F6C98F] text-xs font-medium tracking-widest uppercase mb-8">Why We Build</p>

          <div className="relative">
            <div className="gold-radial-glow absolute inset-0 opacity-5 blur-3xl" />
            <blockquote className="font-playfair relative text-2xl md:text-3xl lg:text-4xl text-white/85 leading-relaxed">
              We believe technology should{" "}
              <span className="text-[#F6C98F]">elevate, not overwhelm.</span> It should feel like sunrise — a moment of{" "}
              <span className="text-[#FAD7C4]">clarity, hope, and direction.</span>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
