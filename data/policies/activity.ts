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
        title: "Standard Requirements",
        content: [
          "Attend minimum of two official events per month.",
          "Log in to battalion systems at least once every 14 days.",
          "Respond to official communications within 72 hours.",
          "Participate in at least one training session per month.",
        ],
      },
      {
        id: "activity-requirements-2",
        title: "Rank-Specific Requirements",
        content: [
          "Officers: Additional leadership event attendance required.",
          "Specialists: Regular participation in specialty-related activities.",
          "Instructors: Conduct minimum number of training sessions monthly.",
          "Command staff: Weekly presence in command meetings and activities.",
        ],
      },
    ],
  },
  {
    id: "inactivity-procedures",
    title: "Inactivity Procedures",
    description: "Processes for handling member inactivity and leaves of absence.",
    importance: "standard",
    category: "activity",
    type: "policy",
    sections: [
      {
        id: "inactivity-procedures-1",
        title: "Leave of Absence",
        content: [
          "Submit LOA requests at least 7 days in advance when possible.",
          "Maximum standard LOA period is 30 days without special approval.",
          "Extended LOAs require commander approval and justification.",
          "Return from LOA requires check-in with commanding officer.",
        ],
      },
      {
        id: "inactivity-procedures-2",
        title: "Inactivity Response",
        content: [
          "14 days inactive: Automatic check-in notification sent.",
          "21 days inactive: Commanding officer notification and follow-up.",
          "30 days inactive without LOA: Placement on inactive roster.",
          "60 days inactive without LOA: Subject to removal from battalion.",
        ],
      },
    ],
  },
]

export default activityPolicies
