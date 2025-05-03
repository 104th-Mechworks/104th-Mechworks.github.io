export type TeamMember = {
  role?: string
  name: string
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
}

export type Department = {
  id: string
  name: string
  head: string
  focus: string
  icon: string
  teams: Team[]
}

export const rasDepartments: Department[] = [
  {
    id: "admin",
    name: "DEPARTMENT OF ANALYSIS & ADMINISTRATION",
    head: "MAJ Uchiha",
    focus: "Internal data, documentation, structure, staff training",
    icon: "/images/departments/admin_team.png",
    teams: [
      {
        name: "Admin Team",
        lead: {
          role: "MAJ",
          name: "Uchiha",
        },
        members: [
          { role: "SGM", name: "Ollie" },
          { role: "SGT", name: "Mitchell" },
          { role: "CPL", name: "Thinker" },
        ],
      },
      {
        name: "Documentation Team",
        lead: {
          role: "SGM",
          name: "Ollie",
        },
        members: [
          { role: "SGT", name: "Mitchell" },
          { role: "CPL", name: "Thinker" },
        ],
      },
    ],
  },
  {
    id: "art",
    name: "DEPARTMENT OF ART & MODDING",
    head: "CPL Thinker",
    focus: "Visual design, modding, and helmet customization",
    icon: "/images/departments/art.png",
    teams: [
      {
        name: "Senior Art Team",
        lead: {
          role: "CPL",
          name: "Thinker",
        },
        members: [
          { role: "SGT", name: "Datti" },
          { role: "WO", name: "Odd" },
        ],
      },
      {
        name: "Primary Art Team",
        lead: {
          role: "WO",
          name: "Odd",
        },
        members: [
          { role: "SGM", name: "Poiser" },
          { role: "CPL", name: "Thinker" },
          { role: "CT", name: "Sketch" },
        ],
      },
      {
        name: "Art Initiates",
        lead: {
          role: "SGM",
          name: "Poiser",
        },
        members: [
          { role: "CT", name: "Sketch" },
          { role: "CT", name: "Canvas" },
        ],
      },
      {
        name: "Modding Team",
        lead: {
          role: "WO",
          name: "Vinh",
        },
        members: [
          { role: "SGT", name: "Datti" },
          { role: "CPL", name: "Thinker" },
        ],
      },
    ],
  },
  {
    id: "comeng",
    name: "DEPARTMENT OF COMMUNITY ENGAGEMENT",
    head: "",
    focus: "Events, outreach, digital presence",
    icon: "/images/departments/comeng.png",
    teams: [
      {
        name: "Event Team",
        lead: {
          role: "SGM",
          name: "Pending",
        },
        members: [
          { role: "SGT", name: "Mitchell" },
          { role: "CPL", name: "Thinker" },
        ],
      },
      {
        name: "Website Team",
        lead: {
          role: "SGM",
          name: "Ollie",
        },
        members: [
          { role: "SGT", name: "Mitchell" },
          { role: "CPL", name: "Thinker" },
        ],
      },
      {
        name: "Social Media Team",
        lead: {
          role: "SGM",
          name: "Mitchell",
        },
        members: [
          { role: "SGT", name: "Datti" },
          { role: "CPL", name: "Thinker" },
        ],
      },
    ],
  },
  {
    id: "standards",
    name: "DEPARTMENT OF STANDARDS & EVALUATION",
    head: "PVT Oiler + MAJ Liveshot",
    focus: "Unit quality control and In-Game Training operations",
    icon: "/images/departments/standards.png",
    teams: [
      {
        name: "Inspection Team",
        lead: {
          role: "PVT",
          name: "Oiler",
        },
        classified: true,
      },
      {
        name: "Opforce Team",
        lead: {
          role: "MAJ",
          name: "Liveshot",
        },
        members: [
          { role: "SGT", name: "Datti" },
          { role: "CPL", name: "Thinker" },
        ],
      },
    ],
  },
  {
    id: "security",
    name: "DEPARTMENT OF SECURITY SERVICES",
    head: "LT Evolution",
    focus: "Rule enforcement, fleet security, disciplinary actions",
    icon: "/images/departments/security.png",
    teams: [
      {
        name: "Fleet Security",
        lead: null,
        classified: true,
      },
      {
        name: "Ban Appeals",
        lead: {
          role: "WO",
          name: "Jaws",
        },
        members: [
          { role: "LT", name: "Evolution" },
          { role: "2LT", name: "Davien" },
        ],
      },
      {
        name: "Helmet Security",
        lead: {
          role: "2LT",
          name: "Davien",
        },
        members: [
          { role: "SGM", name: "Ollie" },
          { role: "WO", name: "Jaws" },
        ],
      },
      {
        name: "Regulations Team",
        lead: {
          role: "SGM",
          name: "Ollie",
        },
        members: [
          { role: "LT", name: "Evolution" },
          { role: "2LT", name: "Davien" },
        ],
      },
      {
        name: "Kamino Security Force",
        lead: {
          role: "LT",
          name: "Evolution",
        },
        leadership: [
          { role: "Tipoca City Clone Director", name: "AMAJ Vanok" },
          { role: "Head KSO", name: "LT Evolution" },
        ],
        groups: [
          {
            name: "A Group - Krayt Dragons",
            officer: { role: "Kaminoan Custom Officer", name: "MAJ Liveshot" },
            members: [{ name: "SGT Datti" }, { name: "CPT Igneel" }, { name: "SGT Dinii" }, { name: "SGM Blllzo" }],
          },
          {
            name: "B Group - Howlrunners",
            officer: { role: "Kaminoan Custom Officer", name: "ALT Garmr" },
            members: [{ name: "SGM Ollie" }, { name: "CPL Snare" }, { name: "SGM Airborn" }, { name: "CPL Scali" }],
          },
        ],
      },
    ],
  },
  {
    id: "operations",
    name: "DEPARTMENT OF OPERATIONS",
    head: "ASGT Dalen + SGT Datti",
    focus: "Strategic support, external affairs, special tasks",
    icon: "/images/departments/operations.png",
    teams: [
      {
        name: "3rd Party",
        lead: {
          role: "ASGT",
          name: "Dalen",
        },
        members: [
          { role: "SGT", name: "Datti" },
          { role: "AMAJ", name: "Vanok" },
        ],
      },
      {
        name: "Operatives",
        lead: {
          role: "SGT",
          name: "Datti",
        },
        classified: true,
      },
      {
        name: "Hacking",
        lead: {
          role: "AMAJ",
          name: "Vanok",
        },
        classified: true,
      },
    ],
  },
  {
    id: "intelligence",
    name: "DEPARTMENT OF INTELLIGENCE",
    head: "",
    focus: "Information gathering, analysis, and distribution",
    icon: "/images/departments/intelligence.png",
    teams: [
      {
        name: "Intelligence Analysis",
        lead: null,
        classified: true,
      },
      {
        name: "Reconnaissance",
        lead: null,
        classified: true,
      },
    ],
  },
  {
    id: "discipline",
    name: "DEPARTMENT OF DISCIPLINE",
    head: "",
    focus: "Enforcement of regulations and handling of appeals",
    icon: "/images/departments/discipline.png",
    teams: [
      {
        name: "Ban Appeals",
        lead: {
          role: "WO",
          name: "Jaws",
        },
        members: [
          { role: "LT", name: "Evolution" },
          { role: "2LT", name: "Davien" },
        ],
      },
      {
        name: "Disciplinary Actions",
        lead: null,
        classified: true,
      },
    ],
  },
]
