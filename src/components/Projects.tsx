"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Blockchain Powered Healthcare Record Management System",
    description:
      "A blockchain-based healthcare platform that securely stores and manages patient records with role-based authentication for doctors and patients. Integrated IPFS for decentralized document storage to improve data integrity and security.",
    tags: ["Blockchain", "IPFS", "Healthcare", "Decentralized"],
    color: "neon-blue",
  },
  {
    title: "Send – DeFi Application",
    description:
      "A decentralized finance application that enables users to make payments, swap tokens, and stake assets in a single platform. Integrated Pera Wallet authentication and Algorand SDK with QR-based login for seamless transactions.",
    tags: ["DeFi", "Algorand", "Pera Wallet", "Web3"],
    color: "neon-violet",
  },
  {
    title: "Trust.Swap – Cross Chain Swap Platform",
    description:
      "A decentralized cross-chain swap platform allowing secure token transfers without wrapped tokens or intermediaries. Implemented Hash Time-Locked Contracts (HTLC) and liquidity providers using Move smart contracts with a React-based Aptos frontend.",
    tags: ["Cross-Chain", "HTLC", "Move", "Aptos"],
    color: "neon-blue",
  },
  {
    title: "CarRental – MERN Stack Application",
    description:
      "A full-stack car rental system where users can browse cars, check availability, and book rentals in real time. Implemented an admin dashboard and automated booking workflows using React and Node.js.",
    tags: ["MERN", "React", "Node.js", "MongoDB"],
    color: "neon-violet",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-neon-blue">
          Projects
        </p>
        <h3 className="mb-10 text-3xl font-bold">
          <span className="neon-text">Featured Work</span>
        </h3>

        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="glass glass-hover group relative overflow-hidden rounded-xl p-6 transition-all duration-300"
              whileHover={{ y: -6 }}
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    project.color === "neon-blue"
                      ? "rgba(0,212,255,0.15)"
                      : "rgba(168,85,247,0.15)",
                }}
              />

              <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-2">project.tsx</span>
              </div>

              <h4
                className={`mb-3 text-lg font-semibold ${
                  project.color === "neon-blue"
                    ? "text-neon-blue"
                    : "text-neon-violet"
                }`}
              >
                {project.title}
              </h4>

              <p className="mb-5 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
