import type { QualificationPathway } from "../../../types"

export const aerialQualification: QualificationPathway = {
  name: "Aerial",
  icon: "Aerial",
  description: "Basic jetpack operations",
  cadre: {
    headCadre: "SGT Datti",
    sectorCadres: {
      "01": "CPL Snare",
      "02": "SGM Blllzo",
      "03": "CPL Scali",
    },
  },
  rewards: ["Basic jetpack certification", "Aerial mobility training", "High-ground tactical advantage training"],
  requirementPhases: [
    {
      phase: "Phase I",
      requirements: [
        "Complete jetpack safety course",
        "Pass equipment handling assessment",
        "Complete basic flight controls training",
      ],
    },
    {
      phase: "Phase II",
      requirements: [
        "Pass basic flight maneuvers assessment",
        "Complete emergency procedures training",
        "Pass hover and stability test",
      ],
    },
    {
      phase: "Phase III",
      requirements: [
        "Complete aerial combat basics",
        "Pass tactical deployment exercise",
        "Complete final qualification assessment",
      ],
    },
  ],
  nextQualifications: [
    {
      name: "Adv Aerial",
      icon: "CloudLightning",
      description: "Advanced jetpack combat maneuvers",
      cadre: {
        headCadre: "ASGT Dalen",
        sectorCadres: {
          "01": "SGT Datti",
          "02": "AMAJ Vanok",
          "03": "SGM Ollie",
        },
      },
      rewards: [
        "Advanced aerial combat certification",
        "Specialized jetpack modifications",
        "Aerial assault team eligibility",
        "High-altitude operation authorization",
      ],
      isAdvanced: true,
      classifiedRequirements: true,
    },
  ],
}
