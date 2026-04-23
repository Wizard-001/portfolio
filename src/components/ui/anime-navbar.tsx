"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    <div className={cn("flex justify-center", className)}>
      <motion.div
        className="flex items-center gap-1 bg-black/60 border border-white/10 backdrop-blur-xl py-2 px-2 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.08)] relative"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          const isHovered = hoveredTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => {
                if (item.url.startsWith("#")) {
                  e.preventDefault()
                  setActiveTab(item.name)
                  const el = document.querySelector(item.url)
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                } else {
                  // For real routes like /genai, we let Next.js handle it
                  setActiveTab(item.name)
                }
              }}
              onMouseEnter={() => setHoveredTab(item.name)}
              onMouseLeave={() => setHoveredTab(null)}
              className={cn(
                "relative cursor-pointer text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3 rounded-full transition-all duration-300",
                "text-white/40 hover:text-white/80",
                isActive && "text-white"
              )}
            >
              {/* Active glow pulse */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.04, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
                  <div className="absolute inset-[-4px] bg-blue-500/15 rounded-full blur-xl" />
                  <div className="absolute inset-[-8px] bg-blue-500/8 rounded-full blur-2xl" />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0"
                    style={{ animation: "shine 3s ease-in-out infinite" }}
                  />
                </motion.div>
              )}

              {/* Desktop: text label */}
              <motion.span
                className="hidden md:inline relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>

              {/* Mobile: icon */}
              <motion.span
                className="md:hidden relative z-10"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={16} strokeWidth={2.5} />
              </motion.span>

              {/* Hover highlight */}
              <AnimatePresence>
                {isHovered && !isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-white/5"
                  />
                )}
              </AnimatePresence>

              {/* Floating anime bot mascot above active tab */}
              {isActive && (
                <motion.div
                  layoutId="anime-mascot"
                  className="absolute -top-14 left-1/2 -translate-x-1/2 pointer-events-none"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="relative w-12 h-12">
                    {/* Robot head */}
                    <motion.div
                      className="absolute w-10 h-10 left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl border border-blue-300/30 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                      animate={
                        hoveredTab
                          ? { scale: [1, 1.12, 1], rotate: [0, -6, 6, 0], transition: { duration: 0.5 } }
                          : { y: [0, -3, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }
                      }
                    >
                      {/* Left eye */}
                      <motion.div
                        className="absolute w-2 h-2 bg-white rounded-sm"
                        style={{ left: "22%", top: "30%" }}
                        animate={
                          hoveredTab
                            ? { scaleY: [1, 0.15, 1], transition: { duration: 0.2 } }
                            : {}
                        }
                      >
                        <div className="w-1 h-1 bg-blue-900 rounded-full absolute top-0.5 left-0.5" />
                      </motion.div>
                      {/* Right eye */}
                      <motion.div
                        className="absolute w-2 h-2 bg-white rounded-sm"
                        style={{ right: "22%", top: "30%" }}
                        animate={
                          hoveredTab
                            ? { scaleY: [1, 0.15, 1], transition: { duration: 0.2 } }
                            : {}
                        }
                      >
                        <div className="w-1 h-1 bg-blue-900 rounded-full absolute top-0.5 left-0.5" />
                      </motion.div>
                      {/* Tech mouth / grid */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-1 bg-cyan-300/80 rounded-full"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                          />
                        ))}
                      </div>
                      {/* Antenna */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-blue-300/60 rounded-full" />
                      <motion.div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      
                      {/* Sparkles on hover */}
                      <AnimatePresence>
                        {hoveredTab && (
                          <>
                            <motion.div
                              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: 8, y: -8 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.6, repeat: Infinity }}
                              className="absolute -top-1 -right-1 text-cyan-300 text-xs"
                            >✦</motion.div>
                            <motion.div
                              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: -8, y: -8 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                              className="absolute -top-2 left-0 text-blue-300 text-xs"
                            >✦</motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Bot "feet" / connector triangle pointing down to nav */}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3"
                      animate={
                        hoveredTab
                          ? { y: [0, -4, 0], transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" } }
                          : { y: [0, 2, 0], transition: { duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }
                      }
                    >
                      <div className="w-full h-full bg-blue-500/60 rotate-45 transform origin-center shadow-[0_0_6px_rgba(59,130,246,0.5)]" />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </motion.div>
    </div>
  )
}
