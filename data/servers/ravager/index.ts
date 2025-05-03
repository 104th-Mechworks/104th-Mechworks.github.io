import type { SpecialDepartment } from "@/data/types"
import { arcTroops } from "./arc-troops"
import { rcTroops } from "./rc-troops"

export const ravagerSpecialDepartments: SpecialDepartment[] = [
  {
    id: "arc",
    name: "Advanced Recon Commandos (ARC)",
    description: "Elite clone troopers with specialized training in reconnaissance, sabotage, and assassination.",
    color: "#f009c9", // Pink/magenta color for ARC
    commandingOfficer: 'ACDR Mako"',
    executiveOfficers: [
      { position: "01", name: 'VACANT' },
      { position: "02", name: 'AMAJ Jesse' },
      { position: "03", name: 'AMAJ Vanok' },
    ],
    troops: arcTroops,
  },
  {
    id: "rc",
    name: "Republic Commandos (RC)",
    description: "Elite special forces units trained for covert operations and high-risk missions.",
    color: "#00dfff", // Cyan color for RC
    commandingOfficer: 'CDR Fox',
    troops: rcTroops,
  },
]

export const ravagerServer = {
  id: "ravager",
  name: "Ravager",
  description: "Special Forces server for ARC and RC operations",
  imageSrc: "/images/ravager.png",
  status: "CLASSIFIED",
  purpose: "Specialized training and operations for Advanced Recon Commandos (ARC) and Republic Commandos (RC).",
  commandingOfficer: "CDR Fox",
  specialDepartments: ravagerSpecialDepartments,
}
