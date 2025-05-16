import type { Rule } from "../rules"

// Ban Appeals Policy
const banAppealsPolicies: Rule[] = [
  {
    id: "ban-process",
    title: "Ban Appeal Process",
    code: "§202",
    description: "Procedures for appealing disciplinary bans.",
    importance: "staff-only",
    category: "ban-appeals",
    type: "policy",
    sections: [
      {
        id: "appeal-process",
        code: "§202.1",
        title: "Appeal Procedure",
        content: [
          "3 month waiting period before a member can appeal a ban.",
          "To appeal a ban from the main server, contact one of the ban appeal officers.",
          "Fill out an application in the KMC and wait for your case officer to reach out with questions or to notify you of the outcome.",
          "The process can take anywhere from 1 day to several months.",
          "Each member will only get 1 chance of appeal, unless stated otherwise on the outcome of appeal.",
        ],
      },
      {
        id: "appeal-outcomes",
        code: "§202.2",
        title: "Possible Outcomes",
        content: [
          "Denied: Member will stay banned with no more chances of appeal.",
          "Denied with appeal: Member will stay banned and will be eligible to appeal in 3 months.",
          "Accepted: Member will be unbanned with no conditions upon return, permanent record of the ban will remain.",
          "Conditional Return: Member will be allowed to return with conditions at the discretion of the case officer, permanent record with conditions will remain.",
          "Exonerated: Member will be unbanned and there will be no record of the ban. Member will also not have to disclose the issue when applying for teams or the commando program.",
        ],
      },
      {
        id: "case-officers",
        code: "§202.3",
        title: "Case Officer Responsibilities",
        content: [
          "Once a ticket is claimed by an officer they are the only one authorized to interact with the member appealing the ban, unless the ticket is passed to another officer.",
          "All evidence must be logged.",
          "Outcome must be reasoned.",
        ],
      },
    ],
  },
]

export default banAppealsPolicies
