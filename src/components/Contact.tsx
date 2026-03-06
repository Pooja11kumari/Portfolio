"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-neon-blue">
          Contact
        </p>
        <h3 className="mb-10 text-3xl font-bold">
          <span className="neon-text">Get In Touch</span>
        </h3>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            className="glass relative overflow-hidden rounded-xl p-6"
            whileHover={{
              boxShadow: "0 0 30px rgba(0,212,255,0.1), 0 0 60px rgba(168,85,247,0.05)",
            }}
          >
            <div className="mb-4 flex items-center gap-2 font-mono text-xs text-muted">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-2">contact.form</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-sm text-foreground outline-none transition-all focus:border-neon-blue/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-sm text-foreground outline-none transition-all focus:border-neon-blue/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-sm text-foreground outline-none transition-all focus:border-neon-blue/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                className="neon-border w-full rounded-lg px-6 py-2.5 font-mono text-sm text-foreground transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? "✓ Message Sent!" : "Send Message"}
              </motion.button>
            </div>
          </motion.form>

          <div className="flex flex-col justify-center gap-4">
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover flex items-center gap-4 rounded-xl p-5 transition-all duration-300"
              whileHover={{ x: 6 }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon-blue/20 bg-neon-blue/10 text-lg">
                ◆
              </span>
              <div>
                <p className="font-mono text-sm font-semibold text-foreground">
                  GitHub
                </p>
                <p className="font-mono text-xs text-muted">
                  github.com/poojakumari
                </p>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover flex items-center gap-4 rounded-xl p-5 transition-all duration-300"
              whileHover={{ x: 6 }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon-violet/20 bg-neon-violet/10 text-lg">
                in
              </span>
              <div>
                <p className="font-mono text-sm font-semibold text-foreground">
                  LinkedIn
                </p>
                <p className="font-mono text-xs text-muted">
                  linkedin.com/in/poojakumari
                </p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:poojanshu113@gmail.com"
              className="glass glass-hover flex items-center gap-4 rounded-xl p-5 transition-all duration-300"
              whileHover={{ x: 6 }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon-blue/20 bg-neon-blue/10 text-lg">
                ✉
              </span>
              <div>
                <p className="font-mono text-sm font-semibold text-foreground">
                  Email
                </p>
                <p className="font-mono text-xs text-muted">
                  poojanshu113@gmail.com
                </p>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
