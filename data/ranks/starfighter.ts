import type { Rank } from "../types"

export const starfighterRanks: Rank[] = [
  {
    rank: "Commodore",
    code: "COM",
    description: "Head of the Starfighter Corps",
    insigniaPath: "/images/ranks/COM.webp",
    category: "fleet-command",
    level: "FC-1",
    additionalInfo: {
      responsibilities: [
        "Command of starfighter operations",
        "Resource allocation for starfighter wings",
        "Coordination with ground forces",
      ],
      reportsTo: "Air Marshal",
    },
  },
  {
    rank: "Wing Commander",
    code: "WCDR",
    description: "2IC of the Starfighter Corps",
    insigniaPath: "/images/ranks/Air_CPT.webp",
    category: "command-staff",
    level: "CS-2",
    additionalInfo: {
      responsibilities: [
        "Second-in-command of starfighter corps",
        "Maintaining training standards",
        "Resource management",
      ],
      reportsTo: "Commodore",
    },
  },
  {
    rank: "Squadron Captain",
    code: "SCPT",
    description: "Head of a Starfighter Squadron",
    insigniaPath: "/images/ranks/WCDR.webp",
    category: "officer",
    level: "O-3",
    additionalInfo: {
      responsibilities: [
        "Command of starfighter wing",
        "Member management",
        "Training and operations oversight",
        "Administrative oversight",
      ],
      reportsTo: "Wing Commander",
    },
  },
  {
    rank: "Squadron Leader",
    code: "SL",
    description: "2IC of Starfighter Squadron",
    insigniaPath: "/images/ranks/GCPT.webp",
    category: "officer",
    level: "O-2",
    additionalInfo: {
      responsibilities: [
        "Assist Squadron Captain",
        "Squadron coordination",
        "Administrative duties",
      ],
      reportsTo: "Squadron Captain",
    },
  },
  {
    rank: "Flight Captain",
    code: "FCPT",
    description: "Senior Staff withing the squadron usually leading a flight",
    insigniaPath: "/images/ranks/SL.webp",
    category: "nco",
    level: "NCO-3",
    additionalInfo: {
      responsibilities: ["Flight command", "Liaise with Squadron command", "Administrative duties"],
      reportsTo: "Squadron Leader",
    },
  },
  {
    rank: "Flight Lieutenant",
    code: "FLT",
    description: "Key staff - Raid Hosts",
    insigniaPath: "/images/ranks/FCPT.webp",
    category: "nco",
    level: "NCO-2",
    additionalInfo: {
      responsibilities: ["Flight leadership", "Raid hosting", "Training new staff"],
      reportsTo: "Flight Captain",
    },
  },
  {
    rank: "Flight Officer",
    code: "FO",
    description: "Senior Pilot - Staff in Training",
    insigniaPath: "/images/ranks/FO.webp",
    category: "nco",
    level: "NCO-1",
    additionalInfo: {
      responsibilities: ["Senior pilot duties", "Administrative duties", "Support Squadron staff", "Mentoring pilot officers"],
      reportsTo: "Flight Lieutenant",
    },
  },
  {
    rank: "Pilot Officer",
    code: "PO",
    description: "Standard Pilot",
    insigniaPath: "/images/ranks/CT.webp",
    category: "base",
    level: "E-0",
    additionalInfo: {
      responsibilities: ["Maintain attendance"],
      reportsTo: "Flight Officer",
    },
  }
]
