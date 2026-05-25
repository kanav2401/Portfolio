import { motion } from "framer-motion";
import { config } from "@/data/config";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript } from "react-icons/si";

export function Hero() {
  const typedText = useTypingEffect(config.personal.titles, 100, 50, 2000);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] mix-blend-screen" />
        
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] text-primary/30"
        >
          <SiReact size={64} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-[15%] text-accent/30"
        >
          <SiNodedotjs size={56} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[10%] text-green-500/20"
        >
          <SiMongodb size={48} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[20%] text-blue-500/20"
        >
          <SiTypescript size={40} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl relative z-10 bg-secondary flex items-center justify-center">
            <span className="text-4xl font-display font-bold text-muted-foreground">
              {config.personal.name.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent blur animate-pulse" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl font-medium text-primary mb-2 tracking-wide uppercase"
        >
          Hello, I'm
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-4 tracking-tighter"
        >
          {config.personal.name}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-12 md:h-16 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-3xl font-light text-muted-foreground">
            I am a <span className="font-semibold text-foreground">{typedText}</span>
            <span className="animate-pulse text-primary">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-base md:text-lg text-muted-foreground mb-10"
        >
          {config.personal.bio}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" className="rounded-full px-8 h-12" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 glass-card" asChild>
            <a href={config.personal.resumeLink} target="_blank" rel="noreferrer">
              Resume <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-6"
        >
          <a href={config.personal.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
            <Github className="h-6 w-6" />
          </a>
          <a href={config.personal.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0A66C2] hover:scale-110 transition-all">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={`mailto:${config.personal.email}`} className="text-muted-foreground hover:text-primary hover:scale-110 transition-all">
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>

      </div>
      
    </section>
  );
}
