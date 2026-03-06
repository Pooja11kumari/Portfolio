"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: "⟨/⟩",
    color: "neon-blue",
    skills: ["Python", "C", "JavaScript", "Java", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "◈",
    color: "neon-violet",
    skills: ["React.js", "Node.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Databases",
    icon: "⛁",
    color: "neon-blue",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: "⚙",
    color: "neon-violet",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ"],
  },
  {
    title: "Specialization",
    icon: "⚡",
    color: "neon-blue",
    skills: [
      "Blockchain Development",
      "Decentralized Finance Applications",
      "Full Stack Web Development",
    ],
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-neon-blue">
          Skills
        </p>
        <h3 className="mb-10 text-3xl font-bold">
          <span className="neon-text">Tech Stack</span>
        </h3>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="glass glass-hover group rounded-xl p-6 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`text-xl ${
                    cat.color === "neon-blue"
                      ? "text-neon-blue"
                      : "text-neon-violet"
                  }`}
                >
                  {cat.icon}
                </span>
                <h4 className="font-mono text-sm font-semibold text-foreground">
                  {cat.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                      cat.color === "neon-blue"
                        ? "border-neon-blue/20 text-neon-blue/80 group-hover:border-neon-blue/40 group-hover:shadow-[0_0_10px_rgba(0,212,255,0.1)]"
                        : "border-neon-violet/20 text-neon-violet/80 group-hover:border-neon-violet/40 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.1)]"
                    }`}
                  >
                    {skill}
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
