import type { Rule } from "."

// KMC Rules
const kmcRules: Rule[] = [
  {
    id: "kmc-operations",
    code: "§116",
    title: "KMC Operational Guidelines",
    description: "Rules specific to Kamino Military Complex operations.",
    importance: "high",
    category: "kmc",
    type: "rule",
    sections: [
      {
        id: "kmc-operations-1",
        code: "§116.1",
        title: "Facility Protocols",
        content: [
          "Follow all posted security clearance restrictions.",
          "Maintain proper uniform and identification at all times.",
          "Report suspicious activity to security personnel immediately.",
          "Adhere to all emergency procedures during drills or actual events.",
        ],
      },
      {
        id: "kmc-operations-2",
        code: "§116.2",
        title: "Training Areas",
        content: [
          "Use training facilities only with proper authorization.",
          "Clean and reset all equipment after use.",
          "Report damaged equipment through proper channels.",
          "Follow all safety protocols without exception.",
        ],
      },
    ],
  },
  {
    id: "kmc-security",
    code: "§117",
    title: "KMC Security Measures",
    description: "Security protocols for the Kamino Military Complex.",
    importance: "critical",
    category: "kmc",
    type: "rule",
    sections: [
      {
        id: "kmc-security-1",
        code: "§117.1",
        title: "Access Control",
        content: [
          "Present identification at all checkpoints without exception.",
          "Do not attempt to access areas beyond your clearance level.",
          "Report lost or stolen identification immediately.",
          "Never share access codes or credentials with others.",
        ],
      },
      {
        id: "kmc-security-2",
        code: "§117.2",
        title: "Information Security",
        content: [
          "Classify all documents according to security protocols.",
          "Do not discuss sensitive information in unsecured areas.",
          "Shred all confidential documents when no longer needed.",
          "Report potential information breaches to security immediately.",
        ],
      },
    ],
  },
]

export default kmcRules
