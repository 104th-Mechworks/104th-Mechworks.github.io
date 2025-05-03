"use client"

import { AnimatePresence } from "framer-motion"
import type { Server, Department, Company } from "@/data/types"
import KMCServer from "./servers/kmc"
import RASServer from "./servers/ras"
import ResilientServer from "./servers/resilient"
import StandardServer from "./servers/standard"

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
}) {
  // Render the appropriate server component based on server ID
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
        ) : (
          <StandardServer server={server} onServerListClick={onServerListClick} showBreadcrumb={showBreadcrumb} />
        )}
      </AnimatePresence>
    </div>
  )
}
