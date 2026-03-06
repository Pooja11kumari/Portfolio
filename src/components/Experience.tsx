"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "RiseIn Maven Community Advocate",
    description:
      "Explored decentralized communication infrastructure (Huddle01 dRTC) and created technical content for the community.",
    icon: "🔗",
    color: "neon-blue",
  },
  {
    role: "CoinDCX Maxi Community Advocate",
    description:
      "Created educational Web3 content on social media promoting blockchain adoption in India.",
    icon: "📢",
    color: "neon-violet",
  },
  {
    role: "Campus Representative at Web3Conf",
    description:
      "Connected students with industry opportunities and organized knowledge sharing sessions.",
    icon: "🎓",
    color: "neon-blue",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-neon-blue">
          Experience
        </p>
        <h3 className="mb-10 text-3xl font-bold">
          <span className="neon-text">Community & Roles</span>
        </h3>

        <motion.div
          className="relative max-w-2xl space-y-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-neon-blue/30 via-neon-violet/30 to-transparent" />

          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.role}
              variants={item}
              className="glass glass-hover group relative flex flex-col gap-1 rounded-xl p-5 pl-14 transition-all duration-300"
              whileHover={{ x: 6 }}
            >
              <div
                className={`absolute left-3 top-5 flex h-8 w-8 items-center justify-center rounded-full border text-sm ${
                  exp.color === "neon-blue"
                    ? "border-neon-blue/30 bg-neon-blue/10"
                    : "border-neon-violet/30 bg-neon-violet/10"
                }`}
              >
                {exp.icon}
              </div>
              <p className="text-sm font-semibold leading-relaxed text-foreground/90">
                {exp.role}
              </p>
              <p className="text-xs leading-relaxed text-muted">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
