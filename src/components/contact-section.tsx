"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { GlowingEffectWrapper } from "@/components/ui/glowing-effect-wrapper"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-8 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left side: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold tracking-tighter"
              >
                GET IN <br /><span className="text-blue-500 italic">TOUCH</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg max-w-md leading-relaxed"
              >
                Have a project in mind or just want to say hello? Drop me a message and let&apos;s create something incredible together.
              </motion.p>
            </div>

            <div className="space-y-8">
              {[
                { 
                  icon: Mail, 
                  label: "Email", 
                  value: "deepakkumardubey4242@gmail.com", 
                  href: "mailto:deepakkumardubey4242@gmail.com",
                  color: "text-blue-500" 
                },
                { 
                  icon: Phone, 
                  label: "Phone", 
                  value: "+91 9265832811", 
                  href: "tel:+919265832811",
                  color: "text-emerald-500" 
                },
                { 
                  icon: MapPin, 
                  label: "Location", 
                  value: "India", 
                  color: "text-rose-500" 
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium text-lg hover:text-blue-400 transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-lg">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-8 rounded-[2.5rem] bg-blue-600/10 border border-blue-500/20 max-w-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <MessageSquare size={20} />
              </div>
              <p className="text-sm text-blue-200/70 leading-relaxed italic">
                &quot;I typically respond within 24 hours. Looking forward to our conversation!&quot;
              </p>
            </motion.div>
          </div>

          {/* Right side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[3rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-14 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Full Name</label>
                  <GlowingEffectWrapper className="rounded-2xl">
                    <Input
                      placeholder="John Doe"
                      className="bg-neutral-950 border border-white/5 rounded-2xl h-14 px-6 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder-gray-500"
                    />
                  </GlowingEffectWrapper>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Email Address</label>
                  <GlowingEffectWrapper className="rounded-2xl">
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-neutral-950 border border-white/5 rounded-2xl h-14 px-6 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder-gray-500"
                    />
                  </GlowingEffectWrapper>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Subject</label>
                <GlowingEffectWrapper className="rounded-2xl">
                  <Input
                    placeholder="How can I help you?"
                    className="bg-neutral-950 border border-white/5 rounded-2xl h-14 px-6 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder-gray-500"
                  />
                </GlowingEffectWrapper>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Message</label>
                <GlowingEffectWrapper className="rounded-[2rem]">
                  <Textarea
                    placeholder="Tell me about your project..."
                    className="bg-neutral-950 border border-white/5 rounded-[2rem] min-h-[160px] p-6 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none text-white placeholder-gray-500"
                  />
                </GlowingEffectWrapper>
              </div>
              <GlowingEffectWrapper className="rounded-2xl" containerClassName="mt-4">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl h-16 font-bold tracking-[0.2em] uppercase group border-none shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                  SEND MESSAGE <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </GlowingEffectWrapper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
