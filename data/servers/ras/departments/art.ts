import type { Department } from "../../../types"

export const artDepartment: Department = {
  id: "art",
  name: "DEPARTMENT OF ART & MODDING",
  head: "CPL Thinker",
  focus: "Visual design, modding, and helmet customization",
  icon: "/images/departments/art.png",
  teams: [
    {
      name: "Senior Art Team",
      lead: {
        name: "WO Poiser",
        clearances: ["Adv", "SF", "SFC"],
      },
      members: [
        { name: "PVT Oiler", clearances: ["SF"] },
        { name: "SGM Poiser", clearances: ["Adv", "SF", "SFC"] },
        { name: "CT Amon" },
        { name: "WO Vinh", clearances: ["SF", "SFC"] },
        { name: "NCDR Aro", clearances: ["SFC"] },
        { name: "AT Skorzey", clearances: ["SF"] },
        { name: "CDR Deranged", clearances: ["SF"] },
        { name: "CPL Thinker", clearances: ["Adv", "SF", "SFC"] },
        { name: "PVT Goliath", clearances: ["SF"] },
        { name: "MCDR Dark" },
      ],
    },
    {
      name: "Primary Art Team",
      lead: {
        name: "WO Poiser",
        clearances: ["Adv", "SF", "SFC"],
      },
      members: [
        { name: "LCPL Rise", clearances: ["Adv"] },
        { name: "PO2 Ecks" },
        { name: "SGT DeltaEcho" },
        { name: "SGM Kurlig" },
        { name: "CPT Kantor" },
      ],
    },
    {
      name: "Art Initiates",
      lead: {
        name: "SGM Poiser",
      },
      description: "New artists in training",
      members: [],
    },
    {
      name: "Modding Team",
      lead: {
        name: "WO Vinh",
      },
      members: [
        { name: "SGM Blllzo" },
        { name: "CPL Equinox" },
        { name: "CPL Matho" },
        { name: "CT Numbers" },
      ],
    },
  ],
}
