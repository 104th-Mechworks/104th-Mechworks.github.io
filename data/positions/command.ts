import type { Position } from "../types"

export const commandPositions: Position[] = [
  {
    title: "Fleet Commanding Officer",
    code: "FCO",
    description: "Oversees the entire fleet across all 4 branches of the milsim and checks in with Army, SFC, SOD commands.",
    requirements: ["MCDR"],
    responsibilities: [
      "Oversee the milsim and steer the direction of the milsim",
      "Head of fleet command and command staff",
    ],

  },
  {
    title: "Fleet Executive",
    code: "FXO",
    description: "2nd in command of the fleet",
    requirements: ["SCDR", "MSHL"],
    responsibilities: [
      "Advise the fleet commanding officer",
      "Oversee the day to day running of the milsim",
      "Oversee army or starfighter corps operations",
      "Give advice to relevant branch leadership",
    ],
  },
]
