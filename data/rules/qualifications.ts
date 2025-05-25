import type { Rule } from "."

// Qualification Rules
const qualificationRules: Rule[] = [
  {
    id: "qual-requirements",
    code: "§112",
    title: "Qualification Requirements",
    description: "Rules for earning and using qualifications.",
    importance: "high",
    category: "qualifications",
    type: "rule",
    sections: [
      {
        id: "qual-requirements-1",
        code: "§112.1",
        title: "Earning Qualifications",
        content: [
          "Qualifications can only be earned on your designated console. But can be played on all consoles once earnt.",
          "All Qualifcations are earnt through The Kaminoan Military Complex (KMC)",
        ],
      },
    ],
  },
]

export default qualificationRules
