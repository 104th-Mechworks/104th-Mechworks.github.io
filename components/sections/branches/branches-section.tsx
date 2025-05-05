"use client"

import type React from "react"

import { motion } from "framer-motion"
import BranchCard from "@/components/branch-card"
import SpecialOpsCard from "@/components/special-ops-card"
import { branches, specialOps } from "@/data"

interface BranchesSectionProps {
  getIconComponent: (iconName: string) => React.ReactNode
}

export default function BranchesSection({ getIconComponent }: BranchesSectionProps) {
  return (
    <motion.div
      key="branches"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="h-px w-8 bg-blue-500"></div>
        <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">BRANCHES</h2>
        <div className="h-px w-8 bg-blue-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {branches.map((branch) => (
          <BranchCard
            key={branch.id}
            icon={getIconComponent(branch.icon)}
            title={branch.title}
            description={branch.description}
          />
        ))}
      </div>

      <div className="mt-12 space-y-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-6 bg-blue-500"></div>
          <h3 className="text-xl font-bold text-center text-zinc-200 font-mono">SPECIAL OPERATIONS PATHS</h3>
          <div className="h-px w-6 bg-blue-500"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialOps.map((op) => (
            <SpecialOpsCard key={op.id} title={op.title} description={op.description} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
