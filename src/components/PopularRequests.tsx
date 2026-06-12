import { motion } from "framer-motion";

const requests = [
  "❤️ Relationship Websites",
  "🏢 Business Websites",
  "🎨 Portfolio Websites",
  "📱 Mobile Apps",
  "🎁 Digital Gifts",
  "🚀 Landing Pages"
];

export default function PopularRequests() {
  return (
    <section className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto max-w-5xl text-center"
      >
        <motion.h3 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-8 text-2xl font-bold tracking-tight"
        >
          Popular Requests
        </motion.h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {requests.map((request) => (
            <motion.div
              key={request}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
              }}
              className="glass-card rounded-full border border-purple-500/20 px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-purple-500/50 hover:bg-white/5 hover:text-white"
            >
              {request}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
