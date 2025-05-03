import type { Department } from "../../../types"
import { adminDepartment } from "./admin"
import { artDepartment } from "./art"
import { comengDepartment } from "./comeng"
import { standardsDepartment } from "./standards"
import { securityDepartment } from "./security"
import { operationsDepartment } from "./operations"
import { intelligenceDepartment } from "./intelligence"
import { disciplineDepartment } from "./discipline"

export const rasDepartments: Department[] = [
  adminDepartment,
  artDepartment,
  comengDepartment,
  standardsDepartment,
  securityDepartment,
  operationsDepartment,
  intelligenceDepartment,
  disciplineDepartment,
]
