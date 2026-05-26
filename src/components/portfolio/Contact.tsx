import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's <span className="text-gradient">connect</span></>}>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-muted-foreground">
            Have a project, an opportunity, or just want to talk shop? Drop a
            message — I reply within 24 hours.
          </p>
          {[
            { icon: Mail, label: "alonehacker4r@gmail.com", href: "mailto:alonehacker4r@gmail.com" },
            { icon: Phone, label: "+916388507400", href: "tel:+916388507400" },
            { icon: Linkedin, label: "linkedin.com/in/alonehacker4r", href: "#" },
            { icon: Github, label: "github.com/alonehacker4r", href: "#" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                <c.icon className="w-5 h-5" />
              </div>
              <span className="text-sm group-hover:text-primary transition">{c.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
            (e.currentTarget as HTMLFormElement).reset();
          }}
          className="glass rounded-2xl p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="Name"
              className="h-11 px-4 rounded-md bg-input border border-border focus:border-primary outline-none transition text-sm"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="h-11 px-4 rounded-md bg-input border border-border focus:border-primary outline-none transition text-sm"
            />
          </div>
          <input
            placeholder="Subject"
            className="w-full h-11 px-4 rounded-md bg-input border border-border focus:border-primary outline-none transition text-sm"
          />
          <textarea
            required
            placeholder="Your message..."
            rows={5}
            className="w-full p-4 rounded-md bg-input border border-border focus:border-primary outline-none transition text-sm resize-none"
          />
          <button
            type="submit"
            className="w-full h-12 rounded-md bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition glow-primary inline-flex items-center justify-center gap-2"
          >
            {sent ? "Message sent ✓" : (<>Send Message <Send className="w-4 h-4" /></>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
