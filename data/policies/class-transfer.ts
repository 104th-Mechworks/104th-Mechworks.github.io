import type { Rule } from "../rules"

// Class Transfer Policy
const classTransferPolicies: Rule[] = [
  {
    id: "transfer-process",
    title: "Class Transfer Process",
    description: "Procedures for requesting and processing class transfers.",
    importance: "standard",
    category: "class-transfer",
    type: "policy",
    sections: [
      {
        id: "transfer-process-1",
        title: "Eligibility Requirements",
        content: [
          "Minimum 30 days in current class before transfer request.",
          "Good standing with no active disciplinary actions.",
          "Completion of all basic training for current class.",
          "Maximum of two class transfers per six-month period.",
        ],
      },
      {
        id: "transfer-process-2",
        title: "Application Procedure",
        content: [
          "Submit transfer request form to your direct commanding officer.",
          "Include justification for requested transfer.",
          "Complete any required assessments for the new class.",
          "Await official approval before changing equipment or duties.",
        ],
      },
    ],
  },
  {
    id: "transfer-restrictions",
    title: "Transfer Restrictions",
    description: "Limitations and special considerations for class transfers.",
    importance: "high",
    category: "class-transfer",
    type: "policy",
    sections: [
      {
        id: "transfer-restrictions-1",
        title: "Restricted Transfers",
        content: [
          "Specialized classes may have additional requirements or waiting periods.",
          "Some classes require commander recommendation for transfer.",
          "Transfers may be temporarily suspended during major operations.",
          "Failed transfer assessments require 14-day waiting period before reapplication.",
        ],
      },
      {
        id: "transfer-restrictions-2",
        title: "Rank Considerations",
        content: [
          "Officers above certain ranks may have limited transfer options.",
          "Rank may be affected by transfers to certain specialized classes.",
          "Some transfers may require temporary rank reduction during transition period.",
          "Leadership positions may need reassignment after class transfers.",
        ],
      },
    ],
  },
]

export default classTransferPolicies
