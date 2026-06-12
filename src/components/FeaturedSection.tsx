import { motion } from "framer-motion";
import { Heart, Check } from "lucide-react";

const features = [
  "Anniversary Counters",
  "Photo Galleries",
  "Memory Timelines",
  "Love Letters",
  "Countdown Timers",
  "Private Pages",
  "Custom Animations",
  "Digital Gifts",
];

export default function FeaturedSection() {
  return (
    <section className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl"
      >
        <div className="relative overflow-hidden rounded-3xl border border-rose-500/30 bg-gradient-to-br from-[#111118] via-[#0F0F13] to-[#09090B] p-10 md:p-14">
          {/* Background glow blobs */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-rose-600/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-pink-600/20 blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-purple-600/10 blur-[60px] pointer-events-none" />

          <div className="relative grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Text */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-rose-300 uppercase">
                <Heart className="h-3 w-3" />
                Featured Service
              </div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/40">
                Most Requested
              </h2>
              <h3 className="mb-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Relationship Websites
                </span>
              </h3>
              <p className="mb-8 text-base leading-relaxed text-white/60">
                Custom websites for couples designed to preserve memories and create meaningful digital experiences — beautifully crafted and deeply personal.
              </p>
              <a
                href="#contact"
                data-testid="button-featured-cta"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-all hover:scale-105 hover:shadow-rose-500/40"
              >
                Request This Service
              </a>
            </div>

            {/* Right: Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3"
                >
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
