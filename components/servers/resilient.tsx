"use client"

import { useState } from "react"
import { Activity, Clock, Monitor, Gamepad2 } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Server, Company } from "@/data/types"
import { resilientCompanies } from "@/data/servers/resilient"
import Breadcrumb from "../breadcrumb"

// Helper function to get border color based on platforms
const getPlatformBorderColor = (platforms: string[]): string => {
  if (platforms.length > 1) {
    return "border-orange-400/70" // Multi-platform with matching icon opacity
  }

  const platform = platforms[0]
  if (platform === "PC") {
    return "border-red-400/70"
  } else if (platform === "Xbox") {
    return "border-green-400/70"
  } else if (platform === "PlayStation") {
    return "border-blue-400/70"
  }

  return "border-zinc-700" // Default
}

// Helper function to get platform icon
const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === "PC") {
    return <Monitor size={14} className="text-red-400/70" />
  } else if (platform === "Xbox") {
    return <Gamepad2 size={14} className="text-green-400/70" />
  } else if (platform === "PlayStation") {
    return <Gamepad2 size={14} className="text-blue-400/70" />
  }
  return null
}

// Update the component to use the selectedCompany prop
export default function ResilientServer({
  server,
  onServerListClick,
  showBreadcrumb = true,
  onCompanyClick,
  selectedCompany: externalSelectedCompany,
}: {
  server: Server
  onServerListClick: () => void
  showBreadcrumb?: boolean
  onCompanyClick?: (company: Company) => void
  selectedCompany?: Company | null
}) {
  // Use the companies from props or fall back to the imported resilientCompanies
  const companiesList = server.companies || resilientCompanies

  // State to track selected company - use local state only if not provided externally
  const [localSelectedCompany, setLocalSelectedCompany] = useState<Company | null>(null)

  // Use external selectedCompany if provided, otherwise use local state
  const selectedCompany = externalSelectedCompany !== undefined ? externalSelectedCompany : localSelectedCompany

  const handleCompanyClick = (company: Company) => {
    if (onCompanyClick) {
      onCompanyClick(company)
    } else {
      setLocalSelectedCompany(company)
    }
  }

  const handleBackToCompanies = () => {
    if (!onCompanyClick) {
      setLocalSelectedCompany(null)
    }
  }

  // If a company is selected, show its details
  if (selectedCompany) {
    const isMultiPlatform = selectedCompany.platforms.length > 1

    return (
      <motion.div
        key="company-detail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {showBreadcrumb && (
          <Breadcrumb
            items={[
              { label: "SERVERS", onClick: onServerListClick },
              { label: server.name.toUpperCase(), onClick: handleBackToCompanies },
              { label: selectedCompany.name, onClick: () => {} },
            ]}
          />
        )}

        <div className={`bg-zinc-900 border ${getPlatformBorderColor(selectedCompany.platforms)} rounded-sm p-6`}>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-bold font-mono text-zinc-200 text-center md:text-left">
                {selectedCompany.name}
              </h2>

              {/* Platform badges */}
              <div className="flex flex-wrap gap-2">
                {selectedCompany.platforms.map((platform) => (
                  <div
                    key={platform}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-sm text-xs font-mono
                      ${
                        platform === "PC"
                          ? "bg-red-900/20 text-red-400/70"
                          : platform === "Xbox"
                            ? "bg-green-900/20 text-green-400/70"
                            : "bg-blue-900/20 text-blue-400/70"
                      }`}
                  >
                    {platform === "PC" ? <Monitor size={12} /> : <Gamepad2 size={12} />}
                    <span>{platform}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                <span className="text-zinc-400 font-mono">Company Commander:</span>
                {selectedCompany.commandingOfficer === "VACANT" ? (
                  <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                ) : (
                  <span className="text-zinc-200 font-mono">{selectedCompany.commandingOfficer}</span>
                )}
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                <span className="text-zinc-400 font-mono">Executive Officer:</span>
                {selectedCompany.executiveOfficer === "VACANT" ? (
                  <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                ) : (
                  <span className="text-zinc-200 font-mono">{selectedCompany.executiveOfficer}</span>
                )}
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                <span className="text-zinc-400 font-mono">Company NCO:</span>
                {selectedCompany.nonCommissionedOfficer === "VACANT" ? (
                  <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                ) : (
                  <span className="text-zinc-200 font-mono">{selectedCompany.nonCommissionedOfficer}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <span className="text-zinc-400 font-mono">Focus:</span>
                <p className="text-zinc-300">{selectedCompany.description}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6">
            <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">PLATOONS</h3>

            <div className="space-y-4">
              {selectedCompany.platoons.map((platoon) => (
                <div
                  key={platoon.id}
                  className={`bg-zinc-800 border border-zinc-700 rounded-sm overflow-hidden
                    ${
                      isMultiPlatform && platoon.platform
                        ? platoon.platform === "PC"
                          ? "border-l-2 border-l-red-500/40"
                          : platoon.platform === "Xbox"
                            ? "border-l-2 border-l-green-500/40"
                            : "border-l-2 border-l-blue-500/40"
                        : ""
                    }`}
                >
                  <div className="bg-zinc-800 p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold font-mono text-blue-400">{platoon.name}</h4>
                        {isMultiPlatform && platoon.platform && (
                          <div
                            className={`flex items-center gap-1 px-2 py-0.5 rounded-sm text-xs font-mono
                            ${
                              platoon.platform === "PC"
                                ? "bg-red-900/20 text-red-400/80"
                                : platoon.platform === "Xbox"
                                  ? "bg-green-900/20 text-green-400/80"
                                  : "bg-blue-900/20 text-blue-400/80"
                            }`}
                          >
                            {platoon.platform === "PC" ? <Monitor size={12} /> : <Gamepad2 size={12} />}
                            <span>{platoon.platform}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-zinc-400">{platoon.specialization}</p>
                    </div>
                  </div>
                  <div className="bg-zinc-800/50 border-t border-zinc-700 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-300">PCO:</span>
                          {platoon.leadership.pco === "VACANT" ? (
                            <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                          ) : (
                            <span className="text-xs text-zinc-300">{platoon.leadership.pco}</span>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-300">PXO:</span>
                          {platoon.leadership.pxo === "VACANT" ? (
                            <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                          ) : (
                            <span className="text-xs text-zinc-300">{platoon.leadership.pxo}</span>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-300">PNCO:</span>
                          {platoon.leadership.pnco === "VACANT" ? (
                            <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                          ) : (
                            <span className="text-xs text-zinc-300">{platoon.leadership.pnco}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h5 className="text-xs font-mono text-zinc-400 mb-2">SQUADS:</h5>
                      <div className="flex flex-wrap gap-2">
                        {platoon.squads.map((squad, index) => (
                          <span key={index} className="text-xs bg-zinc-700 px-2 py-1 rounded-sm text-zinc-300">
                            {squad}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Otherwise, show the company list
  return (
    <motion.div
      key="resilient-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {showBreadcrumb && (
        <Breadcrumb
          items={[
            { label: "SERVERS", onClick: onServerListClick },
            { label: server.name.toUpperCase(), onClick: () => {} },
          ]}
        />
      )}

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
                  <span className={server.status === "ONLINE" ? "text-green-400" : "text-blue-400"}>
                    {server.status}
                  </span>
                </span>
              </div>
            </div>

            <p className="text-zinc-400">{server.purpose}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-blue-400" />
                <span className="text-sm text-zinc-300 font-mono">COMMANDING OFFICER: {server.commandingOfficer}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-400" />
                <span className="text-sm text-zinc-300 font-mono">LAST UPDATED: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6">
          <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">ARMY COMMAND</h3>
          <div className="bg-zinc-800 border border-zinc-700 rounded-sm p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-zinc-400">ARMY COMMANDING OFFICER</span>
                  <span className="text-sm font-mono text-zinc-200">BCDR Shatterstorm</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-zinc-400">ARMY EXECUTIVE</span>
                  <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400 inline-block w-fit">
                    VACANT
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-zinc-400">01 SECTOR COMMANDER</span>
                  <span className="text-sm font-mono text-zinc-200">CDR Feedback</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-zinc-400">02 SECTOR COMMANDER</span>
                  <span className="text-sm font-mono text-zinc-200">CDR Deranged</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-zinc-400">03 SECTOR COMMANDER</span>
                  <span className="text-sm font-mono text-zinc-200">CDR Tuut</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6">
          <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">COMPANIES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companiesList.map((company) => (
              <motion.div
                key={company.id}
                whileHover={{ scale: 1.02 }}
                className={`bg-zinc-800 p-4 rounded-sm cursor-pointer hover:bg-zinc-700 transition-colors border ${getPlatformBorderColor(company.platforms)}`}
                onClick={() => handleCompanyClick(company)}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-zinc-300">{company.name}</span>
                    <div className="flex gap-1">
                      {company.platforms.map((platform) => (
                        <PlatformIcon key={platform} platform={platform} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500">{company.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
