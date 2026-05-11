"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const categories = ["Partnership", "Freelance", "Media", "Investor", "Other"];

const contactTypes = [
  {
    icon: "🤝",
    title: "Partnerships",
    body: "Looking to collaborate or integrate?",
  },
  {
    icon: "💼",
    title: "Freelance",
    body: "Designer, marketer, or video creator?",
  },
  {
    icon: "📰",
    title: "Media",
    body: "Writing about ZoraTech?",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", category: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-zt-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 text-center">
        <motion.div {...fadeUp()}>
          <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-4">Contact</p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-zt-text mb-6 leading-tight">
            Let&apos;s build something<br className="hidden md:block" /> meaningful together.
          </h1>
          <p className="text-zt-text/50 text-lg max-w-xl mx-auto">
            For partnerships, media, or freelance collaboration — reach out.
          </p>
        </motion.div>
      </section>

      {/* Form */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            {...fadeUp(0.1)}
            className="zora-card p-8 md:p-12 rounded-2xl bg-zt-surface/50 border border-zt-text/5"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <p className="font-playfair text-zt-text text-2xl mb-3">Message received!</p>
                <p className="text-zt-gold text-lg">We&apos;ll be in touch. 🌅</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="block text-zt-text/40 text-xs tracking-widest uppercase mb-2">
                    Name <span className="text-zt-text/20">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-zt-text/10 text-zt-text placeholder-zt-text/25 text-sm focus:outline-none focus:border-zt-gold/40 transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-zt-text/40 text-xs tracking-widest uppercase mb-2">
                    Email <span className="text-red-400/60">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-zt-text/10 text-zt-text placeholder-zt-text/25 text-sm focus:outline-none focus:border-zt-gold/40 transition-colors duration-300"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-zt-text/40 text-xs tracking-widest uppercase mb-2">
                    Category <span className="text-red-400/60">*</span>
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-xl bg-zt-bg border border-zt-text/10 text-zt-text text-sm focus:outline-none focus:border-zt-gold/40 transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a category</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-zt-text/40 text-xs tracking-widest uppercase mb-2">
                    Message <span className="text-red-400/60">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you have in mind..."
                    required
                    rows={5}
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-zt-text/10 text-zt-text placeholder-zt-text/25 text-sm focus:outline-none focus:border-zt-gold/40 transition-colors duration-300 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400/70 text-xs text-center">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full py-4 bg-zt-gold text-[#0F1A2E] font-semibold text-sm rounded-full hover:bg-zt-gold-hover transition-all duration-300 disabled:opacity-60 tracking-wide"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Types */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactTypes.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(i * 0.1)}
              className="zora-card p-8 rounded-2xl bg-zt-surface/50 border border-zt-text/5 hover:border-zt-gold/20 text-center"
            >
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h3 className="font-playfair text-zt-text font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-zt-text/50 text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
