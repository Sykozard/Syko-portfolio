import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="glass-card glow-purple mx-auto max-w-4xl rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-pink-600/5 pointer-events-none" />
        <div className="relative">
          <div className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-300 uppercase">
            About Me
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">Hey, I'm Kaustav.</h2>
          <p className="mb-8 text-lg leading-relaxed text-white/65 max-w-2xl mx-auto">
            I'm a developer passionate about creating websites, mobile apps, and digital experiences. I enjoy building everything from business websites and portfolios to unique projects that bring ideas to life.
          </p>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />
          <p className="text-xl font-semibold text-white/90">
            <span className="gradient-text font-bold">My goal is simple:</span>{" "}Create clean, modern, and memorable digital experiences that people genuinely enjoy using.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
