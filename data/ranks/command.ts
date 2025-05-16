import type { Rank } from "../types"

export const commandRanks: Rank[] = [
  {
    rank: "Marshal Commander",
    code: "MCDR",
    description: "Commander of the 104th Fleet",
    insigniaPath: "/images/ranks/MCDR.webp",
    category: "fleet-command",
    level: "FC-1",
    additionalInfo: {
      responsibilities: [
        "Overall command of the 104th Battalion",
        "Strategic planning for all operations",
        "Final authority on all battalion matters",
        "Direct liaison with Jedi Generals",
      ],
      qualifications: [
        "Minimum 1 year of service in Command Staff",
        "Exceptional leadership record",
        "Advanced tactical training certification",
      ],
      reportsTo: "Jedi General",
    },
  },
  {
    rank: "Senior Commander",
    code: "SCDR",
    description: "Advisor to the Marshal Commander",
    insigniaPath: "/images/ranks/SCDR.webp",
    category: "fleet-command",
    level: "FC-2",
    additionalInfo: {
      responsibilities: [
        "Direct support to the Marshal Commander",
        "Oversight of battalion operations",
        "Command in the Marshal Commander's absence",
        "Strategic planning and analysis",
      ],
      qualifications: [
        "Previous service as Battalion Commander",
        "Advanced command training",
        "Strategic operations certification",
      ],
      reportsTo: "Marshal Commander",
    },
  },
  {
    rank: "Air Marshal",
    code: "MSHL",
    description: "Advisor to the Marshal Commander",
    insigniaPath: "/images/ranks/marshal.png",
    category: "fleet-command",
    level: "FC-2",
    additionalInfo: {
      responsibilities: [
        "Command of all air and space operations",
        "Strategic planning for aerial combat",
        "Coordination between ground and air forces",
        "Fleet deployment and management",
      ],
      qualifications: ["Previous service as Commodore", "Advanced flight certification", "Fleet command training"],
      reportsTo: "Marshal Commander",
    },
  },
]
