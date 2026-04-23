"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"
import { Code2, User, Briefcase, Mail, Cpu, Github, BrainCircuit } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const NAV_ITEMS = [
  { name: "About",    url: "#about",    icon: User },
  { name: "Skills",   url: "#skills",   icon: Cpu },
  { name: "GenAI",    url: "#genai",    icon: BrainCircuit },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Contact",  url: "#contact",  icon: Mail },
]

export default function Navbar() {
  const { scrollY } = useScroll()

  // Logo fades out as the user scrolls to avoid fighting the AnimeNavBar
  const logoOpacity = useTransform(scrollY, [0, 120], [1, 0])
  const logoY       = useTransform(scrollY, [0, 120], [0, -20])
  const smoothOpacity = useSpring(logoOpacity, { damping: 28, stiffness: 200 })
  const smoothY       = useSpring(logoY,       { damping: 28, stiffness: 200 })

  return (
    <>
      {/* ── Portfolio initials logo — fades on scroll ── */}
      <motion.div
        style={{ opacity: smoothOpacity, y: smoothY }}
        className="fixed top-5 left-5 z-[1001] pointer-events-none"
      >
        <Link href="/" className="flex items-center gap-2.5 pointer-events-auto group">
          {/* Glowing icon */}
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-blue-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500" />
            <div className="relative w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/30">
              <Code2 size={16} className="text-white" strokeWidth={2.5} />
            </div>
          </div>
          {/* Text label */}
          <div className="hidden md:flex flex-col leading-none">
            <span className="text-[9px] font-black tracking-[0.4em] text-white uppercase">
              DEV
            </span>
            <span className="text-[9px] font-black tracking-[0.4em] text-blue-400 uppercase">
              PORTFOLIO
            </span>
          </div>
        </Link>
      </motion.div>

      {/* ── GitHub link — top right — fades on scroll ── */}
      <motion.div
        style={{ opacity: smoothOpacity, y: smoothY }}
        className="fixed top-5 right-5 z-[1001]"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-[10px] font-bold tracking-widest uppercase"
        >
          <Github size={14} />
          <span className="hidden sm:block">GitHub</span>
        </a>
      </motion.div>

      {/* ── Anime NavBar — always visible, centered ── */}
      <div className="fixed top-4 left-0 right-0 z-[1000] flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <AnimeNavBar items={NAV_ITEMS} defaultActive="About" />
        </div>
      </div>
    </>
  )
}
