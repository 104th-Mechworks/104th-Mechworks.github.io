import type { QualificationPathway } from "../../types"

export const antiArmourQualification: QualificationPathway = {
  name: "Anti-Armour",
  icon: "Anti-Armour",
  description: "Heavy weapons training focused on vehicle destruction",
  cadre: {
    headCadre: "LT Evolution",
    sectorCadres: {
      "01": "CTP Dymphna",
      "02": "LT Monferno",
      "03": "CPT Igneel",
    },
  },
  rewards: ["Access to T-21", "Gunnar plated on top of the helmet"],
  requirementPhases: [
    {
      phase: "Phase I",
      requirements: [
        "Using DC-15 or DC-15LE",
        "50 eliminations before boarding",
        "70 eliminations overall",
        "FIrst 3 attendees that reach top 5 on team",
      ],
    },
    {
      phase: "Phase II",
      requirements: [
        "Using the T-21",
        "60 eliminations before boarding",
        "85 eliminations",
        "2 AAT Eliminations",
        "25,000 score minimum",
      ],
    },
    {
      phase: "Phase III",
      requirements: ["Using the T-21", "1,600 SPM average across 3 CS games"],
    },
  ],
}
