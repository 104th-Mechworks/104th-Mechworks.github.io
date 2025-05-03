import type { Server } from "../../types"
import { triumphantWings } from "./wings"

export const triumphantServer: Server = {
  id: "triumphant",
  name: "Triumphant",
  description: "Starfighter hub for air and space operations",
  imageSrc: "/images/triumphant.png",
  status: "ONLINE",
  purpose:
    "Coordination center for all air and space combat operations. Houses starfighter squadrons and flight training facilities.",
  commandingOfficer: "COM Snips",
  wings: triumphantWings,
  hasCustomStructure: true,
}

export { triumphantWings }
