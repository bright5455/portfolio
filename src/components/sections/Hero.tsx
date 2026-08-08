"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personal } from "@/data/portfolio";

function useTypingEffect(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 90;
    const pause = 1400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(personal.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(212,175,55,0.15)_1px,transparent_0)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="section-container grid items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {personal.available && (
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal px-4 py-1.5 text-xs font-medium text-gray">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for Remote Opportunities
            </span>
          )}

          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient-gold">{personal.firstName}</span>
          </h1>

          <div className="mt-3 h-9 text-xl font-semibold text-gold sm:text-2xl">
            {typed}
            <span className="animate-pulse">|</span>
          </div>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray sm:text-lg">
            {personal.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-gold to-gold-light px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              Hire Me
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-gray transition-colors hover:border-gold hover:text-gold"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-gray transition-colors hover:border-gold hover:text-gold"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-gray transition-colors hover:border-gold hover:text-gold"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        >
          <div className="absolute -inset-6 -z-10 animate-float rounded-full bg-gradient-to-br from-gold/25 via-transparent to-gold-light/15 blur-2xl" />
          <div className="relative z-10 h-full w-full animate-float rounded-full border-2 border-gold/40 p-2 gold-glow">
            <div className="relative h-full w-full overflow-hidden rounded-full border border-gold/20 bg-charcoal">
              <Image
                src={personal.avatarUrl}
                alt={personal.name}
                fill
                sizes="384px"
                quality={95}
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
