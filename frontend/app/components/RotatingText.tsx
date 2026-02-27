"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  "Full Stack Developer",
  "Software Engineer",
  "Kubernetes Enthusiast",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-grid">
      {/* Invisible text to hold width for the longest role */}
      <span className="invisible col-start-1 row-start-1">
        {ROLES.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="col-start-1 row-start-1"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
