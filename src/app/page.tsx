"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/ui/sparkles"
import { Compare } from "@/components/ui/compare"
import { Button } from "@/components/ui/button"
import { ContactSection } from "@/components/contact-section"
import {
  ArrowRight, Cpu, Layers, BrainCircuit, Globe, Database, Server,
  Smartphone, Layout, Zap, Calendar, Code, FileText, User,
  Clock, Github, Menu, X, ExternalLink, Mail, Phone, MapPin, Send, MessageSquare, Binary
} from "lucide-react"
import { BackgroundDebris } from "@/components/ui/background-debris"
import { PageTear } from "@/components/ui/page-tear"
import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton,
  HeroVideo
} from "@/components/ui/animated-video-on-scroll"

const PROJECTS = [
  {
    title: "Credit Card Fraud Detection",
    tags: ["Python", "Scikit-Learn", "Machine Learning"],
    description: "An end-to-end ML pipeline that detects fraudulent credit card transactions with high precision using Logistic Regression, Random Forest, and XGBoost on an imbalanced real-world dataset.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
    github: "https://github.com/Wizard-001/credit-card-fraud-detection-system"
  },
  {
    title: "Car Showcase 3D",
    tags: ["React", "Three.js", "React Three Fiber"],
    description: "An immersive 3D luxury car showroom with scroll-driven animations, interactive model configurators, and a real-time AI-powered recommendation engine — all rendered in the browser.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2670&auto=format&fit=crop",
    github: "https://github.com/Wizard-001/car-showcase-3d"
  },
  {
    title: "Smart AI Surveillance",
    tags: ["Python", "OpenCV", "YOLOv8"],
    description: "A real-time retail surveillance system using YOLOv8 for multi-zone people counting, heatmap generation, and a live analytics dashboard for peak-hour insights and entry/exit tracking.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2670&auto=format&fit=crop",
    github: "https://github.com/Wizard-001"
  },
  {
    title: "Emotion Based Chatbot",
    tags: ["LangChain", "Mistral AI", "Python"],
    description: "A sophisticated conversational AI built with LangChain and Mistral AI API that analyzes user sentiment and emotion to deliver contextually aware and empathetic responses.",
    image: "/projects/emotion-chatbot.png",
    github: "https://github.com/Wizard-001/chatbot"
  }
]

