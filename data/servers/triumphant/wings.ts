import type { Wing } from "../../types"

export const triumphantWings: Wing[] = [
  {
    id: "obsidian-owls",
    name: "OBSIDIAN OWLS",
    description: "Elite night operations and stealth reconnaissance wing",
    commandingOfficer: "WCDR Moody",
    executiveOfficer: "GCPT Entity",
    nonCommissionedOfficer: "VACANT",
    platforms: ["Xbox"],
    squadrons: [
      {
        id: "cinder",
        name: "Cinder Squadron",
        // specialization: "Interceptor Operations",
        // platform: "",
        leadership: {
          sco: "SL Bond", // Squadron Commander
          sxo: "FLT Aramis", // Squadron Executive Officer
          snco: "VACANT", // Squadron Non-Commissioned Officer
        },
        flights: ["TBC"],
      },
      {
        id: "amethyst",
        name: "Amethyst Squadron",
        // specialization: "Bomber Operations",
        platform: "Xbox",
        leadership: {
          sco: "FLT Ca'tra",
          sxo: "FLT Darrs",
          snco: "FLT Sear",
        },
        flights: ["Delta Flight", "Echo Flight", "Foxtrot Flight"],
      },
    ],
  },
  {
    id: "eagles-tallons",
    name: "EAGLE'S TALLONS",
    description: "Precision strike and air superiority wing",
    commandingOfficer: "WCDR Gambit",
    executiveOfficer: "GCPT Kadalk",
    nonCommissionedOfficer: "SL Antidote",
    platforms: ["PlayStation"],
    squadrons: [
      {
        id: "talon",
        name: "Thunderbirds Squadron",
        // specialization: "Multi-role Operations",
        platform: "PlayStation",
        leadership: {
          sco: "SL Egis",
          sxo: "FCPT Contrail",
          snco: "FLT Axe",
        },
        flights: ["Alpha Flight", "Bravo Flight", "Charlie Flight"],
      },
      {
        id: "raptor",
        name: "Ospreys Squadron",
        // specialization: "Strike Operations",
        platform: "PC",
        leadership: {
          sco: "VACANT",
          sxo: "VACANT",
          snco: "VACANT",
        },
        flights: ["TBC"],
      },
    ],
  },
  {
    id: "phantom-wing",
    name: "MIDNIGHT RAVENS WING",
    description: "Stealth operations and reconnaissance",
    commandingOfficer: "WCDR Dys",
    executiveOfficer: "GCPT Watershock",
    nonCommissionedOfficer: "VACANT",
    platforms: ["PC"],
    squadrons: [
      {
        id: "shadow",
        name: "MIDNIGHT RAVENS Squadron",
        specialization: "Stealth Reconnaissance",
        // platform: "PC",
        leadership: {
          sco: "VACANT",
          sxo: "VACANT",
          snco: "VACANT",
        },
        flights: ["TBC"],
      },
      {
        id: "eclipse",
        name: "Eclipse Squadron",
        specialization: "Night Operations",
        platform: "Multi-Platform",
        leadership: {
          sco: "SL Dusk",
          sxo: "FCPT Twilight",
          snco: "FLT Midnight",
        },
        flights: ["TBC"],
      },
    ],
  },
]
