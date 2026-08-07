"use client";

import { motion } from "framer-motion";
import {
  Server,
  ShieldCheck,
  Database,
  FileText,
  Cloud,
  Gauge,
  Bug,
  MessagesSquare,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/portfolio";

const icons = [Server, ShieldCheck, Database, FileText, Cloud, Gauge, Bug, MessagesSquare];

export default function Services() {
  return (
    <section id="services" className="bg-charcoal py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Services" title="What I Can Help You Build" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl border border-gold/10 bg-black/40 p-6 transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-black">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 font-heading text-base font-semibold text-off-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
