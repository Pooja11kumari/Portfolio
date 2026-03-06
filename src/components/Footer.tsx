"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] px-6 py-6">
      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass rounded-lg p-4">
          <div className="mb-2 flex items-center gap-2 font-mono text-xs text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2">terminal</span>
          </div>
          <div className="font-mono text-xs leading-relaxed text-muted">
            <p>
              <span className="text-neon-blue">pooja@portfolio</span>
              <span className="text-muted">:</span>
              <span className="text-neon-violet">~</span>
              <span className="text-muted">$ </span>
              <span className="text-foreground/70">
                echo &quot;Built with Next.js and passion for blockchain
                innovation by Pooja Kumari.&quot;
              </span>
            </p>
            <p className="mt-1 text-foreground/50">
              Built with Next.js and passion for blockchain innovation by Pooja
              Kumari.
            </p>
            <p className="mt-2">
              <span className="text-neon-blue">pooja@portfolio</span>
              <span className="text-muted">:</span>
              <span className="text-neon-violet">~</span>
              <span className="text-muted">$ </span>
              <span className="animate-pulse text-neon-blue">▊</span>
            </p>
          </div>
        </div>
        <p className="mt-4 text-center font-mono text-[10px] text-muted/50">
          © {new Date().getFullYear()} Pooja Kumari. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
