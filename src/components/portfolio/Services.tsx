import { motion } from "framer-motion";
import { Section } from "./Section";
import { Network, ShieldCheck, Headphones, Code2, Wrench } from "lucide-react";

const services = [
  { icon: Network, title: "Network Setup", desc: "Design and deploy reliable LAN/WAN topologies with proper segmentation." },
  { icon: ShieldCheck, title: "Cybersecurity Basics", desc: "Harden devices, audit policies, and train teams on safe practices." },
  { icon: Headphones, title: "Technical Support", desc: "Remote and on-site support for connectivity and OS-level issues." },
  { icon: Code2, title: "Web Development", desc: "Modern responsive sites and dashboards built with React + Tailwind." },
  { icon: Wrench, title: "System Troubleshooting", desc: "Diagnose performance issues from packet capture to BIOS level." },
];

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title={<>What I <span className="text-gradient">offer</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 hover:border-primary transition group relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition" />
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4">
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
