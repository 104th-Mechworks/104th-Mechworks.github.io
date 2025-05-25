"use client"

import { motion } from "framer-motion"

export default function SpecialOpsCard({
  title,
  description,
  onClick,
}: {
  title: string
  description: string
  onClick?: () => void
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-sm p-6 bg-zinc-900 border border-zinc-800 hover:border-blue-500 shadow-md flex flex-col space-y-4 h-full transition-colors cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-bold font-mono text-zinc-200">{title}</h3>
      <p className="text-zinc-400 text-sm">{description}</p>
      {onClick && (
        <div className="mt-2 text-blue-400 text-sm flex items-center">
          <span>View Details</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </motion.div>
  )
}
