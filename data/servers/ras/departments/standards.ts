import type { Department } from "../../../types"

export const standardsDepartment: Department = {
  id: "standards",
  name: "DEPARTMENT OF STANDARDS & EVALUATION",
  head: "PVT Oiler + MAJ Liveshot",
  focus: "Unit quality control and In-Game Training operations",
  icon: "/images/departments/standards.png",
  teams: [
    {
      name: "Inspection Team",
      lead: {
        role: "PVT",
        name: "Oiler",
      },
      classified: true,
    },
    {
      name: "Opforce Team",
      lead: {
        role: "MAJ",
        name: "Liveshot",
      },
      members: [
        { role: "SGT", name: "Datti" },
        { role: "CPL", name: "Thinker" },
      ],
    },
  ],
}
