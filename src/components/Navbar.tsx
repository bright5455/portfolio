"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { personal } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-18 items-center justify-between py-4">
        <a href="#home" className="font-heading text-xl font-bold text-gradient-gold">
          {personal.firstName}
          <span className="text-off-white">.dev</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-gray transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-black"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        <button
          className="text-gold lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden glass lg:hidden"
          >
            <ul className="section-container flex flex-col gap-4 py-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-gray hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personal.resumeUrl}
                  download
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 text-sm font-medium text-gold"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
