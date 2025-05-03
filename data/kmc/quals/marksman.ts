import type { QualificationPathway } from "../../types"

export const marksmanQualification: QualificationPathway = {
  name: "Marksman",
  icon: "Marksman",
  description: "Specialist pathway",
  cadre: {
    headCadre: "MAJ Feedback",
    sectorCadres: {
      "01": "SGM Ollie",
      "02": "CPT Hondo",
      "03": "SGT Mood",
    },
  },
  rewards: ["Access to NT-242 sniper rifle", "Raised binoculars in helmet"],
  requirementPhases: [
    {
      phase: "Phase I",
      requirements: [
        "Using the Valken-38x",
        "Top 5 on podium",
        "Infiltration may be banned for combat, check with instructor",
      ],
    },
    {
      phase: "Phase II",
      requirements: ["Using the Valken-38x", "65 eliminations before boarding", "85 eliminations overall"],
    },
    {
      phase: "Phase III",
      requirements: ["Using the NT-242", "75 eliminations before boarding", "110 eliminations overall"],
    },
  ],
  nextQualifications: [
    {
      name: "Scout",
      icon: "Binoculars",
      description: "The best sharpshooters in the milsim",
      rewards: ["Scout Helmet", "Digital camo"],
      isAdvanced: true,
      classifiedRequirements: true,
    },
  ],
}
