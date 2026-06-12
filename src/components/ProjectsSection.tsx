import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiReact, SiFirebase, SiExpo, SiTailwindcss, SiTypescript } from "react-icons/si";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fitness Tracking App",
    description: "Track workouts, goals, progress, and personal fitness data.",
    category: "Mobile",
    tags: ["React Native", "Expo", "Firebase"],
    icons: [SiReact, SiExpo, SiFirebase],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Developer Portfolio",
    description: "Modern portfolio website with animations and responsive design.",
    category: "Web",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    icons: [SiReact, SiTypescript, SiTailwindcss],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Relationship Website",
    description: "Digital memory book and anniversary tracker.",
    category: "Web",
    tags: ["React", "Firebase"],
    icons: [SiReact, SiFirebase],
    github: "#",
    live: "#"
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>
          
          <div className="inline-flex rounded-full border border-white/10 p-1">
            {["All", "Web", "Mobile"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  filter === tab
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card group flex flex-col overflow-hidden rounded-2xl transition-all hover:border-purple-500/50 hover:glow-purple"
              >
                <div className="relative flex h-48 w-full items-center justify-center bg-gradient-to-br from-[#111118] to-black">
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/40 via-transparent to-transparent" />
                  <div className="flex gap-4">
                    {project.icons.map((Icon, i) => (
                      <Icon key={i} className="h-10 w-10 text-white/40 transition-colors group-hover:text-purple-400" />
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-white group-hover:gradient-text">{project.title}</h3>
                  <p className="mb-4 flex-1 text-sm text-white/60">{project.description}</p>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a
                      href={project.live}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
