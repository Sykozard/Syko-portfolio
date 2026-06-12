import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, CheckCircle, Clock, Layers } from "lucide-react";

const roles = ["Web Developer", "Mobile App Developer", "Digital Experience Creator"];

const stats = [
  { icon: Layers, label: "Projects Completed", value: "5+" },
  { icon: Zap, label: "Technologies", value: "10+" },
  { icon: CheckCircle, label: "Status", value: "Available" },
  { icon: Clock, label: "Response Time", value: "<24 Hours" },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden pt-16">
      {/* Blurred Blobs */}
      <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/25 blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-pink-600/20 blur-[140px]" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-magenta-600/10 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
          }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mb-8 flex justify-center"
          >
            <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2 text-xs font-semibold tracking-wide text-purple-200 backdrop-blur-md">
              ✦ Available for new projects
            </span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Building{" "}
            <span className="gradient-text">websites</span>
            {", "}apps, and digital{" "}
            <span className="gradient-text">experiences.</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="mb-6 h-9 text-xl font-medium text-white/75 sm:text-2xl"
          >
            I am a{" "}
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="gradient-text font-bold"
            >
              {roles[roleIndex]}
            </motion.span>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mx-auto mb-10 max-w-2xl text-base text-white/55 sm:text-lg leading-relaxed"
          >
            I create modern websites, mobile apps, business solutions, and custom digital experiences with a focus on clean design and smooth user experience.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#work"
              data-testid="button-view-work"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:shadow-purple-500/40"
            >
              View My Work
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              data-testid="button-contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ duration: 0.2 }}
              className="glass-card flex flex-col items-center gap-2 rounded-2xl p-5 text-center"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
                <stat.icon className="h-4 w-4" />
              </div>
              <div className="text-2xl font-extrabold gradient-text leading-none">{stat.value}</div>
              <div className="text-xs font-medium text-white/50 leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
