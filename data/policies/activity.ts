import type { Rule } from "../rules"

// Activity Policy
const activityPolicies: Rule[] = [
  {
    id: "activity-requirements",
    title: "Activity Requirements",
    description: "Minimum participation standards for battalion members.",
    importance: "high",
    category: "activity",
    type: "policy",
    sections: [
      {
        id: "activity-requirements-1",
        title: "Attendance Intervals",
        content: [
          "1st-15th each month: First attendance interval.",
          "16th-31st each month: Second attendance interval.",
        ],
      },
      {
        id: "activity-reqs",
        title: "Attendance Requirements",
        content: [
          "Attendance Requirememnts per Interval",
          "CT: 2 Attendance",
          "LCPL+: 2 Attendance with one raid as the lead or host.",
          "SGT+: 2 Attendance with one as a Main Server host or lead",
        ],
      },
      {
        id: "activity-absence",
        title: "Absence Allowances",
        content: [
          "If LOA/NFFC for 5-9 days, half requirements required.",
          "If LOA/NFFC for 10+ days, no requirements required.",
          "If IRL Emergencies take place (e.g. car accidents, injuries, etc.) no requirements required.",
        ],
      },
    ],
  },
  {
    id: "inactivity-procedures",
    title: "Inactivity Strike System",
    description: "Processes for handling member inactivity and consequences.",
    importance: "standard",
    category: "activity",
    type: "policy",
    sections: [
      {
        id: "inactivity-strikes",
        title: "Strike System",
        content: [
          "STRIKE 1: Pinged Warning/Inquiry.",
          "STRIKE 2: Formal Warning from Both CCO & PCO.",
          "STRIKE 3: Mandatory Meeting With MAJ & CCO.",
          "STRIKE 4: Demotion.",
          "Strike Removal: Hit requirements 2 intervals in a row to remove 1 strike.",
        ],
      },
    ],
  },
]

export default activityPolicies
