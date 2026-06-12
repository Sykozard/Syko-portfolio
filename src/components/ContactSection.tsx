import { motion } from "framer-motion";
import { SiDiscord, SiInstagram } from "react-icons/si";
import { Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  details: z.string().min(10, "Please provide more details"),
});

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="container mx-auto px-6">
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
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-300 uppercase">
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Let's Build Something Amazing</h2>
          <p className="mt-5 text-lg text-white/55 max-w-xl mx-auto">
            Need a website?{" "}
            <span className="text-white/80 font-medium">Send me a message and tell me what you'd like to build.</span>
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Column: Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 uppercase tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for freelance projects
              </div>
              <h3 className="mt-4 mb-3 text-2xl font-bold text-white/95">Connect with me</h3>
              <p className="text-white/55 leading-relaxed">
                Have a project in mind? Reach out on social media or use the form. I'm always happy to discuss new ideas and opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://discord.com/users/Fnb4"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-discord"
                className="glass-card group flex items-center gap-4 rounded-xl p-5 transition-all hover:border-[#5865F2]/50 hover:bg-white/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5865F2]/15 text-[#5865F2] transition-all group-hover:scale-110">
                  <SiDiscord size={22} />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/45 mb-0.5">Discord</div>
                  <div className="font-bold text-white/90">Fnb4</div>
                </div>
              </a>

              <a
                href="https://instagram.com/r1wings"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-instagram"
                className="glass-card group flex items-center gap-4 rounded-xl p-5 transition-all hover:border-pink-500/50 hover:bg-white/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/15 text-pink-400 transition-all group-hover:scale-110">
                  <SiInstagram size={22} />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/45 mb-0.5">Instagram</div>
                  <div className="font-bold text-white/90">@r1wings</div>
                </div>
              </a>

              <div className="glass-card flex items-center gap-4 rounded-xl p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/45 mb-0.5">Typical Response Time</div>
                  <div className="font-bold text-white/90">Within a Few Hours</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="mb-6 text-lg font-bold text-white/90">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70 text-sm">Your Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className="border-white/10 bg-white/5 text-white placeholder:text-white/25 focus-visible:ring-purple-500 focus-visible:border-purple-500/50"
                          data-testid="input-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70 text-sm">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          className="border-white/10 bg-white/5 text-white placeholder:text-white/25 focus-visible:ring-purple-500 focus-visible:border-purple-500/50"
                          data-testid="input-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70 text-sm">Project Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project — what you need, your timeline, and any specific requirements..."
                          className="min-h-[130px] border-white/10 bg-white/5 text-white placeholder:text-white/25 focus-visible:ring-purple-500 focus-visible:border-purple-500/50 resize-none"
                          data-testid="input-details"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  data-testid="button-submit"
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white font-semibold shadow-lg shadow-purple-500/25 hover:opacity-90 hover:scale-[1.02] transition-all py-5"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
