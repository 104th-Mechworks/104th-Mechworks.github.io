"use client"

import { motion, AnimatePresence } from "framer-motion"
import CommandStaffDetail from "@/components/command-staff/command-staff-detail"
import CommandStaffSection from "@/components/command-staff/command-staff-section"
import Breadcrumb from "@/components/breadcrumb"
import { useState } from "react"
import type { CommandStaffMember } from "@/data/types"
import {
  fleetCommandMembers,
  branchCommandMembers,
  specialForcesCommandMembers,
  specialForcesExecutiveMembers,
  armyMajorMembers,
  sectorCommandMembers,
} from "@/data/command-staff"

interface CommandStaffSectionProps {
  getBreadcrumbItems: (items: any[]) => any[]
}

export default function CommandStaffSectionComponent({ getBreadcrumbItems }: CommandStaffSectionProps) {
  const [selectedCommandStaffMember, setSelectedCommandStaffMember] = useState<CommandStaffMember | null>(null)

  const handleCommandStaffMemberClick = (member: CommandStaffMember) => {
    setSelectedCommandStaffMember(member)
  }

  const handleBackToCommandStaffGrid = () => {
    setSelectedCommandStaffMember(null)
  }

  // Generate breadcrumb items for command staff section
  const getCommandStaffBreadcrumbItems = () => {
    const items = [{ label: "COMMAND STAFF", onClick: () => setSelectedCommandStaffMember(null) }]

    if (selectedCommandStaffMember) {
      items.push({
        label: selectedCommandStaffMember.name.toUpperCase(),
        onClick: () => {},
      })
    }

    return items
  }

  return (
    <motion.div
      key="command-staff"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="h-px w-8 bg-blue-500"></div>
        <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">COMMAND STAFF</h2>
        <div className="h-px w-8 bg-blue-500"></div>
      </div>

      {/* Persistent breadcrumb that updates based on selection */}
      <motion.div layout className="mb-6">
        <Breadcrumb items={getCommandStaffBreadcrumbItems()} />
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedCommandStaffMember ? (
          <CommandStaffDetail member={selectedCommandStaffMember} onBackAction={handleBackToCommandStaffGrid} />
        ) : (
          <div className="space-y-12">
            <CommandStaffSection
              title="FLEET COMMAND"
              members={fleetCommandMembers}
              onSelectMember={handleCommandStaffMemberClick}
            />
            <CommandStaffSection
              title="BRANCH COMMANDERS"
              members={branchCommandMembers}
              onSelectMember={handleCommandStaffMemberClick}
            />
            <CommandStaffSection
              title="SPECIAL FORCES COMMAND"
              members={specialForcesCommandMembers}
              onSelectMember={handleCommandStaffMemberClick}
            />
            <CommandStaffSection
              title="SPECIAL FORCES EXECUTIVES"
              members={specialForcesExecutiveMembers}
              onSelectMember={handleCommandStaffMemberClick}
            />
            <CommandStaffSection
              title="SECTOR COMMANDERS"
              members={sectorCommandMembers}
              onSelectMember={handleCommandStaffMemberClick}
              rowLayout={true}
            />
            <CommandStaffSection
              title="ARMY MAJORS"
              members={armyMajorMembers}
              onSelectMember={handleCommandStaffMemberClick}
              rowLayout={true}
            />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
