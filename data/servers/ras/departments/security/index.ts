import type { Department } from "../../../../types"
import { kaminoSecurityForce } from "./ksf"

export const securityDepartment: Department = {
  id: "security",
  name: "DEPARTMENT OF SECURITY SERVICES",
  head: "LT Evolution",
  focus: "Rule enforcement, fleet security, disciplinary actions",
  icon: "/images/departments/security.png",
  teams: [
    {
      name: "Fleet Security",
      lead: null,
      classified: true,
    },
    {
      name: "Ban Appeals",
      lead: {
        role: "WO",
        name: "Jaws",
      },
      members: [
        { name: "SGM Ollie" },
        { name: "LT Evolution" },
        { name: "AMAJ Vanok" },
      ],
    },
    {
      name: "Helmet Security",
      lead: {
        role: "2LT",
        name: "Davien",
      },
      members: [
        { name: "2LT Loin" },
        { name: "CDR Tuut" },
        { name: "CPT Igneel" },
        { name: "CPTShisno" },
        { name: "CPT Psycho" },
        { name: "WO Jaws" },
        { name: "WO Vinh" },
      ],
    },
    {
      name: "Regulations Team",
      lead: {
        role: "SGM",
        name: "Ollie",
      },
      description: "Team under development",
      members: [],
    },
    {
  name: "Kamino Security Force",
  lead: {
    role: "LT",
    name: "Evolution",
  },
  leadership: [
    { role: "Tipoca City Clone Director", name: "AMAJ Vanok" },
    { role: "Head KSO", name: "LT Evolution" },
  ],
  groups: [
    {
      name: "A Group - Krayt Dragons",
      officer: { role: "Kaminoan Custom Officer", name: "MAJ Liveshot" },
      members: [{ name: "SGT Datti" }, { name: "CPT Igneel" }, { name: "SGT Dinii" }, { name: "SGM Blllzo" }],
    },
    {
      name: "B Group - Howlrunners",
      officer: { role: "Kaminoan Custom Officer", name: "ALT Garmr" },
      members: [{ name: "SGM Ollie" }, { name: "CPL Snare" }, { name: "SGM Airborn" }, { name: "CPL Scali" }],
    },
  ],
}
  ],
}
