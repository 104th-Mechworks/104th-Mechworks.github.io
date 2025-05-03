// Common types used across data files

export type TeamMember = {
  role?: string
  name: string
  description?: string
  clearances?: string[]
}

export type TeamGroup = {
  name: string
  officer?: TeamMember
  members: TeamMember[]
}

export type Team = {
  name: string
  lead?: TeamMember
  members?: TeamMember[]
  classified?: boolean
  leadership?: TeamMember[]
  groups?: TeamGroup[]
  description?: string
}

export type Department = {
  id: string
  name: string
  head: string
  focus: string
  icon: string
  teams: Team[]
}

export type CadreInfo = {
  headCadre: string
  sectorCadres: {
    "01": string
    "02": string
    "03": string
  }
}

export type RequirementPhase = {
  phase: string
  requirements: string[]
}

export type Qualification = {
  name: string
  icon: string
  description?: string
  cadre?: CadreInfo
  rewards?: string[]
  requirementPhases?: RequirementPhase[]
  isAdvanced?: boolean
  classifiedRequirements?: boolean
}

export type QualificationPathway = {
  name: string
  icon: string
  description?: string
  cadre?: CadreInfo
  rewards?: string[]
  requirementPhases?: RequirementPhase[]
  nextQualifications?: Qualification[]
}

export type QualificationCategory = {
  name: string
  qualifications: QualificationPathway[]
}

// New types for Resilient server structure
export type PlatoonLeadership = {
  pco: string // Platoon Commanding Officer
  pxo: string // Platoon Executive Officer
  pnco: string // Platoon Non-Commissioned Officer
}

// Update the Platoon type to include platform information
export type Platoon = {
  id: string
  name: string
  specialization?: string
  platform?: string // Add platform field for multi-platform companies
  leadership: PlatoonLeadership
  squads: string[]
}

export type Company = {
  id: string
  name: string
  description: string
  icon?: string
  commandingOfficer: string
  executiveOfficer: string
  nonCommissionedOfficer: string
  platforms: string[] // Add platforms field
  platoons: Platoon[]
}

export type Server = {
  id: string
  name: string
  description: string
  imageSrc: string
  status: string
  purpose: string
  departments?: string[]
  qualifications?: string[]
  qualificationCategories?: QualificationCategory[]
  commandingOfficer?: string
  supervisingOfficer?: string
  standardsOfficer?: string
  hasCustomDepartments?: boolean
  hasCustomStructure?: boolean
  companies?: Company[] // Added for Resilient server
}

// Update the Rank type to include category
export type Rank = {
  rank: string
  code: string
  description: string
  insigniaPath?: string
  category?: "fleet-command" | "command-staff" | "high-officer" | "officer" | "nco"
  additionalInfo?: {
    responsibilities?: string[]
    qualifications?: string[]
    notableMembers?: string[]
    reportingTo?: string
  }
}

export type Branch = {
  id: string
  title: string
  description: string
  icon: string
}

export type SpecialOp = {
  id: string
  title: string
  description: string
}

// New Position type for military positions
export type Position = {
  title: string
  code: string
  description: string
  requirements: string[]
  responsibilities: string[]
  equipment?: string[]
}

// New CommandStaffMember type for command staff profiles
export type CommandStaffMember = {
  id: string
  name: string
  rank: string
  role: string
  imageSrc: string
  description: string
  achievements?: string[]
  specializations?: string[]
  commandDuties?: string[]
}
