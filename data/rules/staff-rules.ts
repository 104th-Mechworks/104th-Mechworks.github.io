import type { Rule } from "."

// Staff Rules
const staffRules: Rule[] = [
  {
    id: "staff-basics",
    code: "§110",
    title: "Staff Basics",
    description: "Basic rules and expectations for battalion staff members.",
    importance: "staff-only",
    category: "staff-rules",
    type: "rule",
    sections: [
      {
        id: "staff-basics-1",
        code: "§110.1",
        title: "General Staff Rules",
        content: [
          "Staff must follow ⁠all other 104th Rules",
          "Staff must give a good public perception of the 104th staff team. In game, in other servers, in our own global communications.",
          "Staff must moderate the public staff chats. Upon someone moderating, allow the stepped up individual to take charge. Do not gang up on rule breakers.",
          "Staff must deal with suspended individuals quickly. Tell them what they did wrong and how to fix, then distribute punishment if needed. Or unsuspend.",
          "Staff must ensure their documents and rosters are maintained and up to date as the troopers they oversee progress.",
          "Staff must ensure that the ⁠request-and-report-bay is maintained.",
        ],
      },
      {
        id: "staff-basics-2",
        code: "§110.2",
        title: "Staff Conduct",
        content: [
          "Keep staff business between staff, in the correct chats.",
          "Listen to and use the chain of Command.",
          "No slandering of fellow staff in private.",
          "No inter-branch fighting.",
          "No inter-staff fighting.",
          "No staff dating.",
        ],
      },
    ],
  },
  {
    id: "staff-maturity",
    code: "§118",
    title: "Staff Maturity",
    description: "Maturity expectations for staff members.",
    importance: "staff-only",
    category: "staff-rules",
    type: "rule",
    sections: [
      {
        id: "staff-maturity-1",
        code: "§118.1",
        title: "Age and Maturity",
        content: [
          "The Staff minimum age is of 16 year old maturity. However this is an ADULT milsim, with the majority of staff being adults.",
          "With this, all individuals must conduct themselves in a mature and adult-like-manner.",
          "Those here of the younger ages will be allowed to join IF they can maintain the maturity.",
          "Staff will have to disclose the age, or age range that they sit in.",
        ],
      },
      {
        id: "staff-maturity-2",
        code: "§118.2",
        title: "Professional Conduct",
        content: [
          "If arguments occur, they are to be handled through open and respectful discussion. Not a spatting contest.",
          "If an instruction is given, you respect the instruction and follow it to support the team.",
          "Those who bring unnecessary ego into the unit will be removed without hesitation.",
          "Those who bring unnecessary silly emotes, comments and 2 cents when not needed will be removed without hesitation.",
          "Staff chat isnt a playground where we need people booing, hissing, cheering or screaming over each time someone talks",
          "Adults are not going to put up with coming home from work to need to deal with children like this is daddy day care",
        ],
      },
    ],
  },
  {
    id: "staff-consequences",
    code: "§119",
    title: "Staff Consequences",
    description: "Consequences for staff misconduct.",
    importance: "staff-only",
    category: "staff-rules",
    type: "rule",
    sections: [
      {
        id: "staff-consequences-1",
        code: "§119.1",
        title: "Disciplinary Actions",
        content: [
          "This unit operates as a close group. We do not have time for unnecessary internal conflict, toxic behaviour or drama.",
          "If you do end up being involved in any such situation: Discipline will be strict and simple.",
          "Upon too many issues you will be spoken to and either removed or demoted down to CT to be re-trained.",
          "You will work your way back up at the discretion of your CO.",
          "We will not hesitate to ask controversial characters to leave the community/banned.",
          'When lines have been crossed you will be removed through the following statement: "The 104th no longer believes that you are fit for this Community. Due to being unable to act in an appropriate manner inside of this Community. Goodbye.".',
        ],
      },
    ],
  },
]

export default staffRules