export default function Home() {
  const skillsRef = useRef(null);

  const { scrollYProgress: skillsProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"]
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white overflow-hidden">
      <BackgroundDebris />

      {/* Hero Section */}
      <section className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={1}
          />
        </div>
        
        <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center mt-20">
          <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full animate-pulse">
            FULL STACK ARCHITECT
          </div>
          
          <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold tracking-tighter text-white relative leading-[0.8] mb-8">
            ENGINEERING <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-blue-500/50">
              THE MODERN WEB
            </span>
          </h1>

          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />

            {/* Sparkles component for the "mist" effect */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto -mt-12 mb-12 relative z-30 leading-relaxed font-light tracking-wide">
            Full Stack Developer specializing in the <span className="text-white font-medium border-b border-blue-500/30">MERN Stack</span> and <span className="text-white font-medium border-b border-purple-500/30">AI Integration</span>. Transforming complex technical challenges into seamless digital solutions.
          </p>

          <div className="flex flex-col md:flex-row gap-6 relative z-30">
            <Button size="lg" asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-10 h-14 text-[10px] font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <Link href="#projects">EXPLORE PROJECTS</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/10 hover:bg-white/5 rounded-full px-10 h-14 text-[10px] font-bold tracking-[0.2em] uppercase">
              <Link href="#contact">GET IN TOUCH</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      <PageTear />

      {/* Skills Section - Redesigned with Compare Component & ML Focus */}
        <motion.section 
          ref={skillsRef}
          id="skills" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-32 bg-black relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-8 mb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full"
              >
                ALGORITHMIC EXCELLENCE
              </motion.div>
              <motion.h2 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]"
              >
                PYTHON <span className="text-blue-500 italic">&</span> <br />
                MACHINE LEARNING
              </motion.h2>
              <motion.p 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed max-w-xl"
              >
                Engineering intelligent systems that learn, adapt, and predict. Expertise in building robust predictive models, from Linear Regression to Support Vector Machines (SVM).
              </motion.p>
              
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10"
              >
                <div>
                  <h4 className="text-white font-bold text-2xl mb-2">99.9%</h4>
                  <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">Performance Score</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-2xl mb-2">Zero</h4>
                  <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">Compromise on ML</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative group flex flex-col gap-8"
            >
              <div className="relative">
                {/* Floating Tech Badges */}
                {[
                  { name: "Scikit-Learn", x: "-10%", y: "-5%", delay: 0 },
                  { name: "TensorFlow", x: "85%", y: "15%", delay: 0.2 },
                  { name: "NumPy", x: "-5%", y: "80%", delay: 0.4 },
                  { name: "Pandas", x: "90%", y: "75%", delay: 0.6 },
                ].map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{
                      scale: { delay: tech.delay + 0.5 },
                      opacity: { delay: tech.delay + 0.5 },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: tech.delay }
                    }}
                    className="absolute z-50 px-4 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[8px] font-bold tracking-[0.2em] text-white/50 uppercase whitespace-nowrap hidden md:block"
                    style={{ left: tech.x, top: tech.y }}
                  >
                    {tech.name}
                  </motion.div>
                ))}

                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-4 rounded-[2.5rem] bg-neutral-900/50 backdrop-blur-3xl border border-white/10 overflow-hidden">
                <Compare
                  firstContent={
                    <div className="w-full h-full bg-[#0a0a0a] p-10 flex flex-col justify-center gap-6 border border-white/5 rounded-2xl relative overflow-hidden group/text">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 transform scale-x-0 group-hover/text:scale-x-100 transition-transform duration-1000" />
                      <div className="space-y-4">
                        <div className="h-px w-12 bg-blue-500/50" />
                        <h3 className="text-3xl md:text-4xl font-black tracking-normal bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-2">
                          ML ALGORITHM
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
                          Implementing core predictive logic through advanced mathematical modeling and algorithmic optimization.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "K-Means"].map((algo, i) => (
                          <motion.div 
                            key={algo} 
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase group/item"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)] group-hover/item:scale-150 transition-transform" />
                            <span className="group-hover/item:text-blue-400 transition-colors">{algo}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  }
                  secondContent={
                    <div className="w-full h-full bg-[#050505] p-10 flex flex-col justify-center gap-6 border border-white/5 rounded-2xl relative overflow-hidden group/text">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 transform scale-x-0 group-hover/text:scale-x-100 transition-transform duration-1000" />
                      <div className="space-y-4">
                        <div className="h-px w-12 bg-emerald-500/50" />
                        <h3 className="text-3xl md:text-4xl font-black tracking-normal bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-2">
                          TECH STACK
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
                          Leveraging industry-standard Python libraries for scalable data engineering and intelligent systems.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"].map((tech, i) => (
                          <motion.div 
                            key={tech} 
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-emerald-400/70 uppercase group/item"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover/item:scale-150 transition-transform" />
                            <span className="group-hover/item:text-emerald-400 transition-colors">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  }
                  className="w-full aspect-square md:h-[500px] md:w-full rounded-2xl"
                  slideMode="hover"
                  autoplay={true}
                />
                
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center z-40 pointer-events-none">
                  <div className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400">
                    LINEAR REGRESSION
                  </div>
                  <div className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400">
                    SVM
                  </div>
                </div>
                </div>
              </div>

              {/* Technical Model Insights Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-neutral-900/40 border border-white/5 rounded-[2rem] p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Binary size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold tracking-tight text-xl uppercase">Model Architecture</h3>
                    <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">Performance Breakdown</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold tracking-tighter mb-1">
                      <span className="text-gray-400 uppercase">Linearity Ratio</span>
                      <span className="text-blue-400">0.982</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "98.2%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold tracking-tighter mb-1">
                      <span className="text-gray-400 uppercase">SV Kernel Density</span>
                      <span className="text-blue-400">RBF / Poly</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-blue-500/40"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Parallax Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
      </motion.section>

      {/* ── FULL STACK ENGINEERING SECTION ── */}
      <motion.section
        id="fullstack"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-32 bg-black relative overflow-hidden"
      >
        {/* Background glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="mb-24 space-y-4">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.4em] text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 rounded-full"
            >
              FULL STACK ENGINEERING
            </motion.div>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]"
            >
              MERN <span className="text-emerald-400 italic">&</span> <br />
              NEXT.JS STACK
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl leading-relaxed"
            >
              Building scalable, production-ready applications from database to deployment. Specializing in React-driven frontends, robust Express APIs, and Next.js server-side architecture.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT — 3D Perspective Cards */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* MERN Architecture Flow */}
              <div className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase mb-8">Architecture Flow</div>
              {[
                {
                  layer: "Frontend",
                  tech: "React.js / Next.js",
                  desc: "Server & client components, SSR, dynamic routing, Tailwind UI",
                  color: "blue",
                  icon: <Layout size={18} />,
                  bar: 95
                },
                {
                  layer: "API Layer",
                  tech: "Node.js / Express.js",
                  desc: "RESTful APIs, JWT auth, middleware chains, rate limiting",
                  color: "emerald",
                  icon: <Server size={18} />,
                  bar: 88
                },
                {
                  layer: "Database",
                  tech: "MongoDB / Mongoose",
                  desc: "Schema design, aggregation pipelines, indexing strategies",
                  color: "amber",
                  icon: <Database size={18} />,
                  bar: 85
                },
                {
                  layer: "Deployment",
                  tech: "Vercel / Render",
                  desc: "CI/CD pipelines, environment configs, production optimization",
                  color: "purple",
                  icon: <Globe size={18} />,
                  bar: 80
                },
              ].map((item, i) => (
                <motion.div
                  key={item.layer}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  style={{ perspective: "800px" }}
                  className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-6 cursor-default hover:border-white/10 transition-colors duration-300"
                >
                  {/* Connector line on left */}
                  {i < 3 && (
                    <div className={`absolute -bottom-6 left-8 w-px h-6 ${item.color === "blue" ? "bg-blue-500/30" : item.color === "emerald" ? "bg-emerald-500/30" : item.color === "amber" ? "bg-amber-500/30" : "bg-purple-500/30"}`} />
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border ${
                      item.color === "blue" ? "bg-blue-500/10 border-blue-500/20 text-blue-400" :
                      item.color === "emerald" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" :
                      item.color === "amber" ? "bg-amber-500/10 border-amber-500/20 text-amber-400" :
                      "bg-purple-500/10 border-purple-500/20 text-purple-400"
                    }`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-bold tracking-[0.3em] text-gray-600 uppercase">{item.layer}</span>
                        <span className={`text-[9px] font-bold ${
                          item.color === "blue" ? "text-blue-400" : item.color === "emerald" ? "text-emerald-400" : item.color === "amber" ? "text-amber-400" : "text-purple-400"
                        }`}>{item.bar}%</span>
                      </div>
                      <h4 className="text-white font-bold tracking-tight mb-1">{item.tech}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      {/* Animated skill bar */}
                      <div className="mt-3 h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.bar}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.4 + i * 0.1 }}
                          className={`h-full rounded-full ${
                            item.color === "blue" ? "bg-blue-500" : item.color === "emerald" ? "bg-emerald-500" : item.color === "amber" ? "bg-amber-500" : "bg-purple-500"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT — 3D Floating Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* What I Can Build Card — 3D hover */}
              <motion.div
                whileHover={{ rotateX: -4, rotateY: 6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
                className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-3xl p-8 overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="mb-6">
                  <span className="text-[9px] font-bold tracking-[0.4em] text-blue-400 uppercase">Capabilities</span>
                  <h3 className="text-white font-bold tracking-tight text-xl mt-1">What I Can Build</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Full-Stack MERN Apps", desc: "End-to-end from React UI to MongoDB", color: "bg-blue-500" },
                    { label: "REST API Backends", desc: "Express routes, JWT auth, middleware", color: "bg-emerald-500" },
                    { label: "Next.js Web Apps", desc: "SSR pages, dynamic routing, API routes", color: "bg-purple-500" },
                    { label: "Real-Time Features", desc: "Live updates with Socket.io", color: "bg-amber-500" },
                    { label: "3D Web Experiences", desc: "Three.js, React Three Fiber, GLSL", color: "bg-pink-500" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.color}`} />
                      <div>
                        <div className="text-white text-[11px] font-bold tracking-wide">{item.label}</div>
                        <div className="text-gray-500 text-[10px]">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* MERN Stack Card */}
              <motion.div
                whileHover={{ rotateX: 4, rotateY: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
                className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-3xl p-8 overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="mb-6">
                  <span className="text-[9px] font-bold tracking-[0.4em] text-emerald-400 uppercase">Core Stack</span>
                  <h3 className="text-white font-bold tracking-tight text-xl mt-1">MERN Full Stack</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "MongoDB", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                    { name: "Express.js", color: "text-gray-300 bg-white/5 border-white/10" },
                    { name: "React.js", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
                    { name: "Node.js", color: "text-green-400 bg-green-500/10 border-green-500/20" },
                    { name: "REST APIs", color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
                    { name: "JWT Auth", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
                    { name: "Mongoose ODM", color: "text-red-400 bg-red-500/10 border-red-500/20" },
                    { name: "Socket.io", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
                  ].map((tech) => (
                    <span key={tech.name} className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase border ${tech.color}`}>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Dev Principles */}
              <div className="space-y-3">
                <div className="text-[9px] font-bold tracking-[0.3em] text-gray-600 uppercase mb-4">How I Work</div>
                {[
                  { icon: <Code size={14} />, title: "Component-Driven", desc: "Building reusable, composable UI components from the ground up", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
                  { icon: <Zap size={14} />, title: "API-First Design", desc: "Schema and contract defined before implementation begins", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                  { icon: <Github size={14} />, title: "Clean Git Workflow", desc: "Descriptive commits, feature branches, structured pull requests", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
                ].map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ x: -4 }}
                    className="flex items-start gap-4 bg-neutral-900/40 border border-white/5 rounded-2xl p-4 cursor-default hover:border-white/10 transition-colors"
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center ${p.color}`}>
                      {p.icon}
                    </div>
                    <div>
                      <div className="text-white text-[11px] font-bold tracking-wide mb-0.5">{p.title}</div>
                      <div className="text-gray-500 text-[10px] leading-relaxed">{p.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>


        </div>
      </motion.section>
      {/* ── GEN AI SECTION ── */}
      <section id="genai" className="py-32 px-8 bg-black relative overflow-hidden">
        {/* Advanced Neural Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full">
            <defs>
              <radialGradient id="node-glow-main" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Animated Paths & Pulses */}
            {[...Array(12)].map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = x1 + (Math.random() * 40 - 20);
              const y2 = y1 + (Math.random() * 40 - 20);
              return (
                <g key={i}>
                  <line x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.2" />
                  <motion.circle
                    r="1.5"
                    fill="#a855f7"
                    initial={{ offset: 0 }}
                    animate={{ 
                      cx: [`${x1}%`, `${x2}%`],
                      cy: [`${y1}%`, `${y2}%`],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "linear" }}
                  />
                </g>
              )
            })}
          </svg>
        </div>

        {/* Global Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* Enhanced Header */}
          <div className="mb-24 space-y-6 text-center lg:text-left relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-md"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
              NEURAL ARCHITECTURE
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white">
              GEN<span className="text-purple-500">AI</span> <br />
              <span className="relative">
                SYSTEMS
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h2>
            
            <p className="text-gray-400 text-xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Architecting the next generation of <span className="text-white font-medium italic">autonomous agents</span> and <span className="text-white font-medium underline decoration-purple-500/50 underline-offset-4">RAG pipelines</span> using LangChain.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* LEFT — Tech Stack with "Border Beam" effect */}
            <div className="space-y-6">
              {[
                { title: "LangChain Orchestration", desc: "Complex LLM reasoning chains & autonomous agent workflows.", icon: Zap, color: "from-purple-500" },
                { title: "RAG Architecture", desc: "Hyper-accurate retrieval using hybrid semantic search.", icon: Database, color: "from-blue-500" },
                { title: "Vector Engineering", desc: "FAISS, Chroma & Pinecone optimization at scale.", icon: Server, color: "from-fuchsia-500" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group p-[1px] rounded-3xl overflow-hidden bg-white/5"
                >
                  {/* Border Beam Animation */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} to-transparent opacity-0 group-hover:opacity-40 transition-opacity`}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative bg-neutral-950 rounded-[23px] p-8 flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/40 transition-colors">
                      <item.icon className="text-purple-400 group-hover:scale-110 transition-transform" size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT — High Fidelity RAG Pipeline with Data Flow */}
            <motion.div
              whileHover={{ rotateX: -2, rotateY: 4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
              className="relative bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 overflow-hidden shadow-2xl"
            >
              {/* Internal Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />
              
              <div className="flex justify-between items-start mb-12">
                <div>
                  <span className="text-[10px] font-black tracking-[0.4em] text-purple-400 uppercase">Architecture</span>
                  <h3 className="text-white font-black tracking-tight text-3xl mt-1 underline decoration-purple-500 decoration-4 underline-offset-8">RAG FLOW</h3>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <BrainCircuit className="text-purple-400 animate-pulse" size={24} />
                </div>
              </div>

              <div className="space-y-6 relative">
                {/* Data Flow Beam Animation */}
                <motion.div 
                  className="absolute left-[13px] top-4 w-[2px] bg-gradient-to-b from-purple-500 to-transparent h-full z-0 origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />

                {[
                  { step: "01", label: "INGESTION", desc: "Raw data processed into chunks", color: "bg-purple-500" },
                  { step: "02", label: "EMBEDDING", desc: "Text mapped to high-dim vectors", color: "bg-blue-500" },
                  { step: "03", label: "STORAGE", desc: "FAISS / Chroma semantic indexing", color: "bg-violet-500" },
                  { step: "04", label: "RETRIEVAL", desc: "Top-k nearest neighbor search", color: "bg-fuchsia-500" },
                  { step: "05", label: "GENERATION", desc: "Grounded LLM context injection", color: "bg-rose-500" },
                ].map((s, i) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-6 relative z-10 group/step"
                  >
                    <div className={`w-8 h-8 rounded-full ${s.color} flex items-center justify-center text-[11px] font-black text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-transform group-hover/step:scale-125`}>
                      {s.step}
                    </div>
                    <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded-2xl group-hover/step:border-purple-500/30 transition-all backdrop-blur-sm">
                      <div className="text-white text-[10px] font-black tracking-widest mb-1 group-hover/step:text-purple-400 transition-colors uppercase">{s.label}</div>
                      <div className="text-gray-500 text-[11px] leading-tight font-medium uppercase opacity-80">{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced AI Core Skills Chip */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-20 p-[1px] rounded-[3rem] overflow-hidden bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="bg-neutral-950 p-12 relative overflow-hidden">
              {/* Animated scan line */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-[2px] bg-purple-500/30 z-20"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div className="text-center md:text-left">
                  <h3 className="text-white font-black text-3xl mb-4 tracking-tighter uppercase">AI CORE SKILLS</h3>
                  <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">Validated Technical Competencies</p>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-2xl">
                  {[
                    "LangChain", "RAG Systems", "Vector DBs", "Prompt Engineering", "Mistral/OpenAI", "Auto-GPT", "FAISS", "Embeddings"
                  ].map((skill, i) => (
                    <motion.div
                      key={skill}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-widest text-purple-400 uppercase hover:bg-purple-500/10 hover:border-purple-500/30 transition-all shadow-xl shadow-black/20"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>


      <section id="projects" className="py-32 px-8 bg-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-white/5 pb-12 relative z-10">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">FEATURED WORK</h2>
              <p className="text-gray-400 max-w-md text-lg font-light">A selection of projects that showcase my technical skills and design philosophy.</p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button variant="link" asChild className="text-blue-500 p-0 text-xl font-bold tracking-widest h-auto group">
                <Link href="#projects">
                  VIEW ALL PROJECTS <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ perspective: "1000px" }}
              >
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex flex-col space-y-6 cursor-pointer relative"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                    {/* Glass Overlay on Hover */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div className="flex items-center gap-3 text-white font-bold tracking-[0.2em] text-[10px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        EXPLORE ON GITHUB <ArrowRight size={14} className="text-blue-500" />
                      </div>
                    </div>
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                      <Zap size={20} className="text-blue-500" />
                    </div>
                    <div className="absolute bottom-8 left-8 flex gap-2 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-black/60 backdrop-blur-xl rounded-full text-[9px] font-bold tracking-[0.1em] text-white border border-white/10 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 px-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-500 transition-colors uppercase leading-none">
                        {project.title}
                      </h3>
                      <div className="w-10 h-px bg-white/10 group-hover:w-20 group-hover:bg-blue-500 transition-all duration-500"></div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
                      {project.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </section>

    {/* Extended Hero / Scroll Video Section */}
      <section className="bg-black">
        <ContainerScroll className="h-[300svh]">
          <ContainerSticky
            style={{
              background: "radial-gradient(ellipse at center, #1e3a8a 0%, #000000 100%)",
            }}
            className="flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden"
          >
            <ContainerAnimated className="space-y-6 text-center z-20">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase italic">
                Beyond <span className="text-blue-500">Boundaries</span>
              </h2>
              <p className="mx-auto max-w-[42ch] text-gray-400 text-lg md:text-xl leading-relaxed">
                Merging technical excellence with creative vision to redefine what&apos;s possible in the digital realm.
              </p>
            </ContainerAnimated>

            <ContainerInset className="relative z-10 w-full max-w-5xl aspect-video mt-12 shadow-2xl shadow-blue-500/20">
              <HeroVideo
                src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
                className="rounded-3xl border border-white/10"
              />
            </ContainerInset>
            
            <ContainerAnimated
              transition={{ delay: 0.4 }}
              outputRange={[-60, 0]}
              inputRange={[0.6, 0.9]}
              className="mt-12 z-20"
            >
              <HeroButton className="h-16 px-12 text-sm font-bold tracking-[0.3em] uppercase bg-blue-500/10 border-blue-500 hover:bg-blue-500/20 text-blue-400">
                START EXPLORING
              </HeroButton>
            </ContainerAnimated>
          </ContainerSticky>
        </ContainerScroll>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-32 border-t border-white/10 px-8 text-center bg-black relative overflow-hidden">
        {/* Background glow for footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-[3rem] bg-neutral-900/40 border border-white/10 backdrop-blur-2xl space-y-10 group hover:border-blue-500/30 transition-all duration-700"
          >
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative w-24 h-24 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                <Github size={48} className="text-blue-500" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase italic">
                The <span className="text-blue-500">Source</span> Code
              </h3>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                Every project I build is a journey in engineering. You can explore the complete source code, technical documentation, and <span className="text-white font-medium">live deployment links</span> for all my featured work on GitHub.
              </p>
            </div>

            <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-full px-12 h-16 text-[10px] font-bold tracking-[0.3em] uppercase shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500">
              <a href="https://github.com/Wizard-001/portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                EXPLORE MY GITHUB <ExternalLink size={16} />
              </a>
            </Button>
          </motion.div>
          
          <div className="pt-12 border-t border-white/5 space-y-4">
            <p className="text-gray-600 text-[10px] font-bold tracking-[0.4em] uppercase">© 2026 DESIGNED & BUILT BY PORTFOLIO. ALL RIGHTS RESERVED.</p>
            <div className="flex justify-center gap-8">
              <div className="w-1 h-1 rounded-full bg-blue-500/40" />
              <div className="w-1 h-1 rounded-full bg-blue-500/40" />
              <div className="w-1 h-1 rounded-full bg-blue-500/40" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
