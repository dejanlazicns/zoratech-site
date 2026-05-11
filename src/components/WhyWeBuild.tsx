"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyWeBuild() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 bg-zt-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-8">Why We Build</p>

          <div className="relative">
            <div className="gold-radial-glow absolute inset-0 opacity-5 blur-3xl" />
            <blockquote className="font-playfair relative text-2xl md:text-3xl lg:text-4xl text-zt-text/85 leading-relaxed">
              We believe technology should{" "}
              <span className="text-zt-gold">elevate, not overwhelm.</span> It should feel like sunrise — a moment of{" "}
              <span className="text-zt-gold-hover">clarity, hope, and direction.</span>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
