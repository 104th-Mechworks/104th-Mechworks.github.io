import type { Rule } from "../rules"

// Disciplinary Policies
const disciplinaryPolicies: Rule[] = [
  {
    id: "disciplinary-general",
    code: "§205",
    title: "General Disciplinary Guidelines",
    description: "Overview of disciplinary procedures and documentation requirements.",
    importance: "high",
    category: "disciplinary",
    type: "policy",
    sections: [
      {
        id: "disciplinary-logging",
        code: "§205.1",
        title: "Documentation Requirements",
        content: [
          "All disciplinary action must be logged in main server.",
          "Sensitive cases will be assigned a reference number and logged in the RAS Vanguard, the reference number can be supplied as evidence when logging in the main server.",
          "Failure to follow procedure will result in disciplinary action and potential demotion.",
        ],
      },
      {
        id: "disciplinary-actions",
        code: "§205.2",
        title: "Types of Disciplinary Actions",
        content: [
          "Timeout - Temporary restriction from server interaction",
          "Strikes - Progressive warning system",
          "Suspend - Temporary removal of roles and privileges",
          "Kick - Removal from server with ability to rejoin",
          "Ban - Permanent removal from server",
        ],
      },
    ],
  },
  {
    id: "disciplinary-timeout",
    code: "§206",
    title: "Timeout Procedures",
    description: "Guidelines for implementing timeouts.",
    importance: "standard",
    category: "disciplinary",
    type: "policy",
    sections: [
      {
        id: "timeout-authority",
        code: "§206.1",
        title: "Authority and Requirements",
        content: [
          "Staff may time out members but must be logged in the disciplinary channel with a reason.",
          "Additional evidence is not needed for timeouts.",
          "Timeouts should be proportional to the offense.",
          "Repeated timeouts for the same offense may escalate to strikes.",
        ],
      },
    ],
  },
  {
    id: "disciplinary-strikes",
    code: "§207",
    title: "Strike System",
    description: "Progressive strike system for violations.",
    importance: "standard",
    category: "disciplinary",
    type: "policy",
    sections: [
      {
        id: "strike-system-1",
        code: "§207.1",
        title: "Strike Stages",
        content: [
          "STRIKE 1: Pinged Warning/Inquiry.",
          "STRIKE 2: Formal Warning from Both CCO & PCO.",
          "STRIKE 3: Mandatory Meeting With MAJ & CCO.",
          "STRIKE 4: Demotion.",
        ],
      },
      {
        id: "strike-removal",
        code: "§207.2",
        title: "Strike Removal",
        content: [
          "Hit requirements 2 intervals in a row to remove 1 strike.",
          "Consistent good behavior can result in strikes being removed.",
          "There is no set time for strikes to be removed automatically.",
        ],
      },
    ],
  },
  {
    id: "disciplinary-suspend",
    code: "§208",
    title: "Suspension Procedures",
    description: "Guidelines for member suspension.",
    importance: "high",
    category: "disciplinary",
    type: "policy",
    sections: [
      {
        id: "suspend-authority",
        code: "§208.1",
        title: "Authority and Requirements",
        content: [
          "Officers may suspend members.",
          "A screenshot of their roles and a reason is required.",
          "Additional evidence is optional.",
        ],
      },
      {
        id: "suspend-implementation",
        code: "§208.2",
        title: "Implementation",
        content: [
          "The member's roles are to be removed and given one of the suspended roles:",
          "Suspended 1 - General suspension, visible to all staff",
          "Suspended 2 - General suspension, visible to all staff",
          "Suspended 3 - Visible to Command Staff only",
        ],
      },
    ],
  },
  {
    id: "disciplinary-kick",
    code: "§209",
    title: "Kick Procedures",
    description: "Guidelines for kicking members from the server.",
    importance: "high",
    category: "disciplinary",
    type: "policy",
    sections: [
      {
        id: "kick-requirements",
        code: "§209.1",
        title: "Documentation Requirements",
        content: [
          "If a member is kicked from the server, it must be logged in main server with evidence.",
          "Evidence must include their roles and the actions that led to their removal.",
          "The member's CO should be notified when applicable.",
        ],
      },
    ],
  },
  {
    id: "disciplinary-ban",
    code: "§210",
    title: "Ban Procedures",
    description: "Guidelines for permanent removal from the server.",
    importance: "critical",
    category: "disciplinary",
    type: "policy",
    sections: [
      {
        id: "ban-requirements",
        code: "§210.1",
        title: "Documentation Requirements",
        content: [
          "High Officers may ban members.",
          "A reason must be supplied in the dialogue box on Discord.",
          "Evidence must be supplied in the moderation log in the main server.",
          "Evidence must be inclusive of all actions that led to their permanent removal.",
        ],
      },
      {
        id: "ban-procedures",
        code: "§210.2",
        title: "Additional Ban Procedure Requirements",
        content: [
          "If applicable, the banned member's CO must be notified.",
          "The ban appeals team must also be notified.",
          "In the case of sensitive cases, the evidence must be stored in the RAS with a case number.",
          "Failure to correctly and thoroughly document the ban will result in the ban being revoked and potential disciplinary action.",
        ],
      },
    ],
  },
]

export default disciplinaryPolicies
