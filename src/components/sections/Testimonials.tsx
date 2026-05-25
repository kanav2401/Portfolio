import { motion } from "framer-motion";
import { config } from "@/data/config";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Client Feedback
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              <p className="text-muted-foreground italic mb-8 relative z-10 leading-relaxed">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{test.name}</h4>
                  <p className="text-sm text-primary">{test.role} @ {test.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
