import type { Rule } from "../rules"

// Qualification Dropping Policy
const qualDroppingPolicies: Rule[] = [
  {
    id: "qual-removal",
    title: "Qualification Removal Procedures",
    description: "Process for voluntarily or involuntarily dropping qualifications.",
    importance: "standard",
    category: "qual-dropping",
    type: "policy",
    sections: [
      {
        id: "qual-removal-1",
        title: "Removal Conditions",
        content: [
          "Qualifications must be retained for a minimum of 4 months.",
          "Qualifications are removed due to: class transfer, attending trials for a different qualification that can't be held at the same time, or dropping the qual voluntarily.",
          "Dropping, attempting to drop, or attending conflicting trials without notifying the sector or head cadre and without permission will result in disciplinary action.",
        ],
      },
      {
        id: "qual-disciplinary-1",
        title: "Disciplinary Actions",
        content: [
          "Disciplinary actions may be taken for: repeated bot farming, poor behavior, harassment of instructor teams, or repeated minor issues.",
          "Never To Return (NTR) penalties may be issued as fixed term (1-18 months) or permanent.",
          "Fixed term NTRs: 1 month (Instructor+), 3 months (Instructor+), 12 months (Cadre+), or 18 months (Cadre+).",
          "Permanent NTRs are recommended by Instructors and Cadres, authorized by Head Cadres, Chief Training Officer, or Tipoca City Clone Director.",
          "All qualification disciplinary action must be lodged in the KMC.",
        ],
      },
    ],
  },
  {
    id: "qual-appeals",
    title: "Qualification Appeals Process",
    description: "Procedures for appealing qualification disciplinary actions.",
    importance: "standard",
    category: "qual-dropping",
    type: "policy",
    sections: [
      {
        id: "qual-appeals-1",
        title: "Appeal Process",
        content: [
          "Members are entitled to appeal permanent, non-special forces NTRs after 1 month.",
          "Contact a member of KSF to arrange the appeal and start the process.",
          "Appeals are reviewed by: Kaminoan Customs Officer (case handler), Head Kaminoan Security Officer (Supervisor), Qualification Head Cadre, and Chief Training Officer (Independent Review).",
          "A majority is needed to reverse the NTR. In the event of a tie, the Tipoca City Clone Director will decide.",
          "If an appeal is rejected, there are no more chances of appeal and it can only be removed by the Head Cadre.",
          "Special Forces NTRs are subject to the SOD's own internal policies.",
        ],
      },
    ],
  },
]

export default qualDroppingPolicies
