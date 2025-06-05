"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import RankItem from "@/components/rank-item"
import MobileTabSelect from "@/components/mobile-tab-select"
import { ranks } from "@/data"
import { useState, useMemo } from "react"
import { Search, X, BarChart2, List } from "lucide-react"
import type { Rank } from "@/data/types"
import { Button } from "@/components/ui/button"
import RankComparisonChart from "@/components/rank-comparison-chart"

export default function RanksSection() {
  const [activeRankTab, setActiveRankTab] = useState("command")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"list" | "comparison">("list")

  // Rank tab options for the dropdown
  const rankTabOptions = [
    { value: "command", label: "COMMAND" },
    { value: "army", label: "ARMY" },
    { value: "starfighter", label: "STARFIGHTER" },
    { value: "special", label: "SPECIAL OPS" },
    { value: "naval", label: "NAVAL AUX" },
  ]

  // Filter ranks based on search query
  const filteredRanks = useMemo(() => {
    if (!searchQuery.trim()) {
      return null // Return null to indicate no filtering
    }

    const query = searchQuery.toLowerCase().trim()
    const results: { [key: string]: Rank[] } = {
      command: [],
      army: [],
      starfighter: [],
      naval: [],
      special: { arc: [], rc: [] },
    }

    // Filter command ranks
    results.command = ranks.command.filter(
      (rank) => rank.rank.toLowerCase().includes(query) || rank.code.toLowerCase().includes(query),
    )

    // Filter army ranks
    results.army = ranks.army.filter(
      (rank) => rank.rank.toLowerCase().includes(query) || rank.code.toLowerCase().includes(query),
    )

    // Filter starfighter ranks
    results.starfighter = ranks.starfighter.filter(
      (rank) => rank.rank.toLowerCase().includes(query) || rank.code.toLowerCase().includes(query),
    )

    // Filter naval ranks
    results.naval = ranks.naval.filter(
      (rank) => rank.rank.toLowerCase().includes(query) || rank.code.toLowerCase().includes(query),
    )

    // Filter special ranks
    results.special.arc = ranks.special.arc.filter(
      (rank) => rank.rank.toLowerCase().includes(query) || rank.code.toLowerCase().includes(query),
    )

    results.special.rc = ranks.special.rc.filter(
      (rank) => rank.rank.toLowerCase().includes(query) || rank.code.toLowerCase().includes(query),
    )

    return results
  }, [searchQuery])

  // Count total results
  const totalResults = useMemo(() => {
    if (!filteredRanks) return 0

    return (
      filteredRanks.command.length +
      filteredRanks.army.length +
      filteredRanks.starfighter.length +
      filteredRanks.naval.length +
      filteredRanks.special.arc.length +
      filteredRanks.special.rc.length
    )
  }, [filteredRanks])

  // Clear search
  const clearSearch = () => {
    setSearchQuery("")
  }

  // Toggle between list and comparison view
  const toggleViewMode = () => {
    setViewMode(viewMode === "list" ? "comparison" : "list")
  }

  return (
    <motion.div
      key="ranks"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="h-px w-8 bg-blue-500"></div>
        <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">RANKS</h2>
        <div className="h-px w-8 bg-blue-500"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        {/* Search input - only show in list view */}
        {viewMode === "list" && (
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-zinc-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ranks by name or code..."
              className="w-full pl-10 pr-10 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchQuery && (
              <button onClick={clearSearch} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <X size={18} className="text-zinc-400 hover:text-zinc-200" />
              </button>
            )}
          </div>
        )}

        {/* View toggle button */}
        <Button variant="outline" onClick={toggleViewMode} className="flex items-center gap-2 whitespace-nowrap">
          {viewMode === "list" ? (
            <>
              <BarChart2 size={16} />
              <span className="hidden sm:inline">Rank Comparison</span>
              <span className="sm:hidden">Compare</span>
            </>
          ) : (
            <>
              <List size={16} />
              <span className="hidden sm:inline">Rank List</span>
              <span className="sm:hidden">List</span>
            </>
          )}
        </Button>
      </div>

      {/* Comparison View */}
      {viewMode === "comparison" && (
        <div className="mt-6">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Rank Comparison</h3>
            <p className="text-zinc-400">
              This chart shows how ranks compare across different branches of the 104th Battalion. Use this reference to
              understand equivalent ranks and the command structure.
            </p>
          </div>

          <RankComparisonChart />

          <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h4 className="text-lg font-bold mb-4">Understanding Rank Equivalence</h4>
            <p className="mb-4 text-zinc-300">
              Ranks across different branches of the 104th Battalion serve similar functions but may have different
              names and insignia. This comparison helps personnel understand the equivalent authority levels across
              branches.
            </p>

            <h5 className="text-md font-semibold mb-2 text-zinc-200">Key Points:</h5>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              <li>Fleet Command ranks represent the highest authority in the battalion</li>
              <li>Command Staff ranks are responsible for strategic planning and oversight</li>
              <li>High Officer ranks lead major operational units</li>
              <li>Officer ranks provide tactical leadership</li>
              <li>NCO ranks form the backbone of day-to-day operations</li>
            </ul>
          </div>
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <>
          {/* Search results count */}
          {searchQuery.trim() && (
            <div className="text-sm text-zinc-400">
              {totalResults === 0 ? (
                <p>No ranks found matching "{searchQuery}"</p>
              ) : (
                <p>
                  Found {totalResults} rank{totalResults !== 1 ? "s" : ""} matching "{searchQuery}"
                </p>
              )}
            </div>
          )}

          {/* If searching, show search results */}
          {searchQuery.trim() && filteredRanks ? (
            <div className="space-y-8">
              {/* Command ranks */}
              {filteredRanks.command.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-zinc-300 font-mono">COMMAND RANKS</h3>
                  {filteredRanks.command.map((rank, index) => (
                    <RankItem key={`command-${index}`} {...rank} />
                  ))}
                </div>
              )}

              {/* Army ranks */}
              {filteredRanks.army.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-zinc-300 font-mono">ARMY RANKS</h3>
                  {filteredRanks.army.map((rank, index) => (
                    <RankItem key={`army-${index}`} {...rank} />
                  ))}
                </div>
              )}

              {/* Starfighter ranks */}
              {filteredRanks.starfighter.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-zinc-300 font-mono">STARFIGHTER RANKS</h3>
                  {filteredRanks.starfighter.map((rank, index) => (
                    <RankItem key={`starfighter-${index}`} {...rank} />
                  ))}
                </div>
              )}

              {/* Naval ranks */}
              {filteredRanks.naval.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-zinc-300 font-mono">NAVAL RANKS</h3>
                  {filteredRanks.naval.map((rank, index) => (
                    <RankItem key={`naval-${index}`} {...rank} />
                  ))}
                </div>
              )}

              {/* Special ranks */}
              {(filteredRanks.special.arc.length > 0 || filteredRanks.special.rc.length > 0) && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-zinc-300 font-mono">SPECIAL OPS RANKS</h3>

                  {filteredRanks.special.arc.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-md font-semibold text-zinc-400 font-mono pl-2">ARC PATH</h4>
                      {filteredRanks.special.arc.map((rank, index) => (
                        <RankItem key={`arc-${index}`} {...rank} />
                      ))}
                    </div>
                  )}

                  {filteredRanks.special.rc.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-md font-semibold text-zinc-400 font-mono pl-2">RC PATH</h4>
                      {filteredRanks.special.rc.map((rank, index) => (
                        <RankItem key={`rc-${index}`} {...rank} />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {totalResults === 0 && (
                <div className="py-8 text-center">
                  <p className="text-zinc-500">No ranks found matching your search criteria.</p>
                  <button
                    onClick={clearSearch}
                    className="mt-4 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-md hover:bg-zinc-700 transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Mobile dropdown for ranks */}
              <div className="md:hidden mb-4">
                <MobileTabSelect options={rankTabOptions} value={activeRankTab} onChange={setActiveRankTab} />
              </div>

              <Tabs value={activeRankTab} onValueChange={setActiveRankTab} className="w-full">
                <TabsList className="hidden md:grid w-full grid-cols-5 bg-zinc-900 border border-zinc-800">
                  <TabsTrigger value="command" className="font-mono text-xs">
                    COMMAND
                  </TabsTrigger>
                  <TabsTrigger value="army" className="font-mono text-xs">
                    ARMY
                  </TabsTrigger>
                  <TabsTrigger value="starfighter" className="font-mono text-xs">
                    STARFIGHTER
                  </TabsTrigger>
                  <TabsTrigger value="special" className="font-mono text-xs">
                    SPECIAL OPS
                  </TabsTrigger>
                  <TabsTrigger value="naval" className="font-mono text-xs">
                    NAVAL AUX
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="command" className="mt-6">
                  <div className="space-y-4">
                    {ranks.command.map((rank, index) => (
                      <RankItem key={index} {...rank} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="army" className="mt-6">
                  <div className="space-y-4">
                    {ranks.army.map((rank, index) => (
                      <RankItem key={index} {...rank} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="starfighter" className="mt-6">
                  <div className="space-y-4">
                    {ranks.starfighter.map((rank, index) => (
                      <RankItem key={index} {...rank} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="special" className="mt-6">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="arc" className="border border-zinc-800 rounded-lg overflow-hidden">
                      <AccordionTrigger className="text-base font-mono text-zinc-200 py-3 px-4 bg-zinc-900 hover:bg-zinc-800 accordion-trigger-no-underline">
                        ARC PATH
                      </AccordionTrigger>
                      <AccordionContent className="bg-zinc-900 border-x border-b border-zinc-800">
                        <div className="space-y-4 pt-2 p-4">
                          {ranks.special.arc.map((rank, index) => (
                            <RankItem key={index} {...rank} />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rc" className="border border-zinc-800 rounded-lg overflow-hidden">
                      <AccordionTrigger className="text-base font-mono text-zinc-200 py-3 px-4 bg-zinc-900 hover:bg-zinc-800 accordion-trigger-no-underline">
                        RC PATH
                      </AccordionTrigger>
                      <AccordionContent className="bg-zinc-900 border-x border-b border-zinc-800">
                        <div className="space-y-4 pt-2 p-4">
                          {ranks.special.rc.map((rank, index) => (
                            <RankItem key={index} {...rank} />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="naval" className="mt-6">
                  <div className="space-y-4">
                    {ranks.naval.map((rank, index) => (
                      <RankItem key={index} {...rank} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </>
      )}
    </motion.div>
  )
}
