import type { Rule } from "../rules"

// Disciplinary Policies
const promotionPolicies: Rule[] = [
  {
    id: "promotion-rank",
    code: "§217",
    title: "General Rank Promotion Guidelines",
    description: "Overview of promotion procedures and requirements for a change in rank.",
    importance: "staff-only",
    category: "promotion",
    type: "policy",
    sections: [
      {
        id: "promotion-requirements-a",
        code: "§210.1",
        title: "Promotion Process - Army",
        content: [
          "Promotion list submitted to command by a member of company command, with justification for each member.",
          "Company command is responsible for training members for their new rank and/or position.",
          "Promotion list must be approved by the Console Commander and Army Commanding Officer.",
          "Major's approval is not required and have no standing to deny any promotion, only offer recommendations.",
          "All promotions/demotions must be logged in main server.",
        ],
      },
        {
        id: "promotion-requirements-sfc",
        code: "§210.2",
        title: "Promotion Process - SFC",
        content: [
          "Under Review",
          "All promotions/demotions must be logged in main server.",
        ],
      },
        {
        id: "promotion-requirements-sod",
        code: "§210.3",
        title: "Promotion Process - SFC",
        content: [
          "Do not have to submit promotions to army CoC",
            "All promotions/demotions must be logged in main server.",
        ],
      },
      {
        id: "promotion-requirements-aux",
        code: "§210.5",
        title: "Promotion Process - Naval Aux",
        content: [
          "Cannot receive promotions in the 104th whilst in naval auxiliary. A member must transfer back into an active branch to progress.",
            "All demotions must be logged in main server.",
        ],
      },
    ],
  },
];

export default promotionPolicies;