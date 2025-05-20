import type { Position } from "../../types"

export const arcPositions: Position[] = [
  {
    title: "Admissions Officer",
    code: "AAO",
    description: "Oversees and maintains standards for the ARC pipeline",
    requirements: ["ACDR"],
    responsibilities: [
      "Oversee ARC Pipeline",
      "Maintain standards",
      "Work the Executive Officers and Trooper Commanding Officers",
      "Other responsibilities are classified",
    ],
  },
  {
    title: "Executive Officer",
    code: "AXEC",
    description: "2nd in command of the ARC program and specialise in a specific sector",
    requirements: ["AMAJ"],
    responsibilities: [
      "Assist the ARC Commanding Officer",
      "Oversee the ARC program",
      "Other responsibilities are classified",
    ],
  },
  {
    title: "Troop Commander",
    code: "TCDR",
    description: "Leads a Troop of ARC troopers",
    requirements: ["ACPT"],
    responsibilities: [
      "Oversee a Troop of ARC troopers",
      "Oversee selection and candidacy of new ARCs",
      "Resolve issues within the Troop",
      "Senior liason between the troop and the rest of the milsim",
      "Other responsibilities are classified",
    ],
  },
    {
    title: "Troop Liaison",
    code: "TL",
    description: "Liaison between the Troop and the rest of the milsim",
    requirements: ["AT", "ASGT", "ALT"],
    responsibilities: [
      "Liaison between the Troop and the rest of the milsim",
      "Other responsibilities are classified",
    ],
  },
]
