import { motion } from "framer-motion";
import { CheckCircle, Zap, DollarSign, Smartphone, MessageCircle, Clock } from "lucide-react";

const availabilityCards = [
  {
    icon: CheckCircle,
    title: "Available for Work",
    description: "Currently accepting new freelance projects and client inquiries.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/40",
  },
  {
    icon: Zap,
    title: "Fast Communication",
    description: "Quick responses and clear updates throughout your project.",
    accent: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "hover:border-yellow-500/40",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium quality work at prices that make sense for your budget.",
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "hover:border-purple-500/40",
  },
  {
    icon: MessageCircle,
    title: "Custom Projects Accepted",
    description: "Unique ideas welcome — I build tailored solutions, not templates.",
    accent: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "hover:border-pink-500/40",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly Designs",
    description: "Every website is fully responsive and optimized for all screen sizes.",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-500/40",
  },
  {
    icon: Clock,
    title: "Response Time Under 24 Hours",
    description: "I respond to all messages and project inquiries within a day.",
    accent: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "hover:border-rose-500/40",
  },
];

export default function TestimonialsSection() {
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs font-semibold tracking-wide text-emerald-300 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Currently Available
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Available for Freelance Work</h2>
          <p className="mt-4 text-white/50 text-base max-w-lg mx-auto">
            Ready to bring your project to life. Here's what you can expect when working with me.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {availabilityCards.map((card) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
              className={`glass-card group rounded-2xl p-7 transition-all ${card.border}`}
              data-testid={`card-availability-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.bg} ${card.accent} transition-all group-hover:scale-110`}>
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-bold text-white/95">{card.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
