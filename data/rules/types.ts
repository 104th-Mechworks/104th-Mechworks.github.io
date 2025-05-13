// Define types for rules and policies
export interface Rule {
  id: string
  title: string
  description: string
  sections?: RuleSection[]
  category:
    | "raid"
    | "discord"
    | "discord-content"
    | "maturity"
    | "staff-rules"
    | "qualifications"
    | "kmc"
    | "staff"
    | "class-transfer"
    | "qual-dropping"
    | "helmets"
    | "reporting"
    | "activity"
    | "medbay"
    | "ban-appeals"
    | "strikes"
    | "milsim"
  type: "rule" | "policy"
  importance: "critical" | "high" | "standard" | "staff-only"
}

export interface RuleSection {
  id: string
  title: string
  content: string[]
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
