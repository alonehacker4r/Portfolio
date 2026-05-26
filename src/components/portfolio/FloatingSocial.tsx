import { Github, Linkedin, Instagram } from "lucide-react";

export function FloatingSocial() {
  const items = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];
  return (
    <div className="hidden lg:flex fixed left-5 bottom-0 z-40 flex-col items-center gap-4">
      {items.map((i, k) => (
        <a
          key={k}
          href={i.href}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-1 hover:border-primary transition"
        >
          <i.icon className="w-4 h-4" />
        </a>
      ))}
      <div className="w-px h-24 bg-gradient-to-b from-border to-transparent" />
    </div>
  );
}
