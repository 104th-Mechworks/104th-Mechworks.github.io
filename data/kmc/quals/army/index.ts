import type { QualificationCategory } from "../../../types"
import { riflemanQualification } from "../rifleman"
import { marksmanQualification } from "../marksman"
import { antiArmourQualification } from "../anti-armour"
import { tx130DriverQualification } from "../tx130-driver"
import { arfQualification } from "../arf"

export const armyQualifications: QualificationCategory = {
  name: "Army",
  qualifications: [
    riflemanQualification,
    marksmanQualification,
    antiArmourQualification,
    tx130DriverQualification,
    arfQualification,
  ],
}
