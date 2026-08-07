"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/portfolio";

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Writing" title="From the Blog" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-gold/10 bg-charcoal p-6 transition-all hover:border-gold/40"
            >
              <span className="mb-4 w-fit rounded-full border border-gold/30 px-3 py-1 text-[11px] font-medium text-gold">
                {post.tag}
              </span>
              <h3 className="mb-2 font-heading text-lg font-semibold text-off-white">
                {post.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-gold opacity-70 transition-opacity group-hover:opacity-100">
                Coming soon
                <ArrowUpRight size={15} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
