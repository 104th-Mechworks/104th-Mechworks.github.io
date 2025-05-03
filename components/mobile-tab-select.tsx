"use client"

import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

type Option = {
  value: string
  label: string
}

type MobileTabSelectProps = {
  options: Option[]
  value: string
  onChange: (value: string) => void
}

export default function MobileTabSelect({ options, value, onChange }: MobileTabSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const selectedOption = options.find((option) => option.value === value) || options[0]

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-left"
      >
        <span className="font-mono text-sm text-zinc-200">{selectedOption.label}</span>
        <ChevronDown
          size={16}
          className={`text-zinc-400 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-zinc-900 border border-zinc-800 rounded-sm shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full text-left px-4 py-3 font-mono text-sm ${
                option.value === value ? "bg-zinc-800 text-blue-400" : "text-zinc-300 hover:bg-zinc-800/50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
