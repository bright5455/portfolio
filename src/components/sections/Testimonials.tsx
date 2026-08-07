"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-charcoal py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Testimonials" title="What People Say" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-xl rounded-2xl border border-dashed border-gold/30 bg-black/40 p-10 text-center"
        >
          <Quote className="mx-auto mb-4 text-gold" size={28} />
          <p className="text-gray">
            Recommendations from employers, clients, and collaborators will
            appear here as they come in.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
