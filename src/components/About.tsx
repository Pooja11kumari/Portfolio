"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-neon-blue">
          About Me
        </p>
        <h3 className="mb-8 text-3xl font-bold">
          <span className="neon-text">Who I Am</span>
        </h3>

        <div className="glass glass-hover max-w-3xl rounded-xl p-8 transition-all duration-300">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs text-muted">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-2">about.md</span>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <motion.div
              className="relative flex-shrink-0 self-center sm:self-start"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="profile-glow relative h-28 w-28 overflow-hidden rounded-full p-[2px]">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-surface">
                  <Image
                    src="/profile.jpg"
                    alt="Pooja Kumari"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.parentElement?.querySelector(".fallback-avatar");
                      if (fallback instanceof HTMLElement) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    className="fallback-avatar absolute inset-0 hidden items-center justify-center rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-violet/20"
                  >
                    <span className="neon-text text-2xl font-bold">PK</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex-1">
              <p className="leading-relaxed text-foreground/80">
                I&apos;m a{" "}
                <span className="text-neon-blue">Computer Science Engineering</span>{" "}
                student at{" "}
                <span className="text-neon-violet">
                  Sri Krishna Institute of Technology
                </span>{" "}
                with a GPA of{" "}
                <span className="text-neon-blue">8.35</span>. I&apos;m passionate
                about{" "}
                <span className="text-neon-violet">blockchain technology</span>,{" "}
                <span className="text-neon-blue">decentralized finance</span>, and{" "}
                <span className="text-neon-violet">modern web development</span>.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/80">
                I actively participate in hackathons, developer programs, and
                open source initiatives to build impactful technology solutions.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Blockchain",
              "DeFi",
              "Web3",
              "Full-Stack",
              "Open Source",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-neon-blue/30 hover:text-neon-blue"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
