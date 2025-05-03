// Server data
export const servers = [
  {
    id: "main",
    name: "Main Server",
    description: "Central hub for all operations",
    imageSrc: "/images/104th.png",
    status: "ONLINE",
    purpose:
      "Command and control center for the 104th Battalion. Houses the primary communications array and strategic operations center.",
    departments: ["Command", "Operations", "Intelligence", "Logistics", "Training"],
    commandingOfficer: "Marshal Commander Wolffe",
  },
  {
    id: "resilient",
    name: "Resilient",
    description: "Army hub for ground operations",
    imageSrc: "/images/resilient.png",
    status: "ONLINE",
    purpose:
      "Primary base for ground forces and infantry operations. Contains training facilities and equipment depots.",
    departments: ["Infantry", "Armor Division", "Artillery", "Combat Engineers", "Medical Corps"],
    commandingOfficer: "Battalion Commander Rex",
  },
  {
    id: "triumphant",
    name: "Triumphant",
    description: "Starfighter hub for air and space operations",
    imageSrc: "/images/triumphant.png",
    status: "ONLINE",
    purpose:
      "Coordination center for all air and space combat operations. Houses starfighter squadrons and flight training facilities.",
    departments: ["Fighter Command", "Bomber Division", "Reconnaissance", "Flight Training", "Maintenance"],
    commandingOfficer: "Commodore Hawk",
  },
  {
    id: "ravager",
    name: "Ravager",
    description: "Special Forces hub for elite operations",
    imageSrc: "/images/ravager.png",
    status: "CLASSIFIED",
    purpose: "Command center for special operations and covert missions. Houses ARC and RC training facilities.",
    departments: ["ARC Operations", "RC Operations", "Covert Intelligence", "Advanced Training"],
    commandingOfficer: "ARC Commander Blitz",
  },
  {
    id: "ras",
    name: "RAS Vanguard",
    description: "Intelligence hub made of different departments",
    imageSrc: "/images/ras.png",
    status: "ACTIVE",
    purpose:
      "Mobile intelligence gathering and analysis center. Provides tactical information to all battalion operations.",
    // Special case for RAS Vanguard - departments are handled separately
    departments: [],
    commandingOfficer: "Senior Commander Cody",
    hasCustomDepartments: true,
  },
  {
    id: "kmc",
    name: "KMC",
    description: "Kamino Medical Center",
    imageSrc: "/images/kmc.png",
    status: "ONLINE",
    purpose:
      "Primary medical facility for the 104th Battalion. Provides medical care, rehabilitation, and advanced medical training.",
    departments: ["Emergency Medical", "Surgery", "Rehabilitation", "Medical Research", "Field Medic Training"],
    commandingOfficer: "Naval Commander Kix",
  },
]

export type Server = (typeof servers)[0]
