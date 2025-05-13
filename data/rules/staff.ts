import type { Rule } from "."

// Staff General Rules
const staffGeneralRules: Rule[] = [
  {
    id: "staff-authority",
    title: "Staff Authority and Limits",
    description: "Scope and limitations of staff authority within the battalion.",
    importance: "staff-only",
    category: "staff",
    type: "rule",
    sections: [
      {
        id: "staff-authority-1",
        title: "Command Structure",
        content: [
          "Exercise authority only within your assigned area of responsibility.",
          "Defer to higher-ranking staff in matters beyond your jurisdiction.",
          "Consult with relevant department heads before cross-departmental decisions.",
          "Document use of authority in all significant situations.",
        ],
      },
      {
        id: "staff-authority-2",
        title: "Disciplinary Actions",
        content: [
          "Follow the disciplinary action matrix for consistent enforcement.",
          "Obtain approval before issuing major disciplinary actions.",
          "Document all warnings and actions in the staff reporting system.",
          "Recuse yourself from disciplinary matters involving personal conflicts.",
        ],
      },
    ],
  },
  {
    id: "staff-meetings",
    title: "Staff Meeting Protocols",
    description: "Procedures and expectations for battalion staff meetings.",
    importance: "staff-only",
    category: "staff",
    type: "rule",
    sections: [
      {
        id: "staff-meetings-1",
        title: "Attendance Requirements",
        content: [
          "Attend all mandatory staff meetings for your rank and position.",
          "Notify senior staff at least 24 hours before any absence.",
          "Prepare all required reports and materials before meetings.",
          "Review meeting minutes even when unable to attend.",
        ],
      },
      {
        id: "staff-meetings-2",
        title: "Meeting Conduct",
        content: [
          "Arrive promptly at the scheduled start time.",
          "Maintain professional demeanor throughout discussions.",
          "Present information concisely and accurately.",
          "Follow the established agenda and speaking order.",
        ],
      },
    ],
  },
]

export default staffGeneralRules
