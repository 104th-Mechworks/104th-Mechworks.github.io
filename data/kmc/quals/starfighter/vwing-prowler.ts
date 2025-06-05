import type { QualificationPathway } from "../../../types"

export const vwingProwlerQualification: QualificationPathway = {
  name: "V-Wing Prowler",
  icon: "V-Wing",
  description: "Operation of Alpha-3 Nimbus-class V-wing starfighter",
  cadre: {
    headCadre: "COM Snips",
    sectorCadres: {
      "01": "COM Snips",
      "02": "FCPT Stryfe",
      "03": "WCDR Dys",
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
      description: "Advanced aerial deployment training",
      rewards: ["ACE Interceptor Helmet", "Actis-class Light Interceptor"],
      isAdvanced: true,
      classifiedRequirements: true,
    },
  ],
}
