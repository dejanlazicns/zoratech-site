"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WaitlistForm({ appId }: { appId: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, app_id: appId }),
    });

    if (res.ok) {
      setStatus("success");
    } else if (res.status === 409) {
      setStatus("duplicate");
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm text-zt-gold text-center py-2"
      >
        You&apos;re on the list! 🌅
      </motion.p>
    );
  }

  if (status === "duplicate") {
    return (
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm text-zt-text/40 text-center py-2"
      >
        You&apos;re already on the list!
      </motion.p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 min-w-0 px-4 py-2 rounded-full bg-white/5 border border-zt-text/10 text-zt-text placeholder-zt-text/25 text-xs focus:outline-none focus:border-zt-gold/40 transition-colors duration-300"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-4 py-2 bg-zt-gold text-[#0F1A2E] text-xs font-semibold rounded-full hover:bg-zt-gold-hover transition-colors duration-300 whitespace-nowrap disabled:opacity-60"
      >
        {status === "loading" ? "..." : "Join Waitlist"}
      </button>
    </form>
  );
}
