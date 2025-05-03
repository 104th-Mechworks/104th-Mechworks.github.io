import type { QualificationPathway } from "../../types"

export const riflemanQualification: QualificationPathway = {
  name: "Rifleman",
  icon: "Rifle",
  description: "Assualt pathway",
  cadre: {
    headCadre: "LT Xiash",
    sectorCadres: {
      "01": "LT Xiash",
      "02": "2LT Clax",
      "03": "SGM Kurlig",
    },
  },
  rewards: ["Access to CR-2 blaster rifle", "Grey hood helmet attatchment", "Infantry combat certification"],
  requirementPhases: [
    {
      phase: "Phase I",
      requirements: ["Using the DC-15A", "Top 3 overall"],
    },
    {
      phase: "Phase II",
      requirements: ["Using the DC-15A", "70 eliminations before boarding", "110 eliminations overall"],
    },
    {
      phase: "Phase III",
      requirements: ["Using the CR-2", "85 eliminations before boarding", "120 eliminations overall"],
    },
  ],
  nextQualifications: [
    {
      name: "Airborne",
      icon: "Aerial",
      description: "Advanced aerial deployment training",
      rewards: ["Airbourne Helmet"],
      isAdvanced: true,
      classifiedRequirements: true,
    },
  ],
}
