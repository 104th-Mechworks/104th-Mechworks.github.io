import type { Department } from "../../../types"

export const comengDepartment: Department = {
  id: "comeng",
  name: "DEPARTMENT OF COMMUNITY ENGAGEMENT",
  head: "",
  focus: "Events, outreach, digital presence",
  icon: "/images/departments/comeng.png",
  teams: [
    {
      name: "Event Team",
      lead: {
        role: "SGM",
        name: "Pending",
      },
      members: [
        { role: "SGT", name: "Mitchell" },
        { role: "CPL", name: "Thinker" },
      ],
    },
    {
      name: "Website Team",
      lead: {
        role: "SGM",
        name: "Ollie",
      },
      members: [
        { role: "SGT", name: "Mitchell" },
        { role: "CPL", name: "Thinker" },
      ],
    },
    {
      name: "Social Media Team",
      lead: {
        role: "SGM",
        name: "Mitchell",
      },
      members: [
        { role: "SGT", name: "Datti" },
        { role: "CPL", name: "Thinker" },
      ],
    },
  ],
}
