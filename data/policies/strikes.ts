import type { Rule } from "../rules"

// Strikes Policy
const strikesPolicies: Rule[] = [
  {
    id: "strike-system",
    title: "Disciplinary Strike System",
    description: "Framework for progressive discipline within the battalion.",
    importance: "high",
    category: "strikes",
    type: "policy",
    sections: [
      {
        id: "strike-system-1",
        title: "Strike Issuance",
        content: [
          "Minor infractions: Verbal warning before strike issuance.",
          "Moderate infractions: Immediate single strike.",
          "Serious infractions: Multiple strikes or immediate suspension.",
          "All strikes documented in member's disciplinary record.",
        ],
      },
      {
        id: "strike-system-2",
        title: "Strike Consequences",
        content: [
          "One strike: Written warning and counseling session.",
          "Two strikes: Temporary restrictions on privileges or activities.",
          "Three strikes: Probationary status and remedial training.",
          "Four strikes: Suspension or removal from battalion.",
        ],
      },
    ],
  },
  {
    id: "strike-removal",
    title: "Strike Expiration and Removal",
    description: "Procedures for strike expiration and early removal.",
    importance: "standard",
    category: "strikes",
    type: "policy",
    sections: [
      {
        id: "strike-removal-1",
        title: "Standard Expiration",
        content: [
          "Strikes expire after 60 days of good conduct.",
          "Expired strikes remain in record but no longer count toward total.",
          "Multiple active strikes expire sequentially, not simultaneously.",
          "Strike expiration paused during leaves of absence.",
        ],
      },
      {
        id: "strike-removal-2",
        title: "Early Removal",
        content: [
          "Complete assigned remedial training to qualify for early removal.",
          "Demonstrate exceptional conduct and improvement.",
          "Request strike review after 30 days of perfect conduct.",
          "Early removal requires approval from issuing officer or higher.",
        ],
      },
    ],
  },
]

export default strikesPolicies
