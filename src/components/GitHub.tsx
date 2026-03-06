"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const WEEKS = 20;
const DAYS = 7;

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateContributions() {
  const data: number[][] = [];
  for (let w = 0; w < WEEKS; w++) {
    const week: number[] = [];
    for (let d = 0; d < DAYS; d++) {
      const rand = seededRandom(w * DAYS + d + 42);
      if (rand > 0.7) week.push(3);
      else if (rand > 0.5) week.push(2);
      else if (rand > 0.3) week.push(1);
      else week.push(0);
    }
    data.push(week);
  }
  return data;
}

const LEVEL_COLORS = [
  "bg-white/5",
  "bg-neon-blue/20",
  "bg-neon-blue/40",
  "bg-neon-blue/70",
];

const REPOS = [
  {
    name: "blockchain-health-records",
    description: "Blockchain-based healthcare platform with IPFS storage",
    language: "Solidity",
    stars: 14,
  },
  {
    name: "send-defi-app",
    description: "DeFi app for payments, swaps, and staking on Algorand",
    language: "TypeScript",
    stars: 9,
  },
  {
    name: "trust-swap",
    description: "Cross-chain swap platform using HTLC and Move contracts",
    language: "Move",
    stars: 11,
  },
  {
    name: "car-rental-mern",
    description: "Full-stack car rental system with admin dashboard",
    language: "JavaScript",
    stars: 7,
  },
];

export default function GitHub() {
  const contributions = useMemo(() => generateContributions(), []);

  return (
    <section id="github" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-neon-blue">
          GitHub
        </p>
        <h3 className="mb-10 text-3xl font-bold">
          <span className="neon-text">Contributions</span>
        </h3>

        <motion.div
          className="glass glass-hover mb-8 overflow-hidden rounded-xl p-6 transition-all duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-xs text-muted">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-2">contributions.graph</span>
          </div>

          <div className="flex gap-1 overflow-x-auto pb-2">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((level, di) => (
                  <motion.div
                    key={`${wi}-${di}`}
                    className={`h-3 w-3 rounded-sm ${LEVEL_COLORS[level]}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (wi * DAYS + di) * 0.003,
                      duration: 0.2,
                    }}
                    whileHover={{
                      scale: 1.5,
                      boxShadow: "0 0 8px rgba(0,212,255,0.5)",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-muted">
            <span>Less</span>
            {LEVEL_COLORS.map((color, i) => (
              <div key={i} className={`h-2.5 w-2.5 rounded-sm ${color}`} />
            ))}
            <span>More</span>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REPOS.map((repo, i) => (
            <motion.div
              key={repo.name}
              className="glass glass-hover rounded-xl p-5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-neon-blue">◆</span>
                <h4 className="font-mono text-xs font-semibold text-foreground">
                  {repo.name}
                </h4>
              </div>
              <p className="mb-3 text-xs leading-relaxed text-muted">
                {repo.description}
              </p>
              <div className="flex items-center gap-3 font-mono text-[10px] text-muted">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-neon-blue" />
                  {repo.language}
                </span>
                <span>★ {repo.stars}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
