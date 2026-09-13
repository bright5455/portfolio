"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="bg-charcoal py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col rounded-2xl border border-gold/10 bg-black/40 p-6 transition-all hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Folder size={22} />
              </div>

              <h3 className="mb-2 font-heading text-lg font-semibold text-off-white">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gold/20 px-2.5 py-0.5 text-[11px] font-medium text-gold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-gold/10 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gray transition-colors hover:text-gold"
                >
                  <FaGithub size={16} />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray transition-colors hover:text-gold"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
