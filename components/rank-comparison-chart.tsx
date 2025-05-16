"use client"

import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import { ranks } from "@/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Rank } from "@/data/types"
import MobileTabSelect from "@/components/mobile-tab-select"

type BranchColor = {
  bg: string
  border: string
  text: string
}

const branchColors: Record<string, BranchColor> = {
  naval: {
    bg: "bg-zinc-800",
    border: "border-zinc-700",
    text: "text-neutral-200",
  },
  starfighter: {
    bg: "bg-blue-950",
    border: "border-blue-900",
    text: "text-neutral-200",
  },
  army: {
    bg: "bg-green-950",
    border: "border-green-900",
    text: "text-neutral-200",
  },
  arc: {
    bg: "bg-[#f009c9]/20",
    border: "border-[#f009c9]/40",
    text: "text-neutral-200",
  },
  rc: {
    bg: "bg-[#00dfff]/20",
    border: "border-[#00dfff]/40",
    text: "text-neutral-200",
  },
  command: {
    bg: "bg-amber-950",
    border: "border-amber-900",
    text: "text-neutral-200",
  },
}

// Special ranks that should always be red
const specialRedRanks = ["MCDR", "SCDR", "MSHL"]

// Function to get all ranks from a specific branch
const getBranchRanks = (branchKey: string): Rank[] => {
  if (branchKey === "arc") {
    return ranks.special?.arc || []
  } else if (branchKey === "rc") {
    return ranks.special?.rc || []
  } else if (branchKey === "command") {
    return ranks.command || []
  } else if (branchKey in ranks) {
    return (ranks[branchKey as keyof typeof ranks] as Rank[]) || []
  }
  return []
}

// Categories and their levels
const categories = [
  {
    id: "fleet-command",
    name: "FLEET COMMAND",
    color: "text-red-600",
    bgColor: "bg-red-800",
    levels: ["FC-1", "FC-2", "FC-3"],
  },
  {
    id: "command-staff",
    name: "COMMAND STAFF",
    color: "text-yellow-600",
    bgColor: "bg-yellow-800",
    levels: ["CS-1", "CS-2"],
  },
  { id: "high-officer", name: "HIGH OFFICERS", color: "text-red-800", bgColor: "bg-red-900", levels: ["HO-1", "HO-2"] },
  { id: "officer", name: "OFFICERS", color: "text-blue-600", bgColor: "bg-blue-800", levels: ["O-1", "O-2"] },
  {
    id: "nco",
    name: "NCOs",
    color: "text-green-600",
    bgColor: "bg-green-800",
    levels: ["NCO-1", "NCO-2", "NCO-3", "NCO-4"],
  },
]

