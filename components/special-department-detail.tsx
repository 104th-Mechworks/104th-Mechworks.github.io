"use client"
import { motion } from "framer-motion"
import type { SpecialDepartment } from "@/data/types"
import ARCDepartmentDetail from "./arc-department-detail"
import RCDepartmentDetail from "./rc-department-detail"

export default function SpecialDepartmentDetail({
  department,
  onBackAction,
}: {
  department: SpecialDepartment
  onBackAction: () => void
}) {
  // Determine if this is an ARC or RC department based on the color
  const isARC = department.color === "#f009c9"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {isARC ? (
        <ARCDepartmentDetail department={department} onBackAction={onBackAction} />
      ) : (
        <RCDepartmentDetail department={department} onBackAction={onBackAction} />
      )}
    </motion.div>
  )
}
