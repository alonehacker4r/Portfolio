import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  SiCisco, SiLinux, SiPython, SiKalilinux, SiWireshark,
  SiHtml5, SiJavascript, SiReact, SiDocker,
} from "react-icons/si";
import { FaNetworkWired, FaWindows, FaShieldAlt, FaTools } from "react-icons/fa";

const skills = [
  { name: "Networking", icon: FaNetworkWired },
  { name: "CCNA", icon: SiCisco },
  { name: "Linux", icon: SiLinux },
  { name: "Python", icon: SiPython },
  { name: "Cybersecurity", icon: FaShieldAlt },
  { name: "Ethical Hacking", icon: SiKalilinux },
  { name: "Wireshark", icon: SiWireshark },
  { name: "Windows Server", icon: FaWindows },
  { name: "Troubleshooting", icon: FaTools },
  { name: "HTML/CSS", icon: SiHtml5 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Docker", icon: SiDocker },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>Tools of the <span className="text-gradient">trade</span></>}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            className="glass rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-primary transition group"
          >
            <s.icon className="w-9 h-9 text-primary group-hover:scale-110 transition" />
            <span className="text-sm font-medium text-center">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
