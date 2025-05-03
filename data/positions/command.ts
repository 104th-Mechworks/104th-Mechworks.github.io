import type { Position } from "../types"

export const commandPositions: Position[] = [
  {
    title: "Fleet Commanding Officer",
    code: "FCO",
    description: "Oversees the entire fleet across all 4 branches",
    requirements: ["Rank: MCDR"],
    responsibilities: [
      "Oversee the milsim and steer the direction of the milsim",
      "Head of fleet command and command staff",
    ],
    equipment: [
      "Command-level clearance",
      "Strategic planning tools",
      "Fleet communications access",
      "Command staff uniform",
    ],
  },
  {
    title: "Fleet Executive",
    code: "FC",
    description: "2nd in command of the fleet",
    requirements: ["Rank: SCDR or MSHL", "Previous command experience", "Strategic planning expertise"],
    responsibilities: [
      "Advise the fleet commanding officer",
      "Oversee the day to day running of the milsim",
      "Oversee army or starfighter corps operations",
      "Give advice to relevant branch leadership",
    ],
    equipment: [
      "Command-level clearance",
      "Strategic planning tools",
      "Fleet communications access",
      "Command staff uniform",
    ],
  },
]
