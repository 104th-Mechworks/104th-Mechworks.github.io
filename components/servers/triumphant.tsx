"use client"

import { useState } from "react"
import { Activity, Clock, Monitor, Gamepad2 } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Server, Wing, Squadron } from "@/data/types"
import { triumphantWings } from "@/data/servers/triumphant"
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

export default function TriumphantServer({
  server,
  onServerListClick,
  showBreadcrumb = true,
  onWingClick,
  selectedWing: externalSelectedWing,
}: {
  server: Server
  onServerListClick: () => void
  showBreadcrumb?: boolean
  onWingClick?: (wing: Wing) => void
  selectedWing?: Wing | null
}) {
  // Use the wings from props or fall back to the imported triumphantWings
  const wingsList = server.wings || triumphantWings

  // State to track selected wing - use local state only if not provided externally
  const [localSelectedWing, setLocalSelectedWing] = useState<Wing | null>(null)

  // Use external selectedWing if provided, otherwise use local state
  const selectedWing = externalSelectedWing !== undefined ? externalSelectedWing : localSelectedWing

  const handleWingClick = (wing: Wing) => {
    if (onWingClick) {
      onWingClick(wing)
    } else {
      setLocalSelectedWing(wing)
    }
  }

  const handleBackToWings = () => {
    if (!onWingClick) {
      setLocalSelectedWing(null)
    }
  }

  // If a wing is selected, show its details
  if (selectedWing) {
    const isMultiPlatform = selectedWing.platforms.length > 1

    return (
      <motion.div
        key="wing-detail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {showBreadcrumb && (
          <Breadcrumb
            items={[
              { label: "SERVERS", onClick: onServerListClick },
              { label: server.name.toUpperCase(), onClick: handleBackToWings },
              { label: selectedWing.name, onClick: () => {} },
            ]}
          />
        )}

        <div className={`bg-zinc-900 border ${getPlatformBorderColor(selectedWing.platforms)} rounded-sm p-6`}>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-bold font-mono text-zinc-200 text-center md:text-left">
                {selectedWing.name}
              </h2>

              {/* Platform badges */}
              <div className="flex flex-wrap gap-2">
                {selectedWing.platforms.map((platform) => (
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
                <span className="text-zinc-400 font-mono">Wing Commander:</span>
                {selectedWing.commandingOfficer === "VACANT" ? (
                  <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                ) : (
                  <span className="text-zinc-200 font-mono">{selectedWing.commandingOfficer}</span>
                )}
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                <span className="text-zinc-400 font-mono">Executive Officer:</span>
                {selectedWing.executiveOfficer === "VACANT" ? (
                  <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                ) : (
                  <span className="text-zinc-200 font-mono">{selectedWing.executiveOfficer}</span>
                )}
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                <span className="text-zinc-400 font-mono">Wing NCO:</span>
                {selectedWing.nonCommissionedOfficer === "VACANT" ? (
                  <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                ) : (
                  <span className="text-zinc-200 font-mono">{selectedWing.nonCommissionedOfficer}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <span className="text-zinc-400 font-mono">Focus:</span>
                <p className="text-zinc-300">{selectedWing.description}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6">
            <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">SQUADRONS</h3>

            <div className="space-y-4">
              {selectedWing.squadrons.map((squadron: Squadron) => (
                <div
                  key={squadron.id}
                  className={`bg-zinc-800 border border-zinc-700 rounded-sm overflow-hidden
                    ${
                      isMultiPlatform && squadron.platform
                        ? squadron.platform === "PC"
                          ? "border-l-2 border-l-red-500/40"
                          : squadron.platform === "Xbox"
                            ? "border-l-2 border-l-green-500/40"
                            : squadron.platform === "PlayStation"
                              ? "border-l-2 border-l-blue-500/40"
                              : ""
                        : ""
                    }`}
                >
                  <div className="bg-zinc-800 p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold font-mono text-blue-400">{squadron.name}</h4>
                        {isMultiPlatform && squadron.platform && squadron.platform !== "Multi-Platform" && (
                          <div
                            className={`flex items-center gap-1 px-2 py-0.5 rounded-sm text-xs font-mono
                            ${
                              squadron.platform === "PC"
                                ? "bg-red-900/20 text-red-400/80"
                                : squadron.platform === "Xbox"
                                  ? "bg-green-900/20 text-green-400/80"
                                  : "bg-blue-900/20 text-blue-400/80"
                            }`}
                          >
                            {squadron.platform === "PC" ? <Monitor size={12} /> : <Gamepad2 size={12} />}
                            <span>{squadron.platform}</span>
                          </div>
                        )}
                        {squadron.platform === "Multi-Platform" && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-sm text-xs font-mono bg-orange-900/20 text-orange-400/80">
                            <span>Multi-Platform</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-zinc-400">{squadron.specialization}</p>
                    </div>
                  </div>
                  <div className="bg-zinc-800/50 border-t border-zinc-700 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-300">SCO:</span>
                          {squadron.leadership.sco === "VACANT" ? (
                            <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                          ) : (
                            <span className="text-xs text-zinc-300">{squadron.leadership.sco}</span>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-300">SXO:</span>
                          {squadron.leadership.sxo === "VACANT" ? (
                            <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                          ) : (
                            <span className="text-xs text-zinc-300">{squadron.leadership.sxo}</span>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-300">SNCO:</span>
                          {squadron.leadership.snco === "VACANT" ? (
                            <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400">VACANT</span>
                          ) : (
                            <span className="text-xs text-zinc-300">{squadron.leadership.snco}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h5 className="text-xs font-mono text-zinc-400 mb-2">FLIGHTS:</h5>
                      <div className="flex flex-wrap gap-2">
                        {squadron.flights.map((flight, index) => (
                          <span key={index} className="text-xs bg-zinc-700 px-2 py-1 rounded-sm text-zinc-300">
                            {flight}
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

  // Otherwise, show the wing list
  return (
    <motion.div
      key="triumphant-details"
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
          <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">STARFIGHTER COMMAND</h3>
          <div className="bg-zinc-800 border border-zinc-700 rounded-sm p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-zinc-400">STARFIGHTER CORPS COMMANDING OFFICER</span>
                  <span className="text-sm font-mono text-zinc-200">COM Snips</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-zinc-400">STARFIGHTER CORPS EXECUTIVE</span>
                  <span className="text-xs bg-zinc-700/70 px-2 py-0.5 rounded-sm text-zinc-400 inline-block w-fit">
                    VACANT
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-zinc-400">FLIGHT OPERATIONS DIRECTOR</span>
                  <span className="text-sm font-mono text-zinc-200">WCDR Odd Ball</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-zinc-400">TRAINING OPERATIONS DIRECTOR</span>
                  <span className="text-sm font-mono text-zinc-200">WCDR Matchstick</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6">
          <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">WINGS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wingsList.map((wing) => (
              <motion.div
                key={wing.id}
                whileHover={{ scale: 1.02 }}
                className={`bg-zinc-800 p-4 rounded-sm cursor-pointer hover:bg-zinc-700 transition-colors border ${getPlatformBorderColor(wing.platforms)}`}
                onClick={() => handleWingClick(wing)}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-zinc-300">{wing.name}</span>
                    <div className="flex gap-1">
                      {wing.platforms.map((platform) => (
                        <PlatformIcon key={platform} platform={platform} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500">{wing.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
