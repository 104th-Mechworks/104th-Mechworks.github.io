"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ServerCard({
  name,
  description,
  imageSrc,
  onClick,
}: {
  name: string
  description: string
  imageSrc: string
  onClick: () => void
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-sm p-5 bg-zinc-900 border border-zinc-800 shadow-sm flex flex-col space-y-4 h-full cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="relative h-12 w-12 flex-shrink-0">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-contain" />
        </div>
        <div>
          <h3 className="text-lg font-bold font-mono text-zinc-200">{name}</h3>
          <p className="text-zinc-400 text-sm">{description}</p>
        </div>
      </div>
      <div className="mt-auto pt-2 text-right">
        <span className="text-xs text-blue-400 font-mono">VIEW DETAILS →</span>
      </div>
    </motion.div>
  )
}
