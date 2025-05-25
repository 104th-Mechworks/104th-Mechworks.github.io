"use client"

import { useState } from "react"
import type { Medal } from "@/data/types"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, Award } from "lucide-react"
import Image from "next/image"

interface MedalItemProps {
  medal: Medal
}

export default function MedalItem({ medal }: MedalItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Define color based on rarity
  const rarityColors = {
    common: "border-gray-400",
    uncommon: "border-green-400",
    rare: "border-blue-400",
    legendary: "border-purple-400",
    mythic: "border-amber-400",
  }

  const rarityTextColors = {
    common: "text-gray-400",
    uncommon: "text-green-400",
    rare: "text-blue-400",
    legendary: "text-purple-400",
    mythic: "text-amber-400",
  }

  const rarityBgColors = {
    common: "bg-gray-900",
    uncommon: "bg-green-900/20",
    rare: "bg-blue-900/20",
    legendary: "bg-purple-900/20",
    mythic: "bg-amber-900/20",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`border ${rarityColors[medal.rarity]} rounded-md overflow-hidden bg-zinc-900 mb-4`}
    >
      <div
        className={`p-4 cursor-pointer flex items-center justify-between ${rarityBgColors[medal.rarity]}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-12 flex-shrink-0">
            {medal.imageSrc ? (
              <Image src={medal.imageSrc || "/placeholder.svg"} alt={medal.name} fill className="object-contain" />
            ) : (
              <div className="h-12 w-12 flex items-center justify-center bg-zinc-800 rounded-full">
                <Award className={`h-6 w-6 ${rarityTextColors[medal.rarity]}`} />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-100">{medal.name}</h3>
            <div className="flex items-center space-x-2">
              <span className={`text-xs font-semibold uppercase ${rarityTextColors[medal.rarity]}`}>
                {medal.rarity}
              </span>
              <span className="text-xs text-zinc-400">• {medal.category}</span>
            </div>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-zinc-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-zinc-400" />
        )}
      </div>

      {isExpanded && (
        <div className="p-4 border-t border-zinc-800">
          <p className="text-zinc-300 mb-4">{medal.description}</p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-zinc-400 mb-2">REQUIREMENTS</h4>
            <ul className="list-disc pl-5 text-zinc-300 space-y-1">
              {medal.requirements.map((req, index) => (
                <li key={index} className="text-sm">
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {medal.issuedBy && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-zinc-400 mb-1">ISSUED BY</h4>
              <p className="text-sm text-zinc-300">{medal.issuedBy}</p>
            </div>
          )}

          {medal.dateIntroduced && (
            <div>
              <h4 className="text-sm font-semibold text-zinc-400 mb-1">INTRODUCED</h4>
              <p className="text-sm text-zinc-300">
                {new Date(medal.dateIntroduced).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}
