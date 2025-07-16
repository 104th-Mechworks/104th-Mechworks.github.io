import type { Rank } from "../types"

export const armyRanks: Rank[] = [
  {
    rank: "Battalion Commander",
    code: "BCDR",
    description: "Commander of the Army",
    insigniaPath: "/images/ranks/CDR.png",
    category: "fleet-command",
    level: "FC-1",
    additionalInfo: {
      responsibilities: [
        "Overall command of infantry and armoured units",
        "Tactical planning for ground operations",
        "Resource allocation for infantry units",
        "Coordination with army commanders and captains",
      ],
      eligiblePositions: ["ACO"],
      reportsTo: "Marshal Commander",
    },
  },
  {
    rank: "Clone Commander",
    code: "CDR",
    description: "Commander of Console Sector",
    insigniaPath: "/images/ranks/CDR.png",
    category: "command-staff",
    level: "CS-2",
    additionalInfo: {
      responsibilities: [
        "Command of assigned army sector",
        "Management of army companies",
        "Coordination with battalion commander",
      ],
      eligiblePositions: ["AXO", "CC"],
      reportsTo: "Battalion Commander",
    },
  },
  {
    rank: "Major",
    code: "MAJ",
    description: "Junior Command Staff member, usually assigned a specific task",
    insigniaPath: "/images/ranks/MAJ.png",
    category: "command-staff",
    level: "CS-1",
    additionalInfo: {
      responsibilities: [
        "Given a specific assignment within the unit",
        "Work with various members towards their assigned task",
      ],
      eligiblePositions: ["N/A"],
      reportsTo: "Command Staff",
    },
  },
  {
    rank: "Captain",
    code: "CPT",
    description: "Head of an Army Company",
    insigniaPath: "/images/ranks/CPT.png",
    category: "officer",
    level: "O-3",
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
    insigniaPath: "/images/ranks/LT.png",
    category: "officer",
    level: "O-2",
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
    rank: "2nd Lieutenant",
    code: "2LT",
    description: "Officer",
    insigniaPath: "/images/ranks/2LT.png",
    category: "officer",
    level: "O-1",
    additionalInfo: {
      responsibilities: [
          "Platoon leadership",
          "Training of new Officers",
          "Squad coordination"
      ],
      eligiblePositions: ["PCO", "PXO", "PNCO"],
      reportsTo: "Lieutenant",
    },
  },
  {
    rank: "Warrant Officer",
    code: "WO",
    description: "Special Rank only available by appointment of fleet command",
    insigniaPath: "/images/ranks/WO.png",
    category: "snco",
    level: "NCO-5",
    additionalInfo: {
      responsibilities: [
          "Work with various members across the fleet",
          "Assist in training and operations"
      ],
      eligiblePositions: ["CNCO", "PNCO", "SNCO", "FTL"],
      reportsTo: "Command Staff",
    },
  },
  {
    rank: "Sergeant Major",
    code: "SGM",
    description: "Senior NCO",
    insigniaPath: "/images/ranks/SGM.png",
    category: "snco",
    level: "NCO-4",
    additionalInfo: {
      responsibilities: [
          "Various administrative tasks",
          "Advise and assist platoon and company command",
      ],
      eligiblePositions: ["CNCO", "PXO", "PNCO", "SL"],
      reportsTo: "2nd Lieutenant",
    },
  },
  {
    rank: "Sergeant",
    code: "SGT",
    description: "Senior Army NCO",
    insigniaPath: "/images/ranks/SGT.png",
    category: "nco",
    level: "NCO-3",
    additionalInfo: {
      responsibilities: [
          "Squad leadership",
          "Training of lower staff",
          "Raid hosting",
          "Administrative tasks"
      ],
      eligiblePositions: ["PNCO", "SL", "SNCO"],
      reportsTo: "Sergeant Major",
    },
  },
  {
    rank: "Corporal",
    code: "CPL",
    description: "Junior NCO",
    insigniaPath: "/images/ranks/CPL.png",
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
    insigniaPath: "/images/ranks/LCPL.png",
    category: "nco",
    level: "NCO-1",
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
    insigniaPath: "/images/ranks/CT.png",
    category: "base",
    level: "E-0",
    additionalInfo: {
      responsibilities: ["Maintain consistent activity"],
      eligiblePositions: ["FTL"],
      reportsTo: "Lance Corporal",
    },
  },
]
