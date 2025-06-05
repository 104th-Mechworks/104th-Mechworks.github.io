import type { QualificationPathway } from "../../types"

export const arfQualification: QualificationPathway = {
  name: "ARF",
  icon: "ARF",
  description: "Advanced Recon Force training",
  cadre: {
    headCadre: "CPT Electrik",
    sectorCadres: {
      "01": "ALT Atin",
      "02": "2LT Kieboom",
      "03": "SGT Jedidiah",
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
      rewards: [
        "AT-RT operation certification",
        "AT-RT Helmet"
      ],
      isAdvanced: true,
      classifiedRequirements: true,
    },
  ],
}
