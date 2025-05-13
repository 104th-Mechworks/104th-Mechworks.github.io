"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Shield, Users, FileText, Award } from "lucide-react"
import type { Rank } from "@/data/types"
import Image from "next/image"

type RankItemProps = Rank & {
  additionalInfo?: {
    responsibilities?: string[]
    positions?: string[]
    notableMembers?: string[]
    reportingTo?: string
  }
  category?: "fleet-command" | "command-staff" | "high-officer" | "officer" | "nco"
}

export default function RankItem({ rank, code, description, additionalInfo, insigniaPath, category }: RankItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Category badge colors
  const categoryColors = {
    "fleet-command": "bg-red-700 text-white",
    "command-staff": "bg-yellow-600 text-black",
    "high-officer": "bg-red-900 text-white",
    officer: "bg-blue-700 text-white",
    nco: "bg-green-800 text-white",
  }

  // Category display names
  const categoryNames = {
    "fleet-command": "FLEET COMMAND",
    "command-staff": "COMMAND STAFF",
    "high-officer": "HIGH OFFICER",
    officer: "OFFICER",
    nco: "NCO",
  }

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
            {insigniaPath ? (
              <div className="relative h-10 w-10 flex-shrink-0 bg-zinc-800 rounded-sm overflow-hidden">
                <Image
                  src={insigniaPath || "/placeholder.svg"}
                  alt={`${rank} insignia`}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="bg-zinc-800 p-1.5 rounded-sm">
                <Award size={18} className="text-blue-400" />
              </div>
            )}
            <div className="flex flex-wrap items-center">
              <span className="text-base font-bold font-mono text-zinc-200">{rank}</span>
              <span className="ml-2 px-2 py-0.5 bg-zinc-800 rounded-sm text-xs font-mono text-blue-400">[{code}]</span>
              {category && (
                <span className={`ml-2 px-2 py-0.5 rounded-sm text-xs font-mono ${categoryColors[category]}`}>
                  {categoryNames[category]}
                </span>
              )}
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

      {isExpanded && additionalInfo && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="px-4 pb-4 pt-2 bg-zinc-800/30 border-t border-zinc-700"
        >
          <div className="grid grid-cols-1 gap-6">
            {additionalInfo.responsibilities && additionalInfo.responsibilities.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
                  <Shield size={14} className="text-blue-400" />
                  <span>RESPONSIBILITIES</span>
                </div>
                <ul className="space-y-2 pl-5 list-disc text-zinc-400 text-sm">
                  {additionalInfo.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {additionalInfo.positions && additionalInfo.positions.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
                  <FileText size={14} className="text-blue-400" />
                  <span>Positions</span>
                </div>
                <ul className="space-y-2 pl-5 list-disc text-zinc-400 text-sm">
                  {additionalInfo.positions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6">
            {additionalInfo.notableMembers && additionalInfo.notableMembers.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
                  <Users size={14} className="text-blue-400" />
                  <span>NOTABLE MEMBERS</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {additionalInfo.notableMembers.map((member, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-800 rounded-sm text-xs text-zinc-300">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {additionalInfo.reportingTo && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
                  <Shield size={14} className="text-blue-400" />
                  <span>REPORTS TO</span>
                </div>
                <p className="text-zinc-400 text-sm">{additionalInfo.reportingTo}</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
