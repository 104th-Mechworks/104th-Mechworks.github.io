import type { Rule } from "../rules"

// Helmet Policy
const helmetPolicies: Rule[] = [
  {
    id: "helmet-standards",
    title: "Helmet Standards and Regulations",
    description: "Requirements and restrictions for battalion helmet customization.",
    importance: "standard",
    category: "helmets",
    type: "policy",
    sections: [
      {
        id: "helmet-standards-1",
        title: "Approved Customizations",
        content: [
          "Helmet markings must conform to battalion color schemes.",
          "Rank insignia must be clearly visible on designated areas.",
          "Unit identifiers must be displayed according to standard templates.",
          "Personal markings limited to approved size and placement areas.",
        ],
      },
      {
        id: "helmet-standards-2",
        title: "Prohibited Modifications",
        content: [
          "No offensive imagery or text on any helmet surface.",
          "No modification of helmet structure or protective elements.",
          "No obscuring of identification markers or rank insignia.",
          "No unapproved attachments or accessories.",
        ],
      },
    ],
  },
  {
    id: "helmet-approval",
    title: "Helmet Approval Process",
    description: "Procedures for submitting and approving helmet designs.",
    importance: "standard",
    category: "helmets",
    type: "policy",
    sections: [
      {
        id: "helmet-approval-1",
        title: "Submission Requirements",
        content: [
          "Submit design templates through the battalion equipment portal.",
          "Include front, side, and rear views of proposed design.",
          "Specify all colors using standard color codes.",
          "Allow 7-10 days for approval process.",
        ],
      },
      {
        id: "helmet-approval-2",
        title: "Special Permissions",
        content: [
          "Unique designs for special achievements require officer endorsement.",
          "Commemorative designs for events need command staff approval.",
          "Temporary designs for specific operations must be pre-approved.",
          "Specialized units may have additional design privileges.",
        ],
      },
    ],
  },
]

export default helmetPolicies
