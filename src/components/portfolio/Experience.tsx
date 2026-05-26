import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    date: "2026 — Present",
    title: "Network Operations Intern",
    place: "NetSecure Solutions",
    desc: "Monitor enterprise networks, configure Cisco switches, and assist in incident response across 200+ endpoints.",
  },
  {
    icon: Award,
    date: "2025",
    title: "CCNA Certification",
    place: "Cisco",
    desc: "Routing, switching, VLANs, OSPF and modern network security fundamentals.",
  },
  {
    icon: Briefcase,
    date: "2023",
    title: "Cybersecurity Training",
    place: "TryHackMe & HackTheBox",
    desc: "Completed 60+ rooms covering web exploitation, privilege escalation, and network forensics.",
  },
  {
    icon: GraduationCap,
    date: "2024 — 2027",
    title: "Bachelor of Computer Applications (BCA) | Pursuing",
    place: "LPU University",
    desc: "Specialization in Networking and Information Security. CGPA 8.6/10.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title={<>Experience & <span className="text-gradient">Education</span></>}>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 ${
                i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
              }`}
            >
              <div className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"}`}>
                <div className="glass rounded-xl p-5 hover:border-primary transition">
                  <p className="text-xs font-mono text-primary">{it.date}</p>
                  <h3 className="mt-1 text-lg font-semibold">{it.title}</h3>
                  <p className="text-sm text-secondary">{it.place}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-0 md:left-1/2 top-5 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center glow-primary">
                <it.icon className="w-4 h-4 text-primary-foreground" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
