"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Shield, FileText, Info } from "lucide-react"
import type { Position } from "@/data/types"

export default function PositionItem({ title, code, description, requirements, responsibilities }: Position) {
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
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <span className="text-base font-bold font-mono text-zinc-200">{title}</span>
            <span className="mt-1 px-2 py-0.5 bg-zinc-800 rounded-sm text-xs font-mono text-blue-400">[{code}]</span>
          </div>
          <ChevronDown
            size={20}
            className={`ml-2 text-zinc-400 transition-transform ${isExpanded ? "transform rotate-180" : ""}`}
          />
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
          {/* Description Section */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
              <Info size={14} className="text-blue-400" />
              <span>DESCRIPTION</span>
            </div>
            <p className="text-zinc-400 text-sm pl-5">{description}</p>
          </div>

          {/* Responsibilities Section */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
              <Shield size={14} className="text-blue-400" />
              <span>RESPONSIBILITIES</span>
            </div>
            <ul className="space-y-2 pl-5 list-disc text-zinc-400 text-sm">
              {responsibilities && responsibilities.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Requirements Section */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
              <FileText size={14} className="text-blue-400" />
              <span>REQUIREMENTS</span>
            </div>
            <ul className="space-y-2 pl-5 list-disc text-zinc-400 text-sm">
              {requirements && requirements.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
