import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { config } from "@/data/config";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: config.personal.email,
    href: `mailto:${config.personal.email}`,
    color: "text-primary bg-primary/10",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: config.personal.phone,
    href: `tel:${config.personal.phone}`,
    color: "text-accent bg-accent/10",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: config.personal.location,
    href: null,
    color: "text-green-500 bg-green-500/10",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/kanav2401",
    href: config.personal.github,
    color: "text-foreground bg-secondary",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/knvshrma",
    href: config.personal.linkedin,
    color: "text-[#0A66C2] bg-[#0A66C2]/10",
  },
];

export function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Email not configured",
        description: "EmailJS credentials are not set up yet. Please contact me directly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please email me directly at " + config.personal.email,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind, a job opportunity, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

          {/* Left — contact info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
                data-testid={`contact-info-${item.label.toLowerCase()}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              variants={itemVariants}
              className="glass-card rounded-2xl p-5 border border-green-500/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Open to Opportunities</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently seeking full-time Software Engineering roles. Response time: within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-3xl space-y-5"
              data-testid="form-contact"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="from_name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="from_name"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    className="bg-background/50 border-border/50 focus:border-primary h-11 transition-colors"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="reply_to" className="text-sm font-medium text-foreground">
                    Your Email
                  </label>
                  <Input
                    id="reply_to"
                    name="reply_to"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary h-11 transition-colors"
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Inquiry / Job Opportunity"
                  className="bg-background/50 border-border/50 focus:border-primary h-11 transition-colors"
                  data-testid="input-subject"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  className="min-h-[160px] bg-background/50 border-border/50 focus:border-primary resize-none transition-colors"
                  data-testid="input-message"
                />
              </div>

              {/* Hidden field: sends to Kanav's email */}
              <input type="hidden" name="to_name" value={config.personal.name} />

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold rounded-xl"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>

              <div className="flex items-start gap-2 text-xs text-muted-foreground pt-1">
                <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                <span>Messages are sent directly to {config.personal.email} — I aim to reply within 24 hours.</span>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
