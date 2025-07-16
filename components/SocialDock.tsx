"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface SocialDockProps {
  socialLinks: SocialLink[];
}

const iconMap = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

export default function SocialDock({ socialLinks }: SocialDockProps) {
  return (
    <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-center gap-4 bg-gray-900 rounded-2xl px-6 py-4 border border-gray-800 shadow-2xl"
      >
        {socialLinks.map((link, index) => {
          const IconComponent = iconMap[link.icon as keyof typeof iconMap];
          
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:text-[#bfa34a] hover:border-[#bfa34a]/50 hover:bg-gray-700 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1 + 0.6
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent size={20} />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}