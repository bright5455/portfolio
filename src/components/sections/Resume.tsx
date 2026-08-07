"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { personal, education } from "@/data/portfolio";

export default function Resume() {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="gradient-border glass mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl p-10 text-center gold-glow"
        >
          <h3 className="font-heading text-2xl font-bold text-off-white sm:text-3xl">
            Want the Full Story?
          </h3>
          <p className="max-w-md text-sm text-gray">
            Download my complete resume for a detailed look at my experience,
            skills, and background.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray">
            <span className="flex items-center gap-1.5">
              <Briefcase size={15} className="text-gold" /> Backend Engineer
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap size={15} className="text-gold" />
              {education.degree}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-gold" />
              {personal.location}
            </span>
          </div>

          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
