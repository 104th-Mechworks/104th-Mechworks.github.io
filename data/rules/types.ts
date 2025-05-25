// Define types for rules and policies
export interface RuleSection {
  id: string
  code?: string
  title: string
  content: string[]
}

export interface Rule {
  id: string
  code?: string // Added code property
  title: string
  description: string
  importance: "critical" | "high" | "standard" | "staff-only"
  category: string
  type: "rule" | "policy"
  sections: RuleSection[]
}

// Category names for display
export const categoryNames = {
  // Rules
  raid: "Raid Rules",
  discord: "Discord Rules",
  "discord-content": "Discord Content",
  maturity: "Maturity",
  "staff-rules": "Staff Rules",
  qualifications: "Qualifications",
  kmc: "KMC",
  staff: "Staff",
  milsim: "Milsim Rules",

  // Policies
  "class-transfer": "Class Transfer",
  "qual-dropping": "Qual Dropping",
  helmets: "Helmets",
  reporting: "Reporting",
  activity: "Activity",
  medbay: "Medbay",
  "ban-appeals": "Ban Appeals",
  strikes: "Strikes",
}
