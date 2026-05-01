"use client";

import { siteText } from "@/data/siteData";
import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import SocialDock from "@/components/SocialDock";
import Footer from "@/components/Footer";

export default function AbsolvicaoPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
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
