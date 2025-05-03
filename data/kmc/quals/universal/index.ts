import type { QualificationCategory } from "../../../types"
import { aerialQualification } from "./aerial"
import { medicQualification } from "./medic"

export const universalQualifications: QualificationCategory = {
  name: "Universal",
  qualifications: [aerialQualification, medicQualification],
}
