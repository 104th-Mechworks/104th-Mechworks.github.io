"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Award, Clock, ArrowRight } from "lucide-react"
import type { Server } from "@/data/types"
import Breadcrumb from "../breadcrumb"
import { Button } from "@/components/ui/button"

interface KMCServerProps {
  server: Server
  onServerListClick: () => void
  showBreadcrumb?: boolean
  onNavigateToRasSecurity?: () => void
  onNavigateToQualificationsSection?: () => void // This is the key prop
}

export default function KMCServer({
  server,
  onServerListClick,
  showBreadcrumb = true,
  onNavigateToRasSecurity,
  onNavigateToQualificationsSection,
}: KMCServerProps) {
  const [forceRefresh, setForceRefresh] = useState(0)
  const [hasServerData, setHasServerData] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setForceRefresh((prev) => prev + 1)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (server) {
      setHasServerData(true)
    }
  }, [server])

  if (!hasServerData) return <div className="text-white p-4">Loading server data...</div>

  return (
    <motion.div
      key={`kmc-details-${forceRefresh}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="text-zinc-200"
    >
      {showBreadcrumb && server.name && (
        <Breadcrumb
          items={[
            { label: "SERVERS", onClick: onServerListClick },
            { label: server.name.toUpperCase(), onClick: () => {} },
          ]}
        />
      )}

      <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 mt-4">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="relative h-24 w-24 flex-shrink-0 mx-auto md:mx-0">
            <Image
              src={server.imageSrc || "/placeholder.svg?width=96&height=96&query=KMC+Logo"}
              alt={server.name || "Server Image"}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h2 className="text-2xl font-bold font-mono text-zinc-200">{server.name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded-sm">
                  STATUS:{" "}
                  <span className={server.status === "ONLINE" ? "text-green-400" : "text-blue-400"}>
                    {server.status}
                  </span>
                </span>
              </div>
            </div>
            <p className="text-zinc-400">{server.purpose}</p>
            {server.locationDescription && (
              <p className="text-sm text-zinc-500 italic mt-1">{server.locationDescription}</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-blue-400" />
                <span className="text-sm text-zinc-300 font-mono">
                  SUPERVISING OFFICER: {server.supervisingOfficer}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-400" />
                <span className="text-sm text-zinc-300 font-mono">LAST UPDATED: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-blue-400" />
                <span className="text-sm text-zinc-300 font-mono">STANDARDS OFFICER: {server.standardsOfficer}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-zinc-900/70 border border-zinc-800 rounded-sm text-sm text-zinc-300 space-y-4">
        <div>
          <h3 className="font-semibold text-sky-400 mb-1">Kaminoan Security Force (KSF)</h3>
          <p>
            The KSF, operating under RAS Security, ensures order within Tipoca City and other Kaminoan installations,
            working alongside the 104th to maintain KMC's operational integrity.
          </p>
          {onNavigateToRasSecurity && (
            <Button
              onClick={onNavigateToRasSecurity}
              variant="link"
              className="p-0 h-auto mt-1 text-sky-500 hover:text-sky-400 transition-colors inline-flex items-center text-xs"
            >
              View KSF Roster (RAS Security) <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-sky-400 mb-1">Qualification Trials & Process</h3>
          <p>
            Trials at KMC are instructor-led, multi-phase assessments. Meeting phase requirements earns the trooper the
            qualification and its associated rewards. Advanced trials become available after earning base
            qualifications. For a detailed list of all available qualifications, their requirements, and rewards, please
            visit the main Qualifications Section.
          </p>
          {/* Button now only renders if the navigation function is provided */}
          {onNavigateToQualificationsSection && (
            <Button
              onClick={onNavigateToQualificationsSection}
              variant="solid"
              className="mt-2 bg-sky-600 hover:bg-sky-500 text-white text-sm inline-flex items-center px-4 py-2 rounded-md"
            >
              View All KMC Qualifications <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
