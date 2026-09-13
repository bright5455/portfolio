import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import OpenSource from "@/components/sections/OpenSource";
import Services from "@/components/sections/Services";
import Certificates from "@/components/sections/Certificates";
import Blog from "@/components/sections/Blog";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <OpenSource />
      <Services />
      <Certificates />
      <Blog />
      <Resume />
      <Contact />
    </>
  );
}
