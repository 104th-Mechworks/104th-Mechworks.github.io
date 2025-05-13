import type { Rule } from "../rules"

// Reporting Policy
const reportingPolicies: Rule[] = [
  {
    id: "incident-reporting",
    title: "Incident Reporting Procedures",
    description: "Guidelines for reporting incidents and issues within the battalion.",
    importance: "high",
    category: "reporting",
    type: "policy",
    sections: [
      {
        id: "incident-reporting-1",
        title: "Report Types and Channels",
        content: [
          "Conduct violations: Report to immediate superior or disciplinary officer.",
          "Security concerns: Report directly to security department.",
          "Equipment issues: Report to logistics officer or quartermaster.",
          "Personnel conflicts: Report to mediation officer or HR department.",
        ],
      },
      {
        id: "incident-reporting-2",
        title: "Documentation Requirements",
        content: [
          "Include date, time, and location of incident.",
          "List all involved parties by name and rank.",
          "Describe incident factually without personal interpretation.",
          "Attach any relevant evidence (screenshots, recordings, etc.).",
        ],
      },
    ],
  },
  {
    id: "whistleblower-protection",
    title: "Whistleblower Protection Policy",
    description: "Safeguards for members reporting serious violations or misconduct.",
    importance: "critical",
    category: "reporting",
    type: "policy",
    sections: [
      {
        id: "whistleblower-protection-1",
        title: "Protected Reporting",
        content: [
          "Reports made in good faith are protected from retaliation.",
          "Anonymous reporting options available for sensitive issues.",
          "Direct access to senior command for serious misconduct reports.",
          "Confidentiality maintained to maximum extent possible.",
        ],
      },
      {
        id: "whistleblower-protection-2",
        title: "Investigation Process",
        content: [
          "All reports investigated by neutral third party when possible.",
          "Reporter kept informed of investigation progress as appropriate.",
          "Disciplinary action for false reports made maliciously.",
          "Appeals process available if reporter disagrees with outcome.",
        ],
      },
    ],
  },
]

export default reportingPolicies
