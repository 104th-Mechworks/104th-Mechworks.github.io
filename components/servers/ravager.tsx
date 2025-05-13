"use client"
import {Activity, ChevronRight, Clock, Shield} from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { Server, SpecialDepartment, Troop } from "@/data/types"
import Breadcrumb from "../breadcrumb"
import TroopDetail from "../troop-detail"

export default function RavagerServer({
  server,
  onServerListClick,
  showBreadcrumb = true,
  selectedDepartment,
  onDepartmentClick,
  selectedTroop,
  onTroopClick,
}: {
  server: Server
  onServerListClick: () => void
  showBreadcrumb?: boolean
  selectedDepartment?: SpecialDepartment | null
  onDepartmentClick?: (department: SpecialDepartment) => void
  selectedTroop?: Troop | null
  onTroopClick?: (troop: Troop) => void
}) {
  // Generate breadcrumb items based on current navigation state
  const getBreadcrumbItems = () => {
    const items = [
      { label: "SERVERS", onClick: onServerListClick },
      { label: server.name.toUpperCase(), onClick: () => onDepartmentClick && onDepartmentClick(null as any) },
    ]

    if (selectedDepartment) {
      items.push({
        label: selectedDepartment.name.toUpperCase(),
        onClick: () => onTroopClick && onTroopClick(null as any),
      })

      if (selectedTroop) {
        items.push({
          label: selectedTroop.name.toUpperCase(),
          onClick: () => {},
        })
      }
    }

    return items
  }

  // Render the server overview with department selection
  const renderServerOverview = () => {
    return (
      <motion.div
        key="ravager-details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative h-24 w-24 flex-shrink-0 mx-auto md:mx-0">
              <Image src={server.imageSrc || "/placeholder.svg"} alt={server.name} fill className="object-contain" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h2 className="text-2xl font-bold font-mono text-zinc-200">{server.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded-sm">
                    STATUS:{" "}
                    <span className={server.status === "ONLINE" ? "text-green-400" : "text-red-400"}>
                      {server.status}
                    </span>
                  </span>
                </div>
              </div>

              <p className="text-zinc-400">{server.purpose}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-blue-400" />
                  <span className="text-sm text-zinc-300 font-mono">
                    COMMANDING OFFICER: {server.commandingOfficer}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-400" />
                  <span className="text-sm text-zinc-300 font-mono">
                    LAST UPDATED: {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6">
            <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">SPECIAL FORCES DEPARTMENTS</h3>
            <div className="space-y-4">
              {server.specialDepartments?.map((department) => (
                <button
                  key={department.id}
                  onClick={() => onDepartmentClick && onDepartmentClick(department)}
                  className={`w-full p-4 rounded-sm border text-left transition-colors ${
                    department.id === "arc"
                      ? "border-[#f009c9] bg-zinc-900 hover:bg-zinc-800"
                      : "border-[#00dfff] bg-zinc-900 hover:bg-zinc-800"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        className={`text-lg font-bold font-mono mb-1 ${
                          department.id === "arc" ? "text-[#f009c9]" : "text-[#00dfff]"
                        }`}
                      >
                        {department.name}
                      </h3>
                      <p className="text-zinc-400 text-sm">{department.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-zinc-500" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Render the department detail with troops
  const renderDepartmentDetail = () => {
    if (!selectedDepartment) return null

    // Different rendering for ARC and RC departments
    const departmentColor = selectedDepartment.id === "arc" ? "#f009c9" : "#00dfff"
    const departmentTextColor = selectedDepartment.id === "arc" ? "text-[#f009c9]" : "text-[#00dfff]"
    const departmentBorder = selectedDepartment.id === "arc" ? "border-[#f009c9]" : "border-[#00dfff]"
    const troopLabel = selectedDepartment.id === "arc" ? "TROOPS" : "SQUADS"

    return (
      <motion.div
        key="department-detail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`bg-zinc-900 border ${departmentBorder} rounded-sm p-6 mb-6`}>
          <h2 className={`text-xl font-bold font-mono mb-4 ${departmentTextColor}`}>{selectedDepartment.name}</h2>

          <div className="space-y-4">
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-zinc-400 font-mono">Description:</span>
              <p className="text-zinc-300">{selectedDepartment.description}</p>
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <span className="text-zinc-400 font-mono">Commanding Officer:</span>
              <span className="text-zinc-200 font-mono">{selectedDepartment.commandingOfficer}</span>
            </div>

            {selectedDepartment.id === "arc" && selectedDepartment.executiveOfficers && (
              <div className="flex flex-col gap-2 text-sm">
                <span className="text-zinc-400 font-mono">Executive Officers:</span>
                <div className="space-y-1">
                  {selectedDepartment.executiveOfficers.map((officer, index) => (
                    <div key={index} className="flex gap-2">
                      {officer.position && (
                      <span className="text-zinc-400 font-mono">{officer.position}:</span>
                      )}
                      <span className="text-zinc-200 font-mono">{officer.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6">
          <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">{troopLabel}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedDepartment.troops.map((troop) => (
              <motion.div
                key={troop.id}
                whileHover={{ scale: 1.02 }}
                className={`bg-zinc-800 p-4 rounded-sm cursor-pointer hover:bg-zinc-700 transition-colors border ${departmentBorder}`}
                onClick={() => onTroopClick && onTroopClick(troop)}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-zinc-300">{troop.name}</span>

                      <div className="">
                        <ChevronRight className="h-5 w-5 text-zinc-500" />
                      </div>

                  </div>
                  {troop.specialization && <p className="text-xs text-zinc-500 mt-1">{troop.specialization}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  // Render the troop detail
  const renderTroopDetail = () => {
    if (!selectedTroop || !selectedDepartment) return null

    // Use the TroopDetail component
    const departmentColor = selectedDepartment.id === "arc" ? "#f009c9" : "#00dfff"
    return (
      <motion.div
        key="troop-detail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <TroopDetail troop={selectedTroop} departmentColor={departmentColor} />
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      {showBreadcrumb && <Breadcrumb items={getBreadcrumbItems()} />}

      <AnimatePresence mode="wait">
        {selectedTroop ? renderTroopDetail() : selectedDepartment ? renderDepartmentDetail() : renderServerOverview()}
      </AnimatePresence>
    </div>
  )
}