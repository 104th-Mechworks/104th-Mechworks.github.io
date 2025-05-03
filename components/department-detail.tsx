"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Lock } from "lucide-react"
import type { Department } from "@/data/types"
import Breadcrumb from "./breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DepartmentDetail({
  department,
  onBack,
  onServerClick,
}: {
  department: Department
  onBack: () => void
  onServerClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <Breadcrumb
        items={[
          { label: "SERVERS", onClick: onServerClick },
          { label: "RAS VANGUARD", onClick: onBack },
          { label: department.name.split(" ")[2], onClick: () => {} },
        ]}
      />

      <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="relative h-24 w-24 flex-shrink-0 mx-auto md:mx-0">
            <Image
              src={department.icon || "/placeholder.svg"}
              alt={department.name}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-bold font-mono text-zinc-200 text-center md:text-left">{department.name}</h2>

            <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
              <span className="text-zinc-400 font-mono">Department Head:</span>
              <span className="text-zinc-200 font-mono">{department.head || "VACANT"}</span>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <span className="text-zinc-400 font-mono">Focus:</span>
              <p className="text-zinc-300">{department.focus}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6">
          <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">TEAMS</h3>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {department.teams.map((team, index) => (
              <AccordionItem
                key={index}
                value={`team-${index}`}
                className="border-zinc-800 bg-zinc-900 rounded-sm overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:bg-zinc-800 transition-colors accordion-trigger-no-underline">
                  <div className="flex items-center gap-2 text-left">
                    <div>
                      <div className="font-mono text-blue-400">{team.name}</div>
                      {team.lead && (
                        <div className="text-sm text-zinc-400 font-mono">
                          Lead: {team.lead.role} {team.lead.name}
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
                  {team.classified ? (
                    <div className="flex items-center justify-center gap-2 py-4 text-zinc-400">
                      <Lock size={16} />
                      <span className="font-mono">MEMBER LIST CLASSIFIED</span>
                    </div>
                  ) : team.groups && team.groups.length > 0 ? (
                    <div className="space-y-6">
                      {/* Leadership section if available */}
                      {team.leadership && team.leadership.length > 0 && (
                        <div className="space-y-2">
                          {team.leadership.map((leader, leaderIndex) => (
                            <div key={leaderIndex} className="font-mono text-zinc-300">
                              {leader.role} - {leader.name}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Groups */}
                      {team.groups.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-2">
                          <div className="font-mono text-zinc-200 border-b border-zinc-700 pb-1">{group.name}</div>

                          {group.officer && (
                            <div className="font-mono text-zinc-300 pl-4">
                              {group.officer.role}: {group.officer.name}
                            </div>
                          )}

                          {group.members.map((member, memberIndex) => (
                            <div key={memberIndex} className="font-mono text-zinc-400 pl-4">
                              {member.name}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : team.members && team.members.length > 0 ? (
                    <div className="space-y-2">
                      {team.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="flex items-center gap-2">
                          <span className="text-zinc-500 font-mono">┗</span>
                          <span className="text-zinc-300 font-mono">
                            {member.role} {member.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-zinc-400 font-mono">No members listed</div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.div>
  )
}
