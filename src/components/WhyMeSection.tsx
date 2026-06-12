import { motion } from "framer-motion";
import { DollarSign, MessageCircle, Smartphone, Sparkles, Settings, Eye } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Quality work at fair prices — designed to fit student, startup, and small business budgets.",
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "hover:border-purple-500/40",
  },
  {
    icon: MessageCircle,
    title: "Fast Communication",
    description: "Clear, responsive communication with updates at every stage of your project.",
    accent: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "hover:border-pink-500/40",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Every project is built to look and perform perfectly on phones, tablets, and desktops.",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "hover:border-violet-500/40",
  },
  {
    icon: Sparkles,
    title: "Modern UI/UX",
    description: "Designs that look premium and current — not outdated templates or generic themes.",
    accent: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    border: "hover:border-fuchsia-500/40",
  },
  {
    icon: Settings,
    title: "Custom Features",
    description: "No off-the-shelf solutions — every feature is built specifically for your needs.",
    accent: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "hover:border-rose-500/40",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Every pixel, animation, and interaction is refined until it feels exactly right.",
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "hover:border-indigo-500/40",
  },
];

export default function WhyMeSection() {
  return (
    <section className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-300 uppercase">
            Why Choose Me
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Why Clients Choose Me</h2>
          <p className="mt-4 text-white/50 text-base max-w-lg mx-auto">
            What sets my work apart from the rest.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
              className={`glass-card group rounded-2xl p-7 transition-all ${reason.border}`}
              data-testid={`card-reason-${reason.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${reason.bg} ${reason.accent} transition-all group-hover:scale-110`}>
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-bold text-white/95">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
