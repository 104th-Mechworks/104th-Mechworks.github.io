import type { QualificationPathway } from "../../../types"

export const medicQualification: QualificationPathway = {
  name: "Medic",
  icon: "Medic",
  description: "Field medicine and emergency care",
  cadre: {
    headCadre: "NCDR Kix",
    sectorCadres: {
      "01": "LTCDR Coric",
      "02": "NLT Kano",
      "03": "PO1 Zeer",
    },
  },
  rewards: [
    "Combat medic certification",
    "Medical equipment authorization",
    "Triage priority training",
    "Field surgery basics",
  ],
  requirementPhases: [
    {
      phase: "Phase I",
      requirements: [
        "Complete anatomy and physiology examination",
        "Pass basic medical procedures training",
        "Complete field triage assessment",
      ],
    },
    {
      phase: "Phase II",
      requirements: [
        "Pass emergency response assessment",
        "Complete trauma care training",
        "Pass medical equipment certification",
      ],
    },
    {
      phase: "Phase III",
      requirements: [
        "Complete field medicine practical",
        "Pass combat casualty care assessment",
        "Complete final qualification scenario",
      ],
    },
    {
      phase: "Phase IV",
      requirements: [
        "Complete specialized treatment protocols",
        "Pass advanced field surgery basics",
        "Complete medical evacuation procedures",
      ],
    },
  ],
}
