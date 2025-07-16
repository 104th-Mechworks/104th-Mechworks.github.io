"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface HomeSectionProps {
  onNavigate: (section: string) => void
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="text-center max-w-4xl mx-auto"
    >
      {/* Main welcome content */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] space-y-4 md:space-y-6 px-4">
        {/* Logo */}
        <div className="relative h-24 w-24 md:h-32 md:w-32 mb-1 md:mb-2">
          <Image src="/images/104th.png" alt="104th Battalion" fill className="object-contain" priority />
        </div>

        {/* Title */}
        <div className="space-y-2 md:space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 font-mono tracking-wider">
            104TH BATTALION
          </h1>
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="h-px w-8 md:w-16 bg-blue-500"></div>
            <span className="text-blue-400 font-mono text-sm md:text-lg tracking-widest">WOLF PACK</span>
            <div className="h-px w-8 md:w-16 bg-blue-500"></div>
          </div>
        </div>

        {/* Welcome message */}
        <div className="space-y-3 md:space-y-4 max-w-xs sm:max-w-md md:max-w-2xl">
          <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
            Welcome to the official military database of the 104th Battalion
          </p>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
            Access comprehensive information about our military structure, personnel, qualifications, and operational
            procedures. Use the navigation menu to explore different sections of our database.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
