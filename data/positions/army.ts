import type { Position } from "../types"

export const armyPositions: Position[] = [
  {
    title: "Army Commanding Officer",
    code: "ACO",
    description:
      "The Army Commanding Officer is the highest-ranking officer in the army branch, responsible for army standards and personnel management. They report directly to Fleet Command and coordinate with other branch leaders to ensure cohesive operation.",
    requirements: ["Rank: BDCR"],
    responsibilities: [
      "Oversee the army branch",
      "Work with Console Commanders to ensure smooth operation",
      "Manage and authorise personnel movements ",
      "Ensure all army members are trained and qualified for their positions",
    ],
  },
  {
    title: "Army Executive Officer",
    code: "AXO",
    description: "2nd in command of army branch",
    requirements: ["Rank: CDR"],
    responsibilities: [
      "Assist the ACO in managing the army branch",
      "Coordinate with Console Commanders",
      "Oversee training and qualification of army members",
      "Work with Console Commanders and Captains to improve army operations",
    ],
  },
  {
    title: "Console Commander",
    code: "CC",
    description: "oversees a specific console with in the army branch (Xbox, PS, PC)",
    requirements: ["CDR"],
    responsibilities: [
      "Manage the console operations",
      "Approve or devy promotions and demotions",
      "Evaluate standards of staff",
      "Ensure all console members are trained and qualified for their positions",
      "Handle any reorganization of the console's structure",
    ],
  },
  {
    title: "Company Commanding Officer",
    code: "CCO",
    description: "Runs a army company",
    requirements: ["CPT"],
    responsibilities: [
      "Lead a company",
      "Maintain standards of the company",
      "Evaluate staff for promotions and demotions",
      "Handle issues within the company",
    ],
  },
  {
    title: "Company Executive Officer",
    code: "CXO",
    description: "2nd in command of a company",
    requirements: ["LT"],
    responsibilities: [
      "Operate TX-130 fighter tanks",
      "Provide mobile fire support",
      "Transport troops through hostile territory",
      "Maintain vehicle combat readiness",
    ],
  },
  {
    title: "Company Non-Commissioned Officer",
    code: "CNCO",
    description: "Oversees and manages administration within the company",
    requirements: ["SGM", "2LT", "WO"],
    responsibilities: [
      "Manage the company roster",
      "Ensure all members are trained and qualified for their positions",
      "Handle promotions and demotions within the company",
      "Assist the CCO in managing the company",
      "Coordinate cadets and new members",
    ],
  },
  {
    title: "Platoon Commanding Officer",
    code: "PCO",
    description: "Runs a platoon within a company",
    requirements: ["SGM", "2LT", "LT"],
    responsibilities: [
      "Lead a platoon",
      "Evaluate staff for recommendations for promotions and demotions",
      "Oversee the training of new staff",
      "Oversee the progress of new cadets",
      "Handle issues within the platoon",
    ],
  },
  {
    title: "Platoon Executive Officer",
    code: "PXO",
    description: "2nd in command of a platoon",
    requirements: ["SGM", "2LT", "LT"],
    responsibilities: [
      "Assist the PCO in managing the platoon",
      "Coordinate with squad leaders",
      "Oversee the training of new staff",
      "Oversee the progress of new cadets",
      "Handle issues within the platoon",
    ],
  },
  {
    title: "Platoon Non-Commissioned Officer",
    code: "PNCO",
    description: "Preforms administrative tasks for the CNCO",
    requirements: ["SGT", "2LT", "WO"],
    responsibilities: [
      "Manage the platoon roster",
      "Ensure all members are trained and qualified for their positions",
      "Handle promotions and demotions within the platoon",
    ],
  },
  {
    title: "Squad Leader",
    code: "SL",
    description: "Runs a squad",
    requirements: ["CPL", "SGT"],
    responsibilities: [
      "Lead a squad",
      "Work with their FTLs and encourage attendance",
    ],
  },
  {
    title: "Squad Non-Commissioned Officer",
    code: "SNCO",
    description: "Manages the data for the squad and reports to the PNCO",
    requirements: ["LCPL", "CPL", "SGT"],
    responsibilities: [
      "Manage the squad roster",
      "Ensure all members are trained and qualified for their positions",
      "Handle promotions and demotions within the squad",
    ],
  },
  {
    title: "Fireteam Leader",
    code: "FTL",
    description: "Senior member of a fireteam",
    requirements: ["CT", "LCPL"],
    responsibilities: [
      "Lead a fireteam",
      "Work with their SLs and encourage attendance",
    ],
  },
]
