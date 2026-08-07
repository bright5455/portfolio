"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Experience" title="Where I've Worked" />

        <div className="relative mt-16 border-l border-gold/20 pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-14 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-gold bg-black sm:-left-[49px]">
                <Briefcase size={12} className="text-gold" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                {job.period}
              </span>
              <h3 className="mt-1 font-heading text-xl font-bold text-off-white">
                {job.role}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-gray">
                {job.company}
                <span className="text-gold/40">•</span>
                <MapPin size={13} />
                {job.location}
              </p>

              <ul className="mt-4 space-y-2">
                {job.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2 text-sm leading-relaxed text-gray">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-gold/50 bg-black sm:-left-[49px]">
              <span className="h-2 w-2 rounded-full bg-gold/50" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold/70">
              {education.period}
            </span>
            <h3 className="mt-1 font-heading text-lg font-bold text-off-white">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-gray">
              {education.school} — {education.location}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
