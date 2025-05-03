import type { Server } from "../../types"
import { rasDepartments } from "./departments"

export const rasServer: Server = {
  id: "ras",
  name: "RAS Vanguard",
  description: "Intelligence hub made of different departments",
  imageSrc: "/images/ras.png",
  status: "ACTIVE",
  purpose:
    "Mobile intelligence gathering and analysis center. Provides tactical information to all battalion operations.",
  departments: [],
  commandingOfficer: "MCDR Dark",
  hasCustomDepartments: true,
}

export { rasDepartments }
