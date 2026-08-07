"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal } from "@/data/portfolio";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Please add a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: (p: typeof personal) => p.email },
  { icon: Phone, label: "Phone", value: (p: typeof personal) => p.phone },
  { icon: MapPin, label: "Location", value: (p: typeof personal) => p.location },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-charcoal py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Contact" title="Let's Work Together" />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="mb-8 leading-relaxed text-gray">
              Have a backend project, a role you think I&apos;d be a great fit
              for, or just want to say hi? My inbox is open.
            </p>
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-off-white">
                      {value(personal)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="gradient-border glass grid gap-5 rounded-2xl p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <input
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gold/20 bg-black/40 px-4 py-3 text-sm text-off-white placeholder:text-gray/60 focus:border-gold focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gold/20 bg-black/40 px-4 py-3 text-sm text-off-white placeholder:text-gray/60 focus:border-gold focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <input
                {...register("subject")}
                placeholder="Subject"
                className="w-full rounded-lg border border-gold/20 bg-black/40 px-4 py-3 text-sm text-off-white placeholder:text-gray/60 focus:border-gold focus:outline-none"
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-gold/20 bg-black/40 px-4 py-3 text-sm text-off-white placeholder:text-gray/60 focus:border-gold focus:outline-none"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Opening your email client...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
