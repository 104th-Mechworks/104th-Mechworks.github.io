import type { Rank } from "../types"

export const navalRanks: Rank[] = [
  {
    rank: "Naval Commander",
    code: "NCDR",
    description: "Retired CPT / MAJ",
    insigniaPath: "/images/ranks/NCDR.webp",
    category: "high-officer",
    level: "HO-1",
    additionalInfo: {
      responsibilities: [
        "Administrative support",
        "Moderate servers",
      ],
      reportsTo: "N/A",
    },
  },
  {
    rank: "Lieutenant Commander",
    code: "LTCDR",
    description: "Retired LT",
    insigniaPath: "/images/ranks/LTCDR.webp",
    category: "high-officer",
    level: "HO-2",
    additionalInfo: {
      responsibilities: [
        "Administrative support",
        "Moderate servers",
      ],
      reportsTo: "N/A",
    },
  },
  {
    rank: "Naval Lieutenant",
    code: "NLT",
    description: "Retired 2LT",
    insigniaPath: "/images/ranks/NLT.webp",
    category: "officer",
    level: "O-1",
    additionalInfo: {
      responsibilities: [
        "Administrative support",
        "Moderate servers",
      ],
      reportsTo: "N/A",
    },
  },
  {
    rank: "Petty Officer 1st Class",
    code: "PO1",
    description: "Retired SGM",
    insigniaPath: "/images/ranks/PO1.webp",
    category: "officer",
    level: "O-2",
    additionalInfo: {
      responsibilities: [
        "Administrative support",
        "Moderate channels",
      ],
      reportsTo: "N/A",
    },
  },
  {
    rank: "Petty Officer 2nd Class",
    code: "PO2",
    description: "Retired SGT",
    insigniaPath: "/images/ranks/PO2.webp",
    category: "nco",
    level: "NCO-1",
    additionalInfo: {
      responsibilities: [
        "Administrative support",
      ],
      reportsTo: "N/A",
    },
  },
  {
    rank: "Petty Officer 3rd Class",
    code: "PO3",
    description: "Retired CPL",
    insigniaPath: "/images/ranks/PO3.webp",
    category: "nco",
    level: "NCO-2",
    additionalInfo: {
      responsibilities: [
        "Advisory role to active NCOs",
        "Administrative support",
      ],
      reportsTo: "N/A",
    },
  },
]
