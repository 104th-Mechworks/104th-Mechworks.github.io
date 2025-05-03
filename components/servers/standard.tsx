"use client"

import { Activity, Clock } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Server } from "@/data/types"
import Breadcrumb from "../breadcrumb"

export default function StandardServer({
  server,
  onServerListClick,
  showBreadcrumb = true,
}: {
  server: Server
  onServerListClick: () => void
  showBreadcrumb?: boolean
}) {
  return (
    <motion.div
      key="standard-server-details"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {server.departments?.map((dept, index) => (
              <div key={index} className="bg-zinc-800 p-3 rounded-sm">
                <span className="text-sm font-mono text-zinc-300">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
