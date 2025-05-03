"use client"
import { AnimatePresence } from "framer-motion"
import type { Server, Department, Company, Wing, SpecialDepartment, Troop } from "@/data/types"
import KMCServer from "./servers/kmc"
import RASServer from "./servers/ras"
import StandardServer from "./servers/standard"
import ResilientServer from "./servers/resilient"
import TriumphantServer from "./servers/triumphant"
import RavagerServer from "./servers/ravager"

export default function ServerDetail({
  server,
  onBack,
  onServerListClick,
  showBreadcrumb = true,
  onDepartmentClick,
  departments,
  selectedDepartment,
  companies,
  onCompanyClick,
  selectedCompany,
  wings,
  onWingClick,
  selectedWing,
  onSpecialDepartmentClick,
  selectedSpecialDepartment,
  onTroopClick,
  selectedTroop,
}: {
  server: Server
  onBack: () => void
  onServerListClick: () => void
  showBreadcrumb?: boolean
  onDepartmentClick?: (department: Department) => void
  departments?: Department[]
  selectedDepartment?: Department | null
  companies?: Company[]
  onCompanyClick?: (company: Company) => void
  selectedCompany?: Company | null
  wings?: Wing[]
  onWingClick?: (wing: Wing) => void
  selectedWing?: Wing | null
  onSpecialDepartmentClick?: (department: SpecialDepartment) => void
  selectedSpecialDepartment?: SpecialDepartment | null
  onTroopClick?: (troop: Troop) => void
  selectedTroop?: Troop | null
}) {
  // Render the appropriate server component based on the server ID
  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {server.id === "kmc" ? (
          <KMCServer server={server} onServerListClick={onServerListClick} showBreadcrumb={showBreadcrumb} />
        ) : server.id === "ras" ? (
          <RASServer
            server={server}
            onServerListClick={onServerListClick}
            showBreadcrumb={showBreadcrumb}
            onDepartmentClick={onDepartmentClick}
            departments={departments}
            selectedDepartment={selectedDepartment}
          />
        ) : server.id === "resilient" ? (
          <ResilientServer
            server={server}
            onServerListClick={onServerListClick}
            showBreadcrumb={showBreadcrumb}
            onCompanyClick={onCompanyClick}
            selectedCompany={selectedCompany}
          />
        ) : server.id === "triumphant" ? (
          <TriumphantServer
            server={server}
            onServerListClick={onServerListClick}
            showBreadcrumb={showBreadcrumb}
            onWingClick={onWingClick}
            selectedWing={selectedWing}
          />
        ) : server.id === "ravager" ? (
          <RavagerServer
            server={server}
            onServerListClick={onServerListClick}
            showBreadcrumb={showBreadcrumb}
            selectedDepartment={selectedSpecialDepartment}
            onDepartmentClick={onSpecialDepartmentClick}
            selectedTroop={selectedTroop}
            onTroopClick={onTroopClick}
          />
        ) : (
          <StandardServer server={server} onServerListClick={onServerListClick} showBreadcrumb={showBreadcrumb} />
        )}
      </AnimatePresence>
    </div>
  )
}
