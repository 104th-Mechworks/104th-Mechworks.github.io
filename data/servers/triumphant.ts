import type { Server } from "../types"

export const triumphantServer: Server = {
  id: "triumphant",
  name: "Triumphant",
  description: "Starfighter hub for air and space operations",
  imageSrc: "/images/triumphant.png",
  status: "ONLINE",
  purpose:
    "Coordination center for all air and space combat operations. Houses starfighter squadrons and flight training facilities.",
  departments: ["Fighter Command", "Bomber Division", "Reconnaissance", "Flight Training", "Maintenance"],
  commandingOfficer: "Commodore Hawk",
}
