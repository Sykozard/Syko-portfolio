import { motion } from "framer-motion";
import { Globe, Monitor, Heart, LayoutTemplate, Code, Smartphone, Lock } from "lucide-react";

const workItems = [
  {
    title: "Business Websites",
    description: "Modern websites for businesses, startups, freelancers, creators, and local brands.",
    icon: Globe,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    accent: "purple",
  },
  {
    title: "Portfolio Websites",
    description: "Professional portfolios for developers, creators, students, and professionals.",
    icon: Monitor,
    tags: ["React", "Framer Motion", "Next.js"],
    accent: "pink",
  },
  {
    title: "Relationship Websites",
    description: "Custom websites for couples featuring anniversary counters, memory timelines, photo galleries, private pages, love letters, countdown timers, and digital gifts.",
    icon: Heart,
    tags: ["React", "Firebase", "Custom"],
    accent: "rose",
  },
  {
    title: "Landing Pages",
    description: "Fast, responsive, conversion-focused landing pages.",
    icon: LayoutTemplate,
    tags: ["React", "Tailwind CSS", "SEO"],
    accent: "violet",
  },
  {
    title: "Custom Web Applications",
    description: "Interactive web apps built around specific client requirements and business needs.",
    icon: Code,
    tags: ["React", "Node.js", "Firebase"],
    accent: "fuchsia",
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform mobile applications built with modern technologies for iOS and Android.",
    icon: Smartphone,
    tags: ["React Native", "Expo", "Firebase"],
    accent: "indigo",
  },
];

const accentMap: Record<string, { border: string; iconBg: string; iconColor: string; tag: string; glow: string }> = {
  purple: { border: "hover:border-purple-500/50", iconBg: "bg-purple-500/15", iconColor: "text-purple-400", tag: "bg-purple-500/15 text-purple-300", glow: "hover:shadow-purple-500/10" },
  pink:   { border: "hover:border-pink-500/50",   iconBg: "bg-pink-500/15",   iconColor: "text-pink-400",   tag: "bg-pink-500/15 text-pink-300",   glow: "hover:shadow-pink-500/10"   },
  rose:   { border: "hover:border-rose-500/50",   iconBg: "bg-rose-500/15",   iconColor: "text-rose-400",   tag: "bg-rose-500/15 text-rose-300",   glow: "hover:shadow-rose-500/10"   },
  violet: { border: "hover:border-violet-500/50", iconBg: "bg-violet-500/15", iconColor: "text-violet-400", tag: "bg-violet-500/15 text-violet-300", glow: "hover:shadow-violet-500/10" },
  fuchsia:{ border: "hover:border-fuchsia-500/50",iconBg: "bg-fuchsia-500/15",iconColor: "text-fuchsia-400",tag: "bg-fuchsia-500/15 text-fuchsia-300",glow:"hover:shadow-fuchsia-500/10"},
  indigo: { border: "hover:border-indigo-500/50", iconBg: "bg-indigo-500/15", iconColor: "text-indigo-400", tag: "bg-indigo-500/15 text-indigo-300", glow: "hover:shadow-indigo-500/10" },
};

export default function RecentWorkSection() {
  return (
    <section id="work" className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-300 uppercase">
            Portfolio
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Recent Work</h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            A selection of the types of projects I build for clients.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item) => {
            const colors = accentMap[item.accent];
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className={`glass-card group relative overflow-hidden rounded-2xl p-7 transition-all hover:shadow-lg ${colors.border} ${colors.glow}`}
                data-testid={`card-work-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconColor} transition-all group-hover:scale-110`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-white/95">{item.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-white/55">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className={`rounded-full px-3 py-1 text-xs font-medium ${colors.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Privacy Notice */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
          }}
          className="mt-10 glass-card rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Lock className="h-4 w-4 text-white/40 flex-shrink-0" />
          <p className="text-sm text-white/50 leading-relaxed">
            Due to client privacy and ownership agreements, some completed work cannot be publicly displayed.{" "}
            <a href="#contact" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              Contact me directly
            </a>{" "}
            if you'd like to discuss a project.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
