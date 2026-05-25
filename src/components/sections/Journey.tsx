import { motion } from "framer-motion";
import { config } from "@/data/config";
import { Calendar, GraduationCap, Briefcase, Award } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-24 relative bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          {/* Experience & Education Column */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-foreground">
              <Briefcase className="text-primary" /> Experience & Education
            </h3>
            <div className="space-y-12 border-l-2 border-primary/30 pl-6 ml-3">
              {config.experience.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[35px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                  <span className="text-sm font-medium text-primary mb-1 block">{exp.years}</span>
                  <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                  <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}

              {config.education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[35px] top-1 h-4 w-4 rounded-full bg-accent ring-4 ring-background" />
                  <span className="text-sm font-medium text-accent mb-1 block">{edu.years}</span>
                  <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                  <p className="text-muted-foreground font-medium mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Evolution / Certs Column */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-foreground">
              <Award className="text-primary" /> Evolution & Certifications
            </h3>
            <div className="space-y-12 border-l-2 border-primary/30 pl-6 ml-3">
              {config.journey.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative glass-card p-6 rounded-2xl -ml-2"
                >
                  <div className="absolute -left-[33px] top-6 h-4 w-4 rounded-full bg-background border-2 border-primary" />
                  <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full mb-3 inline-block">
                    {item.date}
                  </span>
                  <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
