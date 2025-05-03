import type { Server } from "../types"

export const mainServer: Server = {
  id: "main",
  name: "Main Server",
  description: "Central hub for all operations",
  imageSrc: "/images/104th.png",
  status: "ONLINE",
  purpose:
    "Command and control center for the 104th Battalion. Houses the primary communications array and strategic operations center.",
  departments: ["Command", "Operations", "Intelligence", "Logistics", "Training"],
  commandingOfficer: "Marshal Commander Wolffe",
}
