import type { Rank } from "../types"

export const navalRanks: Rank[] = [
  {
    rank: "Naval Commander",
    code: "NCDR",
    description: "Retired CPT / MAJ",
    insigniaPath: "/images/ranks/NCDR.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: [
        "Advisory role to active command",
        "Training oversight",
        "Strategic planning assistance",
        "Mentoring officers",
      ],
      qualifications: ["Previous service as Captain or Major", "Retirement eligibility", "Advisory training"],
      notableMembers: ["Kix", "Coric"],
      reportingTo: "Marshal Commander",
    },
  },
  {
    rank: "Lieutenant Commander",
    code: "LTCDR",
    description: "Retired LT",
    insigniaPath: "/images/ranks/LTCDR.webp",
    category: "high-officer",
    additionalInfo: {
      responsibilities: [
        "Advisory role to active officers",
        "Training assistance",
        "Administrative support",
        "Mentoring junior officers",
      ],
      qualifications: ["Previous service as Lieutenant", "Retirement eligibility", "Advisory training"],
      notableMembers: ["Coric", "Kano"],
      reportingTo: "Naval Commander",
    },
  },
  {
    rank: "Naval Lieutenant",
    code: "NLT",
    description: "Retired 2LT",
    insigniaPath: "/images/ranks/NLT.webp",
    category: "officer",
    additionalInfo: {
      responsibilities: [
        "Advisory role to active officers",
        "Training assistance",
        "Administrative support",
        "Mentoring junior officers",
      ],
      qualifications: ["Previous service as 2nd Lieutenant", "Retirement eligibility", "Advisory training"],
      notableMembers: ["Kano", "Zeer"],
      reportingTo: "Lieutenant Commander",
    },
  },
  {
    rank: "Petty Officer 1st Class",
    code: "PO1",
    description: "Retired SGM",
    insigniaPath: "/images/ranks/PO1.webp",
    category: "officer",
    additionalInfo: {
      responsibilities: [
        "Advisory role to active NCOs",
        "Training assistance",
        "Administrative support",
        "Mentoring enlisted personnel",
      ],
      qualifications: ["Previous service as Sergeant Major", "Retirement eligibility", "Advisory training"],
      notableMembers: ["Zeer", "Attie"],
      reportingTo: "Naval Lieutenant",
    },
  },
  {
    rank: "Petty Officer 2nd Class",
    code: "PO2",
    description: "Retired SGT",
    insigniaPath: "/images/ranks/PO2.webp",
    category: "nco",
    additionalInfo: {
      responsibilities: [
        "Advisory role to active NCOs",
        "Training assistance",
        "Administrative support",
        "Mentoring enlisted personnel",
      ],
      qualifications: ["Previous service as Sergeant", "Retirement eligibility", "Advisory training"],
      notableMembers: ["Attie", "Del"],
      reportingTo: "Petty Officer 1st Class",
    },
  },
  {
    rank: "Petty Officer 3rd Class",
    code: "PO3",
    description: "Retired CPL",
    insigniaPath: "/images/ranks/PO3.webp",
    category: "nco",
    additionalInfo: {
      responsibilities: [
        "Advisory role to active NCOs",
        "Training assistance",
        "Administrative support",
        "Mentoring enlisted personnel",
      ],
      qualifications: ["Previous service as Corporal", "Retirement eligibility", "Advisory training"],
      notableMembers: ["Del", "Atin"],
      reportingTo: "Petty Officer 2nd Class",
    },
  },
]
