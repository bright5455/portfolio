import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/10 bg-charcoal">
      <div className="section-container flex flex-col items-center gap-6 py-10 text-center">
        <a href="#home" className="font-heading text-xl font-bold text-gradient-gold">
          {personal.firstName}
          <span className="text-off-white">.dev</span>
        </a>

        <div className="flex items-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray transition-colors hover:text-gold"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray transition-colors hover:text-gold"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-gray transition-colors hover:text-gold"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-sm text-gray">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
