import type { QualificationPathway } from "../../../types"

export const ywingBomberQualification: QualificationPathway = {
  name: "Y-Wing Bomber",
  icon: "Y-Wing",
  description: "Operation of BTL Y-wing starfighter",
  cadre: {
    headCadre: "FO Tracker",
    sectorCadres: {
      "01": "FO Kickstart",
      "02": "PO Afterburn",
      "03": "PO Boost",
    },
  },
  rewards: ["Y-wing pilot certification", "Bombing run authorization", "Heavy ordnance handling certification"],
  requirementPhases: [
    {
      phase: "Phase I",
      requirements: [
        "Complete basic flight training",
        "Pass Y-wing systems examination",
        "Complete simulator training program",
      ],
    },
    {
      phase: "Phase II",
      requirements: [
        "Pass heavy craft handling assessment",
        "Complete ordnance systems training",
        "Pass targeting certification",
      ],
    },
    {
      phase: "Phase III",
      requirements: [
        "Complete 10 successful bombing runs",
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
