import type { Rule } from "."

// Maturity Rules
const maturityRules: Rule[] = [
  {
    id: "maturity-standards",
    code: "§103",
    title: "Maturity Standards",
    description: "Expected maturity levels for battalion members.",
    importance: "high",
    category: "maturity",
    type: "rule",
    sections: [
      {
        id: "maturity-standards-1",
        code: "§103.1",
        title: "Age and Maturity Requirements",
        content: [
          "BFII is rated a 16+, we expect all members of the community to act accordingly.",
          "Along with being aware the majority of members are adults. We expect a good level of maturity.",
          "Individuals who are deemed as too imature for this milsim will be swiftly removed.",
        ],
      },
      {
        id: "maturity-standards-2",
        code: "§103.2",
        title: "Conflict Management",
        content: [
          "This unit operates as a close group. We do not have time for internal conflict, toxic behaviour or drama.",
          "If you do end up being involved in any such situations: Discipline will be strict and simple.",
          "Upon too many issues you will be spoken to and either removed or demoted down to CT to be re-trained.",
        ],
      },
    ],
  },
]

export default maturityRules
