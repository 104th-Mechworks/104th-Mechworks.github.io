import type { Rule } from "../rules"

// Qualification Dropping Policy
const qualDroppingPolicies: Rule[] = [
  {
    id: "qual-removal",
    title: "Qualification Removal Procedures",
    description: "Process for voluntarily or involuntarily dropping qualifications.",
    importance: "standard",
    category: "qual-dropping",
    type: "policy",
    sections: [
      {
        id: "qual-removal-1",
        title: "Voluntary Removal",
        content: [
          "Submit qualification drop request to your qualification officer.",
          "Return all specialized equipment related to the qualification.",
          "Complete exit interview explaining reason for dropping.",
          "30-day waiting period before reapplication for same qualification.",
        ],
      },
      {
        id: "qual-removal-2",
        title: "Involuntary Removal",
        content: [
          "Qualifications may be revoked for failure to maintain standards.",
          "Three missed refresher trainings may result in automatic removal.",
          "Disciplinary actions may include qualification suspension or removal.",
          "Appeals must be filed within 7 days of involuntary removal.",
        ],
      },
    ],
  },
  {
    id: "qual-reinstatement",
    title: "Qualification Reinstatement",
    description: "Procedures for regaining previously held qualifications.",
    importance: "standard",
    category: "qual-dropping",
    type: "policy",
    sections: [
      {
        id: "qual-reinstatement-1",
        title: "Reinstatement Process",
        content: [
          "Submit reinstatement request after waiting period completion.",
          "Complete abbreviated assessment to verify continued proficiency.",
          "May require endorsement from qualification instructor.",
          "Reinstatement after involuntary removal requires commander approval.",
        ],
      },
      {
        id: "qual-reinstatement-2",
        title: "Expedited Reinstatement",
        content: [
          "Critical operational needs may allow expedited reinstatement.",
          "Requires approval from department head or higher.",
          "Still requires verification of proficiency standards.",
          "Temporary reinstatements may be granted pending full assessment.",
        ],
      },
    ],
  },
]

export default qualDroppingPolicies
