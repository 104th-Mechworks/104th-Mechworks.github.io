"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Shield, Wrench, FileText } from "lucide-react"
import type { Position } from "@/data/types"

export default function PositionItem({
  title,
  code,
  description,
  requirements,
  responsibilities,
  equipment,
}: Position) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="rounded-sm bg-zinc-900 border border-zinc-800 overflow-hidden"
    >
      <div
        className="p-4 cursor-pointer hover:bg-zinc-800/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/*<div className="bg-zinc-800 p-1.5 rounded-sm">*/}
            {/*  <Shield size={18} className="text-blue-400" />*/}
            {/*</div>*/}
            <div className="flex flex-wrap items-center">
              <span className="text-base font-bold font-mono text-zinc-200">{title}</span>
              <span className="ml-2 px-2 py-0.5 bg-zinc-800 rounded-sm text-xs font-mono text-blue-400">[{code}]</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 md:mt-0">
            <p className="text-zinc-400 text-sm">{description}</p>
            <ChevronDown
              size={18}
              className={`ml-2 text-zinc-400 transition-transform ${isExpanded ? "transform rotate-180" : ""}`}
            />
          </div>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="px-4 pb-4 pt-2 bg-zinc-800/30 border-t border-zinc-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
                <FileText size={14} className="text-blue-400" />
                <span>REQUIREMENTS</span>
              </div>
              <ul className="space-y-2 pl-5 list-disc text-zinc-400 text-sm">
                {requirements && requirements.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
                <Shield size={14} className="text-blue-400" />
                <span>RESPONSIBILITIES</span>
              </div>
              <ul className="space-y-2 pl-5 list-disc text-zinc-400 text-sm">
                {responsibilities && responsibilities.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
                <Wrench size={14} className="text-blue-400" />
                <span>EQUIPMENT</span>
              </div>
              <ul className="space-y-2 pl-5 list-disc text-zinc-400 text-sm">
                {equipment && equipment.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
