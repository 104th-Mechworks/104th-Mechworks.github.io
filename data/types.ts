export interface Server {
  id: string
  name: string
  description: string
  imagePath: string
  memberCount?: number
  inviteLink?: string
  departments?: Department[]
}

export interface Department {
  id: string
  name: string
  description: string
  imagePath: string
  serverId: string
  troops?: Troop[]
}

export interface Troop {
  id: string
  name: string
  description: string
  departmentId: string
  serverId: string
}

export interface Branch {
  id: string
  name: string
  description: string
  imagePath: string
}

export interface Rank {
  rank: string
  code: string
  description: string
  insigniaPath?: string | null
  category: string
  level?: string
  additionalInfo?: {
    responsibilities?: string[]
    qualifications?: string[]
    notableMembers?: string[]
    reportingTo?: string
  }
}

export interface Position {
  id: string
  title: string
  description: string
  requirements: string[]
  responsibilities: string[]
  branch: string
  department?: string
  imagePath?: string
}

export interface CommandStaffPosition {
  id: string
  title: string
  description: string
  requirements: string[]
  responsibilities: string[]
  imagePath?: string
}

export interface Class {
  id: string
  name: string
  description: string
  imagePath: string
  branch: string
  requirements?: string[]
  abilities?: string[]
  equipment?: string[]
  specializations?: Specialization[]
}

export interface Specialization {
  id: string
  name: string
  description: string
  requirements?: string[]
  abilities?: string[]
  equipment?: string[]
}

export interface Rule {
  id: string
  title: string
  description: string
  details: string[]
  category: string
  importance: "critical" | "high" | "medium" | "low"
  lastUpdated?: string
}

export interface Policy {
  id: string
  title: string
  description: string
  details: string[]
  category: string
  lastUpdated?: string
}

export interface Medal {
  id: string
  name: string
  description: string
  imagePath: string
  category: string
  requirements: string[]
  awardedFor: string
  rarity: "common" | "uncommon" | "rare" | "legendary" | "mythic"
}

export interface Qualification {
  id: string
  name: string
  description: string
  imagePath: string
  category: string
  requirements: string[]
  abilities: string[]
  equipment?: string[]
}

export interface DecalVariation {
  helmetType: string
  name: string
  imagePath: string
  description?: string
}

export interface Decal {
  id: string
  name: string
  requirement: string // Stores the 'Requirement' text
  category: string // Main category from the text file
  subCategory?: string // Optional: for sub-categories
  generalImagePath?: string
  variations: DecalVariation[]
  availableOn: string[]
}
