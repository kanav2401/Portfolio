import { config } from "@/data/config";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socials = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, url: config.personal.github },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: config.personal.linkedin },
    { name: "Email", icon: <Mail className="h-5 w-5" />, url: `mailto:${config.personal.email}` },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-foreground">
              {config.personal.name}
            </h3>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              {config.personal.shortBio}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={social.name}
                  data-testid={`link-footer-${social.name.toLowerCase()}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{config.personal.email}</p>
            <p className="text-sm text-muted-foreground">{config.personal.phone}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {config.personal.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ by {config.personal.name}
          </p>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
