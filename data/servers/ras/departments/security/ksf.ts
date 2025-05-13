import type { Team } from "../../../../types"

export const kaminoSecurityForce: Team = {
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
