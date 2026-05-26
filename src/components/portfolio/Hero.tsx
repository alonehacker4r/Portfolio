import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import profile from "@/assets/profile.jpg";

const phrases = [
  "Network Engineer",
  "Cybersecurity Enthusiast",
  "Ethical Hacking Learner",
];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((i + 1) % phrases.length);
          }
        }
      },
      del ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

export function Hero() {
  const typed = useTyping();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Prince</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-mono min-h-[2.5rem]">
            <span className="caret">{typed}</span>
          </p>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Building secure networks and breaking them ethically. Passionate about
            infrastructure, defense, and the craft of clean engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 h-12 rounded-md bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition glow-primary"
            >
              Hire Me <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/Prince-Resume.pdf"
              className="inline-flex items-center gap-2 px-6 h-12 rounded-md glass hover:border-primary transition"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative justify-self-center"
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-primary glow-primary">
            <img
              src={profile}
              alt="Prince"
              width={768}
              height={768}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
