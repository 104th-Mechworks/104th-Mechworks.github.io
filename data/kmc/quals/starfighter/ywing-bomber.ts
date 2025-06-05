import type { QualificationPathway } from "../../../types"

export const ywingBomberQualification: QualificationPathway = {
  name: "Y-Wing Bomber",
  icon: "Y-Wing",
  description: "Operation of BTL Y-wing starfighter",
  cadre: {
    headCadre: "COM Snips",
    sectorCadres: {
      "01": "COM Snips",
      "02": "FCPT Stryfe",
      "03": "WCDR Dys",
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
      description: "Advanced aerial deployment training",
      rewards: ["ACE Bomber Helmet", "Actis-class Light Interceptor"],
      isAdvanced: true,
      classifiedRequirements: true,
    },
  ],
}
