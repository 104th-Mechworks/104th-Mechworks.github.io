"use client"

import { motion } from "framer-motion"

export default function SpecialOpsCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-sm p-5 bg-zinc-900 border border-zinc-800 shadow-sm flex flex-col space-y-4 h-full"
    >
      <h3 className="text-lg font-bold font-mono text-zinc-200">{title}</h3>
      <p className="text-zinc-400 text-sm">{description}</p>
    </motion.div>
  )
}
