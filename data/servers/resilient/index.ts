import type { Server } from "../../types"
import { resilientCompanies } from "./companies"

export const resilientServer: Server = {
  id: "resilient",
  name: "Resilient",
  description: "Army hub for ground operations",
  imageSrc: "/images/resilient.png",
  status: "ONLINE",
  purpose: "Primary base for ground forces and infantry operations. Contains training facilities and equipment depots.",
  commandingOfficer: "BCDR Shatterstorm",
  companies: resilientCompanies,
  hasCustomStructure: true,
}

export { resilientCompanies }
