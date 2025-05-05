import type { Position } from "@/data"

export const arcPositions: Position[] = [
  {
    title: "Admissions Officer",
    code: "ACDR",
    description: "Oversees and maintains standards for the ARC pipeline",
    requirements: ["Classified"],
    responsibilities: [
      "Oversee ARC Pipeline",
      "Maintain standards",
      "Work the Executive Officers and Trooper Commanding Officers",
    ],
  },
  {
    title: "Executive Officer",
    code: "AMAJ",
    description: "2nd in command of the ARC program and assist the ACDR",
    requirements: ["Classified"],
    responsibilities: [
      "Assist the ARC Commanding Officer",
      "Oversee the ARC program",
    ],
  },
  {
    title: "Troop Commander",
    code: "ACPT",
    description: "Leads a Troop of ARC troopers",
    requirements: ["Classified"],
    responsibilities: [
      "Oversee a Troop of ARC troopers",
      "Oversee selection and candidacy of new ARCs",
      "Resolve issues within the Troop",
      "Senior liason betwene the troop and the rest of the milsim",
    ],
    // equipment: ["Standard ARC Armor", "Advanced Communications", "Tactical Display"],
  },
]
