"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-xl z-50"
        >
          <div className="flex flex-col gap-4 px-6 py-5 rounded-2xl bg-[#1A2A4F] border border-white/10 shadow-xl shadow-black/40">
            <p className="text-white/60 text-sm text-center leading-relaxed">
              We use only essential cookies.{" "}
              <Link href="/cookie-policy" className="text-[#F6C98F] hover:underline underline-offset-4">
                Learn more
              </Link>
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleDecline}
                className="flex-1 py-2.5 rounded-full border border-white/10 text-white/40 text-xs font-medium hover:border-white/30 hover:text-white/60 transition-all duration-300"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="flex-1 py-2.5 rounded-full bg-[#F6C98F] text-[#0F1A2E] text-xs font-semibold hover:bg-[#FAD7C4] transition-all duration-300"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
