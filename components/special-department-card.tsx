"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import type { SpecialDepartment } from "@/data/types"

export default function SpecialDepartmentCard({
  department,
  onClick,
}: {
  department: SpecialDepartment
  onClick: () => void
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-zinc-900 border rounded-sm overflow-hidden cursor-pointer"
      style={{ borderColor: department.color }}
      onClick={onClick}
    >
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold font-mono text-zinc-200">{department.name} DEPARTMENT</h3>
          <ChevronRight className="text-zinc-500" />
        </div>

        <div className="space-y-2">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm">
            <span className="text-zinc-400 font-mono">Commanding Officer:</span>
            <span className="text-zinc-200 font-mono">{department.commandingOfficer}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm">
            <span className="text-zinc-400 font-mono">01 Executive Officer:</span>
            <span className="text-zinc-200 font-mono">{department.executiveOfficers["01"]}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm">
            <span className="text-zinc-400 font-mono">02 Executive Officer:</span>
            <span className="text-zinc-200 font-mono">{department.executiveOfficers["02"]}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm">
            <span className="text-zinc-400 font-mono">03 Executive Officer:</span>
            <span className="text-zinc-200 font-mono">{department.executiveOfficers["03"]}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800">
          <div className="text-sm text-zinc-400 font-mono mb-2">TROOPS:</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {department.troops.map((troop) => (
              <div
                key={troop.id}
                className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-2 text-center rounded-sm text-zinc-200 font-mono text-sm"
              >
                {troop.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
