import { motion } from "framer-motion";
import { config } from "@/data/config";
import * as ReactIcons from "react-icons/si";

const categoryMeta = [
  {
    key: "frontend" as const,
    label: "Frontend",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/20",
    dot: "bg-blue-400",
  },
  {
    key: "backend" as const,
    label: "Backend",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    glow: "group-hover:shadow-violet-500/20",
    dot: "bg-violet-400",
  },
  {
    key: "tools" as const,
    label: "Tools & Workflow",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    glow: "group-hover:shadow-emerald-500/20",
    dot: "bg-emerald-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 18 } },
};

export function Skills() {
  const getIcon = (iconName: string) => {
    const IconComponent = (ReactIcons as Record<string, React.ElementType>)[iconName];
    return IconComponent ? <IconComponent className="w-7 h-7" /> : null;
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="section-divider" />
      {/* background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -22, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            What I Work With
          </span>
          <h2 className="aurora-text text-3xl md:text-5xl font-display font-bold mb-4">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6 shadow-glow" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* category panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryMeta.map((cat, catIdx) => {
            const skills = config.skills[cat.key];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.12 }}
                whileHover={{ y: -8 }}
                className={`group glass-card rounded-3xl p-7 border ${cat.border} bg-gradient-to-br ${cat.gradient}`}
              >
                {/* category header */}
                <div className="flex items-center gap-2 mb-7">
                  <span className={`w-2.5 h-2.5 rounded-full ${cat.dot} animate-pulse`} />
                  <h3 className="text-lg font-display font-bold text-foreground tracking-wide">
                    {cat.label}
                  </h3>
                  <span className="ml-auto text-xs text-muted-foreground font-medium">
                    {skills.length} skills
                  </span>
                </div>

                {/* skill chips */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={chipVariants}
                      whileHover={{ scale: 1.08, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl
                        bg-background/50 border border-border/50
                        hover:border-primary/50 hover:bg-primary/10
                        shadow-sm hover:shadow-lg ${cat.glow}
                        transition-all duration-200 cursor-default`}
                      data-testid={`skill-chip-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    >
                      <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                        {getIcon(skill.icon)}
                      </span>
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* floating marquee strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="moving-stack flex gap-6 w-max">
            {[...config.skills.frontend, ...config.skills.backend, ...config.skills.tools,
              ...config.skills.frontend, ...config.skills.backend, ...config.skills.tools].map((skill, i) => {
              const IconComponent = (ReactIcons as Record<string, React.ElementType>)[skill.icon];
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 border border-border/60 text-muted-foreground whitespace-nowrap shrink-0 hover:text-foreground hover:border-primary/50 hover:shadow-glow transition-all"
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
