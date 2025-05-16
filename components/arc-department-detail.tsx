"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import type { SpecialDepartment, Troop } from "@/data/types"
import TroopDetail from "./troop-detail"

export default function ARCDepartmentDetail({
  department,
  onBackAction,
}: {
  department: SpecialDepartment
  onBackAction: () => void
}) {
  const [selectedTroop, setSelectedTroop] = useState<Troop | null>(null)

  const handleTroopClick = (troop: Troop) => {
    setSelectedTroop(troop)
  }

  const handleBackToTroops = () => {
    setSelectedTroop(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <AnimatePresence mode="wait">
        {selectedTroop ? (
          <TroopDetail
            key="troop-detail"
            troop={selectedTroop}
            departmentColor={department.color}
            onBackAction={handleBackToTroops}
          />
        ) : (
          <motion.div
            key="department-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900 border rounded-sm overflow-hidden"
            style={{ borderColor: department.color }}
          >
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={onBackAction}
                  className="p-1 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                >
                  <ArrowLeft size={16} className="text-zinc-400" />
                </button>
                <h3 className="text-xl font-bold font-mono text-zinc-200">{department.name}</h3>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm">
                  <span className="text-zinc-400 font-mono">Commanding Officer:</span>
                  <span className="text-zinc-200 font-mono">{department.commandingOfficer}</span>
                </div>

                {department.executiveOfficers.map((officer, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm">
                    <span className="text-zinc-400 font-mono">{officer.position} Executive Officer:</span>
                    <span className="text-zinc-200 font-mono">{officer.name}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <div className="text-sm text-zinc-400 font-mono mb-4">TROOPS:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {department.troops.map((troop) => (
                    <motion.div
                      key={troop.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 rounded-sm cursor-pointer"
                      onClick={() => handleTroopClick(troop)}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-mono text-zinc-200">{troop.name}</h4>
                      </div>
                      <div className="mt-2 text-xs text-zinc-500 font-mono">CO: {troop.leadership.tco}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
