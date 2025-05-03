import type { QualificationCategory } from "../../../types"
import { arc170StalkerQualification } from "./arc170-stalker"
import { vwingProwlerQualification } from "./vwing-prowler"
import { ywingBomberQualification } from "./ywing-bomber"

export const starfighterQualifications: QualificationCategory = {
  name: "Starfighter Corps",
  qualifications: [arc170StalkerQualification, vwingProwlerQualification, ywingBomberQualification],
}
