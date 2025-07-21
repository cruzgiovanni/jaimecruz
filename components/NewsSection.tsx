"use client"

import { motion } from "framer-motion"
import NewsCard from "./NewsCard"

interface NewsItem {
  title: string
  subtitle: string
  url: string
}

interface NewsSectionProps {
  news: NewsItem[]
}

export default function NewsSection({ news }: NewsSectionProps) {
  return (
    <section className="relative py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A Verdade na Imprensa
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Acompanhe todas as reportagens que documentaram esta vitória
            histórica da justiça.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
          {news.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              subtitle={article.subtitle}
              url={article.url}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