export default function RankComparisonChart() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState<string>("fleet-command")
  const [debug, setDebug] = useState<string>("")

  // Organize ranks by category and level
  const organizedRanks = useMemo(() => {
    const result: Record<string, Record<string, Record<string, Rank | null>>> = {}

    // Initialize the structure
    categories.forEach((category) => {
      result[category.id] = {}
      category.levels.forEach((level) => {
        result[category.id][level] = {
          naval: null,
          starfighter: null,
          army: null,
          arc: null,
          rc: null,
          command: null,
        }
      })
    })

    // Fill in the ranks
    const branches = ["naval", "starfighter", "army", "arc", "rc", "command"]
    branches.forEach((branch) => {
      const branchRanks = getBranchRanks(branch)

      branchRanks.forEach((rank) => {
        if (rank.level && rank.category) {
          if (result[rank.category] && result[rank.category][rank.level]) {
            // For command ranks, we need to place them in the appropriate branch column
            if (branch === "command") {
              // MCDR and SCDR go to army column
              if (rank.code === "MCDR") {
                result[rank.category][rank.level].army = rank
              } else if (rank.code === "SCDR") {
                result[rank.category][rank.level].army = rank
              } else if (rank.code === "MSHL") {
                // MSHL goes to starfighter column
                result[rank.category][rank.level].starfighter = rank
              } else {
                // Other command ranks go to command column
                result[rank.category][rank.level].command = rank
              }
            } else {
              // Regular branch ranks go to their respective columns
              result[rank.category][rank.level][branch] = rank
            }
          }
        }
      })
    })

    return result
  }, [])

  // Debug function to check if ranks are being loaded
  useEffect(() => {
    const commandRanks = getBranchRanks("command")
    const debugInfo = commandRanks.map((r) => `${r.code} (${r.category}, ${r.level})`).join(", ")
    setDebug(debugInfo)
  }, [])

  const renderRankBox = (branch: string, rank: Rank | null) => {
    if (!rank) return <div className="h-12 w-full"></div>

    // Use red styling for special ranks, otherwise use branch colors
    const isSpecialRank = specialRedRanks.includes(rank.code)
    const colors = isSpecialRank
      ? { bg: "bg-red-950", border: "border-red-900", text: "text-red-100" }
      : branchColors[branch] || branchColors.army // Fallback to army colors if branch not found

    return (
      <div
        className={`h-12 flex items-center justify-center px-2 rounded ${colors.bg} ${colors.border} border ${colors.text} text-center`}
        title={rank.rank}
      >
        <span className="font-mono text-sm font-bold">{rank.code}</span>
      </div>
    )
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-zinc-200">Rank Comparison Chart</h2>

        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1.5 rounded text-sm ${
              viewMode === "grid" ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1.5 rounded text-sm ${
              viewMode === "list" ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            List View
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-12 gap-2 mb-6">
              <div className="col-span-1"></div>
              <div className="col-span-2 text-center font-mono text-sm font-bold text-zinc-400">NAVAL</div>
              <div className="col-span-2 text-center font-mono text-sm font-bold text-zinc-400">STARFIGHTER</div>
              <div className="col-span-2 text-center font-mono text-sm font-bold text-zinc-400">ARMY</div>
              <div className="col-span-2 text-center font-mono text-sm font-bold text-zinc-400">ARC</div>
              <div className="col-span-2 text-center font-mono text-sm font-bold text-zinc-400">RC</div>
            </div>

            {/* Categories and Levels */}
            {categories.map((category) => (
              <div key={category.id} className="mb-8">
                <div className="grid grid-cols-12 gap-2 mb-2">
                  <div className="col-span-1">
                    <h3 className={`${category.color} font-mono text-sm font-bold text-center`}>{category.name}</h3>
                  </div>
                  <div className="col-span-11 flex items-center">
                    <div className={`w-full h-px ${category.bgColor}`}></div>
                  </div>
                </div>

                {category.levels.map((level, index) => {
                  const levelRanks = organizedRanks[category.id][level]
                  return (
                    <div key={`${category.id}-${level}`} className="grid grid-cols-12 gap-2 mb-2">
                      <div className="col-span-1 flex items-center justify-center">
                        <span className="text-xs text-zinc-500 font-mono w-14 text-center">{level}</span>
                      </div>
                      <div className="col-span-2 px-1">{renderRankBox("naval", levelRanks.naval)}</div>
                      <div className="col-span-2 px-1">{renderRankBox("starfighter", levelRanks.starfighter)}</div>
                      <div className="col-span-2 px-1">{renderRankBox("army", levelRanks.army)}</div>
                      <div className="col-span-2 px-1">{renderRankBox("arc", levelRanks.arc)}</div>
                      <div className="col-span-2 px-1">{renderRankBox("rc", levelRanks.rc)}</div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Tabs defaultValue="fleet-command" value={selectedCategory} onValueChange={setSelectedCategory}>
            {/* Desktop Tabs */}
            <div className="hidden md:block">
              <TabsList className="w-full grid grid-cols-5">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Mobile Dropdown */}
            <div className="block md:hidden mb-4">
              <MobileTabSelect
                options={categories.map((category) => ({ value: category.id, label: category.name }))}
                value={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-4">
                {category.levels.map((level) => {
                  const levelRanks = organizedRanks[category.id][level]
                  return (
                    <div
                      key={`${category.id}-${level}`}
                      className="mb-6 border border-zinc-800 rounded-lg overflow-hidden"
                    >
                      <div className="bg-zinc-800 p-3 font-mono text-sm">{level}</div>
                      <div className="p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                        {Object.entries(levelRanks).map(([branch, rank]) => {
                          if (!rank) return null

                          // Use red styling for special ranks, otherwise use branch colors
                          const isSpecialRank = specialRedRanks.includes(rank.code)
                          const colors = isSpecialRank
                            ? { bg: "bg-red-950", border: "border-red-900", text: "text-red-100" }
                            : branchColors[branch]

                          return (
                            <div
                              key={`${category.id}-${level}-${branch}`}
                              className={`p-3 rounded border ${colors.border} ${colors.bg}`}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                {rank.insigniaPath && (
                                  <div className="relative h-8 w-8 bg-black/30 rounded overflow-hidden">
                                    <Image
                                      src={rank.insigniaPath || "/placeholder.svg"}
                                      alt={rank.rank}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                )}
                                <div>
                                  <h4 className={`font-bold text-sm ${colors.text}`}>{branch.toUpperCase()}</h4>
                                  <div className="text-xs text-zinc-400 font-mono">[{rank.code}]</div>
                                </div>
                              </div>
                              <p className="text-sm text-zinc-300">{rank.rank}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      <div className="mt-6 text-sm text-zinc-500">
        <p>* This chart shows equivalent ranks across different branches of the 104th Battalion.</p>
      </div>
    </div>
  )
}
