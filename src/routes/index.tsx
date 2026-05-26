import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingSocial } from "@/components/portfolio/FloatingSocial";
import { ScrollTop } from "@/components/portfolio/ScrollTop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Prince — Ethical Hacker & Cybersecurity Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Prince Mishra — Network Engineer, Cybersecurity Enthusiast and Ethical Hacking Learner. Projects, skills, and services.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <FloatingSocial />
      <ScrollTop />
    </main>
  );
}
