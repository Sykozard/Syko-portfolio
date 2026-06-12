import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiExpo, SiFirebase, SiSupabase, SiNodedotjs, SiGit, SiGithub, SiFigma } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: Code2 },
      { name: "Tailwind", icon: SiTailwindcss },
    ]
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "Node.js", icon: SiNodedotjs },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Skills & Technologies</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="glass-card group rounded-2xl p-6 transition-all hover:border-purple-500/50 hover:glow-purple"
            >
              <h3 className="mb-6 text-xl font-semibold text-white/90 group-hover:gradient-text">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111118] px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10">
                    <skill.icon className="h-4 w-4" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
