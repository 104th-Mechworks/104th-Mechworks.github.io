"use client"

import { motion } from "framer-motion"
import type { CommandStaffMember } from "@/data/types"
import CommandStaffGrid from "./command-staff-grid"
import Image from "next/image"

export default function CommandStaffSection({
  title,
  members,
  onSelectMember,
  rowLayout = false,
}: {
  title: string
  members: CommandStaffMember[]
  onSelectMember: (member: CommandStaffMember) => void
  rowLayout?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="h-px w-6 bg-blue-500"></div>
        <h3 className="text-xl font-bold text-zinc-200 font-mono">{title}</h3>
        <div className="h-px w-6 bg-blue-500"></div>
      </div>

      {rowLayout ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden cursor-pointer"
              onClick={() => onSelectMember(member)}
            >
              <div className="relative h-64 w-full flex items-center justify-center">
                <Image
                  src={member.imageSrc || "/placeholder.svg"}
                  alt={`${member.rank} ${member.name}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="p-4 border-t border-zinc-800">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold font-mono text-zinc-200">{member.name}</h2>
                  <span className="px-2 py-0.5 bg-zinc-800 rounded-sm text-xs font-mono text-blue-400">
                    {member.rank}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <CommandStaffGrid members={members} onSelectMember={onSelectMember} />
      )}
    </motion.div>
  )
}
