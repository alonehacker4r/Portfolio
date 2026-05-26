import { motion } from "framer-motion";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";
import { Section } from "./Section";

const stats = [
  { icon: Briefcase, label: "Years Hands-on", value: "3+" },
  { icon: Award, label: "Certifications", value: "5" },
  { icon: GraduationCap, label: "Projects Built", value: "20+" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About me" title={<>Who I <span className="text-gradient">am</span></>}>
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a network engineer with a deep curiosity for cybersecurity. From
            configuring Cisco routers in lab racks to writing Python scripts that
            automate audits, I love bridging infrastructure with defense.
          </p>
          <p>
            I've spent the last few years studying CCNA-level networking,
            CompTIA Security+ concepts, and ethical hacking methodologies. My
            goal: help organizations build networks that are fast, observable,
            and hard to breach.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/Prince-Resume.pdf"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-md bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 grid gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary transition"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                <s.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
