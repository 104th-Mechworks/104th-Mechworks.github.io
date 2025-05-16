import type { Rule } from "../rules"

// Reporting Policy
const reportingPolicies: Rule[] = [
  {
    id: "incident-reporting",
    code: "§216",
    title: "Incident Reporting Procedures",
    description: "Guidelines for reporting incidents and issues within the battalion.",
    importance: "high",
    category: "reporting",
    type: "policy",
    sections: [
      {
        id: "incident-reporting-1",
        code: "§216.1",
        title: "Reporting Channels",
        content: [
          "Internal issues should be raised through your Chain of Command.",
          "Helmet violations should be directed to the Helmet Security Team.",
          "External or 3rd Party (members not in the 104th) issues should be directed to the Desert Troopers.",
          "Sensitive matters may be escalated to appropriate department heads.",
        ],
      },
    ],
  },
]

export default reportingPolicies
