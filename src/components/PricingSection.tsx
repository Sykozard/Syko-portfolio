import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    price: "₹500 – ₹1,000",
    description: "Perfect for personal pages and simple landing sites",
    features: ["Single page design", "Mobile responsive", "Basic animations", "Fast delivery"],
    popular: false,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    name: "Standard Website",
    price: "₹1,000 – ₹2,500",
    description: "Business sites, portfolios, and full landing pages",
    features: ["Multi-page design", "Mobile responsive", "Custom animations", "Contact form", "SEO ready"],
    popular: true,
    gradient: "from-purple-600 via-pink-600 to-rose-600",
  },
  {
    name: "Custom Project",
    price: "Custom Quote",
    description: "Complex apps, relationship sites, and unique custom builds",
    features: ["Fully custom scope", "Unique features", "Ongoing support", "Priority delivery"],
    popular: false,
    gradient: "from-rose-500 to-pink-500",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
        }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-300 uppercase">
            Pricing
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Simple, Honest Pricing</h2>
          <p className="mt-4 text-white/50 text-base max-w-lg mx-auto">
            Transparent rates with no hidden fees. Every project gets the same level of care and detail.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className={`glass-card relative flex flex-col overflow-hidden rounded-2xl transition-all ${
                plan.popular
                  ? "border-purple-500/50 shadow-lg shadow-purple-500/15"
                  : "hover:border-white/20"
              }`}
              data-testid={`card-pricing-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${plan.gradient}`} />

              {plan.popular && (
                <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-[10px] font-bold tracking-wide text-white uppercase shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-1 text-lg font-bold text-white/90">{plan.name}</h3>
                <p className="mb-5 text-sm text-white/50 leading-relaxed">{plan.description}</p>

                <div className={`mb-7 text-3xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                  {plan.price}
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-white/65">
                      <span className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.gradient}`}>
                        <Check className="h-2.5 w-2.5 text-white" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  data-testid={`button-pricing-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:opacity-90 hover:scale-[1.02]`
                      : "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.4 } },
          }}
          className="mt-8 text-center text-sm text-white/35"
        >
          All prices are approximate. Final pricing depends on project complexity and requirements.
        </motion.p>
      </motion.div>
    </section>
  );
}
