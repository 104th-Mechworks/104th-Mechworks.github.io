"use client"

import { motion, AnimatePresence } from "framer-motion"
import ServerCard from "@/components/server-card"
import ServerDetail from "@/components/server-detail"
import Breadcrumb from "@/components/breadcrumb"
import { servers } from "@/data"
import { rasDepartments } from "@/data/servers/ras"
import { resilientCompanies } from "@/data/servers/resilient"
import { triumphantWings } from "@/data/servers/triumphant"
import { useState, useEffect } from "react"
import type { Department, Company, Wing, SpecialDepartment, Troop } from "@/data/types"

interface ServersSectionProps {
  getBreadcrumbItems: (items: any[]) => any[]
  initialServerId?: string
  initialSpecialDepartment?: string
  onNavigateToMainQualifications?: () => void // Add this prop
}

export default function ServersSection({
  getBreadcrumbItems,
  initialServerId,
  initialSpecialDepartment,
  onNavigateToMainQualifications, // Destructure the new prop
}: ServersSectionProps) {
  const [selectedServer, setSelectedServer] = useState<string | null>(initialServerId || null)
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null)
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [selectedWing, setSelectedWing] = useState<Wing | null>(null)
  const [selectedSpecialDepartment, setSelectedSpecialDepartment] = useState<SpecialDepartment | null>(null)
  const [selectedTroop, setSelectedTroop] = useState<Troop | null>(null)

  // Handle initial navigation from other sections
  useEffect(() => {
    if (initialServerId) {
      setSelectedServer(initialServerId)

      // If we have a special department specified (for Ravager server)
      if (initialServerId === "ravager" && initialSpecialDepartment) {
        // Find the special department
        const specialDepts = [
          { id: "arc", name: "ARC Troopers" },
          { id: "rc", name: "Republic Commandos" },
        ]

        const dept = specialDepts.find((d) => d.id === initialSpecialDepartment)
        if (dept) {
          setSelectedSpecialDepartment({
            id: dept.id,
            name: dept.name,
          } as SpecialDepartment)
        }
      }
    }
  }, [initialServerId, initialSpecialDepartment])

  const handleServerClick = (serverId: string) => {
    setSelectedServer(serverId)
    setSelectedDepartment(null)
    setSelectedCompany(null)
    setSelectedWing(null)
    setSelectedSpecialDepartment(null)
    setSelectedTroop(null)
  }

  const handleBackClick = () => {
    setSelectedServer(null)
    setSelectedDepartment(null)
    setSelectedCompany(null)
    setSelectedWing(null)
    setSelectedSpecialDepartment(null)
    setSelectedTroop(null)
  }

  const handleDepartmentClick = (department: Department) => {
    setSelectedDepartment(department)
  }

  const handleCompanyClick = (company: Company) => {
    setSelectedCompany(company)
  }

  const handleWingClick = (wing: Wing) => {
    setSelectedWing(wing)
  }

  const handleSpecialDepartmentClick = (department: SpecialDepartment | null) => {
    setSelectedSpecialDepartment(department)
    setSelectedTroop(null)
  }

  const handleTroopClick = (troop: Troop | null) => {
    setSelectedTroop(troop)
  }

  const selectedServerData = servers.find((server) => server.id === selectedServer)

  // Generate breadcrumb items for servers section
  const getServerBreadcrumbItems = () => {
    const items = [{ label: "SERVERS", onClick: () => setSelectedServer(null) }]

    if (selectedServer) {
      items.push({
        label: selectedServerData?.name.toUpperCase() || "",
        onClick: () => {
          setSelectedDepartment(null)
          setSelectedCompany(null)
          setSelectedWing(null)
          setSelectedSpecialDepartment(null)
          setSelectedTroop(null)
        },
      })

      if (selectedServer === "ras" && selectedDepartment) {
        items.push({
          label: selectedDepartment.name.split(" ")[2],
          onClick: () => {},
        })
      }

      if (selectedServer === "resilient" && selectedCompany) {
        items.push({
          label: selectedCompany.name,
          onClick: () => {},
        })
      }

      if (selectedServer === "triumphant" && selectedWing) {
        items.push({
          label: selectedWing.name,
          onClick: () => {},
        })
      }

      if (selectedServer === "ravager" && selectedSpecialDepartment) {
        items.push({
          label: selectedSpecialDepartment.name,
          onClick: () => setSelectedTroop(null),
        })

        if (selectedTroop) {
          items.push({
            label: selectedTroop.name,
            onClick: () => {},
          })
        }
      }
    }

    return items
  }

  return (
    <motion.div
      key="servers"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="h-px w-8 bg-blue-500"></div>
        <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">SERVERS</h2>
        <div className="h-px w-8 bg-blue-500"></div>
      </div>

      {/* Persistent breadcrumb that updates based on selection */}
      <motion.div layout className="mb-6">
        <Breadcrumb items={getServerBreadcrumbItems()} />
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedServer ? (
          <motion.div
            key="server-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ServerDetail
              server={selectedServerData!}
              onBack={handleBackClick}
              onServerListClick={() => setSelectedServer(null)}
              showBreadcrumb={false}
              onDepartmentClick={selectedServer === "ras" ? handleDepartmentClick : undefined}
              departments={selectedServer === "ras" ? rasDepartments : undefined}
              selectedDepartment={selectedDepartment}
              companies={selectedServer === "resilient" ? resilientCompanies : undefined}
              onCompanyClick={selectedServer === "resilient" ? handleCompanyClick : undefined}
              selectedCompany={selectedCompany}
              wings={selectedServer === "triumphant" ? triumphantWings : undefined}
              onWingClick={selectedServer === "triumphant" ? handleWingClick : undefined}
              selectedWing={selectedWing}
              onSpecialDepartmentClick={selectedServer === "ravager" ? handleSpecialDepartmentClick : undefined}
              selectedSpecialDepartment={selectedSpecialDepartment}
              onTroopClick={selectedServer === "ravager" ? handleTroopClick : undefined}
              selectedTroop={selectedTroop}
              onNavigateToQualificationsSection={onNavigateToMainQualifications} // Pass the prop down
            />
          </motion.div>
        ) : (
          <motion.div
            key="server-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servers.map((server) => (
              <ServerCard
                key={server.id}
                name={server.name}
                description={server.description}
                imageSrc={server.imageSrc}
                onClick={() => handleServerClick(server.id)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
