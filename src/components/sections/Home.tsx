import { motion } from "framer-motion";
import { config } from "@/data/config";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, MapPin, Phone, GraduationCap, Briefcase, Award, Trophy } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const statIcons = [
  <Trophy className="h-5 w-5" />,
  <Briefcase className="h-5 w-5" />,
  <Award className="h-5 w-5" />,
  <GraduationCap className="h-5 w-5" />,
];

export function Home() {
  const typedText = useTypingEffect(config.personal.titles, 100, 50, 2000);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* ── Hero ── */}
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{ x: [0, 36, 0], y: [0, -24, 0], opacity: [0.45, 0.8, 0.45] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] mix-blend-screen"
          />
          <motion.div
            animate={{ x: [0, -28, 0], y: [0, 30, 0], opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] mix-blend-screen"
          />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Floating tech icons */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -22, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[8%] text-primary/25"
          >
            <SiReact size={60} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 28, 0], rotate: [0, -12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-[12%] text-accent/25"
          >
            <SiNodedotjs size={52} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[8%] text-green-500/20"
          >
            <SiMongodb size={48} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 24, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-[18%] text-yellow-400/20"
          >
            <SiJavascript size={40} />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="relative mb-8">
            <div className="absolute -inset-7 rounded-full border border-primary/15 animate-pulse" />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/40 via-accent/45 to-primary/40 blur-2xl opacity-70 animate-gradient-shift" />
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-background shadow-2xl shadow-primary/20 relative z-10 overflow-hidden bg-[#080c14]">
              <img
                src="/kanav-profile.png"
                alt="Kanav Sharma"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-md animate-pulse opacity-80" />
          </motion.div>

          <motion.p variants={itemVariants} className="text-base md:text-lg font-medium text-primary mb-2 tracking-[0.2em] uppercase">
            Hello, I'm
          </motion.p>

          <motion.h1 variants={itemVariants} className="aurora-text text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-tighter">
            {config.personal.name}
          </motion.h1>

          <motion.div variants={itemVariants} className="h-12 md:h-16 flex items-center justify-center mb-4">
            <span className="text-xl md:text-3xl font-light text-muted-foreground">
              I'm a{" "}
              <span className="font-semibold text-foreground">{typedText}</span>
              <span className="animate-pulse text-primary">|</span>
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted-foreground mb-6 text-sm md:text-base">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{config.personal.location}</span>
            <span className="mx-2 opacity-40">·</span>
            <span className="text-green-400 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
              Open to Opportunities
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="max-w-2xl text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
            {config.personal.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" className="rounded-full px-8 h-12 shadow-glow hover:shadow-accent-glow transition-shadow" asChild data-testid="button-view-projects">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-8 h-12 glass-card" asChild data-testid="button-contact">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a
              href={config.personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
              data-testid="link-github"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={config.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-[#0A66C2] hover:scale-110 transition-all"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${config.personal.email}`}
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              data-testid="link-email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href={`tel:${config.personal.phone}`}
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              data-testid="link-phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

      </div>

      {/* ── About / General Info ── */}
      <div className="relative py-24 bg-card/30">
        <div className="section-divider" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          {/* Stats row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {config.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform group"
                data-testid={`stat-card-${i}`}
              >
                <span className="text-primary mb-3 group-hover:scale-110 transition-transform">
                  {statIcons[i]}
                </span>
                <span className="text-4xl md:text-5xl font-display font-bold text-foreground mb-1">
                  {stat.value}{stat.plus ? "+" : ""}
                </span>
                <span className="text-sm font-medium text-muted-foreground leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* About me */}
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Who I Am</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Passionate about building impactful software
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
                {config.personal.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
                Beyond code, I'm a cricket captain and university event organizer — skills that keep me sharp on leadership, teamwork, and execution under pressure.
              </p>

              {/* Contact pills */}
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${config.personal.email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="pill-email"
                >
                  <Mail className="h-4 w-4" />
                  {config.personal.email}
                </a>
                <a
                  href={`tel:${config.personal.phone}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="pill-phone"
                >
                  <Phone className="h-4 w-4" />
                  {config.personal.phone}
                </a>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {config.personal.location}
                </span>
              </div>
            </motion.div>

            <motion.div className="hidden">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  {config.education.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card rounded-xl p-4 border-l-2 border-primary/50"
                      data-testid={`education-item-${i}`}
                    >
                      <p className="font-semibold text-foreground text-sm leading-tight">{edu.degree}</p>
                      <p className="text-primary text-sm mt-0.5">{edu.institution}</p>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <span>{edu.years}</span>
                        <span>·</span>
                        <span className="font-medium text-green-400">{edu.grade}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground">Experience</h3>
                </div>
                <div className="space-y-4">
                  {config.experience.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card rounded-xl p-4 border-l-2 border-accent/50"
                      data-testid={`experience-item-${i}`}
                    >
                      <p className="font-semibold text-foreground text-sm leading-tight">{exp.role}</p>
                      <p className="text-accent text-sm mt-0.5">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.years}</p>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
