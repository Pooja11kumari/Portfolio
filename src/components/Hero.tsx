"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ROLES = [
  "Computer Science Engineer",
  "Blockchain Developer",
  "Open Source Contributor",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          );
        },
        isDeleting ? 30 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-start justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex w-full max-w-4xl flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between"
      >
        <div className="max-w-2xl">
          <motion.p
            className="mb-3 font-mono text-sm uppercase tracking-widest text-neon-blue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-foreground">I&apos;m </span>
            <span className="neon-text">Pooja Kumari</span>
          </h1>

          <div className="mb-6 flex h-8 items-center font-mono text-lg text-muted sm:text-xl">
            <span className="mr-2 text-neon-violet">{">"}</span>
            <span className="text-foreground">{text}</span>
            <span className="ml-0.5 animate-pulse text-neon-blue">|</span>
          </div>

          <motion.p
            className="mb-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Engineering the future through decentralized systems, intelligent
            applications, and impactful open-source innovation.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="#projects"
              className="neon-border rounded-lg px-6 py-2.5 font-mono text-sm text-foreground transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/10 px-6 py-2.5 font-mono text-sm text-muted transition-all hover:border-neon-violet/50 hover:text-foreground"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download="PoojaKumari-Resume.pdf"
              className="rounded-lg border border-white/10 px-6 py-2.5 font-mono text-sm text-muted transition-all hover:border-neon-blue/50 hover:text-foreground"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="profile-glow relative h-64 w-64 overflow-hidden rounded-full p-[3px] sm:h-80 sm:w-80 md:h-96 md:w-96">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-surface">
              <Image
                src="/profile.jpg"
                alt="Pooja Kumari"
                fill
                className="object-cover"
                priority
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
                <span className="neon-text text-4xl font-bold sm:text-5xl">
                  PK
                </span>
              </div>
            </div>
          </div>
          <motion.div
            className="pointer-events-none absolute -inset-4 rounded-full opacity-30 blur-xl"
            style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)" }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full opacity-20 blur-[100px]"
        style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
