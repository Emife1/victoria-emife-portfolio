"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold">Victoria Emife</h1>
        <p className="opacity-70 mt-2">
          Marketing Strategist & Brand Growth Designer
        </p>
      </motion.div>
    </section>
  );
}
