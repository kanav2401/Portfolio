import { motion } from "framer-motion";
import { config } from "@/data/config";
import { GraduationCap, Briefcase, Award, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function SectionHeading({ icon, title, color }: { icon: React.ReactNode; title: string; color: string }) {
  return (
    <div className={`flex items-center gap-3 mb-8`}>
      <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        {icon}
      </span>
      <h3 className="text-2xl font-display font-bold text-foreground">{title}</h3>
    </div>
  );
}

function TimelineItem({
  title,
  subtitle,
  meta,
  grade,
  description,
  index,
  accent,
}: {
  title: string;
  subtitle: string;
  meta: string;
  grade?: string;
  description: string;
  index: number;
  accent: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 pb-10 last:pb-0"
      data-testid={`timeline-item-${index}`}
    >
      {/* Vertical line */}
      <div className={`absolute left-[11px] top-3 bottom-0 w-px ${accent} opacity-30 last:hidden`} />
      {/* Dot */}
      <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-background flex items-center justify-center ${accent.replace("bg-", "bg-").replace("border-", "")}`}>
        <div className={`w-2.5 h-2.5 rounded-full ${accent}`} />
      </div>

      <div className="glass-card rounded-2xl p-5">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h4 className="font-semibold text-foreground leading-tight">{title}</h4>
          {grade && (
            <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
              {grade}
            </span>
          )}
        </div>
        <p className="text-primary text-sm font-medium mb-1">{subtitle}</p>
        <p className="text-xs text-muted-foreground mb-3">{meta}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            My Background
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A timeline of my education, professional experience, and certifications.
          </p>
          <Button
            className="mt-8 rounded-full px-8"
            size="lg"
            asChild
            data-testid="button-download-resume"
          >
            <a href={config.personal.resumeLink} download="Kanav_Sharma_Resume.pdf">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <SectionHeading
              icon={<GraduationCap className="h-5 w-5 text-primary" />}
              title="Education"
              color="bg-primary/15"
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {config.education.map((edu, i) => (
                <TimelineItem
                  key={i}
                  index={i}
                  title={edu.degree}
                  subtitle={edu.institution}
                  meta={edu.years}
                  grade={edu.grade}
                  description={edu.description}
                  accent="bg-primary"
                />
              ))}
            </motion.div>
          </div>

          {/* Experience */}
          <div>
            <SectionHeading
              icon={<Briefcase className="h-5 w-5 text-accent" />}
              title="Experience"
              color="bg-accent/15"
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {config.experience.map((exp, i) => (
                <TimelineItem
                  key={i}
                  index={i}
                  title={exp.role}
                  subtitle={exp.company}
                  meta={exp.years}
                  description={exp.description}
                  accent="bg-accent"
                />
              ))}
            </motion.div>

            {/* Certifications */}
            <div className="mt-14">
              <SectionHeading
                icon={<Award className="h-5 w-5 text-yellow-400" />}
                title="Certifications"
                color="bg-yellow-400/15"
              />
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {config.certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="glass-card rounded-xl p-4 flex items-start gap-3 hover:-translate-y-0.5 transition-transform"
                    data-testid={`cert-card-${i}`}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm leading-tight">{cert.name}</p>
                      <p className="text-primary text-xs mt-0.5">{cert.issuer}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{cert.date}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
