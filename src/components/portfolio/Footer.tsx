import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-gradient text-lg font-bold">&lt;Prince/&gt;</p>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} Prince Mishra. Crafted with care.
          </p>
        </div>
        <nav className="flex gap-5 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <div className="flex gap-3">
          {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary hover:text-primary transition"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
