"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import BranchCard from "@/components/branch-card"
import SpecialOpsCard from "@/components/special-ops-card"
import { branches, specialOps } from "@/data"
import BranchSummary from "./branch-summary"

interface BranchesSectionProps {
  getIconComponent: (iconName: string) => React.ReactNode
  onNavigate: (section: string, params?: any) => void
}

export default function BranchesSection({ getIconComponent, onNavigate }: BranchesSectionProps) {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null)
  const [selectedSpecialOp, setSelectedSpecialOp] = useState<string | null>(null)

  const handleBranchClick = (branchId: string) => {
    setSelectedBranch(branchId)
    setSelectedSpecialOp(null)
  }

  const handleSpecialOpClick = (specialOpId: string) => {
    setSelectedSpecialOp(specialOpId)
    setSelectedBranch(null)
  }

  const handleBackClick = () => {
    setSelectedBranch(null)
    setSelectedSpecialOp(null)
  }

  return (
    <AnimatePresence mode="wait">
      {selectedBranch || selectedSpecialOp ? (
        <BranchSummary
          branchId={selectedBranch}
          specialOpId={selectedSpecialOp}
          onBack={handleBackClick}
          getIconComponent={getIconComponent}
          onNavigate={onNavigate}
        />
      ) : (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                }}
              >
                <BranchCard
                  title={branch.title}
                  description={branch.description}
                  icon={getIconComponent(branch.icon)}
                  onClick={() => handleBranchClick(branch.id)}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-blue-500"></div>
              <h2 className="text-xl font-bold text-zinc-200 font-mono">SPECIAL OPERATIONS</h2>
              <div className="h-px flex-1 bg-blue-500"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialOps.map((op, index) => (
                <motion.div
                  key={op.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: (branches.length + index) * 0.1 },
                  }}
                >
                  <SpecialOpsCard
                    title={op.title}
                    description={op.description}
                    onClick={() => handleSpecialOpClick(op.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
