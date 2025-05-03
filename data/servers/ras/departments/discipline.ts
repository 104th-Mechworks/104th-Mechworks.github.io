import type { Department } from "../../../types"

export const disciplineDepartment: Department = {
  id: "discipline",
  name: "DEPARTMENT OF DISCIPLINE",
  head: "",
  focus: "Enforcement of regulations and handling of appeals",
  icon: "/images/departments/discipline.png",
  teams: [
    {
      name: "Ban Appeals",
      lead: {
        role: "WO",
        name: "Jaws",
      },
      members: [
        { role: "LT", name: "Evolution" },
        { role: "2LT", name: "Davien" },
      ],
    },
    {
      name: "Disciplinary Actions",
      lead: null,
      classified: true,
    },
  ],
}
