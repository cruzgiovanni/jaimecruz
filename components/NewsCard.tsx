"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface NewsCardProps {
  title: string;
  subtitle: string;
  url: string;
  index: number;
}

export default function NewsCard({ title, subtitle, url, index }: NewsCardProps) {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-6 transition-all duration-300 hover:border-[#bfa34a]/40 hover:shadow-2xl hover:shadow-[#bfa34a]/10">
        {/* Golden glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#bfa34a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <p className="text-gray-300 text-lg font-bold mb-3 group-hover:text-[#bfa34a] transition-colors duration-300">
              {subtitle}
            </p>
            
            <motion.div
              className="text-gray-500 group-hover:text-[#bfa34a] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ExternalLink size={16} />
            </motion.div>
          </div>
          
          <h3 className="text-gray-100 font-medium text-base leading-tight group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        {/* Golden inner glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#bfa34a]/3 via-transparent to-[#bfa34a]/3" />
      </div>
    </motion.div>
  );
}