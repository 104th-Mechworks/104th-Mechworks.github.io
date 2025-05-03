"use client"

import { motion } from "framer-motion"
import type React from "react"

export default function BranchCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-sm p-5 bg-zinc-900 border border-zinc-800 shadow-sm flex flex-col items-center text-center space-y-4 h-full"
    >
      <div className="p-2 rounded-sm bg-zinc-800 text-blue-400">{icon}</div>
      <h3 className="text-lg font-bold font-mono text-zinc-200">{title}</h3>
      <p className="text-zinc-400 text-sm">{description}</p>
    </motion.div>
  )
}
