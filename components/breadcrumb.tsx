"use client"

import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export type BreadcrumbItem = {
  label: string
  onClick: () => void
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center flex-wrap gap-1 font-mono text-sm mb-6"
      layout
    >
      <AnimatePresence mode="wait">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            className="flex items-center"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2 }}
            layout
          >
            <button
              onClick={item.onClick}
              className={`hover:text-blue-400 transition-colors ${
                index === items.length - 1 ? "text-blue-400 font-bold" : "text-zinc-400"
              }`}
            >
              {item.label}
            </button>
            {index < items.length - 1 && <ChevronRight size={14} className="mx-1 text-zinc-600" />}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.nav>
  )
}
