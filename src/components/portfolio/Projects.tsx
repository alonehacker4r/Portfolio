import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import netImg from "@/assets/project-network.jpg";
import pentestImg from "@/assets/project-pentest.jpg";
import webImg from "@/assets/project-web.jpg";
import serverImg from "@/assets/project-server.jpg";

const projects = [
  {
    title: "Enterprise Network Simulation",
    category: "Networking",
    image: netImg,
    desc: "Designed a multi-VLAN topology with OSPF routing, ACLs and inter-site VPN in Cisco Packet Tracer.",
    stack: ["Cisco", "OSPF", "VLAN", "VPN"],
  },
  {
    title: "Vulnerability Scanner CLI",
    category: "Cybersecurity",
    image: pentestImg,
    desc: "Python tool that fingerprints services and flags known CVEs against the NVD database.",
    stack: ["Python", "Nmap", "CVE API"],
  },
  {
    title: "SOC Analytics Dashboard",
    category: "Web Development",
    image: webImg,
    desc: "Real-time dashboard visualizing firewall logs and intrusion attempts across regions.",
    stack: ["React", "Tailwind", "Recharts"],
  },
  {
    title: "Hardened Linux Server",
    category: "Networking",
    image: serverImg,
    desc: "Bastion host setup with fail2ban, UFW, audit logging and automated backup pipeline.",
    stack: ["Linux", "Bash", "Docker"],
  },
];

const filters = ["All", "Networking", "Cybersecurity", "Web Development"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" eyebrow="Projects" title={<>Selected <span className="text-gradient">work</span></>}>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 h-9 rounded-full text-sm transition ${
              filter === f
                ? "bg-gradient-primary text-primary-foreground"
                : "glass hover:border-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {visible.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group glass rounded-2xl overflow-hidden hover:border-primary transition shadow-card"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={p.image}
                alt={p.title}
                width={800}
                height={500}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono glass">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a href="#" className="inline-flex items-center gap-1.5 text-sm hover:text-primary transition">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm hover:text-primary transition">
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
