import type { Rank } from "../types"

export const arcRanks: Rank[] = [
  {
    rank: "ARC Commander",
    code: "ACDR",
    description: "In charge of the ARC Program, in Command Staff",
    insigniaPath: "/images/ranks/CDR.webp",
    category: "command-staff",
    additionalInfo: {
      responsibilities: [
        "Overall command of ARC program",
        "Strategic planning for special operations",
        "Resource allocation for ARC units",
        "Coordination with battalion command",
      ],
      qualifications: [
        "Previous service as ARC Major",
        "Advanced special operations certification",
        "Command staff training",
      ],
      notableMembers: ["Blitz", "Hammer", "Havoc"],
      reportingTo: "Marshal Commander",
    },
  },
  {
    rank: "ARC Major",
    code: "AMAJ",
    description: "In charge of the ACPTs and is part of Command staff. Same power as a MAJ",
    insigniaPath: "/images/ranks/AMAJ.webp",
    category: "command-staff",
    additionalInfo: {
      responsibilities: [
        "Command of ARC Captain teams",
        "Special operations planning",
        "Training program oversight",
        "Command staff duties",
      ],
      qualifications: ["Previous service as ARC Captain", "Advanced tactical planning", "Leadership assessment"],
      notableMembers: ["Vanok", "Colt", "Havoc"],
      reportingTo: "ARC Commander",
    },
  },
  {
    rank: "ARC Captain",
    code: "ACPT",
    description: "ARC Admissions Officer, same power as a CPT",
    insigniaPath: "/images/ranks/ACPT.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: [
        "ARC admissions oversight",
        "Training implementation",
        "Special operations execution",
        "Team leadership",
      ],
      qualifications: [
        "Previous service as ARC Lieutenant",
        "Advanced combat certification",
        "Selection process training",
      ],
      notableMembers: ["Fordo", "Hammer", "Colt"],
      reportingTo: "ARC Major",
    },
  },
  {
    rank: "ARC Lieutenant",
    code: "ALT",
    description: "ARC Admissions Officer, same power as a LT",
    insigniaPath: "/images/ranks/ALT.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: ["ARC admissions processing", "Training assistance", "Special operations", "Team leadership"],
      qualifications: ["Previous service as ARC Sergeant", "Advanced combat training", "Selection process experience"],
      notableMembers: ["Garmr", "Fives", "Echo"],
      reportingTo: "ARC Captain",
    },
  },
  {
    rank: "ARC Sergeant",
    code: "ASGT",
    description: "ARC Staff, same power as a 2LT",
    insigniaPath: "/images/ranks/ASGT.webp",
    category: "officer",
    additionalInfo: {
      responsibilities: ["ARC staff duties", "Training implementation", "Special operations", "Team leadership"],
      qualifications: ["Previous service as ARC Trooper", "Advanced combat proficiency", "Leadership assessment"],
      notableMembers: ["Dalen", "Jesse", "Kix"],
      reportingTo: "ARC Lieutenant",
    },
  },
  {
    rank: "ARC Trooper",
    code: "AT",
    description:
      "Troopers found to be the best of the best out of staff and CTs. Has the same power as a SGM. ATs may also host scouting sessions",
    insigniaPath: "/images/ranks/AT.webp",
    category: "officer",
    additionalInfo: {
      responsibilities: [
        "Special operations execution",
        "Scouting session hosting",
        "Advanced combat operations",
        "Mentoring potential ARC candidates",
      ],
      qualifications: ["Selection from CT or staff ranks", "Exceptional combat record", "Advanced training completion"],
      notableMembers: ["Fives", "Echo", "Jesse"],
      reportingTo: "ARC Sergeant",
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
    additionalInfo: {
      responsibilities: [
        "Command of RC program",
        "Covert operations planning",
        "Resource allocation",
        "Coordination with ARC program",
      ],
      qualifications: [
        "Previous service as RC Sergeant",
        "Advanced covert operations training",
        "Leadership assessment",
      ],
      notableMembers: ["Boss", "Sev"],
      reportingTo: "Marshal Commander",
    },
  },
  {
    rank: "RC Major",
    code: "MAJ",
    description: "Second in command of RC program",
    insigniaPath: "/images/ranks/RCMAJ.webp",
    category: "command-staff",
    additionalInfo: {
      responsibilities: [
        "Second in command of RC program",
        "Covert operations oversight",
        "Training program management",
        "Resource allocation",
      ],
      qualifications: [
        "Previous service as RC Captain",
        "Advanced covert operations certification",
        "Leadership assessment",
      ],
      notableMembers: ["Ordo", "Mereel"],
      reportingTo: "RC Commander",
    },
  },
  {
    rank: "RC Captain",
    code: "CPT",
    description: "RC Team Leader",
    insigniaPath: "/images/ranks/RCCPT.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: [
        "RC team leadership",
        "Mission planning and execution",
        "Team training oversight",
        "Equipment requisition",
      ],
      qualifications: [
        "Previous service as RC Lieutenant",
        "Advanced tactical leadership",
        "Specialized equipment training",
      ],
      notableMembers: ["Boss", "Niner"],
      reportingTo: "RC Major",
    },
  },
  {
    rank: "RC Lieutenant",
    code: "LT",
    description: "RC Team Second",
    insigniaPath: "/images/ranks/RCLT.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: [
        "Second-in-command of RC team",
        "Mission execution",
        "Training implementation",
        "Equipment maintenance",
      ],
      qualifications: ["Previous service as RC 2nd Lieutenant", "Advanced tactical training", "Leadership assessment"],
      notableMembers: ["Fixer", "Atin"],
      reportingTo: "RC Captain",
    },
  },
  {
    rank: "RC 2nd Lieutenant",
    code: "2LT",
    description: "RC Team Specialist",
    insigniaPath: "/images/ranks/RC2LT.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: [
        "Specialized role in RC team",
        "Technical expertise",
        "Equipment operation",
        "Mission support",
      ],
      qualifications: [
        "Previous service as RC Sergeant Major",
        "Technical specialization",
        "Advanced equipment training",
      ],
      notableMembers: ["Scorch", "Corr"],
      reportingTo: "RC Lieutenant",
    },
  },
  {
    rank: "RC Sergeant Major",
    code: "SGM",
    description: "Senior RC NCO",
    insigniaPath: "/images/ranks/RCSGM.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: ["Senior enlisted advisor", "Training oversight", "Equipment maintenance", "Team coordination"],
      qualifications: ["Previous service as RC Sergeant", "Advanced combat experience", "Leadership assessment"],
      notableMembers: ["Sev", "Fi"],
      reportingTo: "RC 2nd Lieutenant",
    },
  },
  {
    rank: "RC Sergeant",
    code: "SGT",
    description: "Third Rank of the RCs",
    insigniaPath: "/images/ranks/RCSGT.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: ["Team leadership", "Mission planning", "Training implementation", "Covert operations"],
      qualifications: ["Previous service as RC Corporal", "Advanced tactical training", "Leadership assessment"],
      notableMembers: ["Fixer", "Scorch"],
      reportingTo: "RC Sergeant Major",
    },
  },
  {
    rank: "RC Corporal",
    code: "CPL",
    description: "Second Rank of the RCs",
    insigniaPath: "/images/ranks/RCCPL.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: ["Team operations", "Training assistance", "Equipment specialization", "Covert missions"],
      qualifications: [
        "Previous service as RC Private",
        "Specialized equipment training",
        "Combat proficiency assessment",
      ],
      notableMembers: ["Darman", "Niner"],
      reportingTo: "RC Sergeant",
    },
  },
  {
    rank: "RC Private",
    code: "PVT",
    description: "First Rank of RCs",
    insigniaPath: "/images/ranks/RCPVT.webp",
    category: "officer",
    additionalInfo: {
      responsibilities: ["Basic commando operations", "Mission execution", "Equipment maintenance", "Team support"],
      qualifications: ["Selection from CT ranks", "Commando training completion", "Advanced combat certification"],
      notableMembers: ["Oiler", "Fi"],
      reportingTo: "RC Corporal",
    },
  },
]

export const specialRanks = {
  arc: arcRanks,
  rc: rcRanks,
}
