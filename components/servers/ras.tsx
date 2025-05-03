"use client"

import { useState } from "react"
import { Activity, Clock, Lock } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Server, Department } from "@/data/types"
import { rasDepartments } from "@/data/servers/ras"
import Breadcrumb from "../breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Clearance badge component
const ClearanceBadge = ({ type }: { type: string }) => {
  let bgColor = "bg-zinc-600"
  let textColor = "text-zinc-200"
  let borderColor = "border-zinc-500"

  switch (type) {
    case "Adv":
      bgColor = "bg-blue-900/60"
      textColor = "text-blue-300"
      borderColor = "border-blue-700"
      break
    case "SF":
      bgColor = "bg-red-900/60"
      textColor = "text-red-300"
      borderColor = "border-red-700"
      break
    case "SFC":
      bgColor = "bg-green-900/60"
      textColor = "text-green-300"
      borderColor = "border-green-700"
      break
  }

  return (
    <span className={`text-xs px-1.5 py-0.5 rounded-sm ${bgColor} ${textColor} ${borderColor} border`}>{type}</span>
  )
}

export default function RASServer({
  server,
  onServerListClick,
  showBreadcrumb = true,
  onDepartmentClick,
  departments,
  selectedDepartment: externalSelectedDepartment,
}: {
  server: Server
  onServerListClick: () => void
  showBreadcrumb?: boolean
  onDepartmentClick?: (department: Department) => void
  departments?: Department[]
  selectedDepartment?: Department | null
}) {
  // Use the departments passed from props or fall back to the imported rasDepartments
  const departmentsList = departments || rasDepartments

  // Only use local state if no external handler is provided
  const [localSelectedDepartment, setLocalSelectedDepartment] = useState<Department | null>(null)

  // Use external selectedDepartment if provided, otherwise use local state
  const selectedDepartment =
    externalSelectedDepartment !== undefined ? externalSelectedDepartment : localSelectedDepartment

  const handleDepartmentClick = (department: Department) => {
    if (onDepartmentClick) {
      onDepartmentClick(department)
    } else {
      setLocalSelectedDepartment(department)
    }
  }

  const handleBackToDepartments = () => {
    if (!onDepartmentClick) {
      setLocalSelectedDepartment(null)
    }
  }

  // If a department is selected, show its details
  if (selectedDepartment) {
    return (
      <motion.div
        key="department-detail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {showBreadcrumb && (
          <Breadcrumb
            items={[
              { label: "SERVERS", onClick: onServerListClick },
              { label: server.name.toUpperCase(), onClick: handleBackToDepartments },
              { label: selectedDepartment.name.split(" ")[2], onClick: () => {} },
            ]}
          />
        )}

        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative h-24 w-24 flex-shrink-0 mx-auto md:mx-0">
              <Image
                src={selectedDepartment.icon || "/placeholder.svg"}
                alt={selectedDepartment.name}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>

            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-bold font-mono text-zinc-200 text-center md:text-left">
                {selectedDepartment.name}
              </h2>

              <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                <span className="text-zinc-400 font-mono">Department Head:</span>
                <span className="text-zinc-200 font-mono">{selectedDepartment.head || "VACANT"}</span>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <span className="text-zinc-400 font-mono">Focus:</span>
                <p className="text-zinc-300">{selectedDepartment.focus}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6">
            <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">TEAMS</h3>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {selectedDepartment.teams.map((team, index) => (
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
                            {team.lead.clearances && team.lead.clearances.length > 0 && (
                              <span className="ml-2 flex-wrap gap-1 inline-flex">
                                {team.lead.clearances.map((clearance, i) => (
                                  <ClearanceBadge key={i} type={clearance} />
                                ))}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 bg-zinc-800/80 border-t border-zinc-700">
                    {team.classified ? (
                      <div className="flex items-center justify-center gap-2 py-6 text-zinc-400">
                        <Lock size={16} />
                        <span className="font-mono">MEMBER LIST CLASSIFIED</span>
                      </div>
                    ) : team.groups && team.groups.length > 0 ? (
                      <div className="space-y-6">
                        {/* Leadership section if available */}
                        {team.leadership && team.leadership.length > 0 && (
                          <div className="space-y-2 bg-zinc-800 p-3 rounded-sm">
                            <div className="text-sm font-mono text-blue-400 mb-2 border-b border-zinc-700 pb-1">
                              LEADERSHIP
                            </div>
                            {team.leadership.map((leader, leaderIndex) => (
                              <div key={leaderIndex} className="font-mono text-zinc-300 flex items-center gap-2">
                                <span className="text-zinc-500">•</span>
                                <span className="text-zinc-400">{leader.role}:</span> {leader.name}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Groups */}
                        {team.groups.map((group, groupIndex) => (
                          <div key={groupIndex} className="bg-zinc-800 p-3 rounded-sm">
                            <div className="font-mono text-blue-400 text-sm border-b border-zinc-700 pb-1 mb-2">
                              {group.name}
                            </div>

                            {group.officer && (
                              <div className="font-mono text-zinc-300 mb-2 flex items-center gap-2">
                                <span className="text-zinc-400">{group.officer.role}:</span> {group.officer.name}
                              </div>
                            )}

                            <div className="space-y-1 mt-2">
                              {group.members.map((member, memberIndex) => (
                                <div key={memberIndex} className="font-mono text-zinc-300 pl-3 flex items-center gap-2">
                                  <span className="text-zinc-500">•</span>
                                  {member.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : team.description ? (
                      <div className="space-y-4">
                        <div className="bg-zinc-800 p-3 rounded-sm">
                          <div className="font-mono text-zinc-300 italic">{team.description}</div>
                        </div>
                        {team.members && team.members.length > 0 && (
                          <div className="bg-zinc-800 p-3 rounded-sm">
                            <div className="text-sm font-mono text-blue-400 mb-2 border-b border-zinc-700 pb-1">
                              TEAM MEMBERS
                            </div>
                            <div className="space-y-1">
                              {team.members.map((member, memberIndex) => (
                                <div key={memberIndex} className="flex items-center gap-2">
                                  <span className="text-zinc-500">•</span>
                                  <span className="text-zinc-300 font-mono">
                                    <span className="text-zinc-400">{member.role}</span> {member.name}
                                    {member.clearances && member.clearances.length > 0 && (
                                      <span className="ml-2 flex-wrap gap-1 inline-flex">
                                        {member.clearances.map((clearance, i) => (
                                          <ClearanceBadge key={i} type={clearance} />
                                        ))}
                                      </span>
                                    )}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : team.members && team.members.length > 0 ? (
                      <div className="bg-zinc-800 p-3 rounded-sm">
                        <div className="text-sm font-mono text-blue-400 mb-2 border-b border-zinc-700 pb-1">
                          {team.name === "Ban Appeals" ? "BAN APPEALS OFFICERS" : "TEAM MEMBERS"}
                        </div>
                        <div className="space-y-1">
                          {team.members.map((member, memberIndex) => (
                            <div key={memberIndex} className="flex items-center gap-2">
                              <span className="text-zinc-500">•</span>
                              <span className="text-zinc-300 font-mono">
                                <span className="text-zinc-400">{member.role}</span> {member.name}
                                {member.clearances && member.clearances.length > 0 && (
                                  <span className="ml-2 flex-wrap gap-1 inline-flex">
                                    {member.clearances.map((clearance, i) => (
                                      <ClearanceBadge key={i} type={clearance} />
                                    ))}
                                  </span>
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-zinc-400 font-mono italic py-3 text-center">No members listed</div>
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

  // Otherwise, show the department list
  return (
    <motion.div
      key="ras-details"
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
          <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">DEPARTMENTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departmentsList.map((dept) => (
              <motion.div
                key={dept.id}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-800 p-4 rounded-sm cursor-pointer hover:bg-zinc-700 transition-colors"
                onClick={() => handleDepartmentClick(dept)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 flex-shrink-0">
                    <Image
                      src={dept.icon || "/placeholder.svg"}
                      alt={dept.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-mono text-zinc-300">{dept.name.split(" ")[2]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
