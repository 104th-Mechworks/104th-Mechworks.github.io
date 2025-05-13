import type { Rule } from "../rules"

// Ban Appeals Policy
const banAppealsPolicies: Rule[] = [
  {
    id: "ban-process",
    title: "Ban Implementation Process",
    description: "Procedures for implementing and documenting bans.",
    importance: "staff-only",
    category: "ban-appeals",
    type: "policy",
    sections: [
      {
        id: "ban-process-1",
        title: "Ban Authority",
        content: [
          "Temporary bans (< 7 days) may be issued by department heads.",
          "Extended bans (7-30 days) require approval from command staff.",
          "Permanent bans must be approved by battalion commander.",
          "All bans must be documented with specific violation details.",
        ],
      },
      {
        id: "ban-process-2",
        title: "Ban Implementation",
        content: [
          "Provide clear explanation of ban reason to affected member.",
          "Document ban in disciplinary database with all relevant evidence.",
          "Set specific ban duration and conditions for return if applicable.",
          "Notify relevant department heads of ban implementation.",
        ],
      },
    ],
  },
  {
    id: "appeal-process",
    title: "Ban Appeal Process",
    description: "Procedures for appealing disciplinary bans.",
    importance: "high",
    category: "ban-appeals",
    type: "policy",
    sections: [
      {
        id: "appeal-process-1",
        title: "Filing an Appeal",
        content: [
          "Appeals must be submitted within 7 days of ban implementation.",
          "Use official appeal form available on battalion website.",
          "Include all relevant information and any new evidence.",
          "One appeal permitted per ban incident.",
        ],
      },
      {
        id: "appeal-process-2",
        title: "Appeal Review",
        content: [
          "Appeals reviewed by officer one rank above issuing authority.",
          "Review completed within 14 days of submission.",
          "Appellant may be contacted for additional information.",
          "Decision on appeal is final and binding.",
        ],
      },
    ],
  },
]

export default banAppealsPolicies
