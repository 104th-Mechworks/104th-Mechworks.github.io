import type { Rank } from "../types"

export const starfighterRanks: Rank[] = [
  {
    rank: "Commodore",
    code: "COM",
    description: "Head of the Starfighter Corps",
    insigniaPath: "/images/ranks/COM.webp",
    category: "fleet-command",
    level: "FC-3",
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
    rank: "Air Captain",
    code: "CPT",
    description: "2IC of the Starfighter Corps",
    insigniaPath: "/images/ranks/Air_CPT.webp",
    category: "command-staff",
    level: "CS-1",
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
    rank: "Wing Commander",
    code: "WCDR",
    description: "Head of Starfighter Wing",
    insigniaPath: "/images/ranks/WCDR.webp",
    category: "high-officer",
    level: "HO-1",
    additionalInfo: {
      responsibilities: [
        "Command of starfighter wing",
        "Member management",
        "Training and operations oversight",
        "Administrative oversight",
      ],
      reportsTo: "Air Captain",
    },
  },
  {
    rank: "Group Captain",
    code: "GCPT",
    description: "2IC of Starfighter Wing",
    insigniaPath: "/images/ranks/GCPT.webp",
    category: "high-officer",
    level: "HO-2",
    additionalInfo: {
      responsibilities: [
        "Second-in-command of wing",
        "Squadron coordination",
        "Administrative duties",
      ],
      reportsTo: "Wing Commander",
    },
  },
  {
    rank: "Squadron Leader",
    code: "SL",
    description: "Senior Staff - Head of Squadron",
    insigniaPath: "/images/ranks/SL.webp",
    category: "officer",
    level: "O-2",
    additionalInfo: {
      responsibilities: ["Squadron command", "Liaise with Wing command", "Administrative duties"],
      reportsTo: "Group Captain",
    },
  },
  {
    rank: "Flight Captain",
    code: "FCPT",
    description: "Key staff - Raid Hosts",
    insigniaPath: "/images/ranks/FCPT.webp",
    category: "nco",
    level: "NCO-1",
    additionalInfo: {
      responsibilities: ["Flight leadership", "Raid hosting", "Training new staff"],
      reportsTo: "Squadron Leader",
    },
  },
  {
    rank: "Flight Lieutenant",
    code: "FLT",
    description: "Staff - Raid Hosts",
    insigniaPath: "/images/ranks/FLT.webp",
    category: "nco",
    level: "NCO-2",
    additionalInfo: {
      responsibilities: ["Flight leadership", "Raid hosting", "Training assistance", "Administrative duties"],
      reportsTo: "Flight Captain",
    },
  },
  {
    rank: "Flight Officer",
    code: "FO",
    description: "Senior Pilot - Staff in Training",
    insigniaPath: "/images/ranks/FO.webp",
    category: "nco",
    level: "NCO-3",
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
    // category: "nco",
    additionalInfo: {
      responsibilities: ["Maintain attendance"],
      reportsTo: "Flight Officer",
    },
  },
]
