"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Terminal } from "lucide-react"

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
      className="space-y-8"
    >
      {/* Home content */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="h-px w-8 bg-blue-500"></div>
        <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">104TH BATTALION</h2>
        <div className="h-px w-8 bg-blue-500"></div>
      </div>

      <div className="flex flex-col items-center justify-center mb-12">
        <div className="relative h-32 w-32 mb-6">
          <Image src="/images/104th.png" alt="104th Battalion" fill className="object-contain" />
        </div>
        <p className="text-zinc-400 text-center max-w-2xl mb-6">
          Welcome to the official military database of the 104th Battalion. Access information about our branches,
          ranks, positions, servers, and command staff.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
          <button
            onClick={() => onNavigate("command-staff")}
            className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 rounded-sm border border-zinc-700 text-zinc-200 font-mono text-sm"
          >
            COMMAND STAFF
          </button>
          <button
            onClick={() => onNavigate("servers")}
            className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 rounded-sm border border-zinc-700 text-zinc-200 font-mono text-sm"
          >
            SERVERS
          </button>
          <button
            onClick={() => onNavigate("classes")}
            className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 rounded-sm border border-zinc-700 text-zinc-200 font-mono text-sm"
          >
            CLASSES
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/*<div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">*/}
        {/*  <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4 flex items-center gap-2">*/}
        {/*    <Shield size={18} className="text-blue-400" />*/}
        {/*    BATTALION STRUCTURE*/}
        {/*  </h3>*/}
        {/*  <p className="text-zinc-400 mb-4">*/}
        {/*    The 104th Battalion is organized into specialized branches, each with its own command structure and*/}
        {/*    operational focus.*/}
        {/*  </p>*/}
        {/*  <button onClick={() => onNavigate("branches")} className="text-blue-400 font-mono text-sm hover:underline">*/}
        {/*    VIEW BRANCHES →*/}
        {/*  </button>*/}
        {/*</div>*/}

        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
          <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4 flex items-center gap-2">
            <Terminal size={18} className="text-blue-400" />
            POSITIONS & RESPONSIBILITIES
          </h3>
          <p className="text-zinc-400 mb-4">
            Each member of the 104th Battalion holds a specific position with defined responsibilities and requirements.
          </p>
          <button onClick={() => onNavigate("positions")} className="text-blue-400 font-mono text-sm hover:underline">
            VIEW POSITIONS →
          </button>
        </div>


        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
          <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4 flex items-center gap-2">
            <Shield size={18} className="text-blue-400" />
            MEDALS & ACHIEVEMENTS
          </h3>
          <p className="text-zinc-400 mb-4">
            The 104th Battalion recognizes and honors the achievements of its members through a system of medals and
            awards.
          </p>
          <button onClick={() => onNavigate("medals")} className="text-blue-400 font-mono text-sm hover:underline">
            VIEW MEDALS →
          </button>
        </div>
      </div>
    </motion.div>
  )
}
