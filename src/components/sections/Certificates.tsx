"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-charcoal py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Certifications" title="Certificates & Achievements" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-gold/10 bg-black/40 p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Award size={20} />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-off-white">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-gray">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
