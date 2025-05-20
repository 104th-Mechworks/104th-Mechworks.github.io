import type { Department } from "../../../types"

export const comengDepartment: Department = {
  id: "comeng",
  name: "DEPARTMENT OF COMMUNITY ENGAGEMENT",
  head: "SGM Blllzo",
  focus: "Events, outreach, digital presence",
  icon: "/images/departments/comeng.png",
  teams: [
    {
      name: "Event Team",
      lead: {
        role: "SGM",
        name: "Pending",
      },
      groups: [
        { name: "01 - Sector",
          officer: { role: "Team Lead", name: "AT Cliffjumper" },
          members: [
            { name: "ACPT Xcel" },
            { name: "COM Snips" },
            { name: "CDR Feedback" },
            { name: "CPL Bayonetta" },
            { name: "SGM Electro" },
            { name: "2LT Bazza"},
            { name: "SGT Deeby"},
          ] },
        { name: "Event Management", members: [
            { name: "SGM Blllzo" },
            { name: "SGT Datti" },
            { name: "SGT Gage" },
            { name: "SGT Thinker" },
            { name: "SGT Zenix" },
          ] },
      ],
    },
    {
      name: "Website Team",
      lead: {
        name: "TBC ",
      },
      groups: [
        { name: "Design", members: [
            { name: "SGM Ollie" },
            { name: "SGT Datti" },
            { name: "WO Vinh" },
            { name: "MCDR Dark" },
          ] },
        { name: "Content", members: [
            { name: "COM Snips" },
        { name: "CPL Cacabur" },
        { name: "CPL Teekay" },
        { name: "CT Bantor" },
        { name: "CT Ray" },
        { name: "GCPT Entity" },
        { name: "LCPL Gaz" },
        { name: "PO Zenix" },
        { name: "GCPT Watershock" },
        { name: "SGM Blllzo" },
        { name: "SGT Gage" },
          ] },
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
