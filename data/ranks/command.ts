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
      ],
      reportsTo: "N/A",
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
        "Senior Advisor to all fleet commanders",
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
        "Advisor for Starfighter Corps operations",
        "Support for the Marshal Commander",
        "Oversight of fleet operations",
      ],
      reportsTo: "Marshal Commander",
    },
  },
]
