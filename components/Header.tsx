"use client";

import { motion } from "framer-motion";

interface HeaderProps {
  headline: string;
  subheadline: string;
}

export default function Header({ headline, subheadline }: HeaderProps) {
  return (
    <header className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">
            {headline}
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {subheadline}
        </motion.p>
        
        {/* Subtle decorative element */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="w-1 h-16 bg-gradient-to-b from-gray-600/50 to-transparent rounded-full" />
        </motion.div>
      </div>
    </header>
  );
}