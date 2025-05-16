import type { ReferenceSheet } from "./types"
import { parseMarkdownToReferenceSheet } from "@/utils/markdown-loader"

// Load reference sheets from markdown files
const raidLeadingGuide = parseMarkdownToReferenceSheet("data/reference-sheets/markdown/raid-leading.md", "raid-leading")
const unitDutiesGuide = parseMarkdownToReferenceSheet("data/reference-sheets/markdown/unit-duties.md", "unit-duties")

// Export all reference sheets
export const referenceSheets: ReferenceSheet[] = [raidLeadingGuide, unitDutiesGuide]

// Export reference sheets by ID for easy lookup
export const referenceSheetById = referenceSheets.reduce(
  (acc, sheet) => {
    acc[sheet.id] = sheet
    return acc
  },
  {} as Record<string, ReferenceSheet>,
)
