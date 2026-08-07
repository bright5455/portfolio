"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { stats } from "@/data/portfolio";

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section ref={ref} className="border-y border-gold/10 bg-charcoal py-16">
      <div className="section-container grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-heading text-4xl font-bold text-gradient-gold sm:text-5xl">
              {inView ? (
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              ) : (
                "0"
              )}
            </div>
            <p className="mt-2 text-sm text-gray">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
