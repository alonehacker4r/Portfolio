import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-sm text-primary uppercase tracking-widest">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">{title}</h2>
          <div className="mt-4 mx-auto h-px w-24 bg-gradient-primary" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
