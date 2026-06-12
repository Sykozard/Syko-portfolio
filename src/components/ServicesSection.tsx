import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe, Code, Heart, LayoutTemplate } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description: "Modern websites for businesses, startups, freelancers, creators, and local brands.",
    icon: Globe,
    gradient: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/15",
    hoverBorder: "hover:border-purple-500/50",
  },
  {
    title: "Portfolio Websites",
    description: "Professional portfolios for developers, creators, students, and professionals.",
    icon: Monitor,
    gradient: "from-pink-500/20 to-pink-600/5",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/15",
    hoverBorder: "hover:border-pink-500/50",
  },
  {
    title: "Landing Pages",
    description: "Fast, responsive, conversion-focused landing pages built to drive results.",
    icon: LayoutTemplate,
    gradient: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15",
    hoverBorder: "hover:border-violet-500/50",
  },
  {
    title: "Custom Web Applications",
    description: "Interactive web apps built around specific client requirements and business needs.",
    icon: Code,
    gradient: "from-fuchsia-500/20 to-fuchsia-600/5",
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/15",
    hoverBorder: "hover:border-fuchsia-500/50",
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform mobile applications built with modern technologies for iOS and Android.",
    icon: Smartphone,
    gradient: "from-rose-500/20 to-rose-600/5",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/15",
    hoverBorder: "hover:border-rose-500/50",
  },
  {
    title: "Relationship Websites",
    description: "Custom websites for couples featuring anniversary counters, memory timelines, photo galleries, private pages, love letters, countdown timers, and digital gifts.",
    icon: Heart,
    gradient: "from-rose-600/20 to-pink-600/5",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/15",
    hoverBorder: "hover:border-rose-500/50",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-300 uppercase">
            Services
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">What I Build</h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            End-to-end digital solutions tailored to your specific needs and goals.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
              className={`glass-card group relative overflow-hidden rounded-2xl p-7 transition-all ${service.hoverBorder}`}
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none`} />
              <div className="relative">
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg} ${service.iconColor} transition-all group-hover:scale-110`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white/95">{service.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
