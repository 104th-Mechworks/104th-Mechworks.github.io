import type { Department } from "../../../types"

export const operationsDepartment: Department = {
  id: "operations",
  name: "DEPARTMENT OF OPERATIONS",
  head: "ASGT Dalen + SGT Datti",
  focus: "Strategic support, external affairs, special tasks",
  icon: "/images/departments/operations.png",
  teams: [
    {
      name: "3rd Party",
      lead: {
        role: "ASGT",
        name: "Dalen",
      },
      classified: true,
    },
    {
      name: "Operatives",
      lead: {
        role: "SGT",
        name: "Datti",
      },
      classified: true,
    },
    {
      name: "Hacking",
      lead: {
        role: "AMAJ",
        name: "Vanok",
      },
      classified: true,
    },
  ],
}
