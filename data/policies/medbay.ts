import type { Rule } from "../rules"

// Medbay Policy
const medbayPolicies: Rule[] = [
  {
    id: "medical-services",
    title: "Medical Services Access",
    description: "Procedures for accessing battalion medical services.",
    importance: "standard",
    category: "medbay",
    type: "policy",
    sections: [
      {
        id: "medical-services-1",
        title: "Routine Services",
        content: [
          "Schedule routine check-ups through the medical portal.",
          "Present identification at all medical appointments.",
          "Follow all pre-appointment instructions precisely.",
          "Arrive 15 minutes before scheduled appointment time.",
        ],
      },
      {
        id: "medical-services-2",
        title: "Emergency Services",
        content: [
          "Use emergency channel for immediate medical assistance.",
          "Report all injuries sustained during operations, even minor ones.",
          "Follow triage protocols during mass casualty situations.",
          "Provide accurate information to medical personnel.",
        ],
      },
    ],
  },
  {
    id: "medical-clearance",
    title: "Medical Clearance Policy",
    description: "Requirements for medical clearance for duties and operations.",
    importance: "high",
    category: "medbay",
    type: "policy",
    sections: [
      {
        id: "medical-clearance-1",
        title: "Operational Clearance",
        content: [
          "Complete medical evaluation before returning to duty after injury.",
          "Obtain clearance for specialized operations with unique physical demands.",
          "Update medical records after any significant health changes.",
          "Disclose all relevant medical conditions that may affect performance.",
        ],
      },
      {
        id: "medical-clearance-2",
        title: "Fitness Standards",
        content: [
          "Maintain minimum fitness standards for your role and unit.",
          "Complete fitness assessments as scheduled by medical department.",
          "Follow prescribed rehabilitation programs completely.",
          "Request modified duty assignment for temporary medical limitations.",
        ],
      },
    ],
  },
]

export default medbayPolicies
