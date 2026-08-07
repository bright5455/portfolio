"use client";

import { motion } from "framer-motion";
import { GitPullRequest, Star, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal } from "@/data/portfolio";

const highlights = [
  { icon: GitPullRequest, label: "Active contributor to community repos" },
  { icon: Star, label: "Focused on backend & tooling projects" },
  { icon: Users, label: "Collaborative, review-friendly workflow" },
];

export default function OpenSource() {
  return (
    <section id="open-source" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Open Source" title="Community & Contributions" />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 leading-relaxed text-gray">
              I enjoy contributing to open-source projects, collaborating with
              other engineers, and giving back to the tools I rely on daily.
              My GitHub is the best place to see my code, contribution
              history, and ongoing work.
            </p>

            <div className="space-y-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-off-white">{label}</span>
                </div>
              ))}
            </div>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              <FaGithub size={18} />
              View GitHub Profile
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="gradient-border glass overflow-hidden rounded-2xl p-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.io/D4AF37/${personal.github.split("/").pop()}`}
              alt="GitHub contribution graph"
              className="w-full rounded-lg"
            />
            <p className="mt-3 text-center text-xs text-gray">
              Live contribution graph — updates automatically from GitHub
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
