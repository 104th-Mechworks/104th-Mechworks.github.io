import type { QualificationPathway } from "../../../types"

export const vwingProwlerQualification: QualificationPathway = {
  name: "V-Wing Prowler",
  icon: "V-Wing",
  description: "Operation of Alpha-3 Nimbus-class V-wing starfighter",
  cadre: {
    headCadre: "SL Kickback",
    sectorCadres: {
      "01": "FCPT Killer",
      "02": "FLT Hez",
      "03": "FLT Sear",
    },
  },
  rewards: ["V-wing pilot certification", "Interceptor tactics training", "High-speed pursuit authorization"],
  requirementPhases: [
    {
      phase: "Phase I",
      requirements: [
        "Complete basic flight training",
        "Pass V-wing systems examination",
        "Complete simulator training program",
      ],
    },
    {
      phase: "Phase II",
      requirements: [
        "Pass high-speed maneuvers assessment",
        "Complete weapons systems training",
        "Pass intercept tactics certification",
      ],
    },
    {
      phase: "Phase III",
      requirements: [
        "Complete 15 successful intercept missions",
        "Pass squadron coordination assessment",
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
