"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, BrainCircuit, Database, MessageSquare, Code2, Zap, Server, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const NeuralBackground = () => {
  // Generate random nodes
  const nodes = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));

  // Generate connections between close nodes
  const connections = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 25) { // Only connect if close enough
        connections.push({
          id: `${i}-${j}`,
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
          duration: Math.random() * 4 + 3,
          delay: Math.random() * 3
        });
      }
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Connections */}
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="#a855f7"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              duration: conn.duration,
              repeat: Infinity,
              delay: conn.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="url(#node-glow)"
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.5, 0.8] }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />
    </div>
  );
};

export default function GenAIPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-hidden">
      
      {/* ── Navbar Spacer ── */}
      <div className="h-24" />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative px-8 pt-20 pb-32 max-w-7xl mx-auto flex flex-col items-center text-center z-10 min-h-[70vh] justify-center">
        <NeuralBackground />
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold tracking-widest uppercase mb-8"
          >
            <BrainCircuit size={14} /> AI Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight"
          >
            GENERATIVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500">
              AI ENGINEER
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light mb-12"
          >
            Building intelligent, context-aware systems with <span className="text-white font-medium">LangChain</span> & <span className="text-white font-medium">Retrieval-Augmented Generation (RAG)</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-4"
          >
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 h-auto text-[10px] font-bold tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Link href="#architecture">View Architecture</Link>
            </Button>
            <Button variant="outline" asChild className="border-white/10 hover:bg-white/5 rounded-full px-8 py-6 h-auto text-[10px] font-bold tracking-[0.2em] uppercase">
              <Link href="/"><ArrowLeft size={14} className="mr-2" /> Back to Home</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* ── 2. ABOUT SKILLS ── */}
      <section className="py-24 px-8 border-y border-white/5 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
            <BrainCircuit className="text-blue-400 mb-6 w-10 h-10" />
            <h3 className="text-2xl font-bold mb-4">LangChain Orchestration</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Developing complex AI workflows by chaining LLMs with external tools, memory, and agents. Creating autonomous systems that can reason, search, and execute actions based on user prompts.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
            <Database className="text-purple-400 mb-6 w-10 h-10" />
            <h3 className="text-2xl font-bold mb-4">RAG Architecture</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Grounding LLM responses in factual, private data using Vector Databases. Building ingestion pipelines, semantic chunking strategies, and similarity search for highly accurate context retrieval.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. RAG ARCHITECTURE DIAGRAM ── */}
      <section id="architecture" className="py-32 px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">How RAG Works</h2>
          <p className="text-gray-400">Retrieval-Augmented Generation Pipeline</p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: MessageSquare, title: "1. User Query", desc: "User asks a question", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
              { icon: Database, title: "2. Vector Search", desc: "Semantic search in Vector DB", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
              { icon: Server, title: "3. Context Injection", desc: "Top results added to prompt", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30" },
              { icon: BrainCircuit, title: "4. LLM Generation", desc: "LLM generates grounded answer", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-neutral-900 border border-white/10 rounded-3xl p-6 text-center flex flex-col items-center relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.border} border flex items-center justify-center mb-6`}>
                  <step.icon className={`${step.color} w-8 h-8`} />
                </div>
                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TECH STACK ── */}
      <section className="py-24 px-8 bg-neutral-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-12">AI Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["LangChain", "OpenAI API", "Mistral AI", "Hugging Face", "Pinecone", "ChromaDB", "FAISS", "Python"].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold tracking-wider text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MINI DEMO (Chat UI) ── */}
      <section className="py-32 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">Interactive Demo</h2>
          <p className="text-gray-400">Simulated RAG Chatbot Experience</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="bg-neutral-950 p-6 border-b border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <BrainCircuit size={20} className="text-purple-400" />
            </div>
            <div>
              <h4 className="font-bold">Portfolio AI Assistant</h4>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase">Powered by RAG</p>
            </div>
          </div>
          
          {/* Chat Body */}
          <div className="p-6 space-y-6 bg-gradient-to-b from-neutral-900 to-neutral-950 h-80 overflow-y-auto">
            <div className="flex gap-4 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold">U</div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 text-sm text-gray-300">
                What is RAG and why do you use it?
              </div>
            </div>
            <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex-shrink-0 flex items-center justify-center text-xs font-bold"><BrainCircuit size={14} /></div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl rounded-tr-sm p-4 text-sm text-gray-200">
                <span className="text-[10px] text-purple-400 uppercase tracking-wider block mb-2 font-bold animate-pulse">Retrieving Context...</span>
                RAG stands for Retrieval-Augmented Generation. I use it to fetch specific, factual data from a Vector Database before answering, which eliminates hallucinations and grounds my responses in real data.
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-neutral-950 border-t border-white/5 flex gap-2">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-500 cursor-not-allowed">
              Type your message...
            </div>
            <Button disabled className="bg-purple-600 rounded-xl px-6">
              <Send size={16} />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="py-32 px-8 text-center bg-purple-900/10 border-t border-purple-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Let's build AI solutions.</h2>
          <p className="text-gray-400 mb-10 text-lg">Looking for an engineer who understands both modern web development and Generative AI? Let's connect.</p>
          <Button asChild className="bg-white text-black hover:bg-gray-200 rounded-full px-10 py-6 h-auto text-xs font-bold tracking-[0.2em] uppercase">
            <Link href="/#contact">Contact Me</Link>
          </Button>
        </div>
      </section>

    </main>
  )
}
