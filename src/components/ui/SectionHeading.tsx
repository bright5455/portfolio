"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  center = true,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={center ? "mx-auto max-w-xl text-center" : "max-w-xl"}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-heading text-3xl font-bold text-off-white sm:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-4 h-[2px] w-16 bg-gradient-to-r from-gold to-gold-light ${
          center ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
