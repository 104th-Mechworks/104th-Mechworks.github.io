import type { QualificationPathway } from "../../types"

export const tx130DriverQualification: QualificationPathway = {
  name: "TX-130 Driver",
  icon: "Tank",
  description: "Operation of TX-130 Saber-class fighter tank",
  cadre: {
    headCadre: "LT Evolution",
    sectorCadres: {
      "01": "CTP Dymphna",
      "02": "LT Monferno",
      "03": "CPT Igneel",
    },
  },
  rewards: ["TX-130 operation certification", "Bacara helmet", "Priority for artilery"],
  requirementPhases: [
    {
      phase: "Phase I",
      requirements: [
        "Using the DC-15 or DC-15LE",
        "65 eliminations before boarding",
        "85 eliminations",
        "25,000 score minimum",
        "Top 2 candidates will advance",
      ],
    },
    {
      phase: "Phase II",
      requirements: [
        "Using the TX-130 on ground and DC-15 or DC-15LE on ship",
        "70 eliminations before boarding with the TX-130",
        "20 eliminations on ship with DC-15 or DC-15LE",
        "90 eliminations overall",
        "34,000 score minimum",
      ],
    },
    {
      phase: "Phase III",
      requirements: [
        "Using the TX-130",
        "5 Objective captures",
        "2 Hero eliminations",
        "40 Killstrak",
        "Objective captures and hero eliminations must be comunicated clearly",
      ],
    },
    {
      phase: "Phase IV",
      requirements: ["Using TX-130", "2,200 SPM", "100 eliminations overall", "3 AAT elminiations"],
    },
  ],
}
