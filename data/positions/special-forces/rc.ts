import type { Position } from "../../types"

export const rcPositions: Position[] = [
  {
    title: "Admissions Officer",
    code: "RCAO",
    description: "Oversee and maintain standards of the RC program",
    requirements: ["Classified"],
    responsibilities: [
      "Oversee the RC program",
      "Maintain standards and training",
      "Command representative for the RC program",
      "Other responsibilities are classified",
    ],
  },
  {
    title: "Squad Leader",
    code: "RC-SL",
    description: "Leader of a squad of 4 RCs",
    requirements: ["Classified"],
    responsibilities: [
      "Classified",
    ],
    // equipment: ["Enhanced Demolition Kit", "Remote Detonators", "Breaching Charges", "Structural Scanner"],
  },
  {
    title: "Technical Specialist",
    code: "RC-T",
    description: "Expert in computer systems and hacking. Also known as a Slicer.",
    requirements: ["Classified"],
    responsibilities: [
      "Slice into enemy computer systems",
      "Bypass security measures",
      "Extract data from secured terminals",
      "Reprogram enemy systems and droids",
    ],
  },
  {
    title: "Sniper",
    code: "RC-S",
    description: "Long-range elimination and reconnaissance",
    requirements: ["Classified"],
    responsibilities: [
      "Provide overwatch for the squad",
      "Eliminate high-value targets",
      "Conduct reconnaissance",
      "Provide covering fire during extractions",
    ],
  },
  {
    title: "Demolitions Expert",
    code: "RC-D",
    description: "Specializes in explosives and structural sabotage",
    requirements: ["Classified"],
    responsibilities: [
      "Breach fortified positions",
      "Plant explosive charges for maximum effect",
      "Destroy critical enemy infrastructure",
      "Create entry and exit points for the squad",
    ],
  },
    {
    title: "Assault Specialist",
    code: "RC-A",
    description: "Specializes in close-quarters combat and assault tactics",
    requirements: ["Classified"],
    responsibilities: [
      "Lead the squad in assault operations",
      "Engage in close-quarters combat",
      "Provide suppressive fire for the squad",
      "Utilize advanced weaponry and tactics",
    ],
  },
]
