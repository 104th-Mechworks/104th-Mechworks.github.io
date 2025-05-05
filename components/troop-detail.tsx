"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import type { Troop } from "@/data/types"

export default function TroopDetail({
  troop,
  departmentColor,
  onBackAction,
}: {
  troop: Troop
  departmentColor: string
  onBackAction: () => void
}) {
  // Determine if this is an ARC troop or RC squad based on the department color
  const isARC = departmentColor === "#f009c9"

  // Get the appropriate class icon based on department type
  const classIcon = isARC ? "/images/icons/arcClass.png" : "/images/icons/commandoClass.png"
  const classAlt = isARC ? "ARC Class" : "Commando Class"

  // Helper function to get platform badge color
  const getPlatformBadgeColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "xbox":
        return "bg-green-500"
      case "playstation":
        return "bg-blue-500"
      case "pc":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-zinc-900 border rounded-sm overflow-hidden"
      style={{ borderColor: departmentColor }}
    >
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={onBackAction} className="p-1 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors">
              <ArrowLeft size={16} className="text-zinc-400" />
            </button>
            <h3 className="text-xl font-bold font-mono text-zinc-200">{troop.name}</h3>
          </div>

          {/* Class icon in top right */}
          <div className="relative h-10 w-10">
            <Image
              src={classIcon || "/placeholder.svg"}
              alt={classAlt}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm">
            <span className="text-zinc-400 font-mono">Commanding Officer:</span>
            <span className="text-zinc-200 font-mono">{troop.commandingOfficer || troop.leadership?.tco || "N/A"}</span>
          </div>

          {/* Specialization if available */}
          {troop.specialization && (
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm">
              <span className="text-zinc-400 font-mono">Specialization:</span>
              <span className="text-zinc-200 font-mono">{troop.specialization}</span>
            </div>
          )}
        </div>

        {/* ARC Troop Personnel */}
        {isARC && (
          <div className="pt-4 border-t border-zinc-800">
            <div className="text-sm text-zinc-400 font-mono mb-4">LIEUTENANTS:</div>
            <div className="space-y-2">
              {/* Check both possible locations for lieutenants data */}
              {(troop.lieutenants || troop.personnel?.lieutenants || []).map((lieutenant: any, index: number) => (
                <div key={index} className="flex items-center justify-between bg-zinc-800 p-3 rounded-sm">
                  <div className="font-mono text-zinc-200">{lieutenant.name}</div>
                  {lieutenant.platform && (
                    <div
                      className={`text-xs font-mono text-white px-2 py-1 rounded-sm ${getPlatformBadgeColor(lieutenant.platform)}`}
                    >
                      {lieutenant.platform.toUpperCase()}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-sm text-zinc-400 font-mono mt-6 mb-4">SERGEANTS:</div>
            <div className="space-y-2">
              {/* Check both possible locations for sergeants data */}
              {(troop.sergeants || troop.personnel?.sergeants || []).map((sergeant: any, index: number) => (
                <div key={index} className="flex items-center justify-between bg-zinc-800 p-3 rounded-sm">
                  <div className="font-mono text-zinc-200">{sergeant.name}</div>
                  {sergeant.platform && (
                    <div
                      className={`text-xs font-mono text-white px-2 py-1 rounded-sm ${getPlatformBadgeColor(sergeant.platform)}`}
                    >
                      {sergeant.platform.toUpperCase()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RC Squad Personnel */}
        {!isARC && (
          <div className="pt-4 border-t border-zinc-800">
            <div className="text-sm text-zinc-400 font-mono mb-4">SQUAD LEADERS:</div>
            <div className="space-y-2">
              {(troop.squadLeaders || []).map((leader: any, index: number) => (
                <div key={index} className="flex items-center justify-between bg-zinc-800 p-3 rounded-sm">
                  <div className="font-mono text-zinc-200">{leader.name}</div>
                  {leader.platform && (
                    <div
                      className={`text-xs font-mono text-white px-2 py-1 rounded-sm ${getPlatformBadgeColor(leader.platform)}`}
                    >
                      {leader.platform.toUpperCase()}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-sm text-zinc-400 font-mono mt-6 mb-4">SQUAD MEMBERS:</div>
            <div className="space-y-2">
              {(troop.members || []).map((member: any, index: number) => (
                <div key={index} className="flex items-center justify-between bg-zinc-800 p-3 rounded-sm">
                  <div className="font-mono text-zinc-200">{member.name}</div>
                  {member.platform && (
                    <div
                      className={`text-xs font-mono text-white px-2 py-1 rounded-sm ${getPlatformBadgeColor(member.platform)}`}
                    >
                      {member.platform.toUpperCase()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
