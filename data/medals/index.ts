import type { Medal } from "../types"
import { serviceMedals } from "./service"
import { achievementMedals } from "./achievement"
import { operationMedals } from "./operation"
import { longevityMedals } from "./longevity"
import { classMedals } from "./class"

// Combine all medal categories
export const allMedals: Medal[] = [
  ...serviceMedals,
  ...achievementMedals,
  ...operationMedals,
  ...longevityMedals,
  ...classMedals,
]

// Group medals by category
export const medalsByCategory = {
  service: serviceMedals,
  achievement: achievementMedals,
  operation: operationMedals,
  longevity: longevityMedals,
  class: classMedals,
}

// Category names for display
export const categoryNames = {
  service: "Service Medals",
  achievement: "Achievement Medals",
  operation: "Operation Medals",
  longevity: "Longevity Medals",
  class: "Class Medals",
}

// Category descriptions
export const categoryDescriptions = {
  service: "Medals awarded for dedicated service to the 104th Battalion.",
  achievement: "Medals awarded for exceptional achievements and contributions.",
  operation: "Medals awarded for participation in specific operations.",
  longevity: "Medals awarded for years of service in the 104th Battalion.",
  class: "Medals awarded for mastery of specific trooper classes.",
}
