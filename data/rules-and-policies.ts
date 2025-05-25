import { type Rule, categoryNames } from "./rules"
import { allRules, rulesByCategory } from "./rules"
import { allPolicies, policiesByCategory } from "./policies"

// Combine all rules and policies
export const allRulesAndPolicies: Rule[] = [...allRules, ...allPolicies]

// Export rules and policies by category
export const rulesPoliciesByCategory = {
  ...rulesByCategory,
  ...policiesByCategory,
}

// Group by type
export const rulesByType = {
  rule: allRulesAndPolicies.filter((rule) => rule.type === "rule"),
  policy: allRulesAndPolicies.filter((rule) => rule.type === "policy"),
}

export { categoryNames }
