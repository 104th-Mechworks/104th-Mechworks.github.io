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
        title: "Rank-Based Request Procedures",
        content: [
          "Below the rank of Lieutenant: Direct superior in Platoon, Company or Wing to elevate the request.",
          "Lieutenant or above: Submit your request in Request and Report bay - Class Transfer Log.",
          "All transfers must be approved by the appropriate authority before taking effect.",
        ],
      },
      {
        id: "transfer-process-2",
        title: "Qualification Requirements",
        content: [
          "Qualifications must be retained for a minimum of 4 months, if this time has not elapsed the transfer request is automatically rejected.",
          "If transferring to a base class incompatible with current qualifications, you must notify the relevant sector cadres for the affected qualifications.",
          "Failure to notify relevant cadres may result in disciplinary action.",
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
        title: "Time and Effect Restrictions",
        content: [
          "You may only change class once every 6 months.",
          "Effects are immediate once processed and irreversible.",
          "Qualifications lost by transfer will have to be re-earned.",
          "Transfers to specialized classes may have additional requirements or waiting periods.",
        ],
      },
    ],
  },
]

export default classTransferPolicies
