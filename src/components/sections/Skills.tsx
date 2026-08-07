"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Skills" title="Technologies I Work With" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="gradient-border glass rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <h3 className="mb-4 font-heading text-lg font-semibold text-gold">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gold/20 bg-black/40 px-3 py-1 text-xs font-medium text-off-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
