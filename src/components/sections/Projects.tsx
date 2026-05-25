import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/data/config";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Full Stack"];

  const filteredProjects =
    filter === "All"
      ? config.projects
      : config.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-0 w-96 h-96 rounded-full bg-primary/8 blur-[130px]" />
        <div className="absolute bottom-16 left-0 w-96 h-96 rounded-full bg-accent/8 blur-[130px]" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              What I've Built
            </span>
            <h2 className="aurora-text text-3xl md:text-5xl font-display font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6 shadow-glow" />
            <p className="text-lg text-muted-foreground max-w-xl">
              Real-world applications built with modern stacks — each one solving a genuine problem.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-testid={`button-filter-${cat.toLowerCase().replace(" ", "-")}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                whileHover={{ y: -8 }}
                className="group glass-card rounded-3xl overflow-hidden flex flex-col"
                data-testid={`card-project-${project.id}`}
              >
                {/* Gradient image area */}
                <div
                  className={`h-48 w-full bg-gradient-to-br ${project.imageGradient} relative overflow-hidden flex flex-col items-center justify-center gap-2`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-white/20 blur-2xl transition-transform duration-700 group-hover:translate-x-[260%]" />
                  <h3 className="relative text-3xl font-display font-bold text-white tracking-tighter transform group-hover:scale-110 transition-transform duration-500">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="relative text-white/70 text-xs font-medium tracking-wide">
                      {project.subtitle}
                    </p>
                  )}
                  <span className="relative px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-muted-foreground mb-5 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-md text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`glass-card ${project.demo ? "flex-1" : "w-full"}`}
                      asChild
                      data-testid={`button-github-${project.id}`}
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1"
                        asChild
                        data-testid={`button-demo-${project.id}`}
                      >
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild data-testid="button-more-github">
            <a href={config.personal.github} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" /> View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
