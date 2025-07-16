"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { siteText } from "@/data/siteData";
import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import SocialDock from "@/components/SocialDock";
import Footer from "@/components/Footer";

export default function Home() {
  const [particlePositions, setParticlePositions] = useState<Array<{x: number, y: number}>>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const positions = [...Array(5)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      }));
      setParticlePositions(positions);
    }
  }, []);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      
      <Header 
        headline={siteText.headline} 
        subheadline={siteText.subheadline}
      />
      
      <NewsSection news={siteText.news} />
      
      <SocialDock socialLinks={siteText.socialLinks} />
      
      <Footer />
    </main>
  );
}