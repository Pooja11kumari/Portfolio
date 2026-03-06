"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [hasPointer, setHasPointer] = useState(false);
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 150, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 150, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setHasPointer(mq.matches);

    const handleChange = (e: MediaQueryListEvent) => setHasPointer(e.matches);
    mq.addEventListener("change", handleChange);

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      mq.removeEventListener("change", handleChange);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [cursorX, cursorY]);

  if (!hasPointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-50 h-[300px] w-[300px] rounded-full"
      style={{
        left: springX,
        top: springY,
        background:
          "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 80%)",
      }}
      aria-hidden="true"
    />
  );
}
