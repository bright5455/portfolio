"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Database, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { about, personal } from "@/data/portfolio";

const highlights = [
  { icon: Code2, label: "Clean Architecture" },
  { icon: Database, label: "Scalable Data Modeling" },
  { icon: ShieldCheck, label: "Secure by Design" },
  { icon: Sparkles, label: "Continuous Learner" },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="About Me" title="The Engineer Behind the Code" />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="gradient-border glass overflow-hidden rounded-2xl p-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl border border-gold/30 bg-charcoal/80 backdrop-blur" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-gray">
                {p}
              </p>
            ))}

            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-gold/15 bg-charcoal px-4 py-3"
                >
                  <Icon size={18} className="text-gold" />
                  <span className="text-sm font-medium text-off-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
