"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import RankItem from "@/components/rank-item"
import MobileTabSelect from "@/components/mobile-tab-select"
import { ranks } from "@/data"
import { useState } from "react"

export default function RanksSection() {
  const [activeRankTab, setActiveRankTab] = useState("command")

  // Rank tab options for the dropdown
  const rankTabOptions = [
    { value: "command", label: "COMMAND" },
    { value: "army", label: "ARMY" },
    { value: "starfighter", label: "STARFIGHTER" },
    { value: "special", label: "SPECIAL OPS" },
    { value: "naval", label: "NAVAL" },
  ]

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
            NAVAL
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
    </motion.div>
  )
}
