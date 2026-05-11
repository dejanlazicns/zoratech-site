"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const principles = [
  {
    icon: "🤝",
    title: "Human-Centered Intelligence",
    body: "Every decision starts with a single question: how does this feel to the person using it? Technology must earn its place in a human life.",
  },
  {
    icon: "🌅",
    title: "Warm & Calm Technology",
    body: "We reject noise, clutter, and urgency. Our products are designed to slow you down — in the best possible way.",
  },
  {
    icon: "🧭",
    title: "Systems That Bring Order",
    body: "Complexity is the enemy of clarity. We build systems that quietly handle the hard parts so you never have to.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zt-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.div {...fadeUp()}>
          <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-4">About</p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-zt-text mb-6 leading-tight">
            We build technology<br className="hidden md:block" /> that feels like sunrise.
          </h1>
          <p className="text-zt-text/50 text-lg tracking-wide">Warm. Calm. Intelligent.</p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-zt-gold/10 mb-20" />

      {/* Founder Story */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <motion.p
            {...fadeUp(0.05)}
            className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-6"
          >
            Founding Story
          </motion.p>
          <motion.blockquote {...fadeUp(0.1)} className="relative">
            <span className="absolute -top-6 -left-4 text-zt-gold/10 font-playfair text-8xl leading-none select-none">&ldquo;</span>
            <p className="font-playfair text-zt-text/80 text-xl md:text-2xl leading-relaxed relative z-10">
              My name is Dejan. I&apos;m 55 years old. By trade, I&apos;m a car mechanic. A man who spent his entire life working with his hands, in grease, in noise, in the real world.
            </p>
            <p className="font-playfair text-zt-text/80 text-xl md:text-2xl leading-relaxed mt-6 relative z-10">
              And that&apos;s exactly why I understood something many never do: Technology is not about machines. Technology is about people.
            </p>
          </motion.blockquote>
          <motion.p {...fadeUp(0.2)} className="mt-8 text-zt-text/35 text-sm tracking-wide">
            — Dejan Lazić, Founder
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            {...fadeUp(0.05)}
            className="zora-card p-8 rounded-2xl bg-zt-surface/50 border border-zt-text/5"
          >
            <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-4">Mission</p>
            <p className="font-playfair text-zt-text text-xl md:text-2xl leading-relaxed">
              To create digital systems that bring clarity and harmony into everyday life.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.12)}
            className="zora-card p-8 rounded-2xl bg-zt-surface/50 border border-zt-text/5"
          >
            <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-4">Vision</p>
            <p className="font-playfair text-zt-text text-xl md:text-2xl leading-relaxed">
              A world where technology supports humans — not the other way around.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.p
            {...fadeUp()}
            className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-10 text-center"
          >
            Our Principles
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -6 }}
                className="zora-card flex flex-col p-8 rounded-2xl bg-zt-surface/50 border border-zt-text/5 hover:border-zt-gold/20"
              >
                <span className="text-3xl mb-5">{p.icon}</span>
                <h3 className="font-playfair text-zt-text font-semibold text-lg mb-3">{p.title}</h3>
                <p className="text-zt-text/50 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifest */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp()}>
            <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-8">The ZoraTech Manifest</p>
            <div className="zora-card p-10 md:p-14 rounded-2xl bg-zt-surface/50 border border-zt-text/5">
              <p className="font-playfair text-zt-text/80 text-lg md:text-xl leading-loose">
                We believe that every person — regardless of age, background, or expertise — deserves technology that respects them.
              </p>
              <p className="font-playfair text-zt-text/60 text-base md:text-lg leading-loose mt-6">
                Not technology that overwhelms. Not technology that manipulates. Not technology that replaces the human touch.
              </p>
              <p className="font-playfair text-zt-text text-lg md:text-xl leading-loose mt-6">
                Technology like sunrise — quiet, inevitable, and full of possibility.
              </p>
              <div className="mt-10 pt-8 border-t border-zt-text/5">
                <p className="text-zt-gold font-playfair italic text-sm tracking-wide">
                  &ldquo;Zora&rdquo; — the Serbian word for dawn.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
