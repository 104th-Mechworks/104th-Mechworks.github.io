import type { Rule } from "../rules"

// Helmet Policy
const helmetPolicies: Rule[] = [
  {
    id: "helmet-standards",
    code: "§211",
    title: "Helmet Regulations",
    description: "Requirements and restrictions for battalion helmet customization.",
    importance: "standard",
    category: "helmets",
    type: "policy",
    sections: [
      {
        id: "helmet-standards-1",
        code: "§211.1",
        title: "Helmet Usage Regulations",
        content: [
          "Community Members: Profile pictures which do not look similar to the uniform of the 104th. Any form of helmet pfp is not allowed.",
          "Inside of a 104th cadet progress: Preferably wear the cadet helmets.",
          "Inside of a 104th Unit: Must wear the 104th officially issued helmet.",
          "Inside of the 104th Officer Team: Must wear the 104th custom helmet issued to them.",
          "Inside of the 104th Senior Art Team: Must wear the 104th custom helmet issued to them.",
          "Inside of Starfighter Headquarters: Eligible for 2 colors issued on their helmet.",
          "Custom Helmet, Commissioned Piece, and Helmet Excuse are given to warranted exceptions.",
        ],
      },
      {
        id: "helmet-security",
        code: "§211.2",
        title: "Helmet Security Rules",
        content: [
          "Only Art Team members can create and issue 104th helmets.",
          "Profile Grabbing and stealing helmet is a ban-able offense.",
          "Sharing 104th officially issued helmets when not given permission is a ban-able offense.",
        ],
      },
    ],
  },
  {
    id: "helmet-approval",
    code: "§212",
    title: "Helmet Request Process",
    description: "Procedures for submitting and approving helmet designs.",
    importance: "standard",
    category: "helmets",
    type: "policy",
    sections: [
      {
        id: "helmet-approval-1",
        code: "§212.1",
        title: "Request Requirements",
        content: [
          "Requests must be submitted by a LCPL+.",
          "All evidence must be uploaded in 1 packet.",
          "False or incorrect information given will result in automatic rejection.",
          "Cooldown is 4 Months between requests.",
          "Class Transfer (including green visor addition) & BD are exempt from cooldown.",
          "Use the provided format.",
          "SGM+ will be capped at 2 custom helmet requests. This will reset if/when you progress in rank or gain qualifications.",
        ],
      },
    ],
  },
]

export default helmetPolicies
