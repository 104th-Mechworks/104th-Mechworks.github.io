import type { QualificationPathway } from "../../types"

export const arfQualification: QualificationPathway = {
  name: "ARF",
  icon: "ARF",
  description: "Advanced Recon Force training",
  cadre: {
    headCadre: "ASGT Dalen",
    sectorCadres: {
      "01": "SGT Datti",
      "02": "AMAJ Vanok",
      "03": "SGM Ollie",
    },
  },
  rewards: ["ARF trooper designation", "Specialized reconnaissance equipment", "Access to stealth operations"],
  requirementPhases: [
    {
      phase: "Phase I",
      requirements: [
        "Complete basic reconnaissance training",
        "Pass stealth movement assessment",
        "Complete surveillance techniques course",
      ],
    },
    {
      phase: "Phase II",
      requirements: [
        "Pass long-range communications certification",
        "Complete intelligence gathering training",
        "Pass survival skills assessment",
      ],
    },
    {
      phase: "Phase III",
      requirements: [
        "Complete advanced reconnaissance course",
        "Pass stealth assessment with 85% score",
        "Complete final field qualification",
      ],
    },
  ],
  nextQualifications: [
    {
      name: "AT-RT Driver",
      icon: "Footprints",
      description: "Operation of All Terrain Recon Transport",
      cadre: {
        headCadre: "MAJ Liveshot",
        sectorCadres: {
          "01": "SGT Datti",
          "02": "CPL Thinker",
          "03": "SGM Poiser",
        },
      },
      rewards: [
        "AT-RT operation certification",
        "Rapid deployment specialist designation",
        "Scout walker tactical training",
      ],
      isAdvanced: true,
      classifiedRequirements: true,
    },
  ],
}
