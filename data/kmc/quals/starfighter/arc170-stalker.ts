import type { QualificationPathway } from "../../../types"

export const arc170StalkerQualification: QualificationPathway = {
  name: "ARC-170 Stalker",
  icon: "ARC-170",
  description: "Operation of ARC-170 starfighter",
  cadre: {
    headCadre: "COM Snips",
    sectorCadres: {
      "01": "COM Snips",
      "02": "FCPT Stryfe",
      "03": "WCDR Dys",
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
      description: "Advanced aerial deployment training",
      rewards: ["ACE Fighter Helmet", "Actis-class Light Interceptor"],
      isAdvanced: true,
      classifiedRequirements: true,
    },
  ],
}
