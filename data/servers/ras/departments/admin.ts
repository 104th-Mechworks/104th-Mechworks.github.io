import type { Department } from "../../../types"

export const adminDepartment: Department = {
  id: "admin",
  name: "DEPARTMENT OF ANALYSIS & ADMINISTRATION",
  head: "MAJ Uchiha",
  focus: "Internal data",
  icon: "/images/departments/admin_team.png",
  teams: [
    {
      name: "Admin Team",
      lead: {
        role: "MAJ",
        name: "Uchiha",
      },
      members: [
        { role: "Head of 01 Sector admin", name: "  CPT Dymphna"},
        { role: "Head of 02 Sector admin", name: "  CPT Hondo"},
        { role: "Head of 03 Sector admin", name: "  CDR Tuut"},
        { role: "Head of Starfighter Corps admin", name: "  SCPT Bond"},
      ],
    },
  ],
}
