"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { branches, specialOps } from "@/data"

interface BranchSummaryProps {
  branchId?: string | null
  specialOpId?: string | null
  onBack: () => void
  getIconComponent: (iconName: string) => React.ReactNode
  onNavigate: (section: string, params?: any) => void
}

export default function BranchSummary({
  branchId,
  specialOpId,
  onBack,
  getIconComponent,
  onNavigate,
}: BranchSummaryProps) {
  const branch = branchId ? branches.find((b) => b.id === branchId) : null
  const specialOp = specialOpId ? specialOps.find((op) => op.id === specialOpId) : null

  const item = branch || specialOp

  if (!item) return null

  // Determine which server to link to based on branch
  const getServerInfo = () => {
    if (branchId === "army") {
      return { name: "Resilient", id: "resilient" }
    } else if (branchId === "starfighter") {
      return { name: "Triumphant", id: "triumphant" }
    } else if (specialOpId === "arc" || specialOpId === "rc") {
      return {
        name: "Ravager",
        id: "ravager",
        specialDepartment: specialOpId,
      }
    }
    return null
  }

  const serverInfo = getServerInfo()

  const handleServerClick = () => {
    if (serverInfo) {
      onNavigate("servers", {
        serverId: serverInfo.id,
        specialDepartment: serverInfo.specialDepartment,
      })
    }
  }

  const handleSectionClick = (section: string) => {
    onNavigate(section)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <button onClick={onBack} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
        <ArrowLeft size={16} className="mr-1" />
        <span>Back to Branches</span>
      </button>

      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="p-4 rounded-sm bg-zinc-800 text-blue-400">
          {branch && getIconComponent(branch.icon)}
          {specialOp && <div className="text-2xl font-bold">{specialOp.id.toUpperCase()}</div>}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-zinc-200 font-mono mb-2">{item.title}</h2>
          <p className="text-zinc-400">{item.description}</p>
        </div>
      </div>

      {serverInfo && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-zinc-300 mb-4">Server Information</h3>
          <div
            className="p-4 border border-zinc-800 rounded-sm bg-zinc-900 hover:bg-zinc-800 hover:border-blue-500 cursor-pointer transition-colors"
            onClick={handleServerClick}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-zinc-200 font-bold">{serverInfo.name} Server</h4>
                <p className="text-zinc-400 text-sm">View detailed information about the {serverInfo.name} server</p>
              </div>
              <div className="text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-bold text-zinc-300 mb-4">Related Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="p-4 border border-zinc-800 rounded-sm bg-zinc-900 hover:bg-zinc-800 hover:border-blue-500 cursor-pointer transition-colors"
            onClick={() => handleSectionClick("ranks")}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-zinc-200 font-bold">Ranks</h4>
                <p className="text-zinc-400 text-sm">View ranks for {item.title}</p>
              </div>
              <div className="text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          <div
            className="p-4 border border-zinc-800 rounded-sm bg-zinc-900 hover:bg-zinc-800 hover:border-blue-500 cursor-pointer transition-colors"
            onClick={() => handleSectionClick("positions")}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-zinc-200 font-bold">Positions</h4>
                <p className="text-zinc-400 text-sm">View positions for {item.title}</p>
              </div>
              <div className="text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          <div
            className="p-4 border border-zinc-800 rounded-sm bg-zinc-900 hover:bg-zinc-800 hover:border-blue-500 cursor-pointer transition-colors"
            onClick={() => handleSectionClick("classes")}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-zinc-200 font-bold">Classes</h4>
                <p className="text-zinc-400 text-sm">View classes for {item.title}</p>
              </div>
              <div className="text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          <div
            className="p-4 border border-zinc-800 rounded-sm bg-zinc-900 hover:bg-zinc-800 hover:border-blue-500 cursor-pointer transition-colors"
            onClick={() => handleSectionClick("rules")}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-zinc-200 font-bold">Rules & Policies</h4>
                <p className="text-zinc-400 text-sm">View rules related to {item.title}</p>
              </div>
              <div className="text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
