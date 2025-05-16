import type { Rule } from "../rules";

// Medbay Policy
const medbayPolicies: Rule[] = [
  {
    id: "medical-services",
    code: "§213",
    title: "Leave Types and Requirements",
    description: "Procedures for requesting and managing leave from battalion duties.",
    importance: "standard",
    category: "medbay",
    type: "policy",
    sections: [
      {
        id: "leave-types",
        code: "§213.1",
        title: "Types of Leave",
        content: [
          "Only necessary for staff and active CTs (in a Platoon, Company or Wing).",
          "Not Fit For Combat (NFFC): Raid requirements are not enforced, all discord responsibilities are still expected to be met.",
          "Leave of Absence (LOA): All raid requirements and discord responsibilities are suspended.",
          "Missing In Action (MIA): Become inactive whilst in an active Platoon, Company or Wing.",
        ],
      },
      {
        id: "leave-duration",
        code: "§213.2",
        title: "Leave Duration Guidelines",
        content: [
          "0-5 days: Request not needed.",
          "5-9 days: Automatic approval.",
          "10-30 days: Require review and approval by Chain of Command.",
          "30-90 days: Require approval by console Commander.",
          "90+ days: Not allowed. SGM+ may transfer to Naval Auxiliary.",
        ],
      },
      {
        id: "staff-additions",
        code: "§213.3",
        title: "Process",
        content: [
          "Staff and active CTs (in a Platoon, Company or Wing) must fill out the medbay log in the relevant area.",
          "Staff must also log their LOA/NFFC in the main server vacation base.",
          "KSF must also log their LOA/NFFC in hangar bay in the KMC.",
        ],
      },
    ],
  },
];

export default medbayPolicies;