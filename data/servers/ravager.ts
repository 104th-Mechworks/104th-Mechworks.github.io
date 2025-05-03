import { ravagerSpecialDepartments } from "./ravager/index"

export const ravagerServer = {
  id: "ravager",
  name: "Ravager",
  description: "Special Forces server for ARC and RC operations",
  imageSrc: "/images/ravager.png",
  status: "CLASSIFIED",
  purpose: "Specialized training and operations for Advanced Recon Commandos (ARC) and Republic Commandos (RC).",
  commandingOfficer: "CDR Fox",
  specialDepartments: ravagerSpecialDepartments,
}
