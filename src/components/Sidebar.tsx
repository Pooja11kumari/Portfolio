"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "about", label: "About", icon: "◈" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "projects", label: "Projects", icon: "◧" },
  { id: "achievements", label: "Achievements", icon: "🏆" },
  { id: "experience", label: "Experience", icon: "★" },
  { id: "github", label: "GitHub", icon: "◆" },
  { id: "contact", label: "Contact", icon: "✉" },
];

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className="fixed left-0 top-0 z-40 hidden h-full flex-col items-center overflow-hidden border-r border-[var(--glass-border)] py-6 transition-all duration-300 md:flex"
        style={{
          width: hovered ? "11rem" : "4rem",
          background: "var(--sidebar-bg)",
          backdropFilter: "blur(16px)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="neon-text mb-8 cursor-default font-mono text-xl font-bold"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          PK
        </motion.div>

        <div className="flex flex-1 flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "text-neon-blue"
                    : "text-muted hover:text-foreground"
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-sidebar"
                    className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-neon-blue"
                    style={{ boxShadow: "0 0 10px rgba(0,212,255,0.5)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="text-base">{item.icon}</span>
                <span
                  className={`whitespace-nowrap font-mono text-xs transition-opacity duration-200 ${
                    hovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Theme Toggle - Desktop */}
        <motion.button
          onClick={toggleTheme}
          className="mt-4 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:text-neon-blue"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle theme"
        >
          <span className="flex items-center justify-center text-base">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </span>
          <span
            className={`whitespace-nowrap font-mono text-xs transition-opacity duration-200 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </motion.button>
      </nav>

      {/* Mobile Bottom Bar */}
      <nav
        className="fixed bottom-0 left-0 z-40 flex w-full items-center justify-around border-t border-[var(--glass-border)] px-2 py-2 md:hidden"
        style={{
          background: "var(--mobile-nav-bg)",
          backdropFilter: "blur(16px)",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative flex cursor-pointer flex-col items-center gap-0.5 rounded-lg px-2 py-1 text-xs transition-colors ${
                isActive ? "text-neon-blue" : "text-muted"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-mobile"
                  className="absolute -top-2 h-0.5 w-6 rounded-full bg-neon-blue"
                  style={{ boxShadow: "0 0 10px rgba(0,212,255,0.5)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="text-sm">{item.icon}</span>
            </button>
          );
        })}

        {/* Theme Toggle - Mobile */}
        <button
          onClick={toggleTheme}
          className="flex cursor-pointer flex-col items-center gap-0.5 rounded-lg px-2 py-1 text-xs text-muted transition-colors"
          aria-label="Toggle theme"
        >
          <span className="text-sm">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </span>
        </button>
      </nav>
    </>
  );
}
