import type { QualificationCategory } from "../../../types"
import { arcQualification } from "./arc"
import { rcQualification } from "./rc"
import { a17Qualification } from "./a17"

export const specialForcesQualifications: QualificationCategory = {
  name: "Special Forces",
  qualifications: [arcQualification, a17Qualification, rcQualification],
}
