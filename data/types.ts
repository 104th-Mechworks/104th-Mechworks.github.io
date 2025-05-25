export type Server = {
  id: string
  name: string
  description: string
  imageSrc: string
  status?: string
  purpose?: string
  departments?: string[]
  commandingOfficer?: string
  hasCustomStructure?: boolean
  specialDepartments?: SpecialDepartment[]
  qualificationCategories?: QualificationCategory[]
  supervisingOfficer?: string
  standardsOfficer?: string
  companies?: Company[]
  wings?: Wing[]
}

export type Department = {
  id: string
  name: string
  head: string
  focus: string
  icon: string
  teams: Team[]
}

export type TeamMember = {
  role?: string
  name: string
  clearances?: string[]
}

export type TeamGroup = {
  name: string
  officer?: TeamMember
  members: TeamMember[]
}

export type Team = {
  name: string
  lead?: TeamMember | null
  members?: TeamMember[]
  classified?: boolean
  leadership?: TeamMember[]
  groups?: TeamGroup[]
  description?: string
}

export type Rank = {
  rank: string
  code: string
  description: string
  insigniaPath?: string
  category?: "fleet-command" | "command-staff" | "high-officer" | "officer" | "nco"
  level?: "FC-1" | "FC-2" | "FC-3" | "CS-1" | "CS-2" | "CS-3" | "HO-1" | "HO-2" | "HO-3" | "O-1" | "O-2" | "O-3" | "NCO-1" | "NCO-2" | "NCO-3"
  additionalInfo?: {
    responsibilities?: string[]
    eligiblePositions?: string[]
    reportsTo?: string
    qualifications?: string[]
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

export type Position = {
  title: string
  code: string
  description: string
  requirements: string[]
  responsibilities: string[]
  equipment?: string[] // Make equipment optional
}

export type CommandStaffMember = {
  id: string
  name: string
  rank: string
  role: string
  imageSrc?: string
  branch?: string
  description: string
  responsibilities?: string[]
  achievements?: string[]
  specializations?: string[]
  commandDuties?: string[]
  contactInfo?: {
    office?: string
    comms?: string
  }
}

export type QualificationPathway = {
  name: string
  icon: string
  description: string
  cadre?: {
    headCadre: string
    sectorCadres: {
      [key: string]: string
    }
  }
  rewards: string[]
  requirementPhases: RequirementPhase[]
  nextQualifications?: Qualification[]
  isAdvanced?: boolean
  classifiedRequirements?: boolean
}

export type Qualification = {
  name: string
  icon: string
  description: string
  cadre?: {
    headCadre: string
    sectorCadres: {
      [key: string]: string
    }
  }
  rewards: string[]
  requirementPhases?: RequirementPhase[]
  isAdvanced?: boolean
  classifiedRequirements?: boolean
}

export type RequirementPhase = {
  phase: string
  requirements: string[]
}

export type QualificationCategory = {
  name: string
  qualifications: (Qualification | QualificationPathway)[]
}

export type Company = {
  id: string
  name: string
  description: string
  commandingOfficer: string
  executiveOfficer?: string
  nonCommissionedOfficer?: string
  platforms: string[]
  platoons: Platoon[]
}

export type Platoon = {
  id: string
  name: string
  specialization?: string
  leadership: {
    pco: string
    pxo: string
    pnco: string
  }
  squads: string[]
  platform?: string
}

export type Wing = {
  id: string
  name: string
  description: string
  commandingOfficer: string
  executiveOfficer?: string
  nonCommissionedOfficer?: string
  platforms: string[]
  squadrons: Squadron[]
}

export type Squadron = {
  id: string
  name: string
  specialization: string
  leadership: {
    sco: string
    sxo: string
    snco: string
  }
  flights: string[]
  platform: string
}

export type SpecialDepartment = {
  id: string
  name: string
  description: string
  commandingOfficer: string
  executiveOfficers: { position: string; name: string }[]
  troops: Troop[]
  color: string
}

export type Troop = {
  id: string
  name: string
  commandingOfficer: string
  lieutenants?: string[]
  sergeants?: string[]
  squadLeaders?: string[]
  members?: string[]
  description?: string
  specialization?: string
  platformBadge?: string
  platform?: string
  leadership?: {
    tco: string
  }
}

// New type for Classes
export type TrooperClass = {
  id: string
  title: string
  description: string
  equipment: string[]
  imageSrc: string
}

export type ClassCategory = {
  name: string
  classes: TrooperClass[]
}

// New types for Medals
export type Medal = {
  id: string
  name: string
  description: string
  imageSrc: string
  requirements: string[]
  category: MedalCategory
  rarity: "common" | "uncommon" | "rare" | "legendary" | "mythic"
  issuedBy?: string
  dateIntroduced?: string
}

export type MedalCategory = "service" | "achievement" | "operation" | "longevity" | "class"
