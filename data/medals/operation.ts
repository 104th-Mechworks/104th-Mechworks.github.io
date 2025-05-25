import type { Medal } from "../types"

export const operationMedals: Medal[] = [
  {
    id: "operation-barycir",
    name: "Operation Barycir Medal",
    description: "Awarded for participation in Operation Barycir.",
    imageSrc: "/images/medals/OpBarycir.webp",
    requirements: ["Must have taken part in Operation Barycir (2 days)"],
    category: "operation",
    rarity: "uncommon",
  },
  {
    id: "operation-akalenedat",
    name: "Operation Akalenedat Medal",
    description: "Awarded for participation in Operation Akalenedat.",
    imageSrc: "/images/medals/OpAkalened.webp",
    requirements: ["Must have taken part in Operation Akalenedat (2 days)"],
    category: "operation",
    rarity: "uncommon",
  },
  {
    id: "operation-oyula-shukalar",
    name: "Operation Oyula Shukalar Medal",
    description: "Awarded for participation in Operation Oyula Shukalar.",
    imageSrc: "/images/medals/OpOyula.webp",
    requirements: ["Must have taken part in Operation Oyula Shukalar (2 days)"],
    category: "operation",
    rarity: "uncommon",
  },
  {
    id: "operation-kragala",
    name: "Operation K'ragala Medal",
    description: "Awarded for participation in Operation K'ragala.",
    imageSrc: "/images/medals/OpKragla.webp",
    requirements: ["Must have taken part in Operation K'ragala (2 days)"],
    category: "operation",
    rarity: "uncommon",
  },
  {
    id: "operation-redvsblue",
    name: "Operation RedVsBlue Medal",
    description: "Awarded for participation in Operation RedVsBlue.",
    imageSrc: "/images/medals/OpRvB.webp",
    requirements: ["Must have taken part in at least one match of Operation RedVsBlue"],
    category: "operation",
    rarity: "uncommon",
  },
]
