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

import discordRules from "./discord"
import discordContentRules from "./discord-content"
import maturityRules from "./maturity"
import raidRules from "./raid"
import milsimRules from "./milsim"
import qualificationRules from "./qualifications"
import staffRules from "./staff-rules"
import kmcRules from "./kmc"
import staffGeneralRules from "./staff"

// Combine all rules
export const allRules: Rule[] = [
  ...discordRules,
  ...discordContentRules,
  ...maturityRules,
  ...raidRules,
  ...milsimRules,
  ...qualificationRules,
  ...staffRules,
  ...kmcRules,
  ...staffGeneralRules,
]

// Export rules by category
export const rulesByCategory = {
  raid: raidRules,
  discord: discordRules,
  "discord-content": discordContentRules,
  maturity: maturityRules,
  "staff-rules": staffRules,
  qualifications: qualificationRules,
  kmc: kmcRules,
  staff: staffGeneralRules,
  milsim: milsimRules,
}
