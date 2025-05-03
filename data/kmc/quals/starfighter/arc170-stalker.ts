import type { QualificationPathway } from "../../../types"

export const arc170StalkerQualification: QualificationPathway = {
  name: "ARC-170 Stalker",
  icon: "ARC-170",
  description: "Operation of ARC-170 starfighter",
  cadre: {
    headCadre: "WCDR Odd Ball",
    sectorCadres: {
      "01": "GCPT Tucker",
      "02": "SL Warthog",
      "03": "FCPT Slammer",
    },
  },
  rewards: ["ARC-170 pilot certification", "Long-range patrol authorization", "Multi-crew coordination training"],
  requirementPhases: [
    {
      phase: "Phase I",
      requirements: [
        "Complete basic flight training",
        "Pass ARC-170 systems examination",
        "Complete simulator training program",
      ],
    },
    {
      phase: "Phase II",
      requirements: [
        "Pass formation flying assessment",
        "Complete weapons systems training",
        "Pass navigation certification",
      ],
    },
    {
      phase: "Phase III",
      requirements: [
        "Complete 20 successful combat sorties",
        "Pass multi-crew coordination assessment",
        "Complete final qualification flight",
      ],
    },
  ],
  nextQualifications: [
    {
      name: "ACE Pilot",
      icon: "BadgePlus",
      description: "Elite pilot certification",
      cadre: {
        headCadre: "COM Hawk",
        sectorCadres: {
          "01": "Air CPT Axe",
          "02": "WCDR Matchstick",
          "03": "GCPT Swoop",
        },
      },
      rewards: [
        "Ace pilot designation",
        "Priority starfighter assignment",
        "Squadron leadership eligibility",
        "Custom fighter markings",
      ],
      isAdvanced: true,
      classifiedRequirements: true,
    },
  ],
}
