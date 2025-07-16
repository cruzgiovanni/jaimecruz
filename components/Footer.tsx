"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 text-center mb-56">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-500 text-sm mb-4">
          © {currentYear} Jaime Cruz. A verdade sempre prevalece.
        </p>
        
        <p className="text-gray-500 text-sm italic mb-3">
          "Ave Mariæ, gratia plena, Dominus tecum"
        </p>
        
        <p className="text-gray-500 text-sm">
          Desenvolvido com 🤍 por{' '}
          <a 
            href="https://crzweb.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline text-gray-500 hover:text-[#bfa34a] transition-colors duration-300"
          >
            CRZ
          </a>
        </p>
      </motion.div>
    </footer>
  );
}