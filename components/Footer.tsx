'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 text-center mb-56">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground text-sm mb-4">
          © {currentYear} Jaime Cruz. A verdade sempre prevalece.
        </p>

        <p className="text-muted-foreground text-sm italic mb-3">
          &quot;Ave Mariæ, gratia plena, Dominus tecum&quot;
        </p>

        <p className="text-muted-foreground text-sm">
          Desenvolvido por {' '}
          <a
            href="https://giovannicruz.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            giovannicruz.dev
          </a>
        </p>
      </motion.div>
    </footer>
  )
}
