import type { Department } from "../../../types"

export const intelligenceDepartment: Department = {
  id: "intelligence",
  name: "DEPARTMENT OF INTELLIGENCE",
  head: "",
  focus: "Information gathering, analysis, and distribution",
  icon: "/images/departments/intelligence.png",
  teams: [
    {
      name: "Intelligence Analysis",
      lead: null,
      classified: true,
    },
    {
      name: "Reconnaissance",
      lead: null,
      classified: true,
    },
  ],
}
