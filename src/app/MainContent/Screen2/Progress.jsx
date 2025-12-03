"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Progress({ progress, text }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const angle = (progress / 100) * 360;

  const Circle = (
    <>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#fa6c57 ${angle}deg, #e5e7eb ${angle}deg)`,
        }}
      />
      <div className="absolute inset-1.5 bg-gray-100 rounded-full flex flex-col items-center justify-center text-slate-800">
        <span className="lg:text-3xl sm:text-3xl font-bold">{progress}%</span>
        <span className="lg:text-sm sm:text-sm font-bold">{text}</span>
      </div>
    </>
  );

  return mounted ? (
    <motion.div
      className="relative w-36 h-36 rounded-full sm:w-36 sm:h-36"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {Circle}
    </motion.div>
  ) : (
    <div className="relative w-36 h-36 rounded-full sm:w-36 sm:h-36">
      {Circle}
    </div>
  );
}
