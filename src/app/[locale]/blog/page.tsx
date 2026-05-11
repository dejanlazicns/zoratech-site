"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { blogPosts, type BlogCategory } from "@/lib/blog-data";

const categoryKeys = ["All", "Dev Log", "App Updates", "Philosophy", "Behind the Scenes"] as const;
type Filter = typeof categoryKeys[number];

const categoryColors: Record<BlogCategory, string> = {
  "Dev Log": "text-blue-400 border-blue-400/40 bg-blue-400/10",
  "App Updates": "text-green-400 border-green-400/40 bg-green-400/10",
  "Philosophy": "text-purple-400 border-purple-400/40 bg-purple-400/10",
  "Behind the Scenes": "text-zt-gold border-zt-gold/40 bg-zt-gold/10",
};

function BlogCard({ post, readMore, index }: { post: typeof blogPosts[0]; readMore: string; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="zora-card flex flex-col p-8 rounded-2xl bg-zt-surface/50 border border-zt-text/5 hover:border-zt-gold/20 group"
    >
      <div className="flex items-center justify-between mb-6">
        <span className={`text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border ${categoryColors[post.category]}`}>
          {post.category}
        </span>
        <span className="text-zt-text/25 text-xs">{post.date}</span>
      </div>

      <h3 className="font-playfair text-zt-text font-semibold text-xl mb-3 leading-snug group-hover:text-zt-gold transition-colors duration-300">
        {post.title}
      </h3>
      <p className="text-zt-text/50 text-sm leading-relaxed flex-1 mb-6">
        {post.description}
      </p>

      <button
        type="button"
        className="self-start px-5 py-2.5 border border-zt-gold/40 text-zt-gold text-sm font-medium rounded-full hover:border-zt-gold hover:bg-zt-gold/10 transition-all duration-300"
      >
        {readMore}
      </button>
    </motion.div>
  );
}

export default function BlogPage() {
  const [active, setActive] = useState<Filter>("All");
  const t = useTranslations("blog");

  const categoryLabels = t.raw("categories") as string[];

  const filtered = active === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-zt-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-zt-gold text-xs font-medium tracking-widest uppercase mb-4">{t("label")}</p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-zt-text mb-4">
            {t("h1")}
          </h1>
          <p className="text-zt-text/50 text-lg">{t("sub")}</p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categoryKeys.map((key, i) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 border ${
                active === key
                  ? "bg-zt-gold text-[#0F1A2E] border-zt-gold"
                  : "border-zt-text/10 text-zt-text/40 hover:border-zt-gold/40 hover:text-zt-gold"
              }`}
            >
              {categoryLabels[i] ?? key}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key="grid"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((post, i) => (
                  <BlogCard key={post.slug} post={post} readMore={t("readMore")} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-zt-text/25 text-sm py-20"
              >
                {t("empty")}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
