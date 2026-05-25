import { motion } from "framer-motion";
import { config } from "@/data/config";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Building digital products, brands, and experience.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {config.personal.bio}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach to development is heavily focused on user experience. I believe that an interface should not only look beautiful but also feel intuitive and responsive. I obsess over the details—the micro-interactions, the performance, the accessibility.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              {config.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform"
                >
                  <span className="text-4xl font-display font-bold text-primary mb-2">
                    {stat.value}{stat.plus ? '+' : ''}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
