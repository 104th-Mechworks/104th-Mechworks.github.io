"use client"

import type { SpecialDepartment } from "@/data/types"
import ARCDepartmentDetail from "./arc-department-detail"
import RCDepartmentDetail from "./rc-department-detail"

export default function SpecialDepartmentDetail({
  department,
  onBack,
}: {
  department: SpecialDepartment
  onBack: () => void
}) {
  // Determine which component to render based on department ID
  if (department.id === "rc") {
    return <RCDepartmentDetail department={department} onBack={onBack} />
  }

  // Default to ARC department detail
  return <ARCDepartmentDetail department={department} onBack={onBack} />
}
