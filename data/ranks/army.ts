import type { Rank } from "../types"

export const armyRanks: Rank[] = [
  {
    rank: "Battalion Commander",
    code: "BCDR",
    description: "Commander of the Army",
    insigniaPath: "/images/ranks/CDR.webp",
    category: "fleet-command",
    level: "FC-3",
    additionalInfo: {
      responsibilities: [
        "Overall command of ground forces",
        "Tactical planning for ground operations",
        "Resource allocation for infantry units",
        "Coordination with other battalion elements",
      ],
      eligiblePositions: ["ACO"],
      reportsTo: "Marshal Commander",
    },
  },
  {
    rank: "Clone Commander",
    code: "CDR",
    description: "Commander of Console Sector",
    insigniaPath: "/images/ranks/CDR.webp",
    category: "command-staff",
    level: "CS-1",
    additionalInfo: {
      responsibilities: [
        "Command of assigned army sector",
        "Tactical deployment of troops",
        "Mission planning and execution",
        "Direct battlefield command",
      ],
      eligiblePositions: ["AXO", "CC"],
      reportsTo: "Battalion Commander",
    },
  },
  {
    rank: "Major",
    code: "MAJ",
    description: "Junior Command Staff member, usually assigned a specific task",
    insigniaPath: "/images/ranks/MAJ.webp",
    category: "command-staff",
    level: "CS-2",
    additionalInfo: {
      responsibilities: [
        "Work with their assigned console commander",
        "Work with various members towards their assigned task",
      ],
      eligiblePositions: ["N/A"],
      reportsTo: "Clone Commander",
    },
  },
  {
    rank: "Captain",
    code: "CPT",
    description: "Head of an Army Company",
    insigniaPath: "/images/ranks/CPT.webp",
    category: "high-officer",
    level: "HO-1",
    additionalInfo: {
      responsibilities: [
        "Lead a company",
        "Work with the rest of company command and the platoon commanders",
        "Report any issues to the Console Commander",
        "Ensure all company members are trained and qualified for their positions",
        "Enforce staff activity standards"
      ],
      eligiblePositions: ["CCO"],
      reportsTo: "Clone Commander",
    },
  },
  {
    rank: "Lieutenant",
    code: "LT",
    description: "2nd highest rank within a company, usually the CXO or a PCO",
    insigniaPath: "/images/ranks/LT.webp",
    category: "high-officer",
    level: "HO-2",
    additionalInfo: {
      responsibilities: [
        "Work closely with the Captain",
        "Platoon leadership",
        "Training oversight",
        "Administrative duties",
      ],
      eligiblePositions: ["CXO", "PCO"],
      reportsTo: "Captain",
    },
  },
  {
    rank: "Warrant Officer",
    code: "WO",
    description: "Special Rank only available by appointment of fleet command",
    insigniaPath: "/images/ranks/WO.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: ["Work with various members across the fleet", "Assist in training and operations"],
      eligiblePositions: ["CNCO", "PNCO", "SNCO", "FTL"],
      reportsTo: "Fleet Command",
    },
  },
  {
    rank: "2nd Lieutenant",
    code: "2LT",
    description: "Officer",
    insigniaPath: "/images/ranks/2LT.webp",
    category: "officer",
    level: "O-1",
    additionalInfo: {
      responsibilities: ["Platoon leadership", "Training implementation", "Mission execution", "Squad coordination"],
      qualifications: [
        "Previous service as Warrant Officer",
        "Officer candidate school",
        "Field leadership assessment",
      ],
      eligiblePositions: ["PCO", "PXO", "PNCO"],
      reportsTo: "Lieutenant",
    },
  },
  {
    rank: "Sergeant Major",
    code: "SGM",
    description: "Junior Officer",
    insigniaPath: "/images/ranks/SGM.webp",
    category: "officer",
    level: "O-2",
    additionalInfo: {
      responsibilities: [
        "Various administrative tasks",
      ],
      eligiblePositions: ["CNCO", "PXO", "PNCO", "SL"],
      reportsTo: "Warrant Officer",
    },
  },
  {
    rank: "Sergeant",
    code: "SGT",
    description: "Senior Army NCO",
    insigniaPath: "/images/ranks/SGT.webp",
    category: "nco",
    level: "NCO-1",
    additionalInfo: {
      responsibilities: ["Squad leadership", "Training of lower staff", "Raid hosting", "Administrative tasks"],
      eligiblePositions: ["PNCO", "SL", "SNCO"],
      reportsTo: "Sergeant Major",
    },
  },
  {
    rank: "Corporal",
    code: "CPL",
    description: "Junior NCO",
    insigniaPath: "/images/ranks/CPL.webp",
    category: "nco",
    level: "NCO-2",
    additionalInfo: {
      responsibilities: ["Squad and Fireteam leadership", "Training aspiring staff", "Administrative support"],
      eligiblePositions: ["SL", "SNCO", "FTL"],
      reportsTo: "Sergeant",
    },
  },
  {
    rank: "Lance Corporal",
    code: "LCPL",
    description: "Senior Trooper - Staff in Training",
    insigniaPath: "/images/ranks/LCPL.webp",
    category: "nco",
    level: "NCO-3",
    additionalInfo: {
      responsibilities: ["Encouraging attendance", "Administrative Support"],
      eligiblePositions: ["SNCO", "FTL"],
      reportsTo: "Corporal",
    },
  },
  {
    rank: "Clone Trooper",
    code: "CT",
    description: "Standard Trooper",
    insigniaPath: "/images/ranks/CT.webp",
    additionalInfo: {
      responsibilities: ["Maintain consistent activity"],

      reportsTo: "Lance Corporal",
    },
  },
]
