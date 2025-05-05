import { armyClasses } from "./army"
import { starfighterClasses } from "./starfighter"
import { specialOpsClasses } from "./special-ops"
import type { ClassCategory } from "../types"

export const classes: Record<string, ClassCategory[]> = {
  army: armyClasses,
  starfighter: starfighterClasses,
  specialOps: specialOpsClasses,
}
