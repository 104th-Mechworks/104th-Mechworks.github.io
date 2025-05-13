import type { Rule } from "../rules"
import classTransferPolicies from "./class-transfer"
import qualDroppingPolicies from "./qual-dropping"
import helmetPolicies from "./helmets"
import reportingPolicies from "./reporting"
import activityPolicies from "./activity"
import medbayPolicies from "./medbay"
import banAppealsPolicies from "./ban-appeals"
import strikesPolicies from "./strikes"

// Combine all policies
export const allPolicies: Rule[] = [
  ...classTransferPolicies,
  ...qualDroppingPolicies,
  ...helmetPolicies,
  ...reportingPolicies,
  ...activityPolicies,
  ...medbayPolicies,
  ...banAppealsPolicies,
  ...strikesPolicies,
]

// Export policies by category
export const policiesByCategory = {
  "class-transfer": classTransferPolicies,
  "qual-dropping": qualDroppingPolicies,
  helmets: helmetPolicies,
  reporting: reportingPolicies,
  activity: activityPolicies,
  medbay: medbayPolicies,
  "ban-appeals": banAppealsPolicies,
  strikes: strikesPolicies,
}
