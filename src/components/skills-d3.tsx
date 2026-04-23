"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

interface Skill {
  name: string
  category: string
  value: number
}

const skills: Skill[] = [
  // MERN Stack
  { name: "React", category: "Frontend", value: 90 },
  { name: "Node.js", category: "Backend", value: 85 },
  { name: "Express", category: "Backend", value: 80 },
  { name: "MongoDB", category: "Database", value: 75 },
  // AI/ML
  { name: "Machine Learning", category: "AI/ML", value: 85 },
  { name: "NLP", category: "AI/ML", value: 80 },
  { name: "Python", category: "AI/ML", value: 90 },
  { name: "PyTorch", category: "AI/ML", value: 70 },
  // DSA/CP
  { name: "C++", category: "DSA", value: 85 },
  { name: "DSA", category: "DSA", value: 90 },
  // Others
  { name: "TypeScript", category: "Frontend", value: 85 },
  { name: "Tailwind", category: "Frontend", value: 95 },
  { name: "Next.js", category: "Frontend", value: 85 },
  { name: "D3.js", category: "Data Vis", value: 75 },
]

export function SkillsD3() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = 800
    const height = 600
    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")

    svg.selectAll("*").remove()

    const color = d3.scaleOrdinal(d3.schemePaired)

    const pack = d3.pack<Skill>()
      .size([width, height])
      .padding(5)

    const root = d3.hierarchy({ children: skills } as any)
      .sum((d: any) => d.value)

    const nodes = pack(root as any).leaves()

    const simulation = d3.forceSimulation(nodes as any)
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force("collide", d3.forceCollide((d: any) => d.r + 5))
      .on("tick", () => {
        node.attr("transform", (d: any) => `translate(${d.x},${d.y})`)
      })

    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("class", "cursor-pointer")
      .call(d3.drag<any, any>()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y
        })
        .on("drag", (event, d) => {
          d.fx = event.x
          d.fy = event.y
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0)
          d.fx = null
          d.fy = null
        })
      )

    node.append("circle")
      .attr("r", (d: any) => d.r)
      .attr("fill", (d: any) => color(d.data.category))
      .attr("fill-opacity", 0.7)
      .attr("stroke", (d: any) => color(d.data.category))
      .attr("stroke-width", 2)
      .on("mouseover", function() {
        d3.select(this).transition().duration(200).attr("fill-opacity", 1)
      })
      .on("mouseout", function() {
        d3.select(this).transition().duration(200).attr("fill-opacity", 0.7)
      })

    node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .style("font-size", (d: any) => Math.min(d.r / 3, 14) + "px")
      .style("fill", "white")
      .style("font-weight", "bold")
      .style("pointer-events", "none")
      .text((d: any) => d.data.name)

    return () => {
      simulation.stop()
    }
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto aspect-square overflow-hidden bg-black/20 rounded-3xl border border-white/5 backdrop-blur-sm">
      <svg ref={svgRef}></svg>
    </div>
  )
}
