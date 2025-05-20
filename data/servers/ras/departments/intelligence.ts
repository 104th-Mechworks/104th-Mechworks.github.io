import type { Department } from "../../../types"

export const intelligenceDepartment: Department = {
  id: "intelligence",
  name: "DEPARTMENT OF INTELLIGENCE",
  head: "MCDR Dark",
  focus: "Information gathering, analysis, and distribution",
  icon: "/images/departments/intelligence.png",
  teams: [
    {
      name: "Intelligence",
      lead: {role: "MCDR", name: "Dark"},
      members: [
        { name: "BCDR Shatterstorm" },
        { name: "AMAJ Vanok" },
        { name: "ASGT Dalen" },
        { name: "MAJ Uchiha" },
        { name: "PVT Oiler" },
      ],
      classified: false,
    },
  ],
}
