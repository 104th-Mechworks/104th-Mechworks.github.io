"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Option = {
  value: string
  label: string
}

interface MobileTabSelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
}

export default function MobileTabSelect({ options, value, onChange }: MobileTabSelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectedOption = options.find((option) => option.value === value)

  const handleSelect = (value: string) => {
    onChange(value)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full md:w-64 lg:w-80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 p-3 rounded-sm text-zinc-200 font-mono text-sm"
      >
        {selectedOption?.label || "Select option"}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-10 w-full mt-1 bg-zinc-900 border border-zinc-800 rounded-sm shadow-lg max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`w-full text-left p-3 text-sm font-mono transition-colors ${
                  option.value === value ? "bg-zinc-800 text-blue-400" : "text-zinc-300 hover:bg-zinc-800"
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
