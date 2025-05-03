import type { QualificationCategory } from "../../../types"
import { arcQualification } from "./arc"
import { rcQualification } from "./rc"

export const specialForcesQualifications: QualificationCategory = {
  name: "Special Forces",
  qualifications: [arcQualification, rcQualification],
}
