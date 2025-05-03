import type { Server } from "../types"

export const ravagerServer: Server = {
  id: "ravager",
  name: "Ravager",
  description: "Special Forces hub for elite operations",
  imageSrc: "/images/ravager.png",
  status: "CLASSIFIED",
  purpose: "Command center for special operations and covert missions. Houses ARC and RC training facilities.",
  departments: ["ARC Operations", "RC Operations", "Covert Intelligence", "Advanced Training"],
  commandingOfficer: "ARC Commander Blitz",
}
