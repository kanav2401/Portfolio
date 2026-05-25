import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { config } from "@/data/config";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 w-full h-1 bg-primary origin-left z-50 transition-transform duration-100"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-primary" data-testid="link-logo">
            {config.personal.initials}<span className="text-foreground">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-border pl-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme} data-testid="button-theme-toggle">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button asChild data-testid="button-resume-nav">
                <a href={config.personal.resumeLink} download="Kanav_Sharma_Resume.pdf">
                  Resume
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} data-testid="button-theme-mobile">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)} data-testid="button-menu-open">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="text-2xl font-display font-bold text-primary">{config.personal.initials}.</span>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} data-testid="button-menu-close">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex-1 p-6 flex flex-col justify-center">
              <ul className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-3xl font-display font-bold hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex justify-center">
                <Button size="lg" className="w-full max-w-sm" asChild>
                  <a href={config.personal.resumeLink} download="Kanav_Sharma_Resume.pdf" onClick={() => setIsMobileMenuOpen(false)}>
                    Download Resume
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
