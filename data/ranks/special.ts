import type { Rank } from "../types"

export const arcRanks: Rank[] = [
  {
    rank: "ARC Commander",
    code: "ACDR",
    description: "In charge of the ARC Program, in Command Staff",
    insigniaPath: "/images/ranks/CDR.webp",
    category: "command-staff",
    level: "CS-1",
    additionalInfo: {
      responsibilities: [
        "Classified",
      ],
      reportsTo: "Marshal Commander",
    },
  },
  {
    rank: "ARC Major",
    code: "AMAJ",
    description: "In charge of the ACPTs and is part of Command staff. Same power as a MAJ",
    insigniaPath: "/images/ranks/AMAJ.webp",
    category: "command-staff",
    level: "CS-2",
    additionalInfo: {
      responsibilities: [
        "Classiefied",
      ],
      qualifications: ["Previous service as ARC Captain", "Advanced tactical planning", "Leadership assessment"],
      reportsTo: "ARC Commander",
    },
  },
  {
    rank: "ARC Captain",
    code: "ACPT",
    description: "ARC Admissions Officer, same power as a CPT",
    insigniaPath: "/images/ranks/ACPT.webp",
    category: "high-officer",
    level: "HO-1",
    additionalInfo: {
      responsibilities: [
        "Classified",
      ],
      reportsTo: "ARC Major",
    },
  },
  {
    rank: "ARC Lieutenant",
    code: "ALT",
    description: "ARC Admissions Officer, same power as a LT",
    insigniaPath: "/images/ranks/ALT.webp",
    category: "high-officer",
    level: "HO-2",
    additionalInfo: {
      responsibilities: ["Classified"],
      reportsTo: "ARC Captain",
    },
  },
  {
    rank: "ARC Sergeant",
    code: "ASGT",
    description: "ARC Staff, same power as a 2LT",
    insigniaPath: "/images/ranks/ASGT.webp",
    category: "officer",
    level: "O-1",
    additionalInfo: {
      responsibilities: ["Classified"],
      reportsTo: "ARC Lieutenant",
    },
  },
  {
    rank: "ARC Trooper",
    code: "AT",
    description:
      "Troopers found to be the best of the best out of staff and CTs. Has the same power as a SGM. ATs may also host scouting sessions",
    insigniaPath: "/images/ranks/AT.webp",
    category: "officer",
    level: "O-2",
    additionalInfo: {
      responsibilities: [
        "Classified",
      ],
      reportsTo: "ARC Sergeant",
    },
  },
]

export const rcRanks: Rank[] = [
  {
    rank: "RC Commander",
    code: "CDR",
    description: "Program Admissions Officer",
    insigniaPath: "/images/ranks/CDR.webp",
    category: "command-staff",
    level: "CS-1",
    additionalInfo: {
      responsibilities: [
        "Command of RC program",
        "Classified",
      ],
      reportsTo: "Marshal Commander",
    },
  },
  // {
  //   rank: "RC Major",
  //   code: "MAJ",
  //   description: "Second in command of RC program",
  //   insigniaPath: "/images/ranks/RCMAJ.webp",
  //   category: "command-staff",
  //   additionalInfo: {
  //     responsibilities: [
  //       "Second in command of RC program",
  //       "Covert operations oversight",
  //       "Training program management",
  //       "Resource allocation",
  //     ],
  //     qualifications: [
  //       "Previous service as RC Captain",
  //       "Advanced covert operations certification",
  //       "Leadership assessment",
  //     ],
  //     reportsTo: "RC Commander",
  //   },
  // },
  // {
  //   rank: "RC Captain",
  //   code: "CPT",
  //   description: "RC Team Leader",
  //   insigniaPath: "/images/ranks/RCCPT.webp",
  //   category: "high-officer",
  //   additionalInfo: {
  //     responsibilities: [
  //       "RC team leadership",
  //       "Mission planning and execution",
  //       "Team training oversight",
  //       "Equipment requisition",
  //     ],
  //     qualifications: [
  //       "Previous service as RC Lieutenant",
  //       "Advanced tactical leadership",
  //       "Specialized equipment training",
  //     ],
  //     reportsTo: "RC Major",
  //   },
  // },
  // {
  //   rank: "RC Lieutenant",
  //   code: "LT",
  //   description: "RC Team Second",
  //   insigniaPath: "/images/ranks/RCLT.webp",
  //   category: "high-officer",
  //   additionalInfo: {
  //     responsibilities: [
  //       "Second-in-command of RC team",
  //       "Mission execution",
  //       "Training implementation",
  //       "Equipment maintenance",
  //     ],
  //     qualifications: ["Previous service as RC 2nd Lieutenant", "Advanced tactical training", "Leadership assessment"],
  //     reportsTo: "RC Captain",
  //   },
  // },
  // {
  //   rank: "RC 2nd Lieutenant",
  //   code: "2LT",
  //   description: "RC Team Specialist",
  //   insigniaPath: "/images/ranks/RC2LT.webp",
  //   category: "high-officer",
  //   additionalInfo: {
  //     responsibilities: [
  //       "Specialized role in RC team",
  //       "Technical expertise",
  //       "Equipment operation",
  //       "Mission support",
  //     ],
  //     qualifications: [
  //       "Previous service as RC Sergeant Major",
  //       "Technical specialization",
  //       "Advanced equipment training",
  //     ],
  //     reportsTo: "RC Lieutenant",
  //   },
  // },
  // {
  //   rank: "RC Sergeant Major",
  //   code: "SGM",
  //   description: "Senior RC NCO",
  //   insigniaPath: "/images/ranks/RCSGM.webp",
  //   category: "high-officer",
  //   additionalInfo: {
  //     responsibilities: ["Senior enlisted advisor", "Training oversight", "Equipment maintenance", "Team coordination"],
  //     qualifications: ["Previous service as RC Sergeant", "Advanced combat experience", "Leadership assessment"],
  //     reportsTo: "RC 2nd Lieutenant",
  //   },
  // },
  {
    rank: "RC Sergeant",
    code: "SGT",
    description: "Third Rank of the RCs",
    insigniaPath: "/images/ranks/RCSGT.webp",
    category: "high-officer",
    level: "HO-1",
    additionalInfo: {
      responsibilities: ["Classified"],
      reportsTo: "RC Commander",
    },
  },
  {
    rank: "RC Corporal",
    code: "CPL",
    description: "Second Rank of the RCs",
    insigniaPath: "/images/ranks/RCCPL.webp",
    category: "high-officer",
    level: "HO-2",
    additionalInfo: {
      responsibilities: ["Classified"],
      reportsTo: "RC Sergeant",
    },
  },
  {
    rank: "RC Private",
    code: "PVT",
    description: "First Rank of RCs",
    insigniaPath: "/images/ranks/RCPVT.webp",
    category: "officer",
    level: "O-2",
    additionalInfo: {
      responsibilities: ["Classified"],
      reportsTo: "RC Corporal",
    },
  },
]

export const specialRanks = {
  arc: arcRanks,
  rc: rcRanks,
}
