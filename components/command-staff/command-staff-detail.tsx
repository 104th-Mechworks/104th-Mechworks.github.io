"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Award } from "lucide-react"
import type { CommandStaffMember } from "@/data/types"

export default function CommandStaffDetail({
  member,
  onBackAction,
}: {
  member: CommandStaffMember
  onBackAction: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative h-[500px] w-full flex items-center justify-center">
            <Image
              src={member.imageSrc || "/placeholder.svg"}
              alt={`${member.rank} ${member.name}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold font-mono text-zinc-200">{member.name}</h2>
              <span className="px-3 py-1 bg-zinc-800 rounded-sm text-sm font-mono text-blue-400">{member.rank}</span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-mono text-zinc-300 mb-2">ROLE</h3>
                <p className="text-zinc-400">{member.role}</p>
              </div>

              <div>
                <h3 className="text-lg font-mono text-zinc-300 mb-2">PROFILE</h3>
                <p className="text-zinc-400">{member.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {member.achievements && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-blue-400" />
                  <h3 className="text-base font-mono text-zinc-300">ACHIEVEMENTS</h3>
                </div>
                <ul className="space-y-2 pl-5 list-disc text-zinc-400 text-sm">
                  {member.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {member.commandDuties && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield size={18} className="text-blue-400" />
                  <h3 className="text-base font-mono text-zinc-300">COMMAND DUTIES</h3>
                </div>
                <ul className="space-y-2 pl-5 list-disc text-zinc-400 text-sm">
                  {member.commandDuties.map((history, index) => (
                    <li key={index}>{history}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
