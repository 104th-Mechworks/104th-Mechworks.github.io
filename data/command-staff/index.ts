import type { CommandStaffMember } from "../types"

// Fleet Command - Top level leadership
export const fleetCommandMembers: CommandStaffMember[] = [
  {
    id: "dark",
    name: "Dark",
    rank: "MCDR",
    role: "Fleet Commanding Officer",
    imageSrc:
      "/images/command_renders/DarkRender.png",
    description:
      "Marshal Commander Dark leads the 104th Battalion with distinction, overseeing all operations across the fleet and guides the direction of the milsim.",
    achievements: [
      "Led the defense of Kamino against Separatist forces",
      "Coordinated the successful Ryloth campaign",
      "Recipient of the Chancellor's Service Medal",
      "Veteran of over 50 major engagements",
    ],
    specializations: ["Strategic Planning", "Fleet Coordination", "Diplomatic Relations", "Combined Arms Warfare"],
    commandDuties: [
      "104th Battalion - Marshal Commander",
      "RAS Vanguard - Director of Intelligance",
      "KMC - Rifleman Head Cadre",
    ],
  },
  {
    id: "warpath",
    name: "Warpath",
    rank: "SCDR",
    role: "Fleet Executive Officer",
    imageSrc:
      "/images/command_renders/WarpathRender.png",
    description:
      "Senior Commander Warpath serves as the right hand of Marshal Commander Dark, bringing tactical expertise and battlefield experience to the fleet command. Known for his decisive leadership and unwavering resolve.",
    achievements: [
      "Distinguished service during the Battle of Geonosis",
      "Led the successful defense of Christophsis",
      "Recipient of the Republic Cross for Valor",
      "Veteran of numerous high-risk operations",
    ],
    specializations: ["Tactical Operations", "Ground Combat Strategy", "Troop Deployment", "Defensive Operations"],
    commandDuties: [
      "104th Battalion - Senior Commander",
      "212th Attack Battalion - Commander (former)",
      "Advanced Combat Training Program - Lead Instructor (former)",
    ],
  },
  {
    id: "rain",
    name: "Rain",
    rank: "MSHL",
    role: "Air Marshal",
    imageSrc:
      "/images/command_renders/RainRender.png",
    description:
      "Air Marshal Rain commands the starfighter operations of the 104th Battalion with exceptional skill and foresight. His expertise in aerial combat tactics has proven decisive in numerous engagements against Separatist forces.",
    achievements: [
      "Orchestrated the air campaign during the Liberation of Ryloth",
      "Established the 104th's advanced flight training protocols",
      "Recipient of the Distinguished Flying Cross",
      "Veteran of over 200 combat sorties",
    ],
    specializations: ["Aerial Combat Tactics", "Fleet Coordination", "Pilot Training", "Air Support Operations"],
    commandDuties: [
      "104th Battalion - Air Marshal",
      "Triumphant Server - Commodore (former)",
      "Republic Flight Academy - Chief Instructor (former)",
    ],
  },
]

// Branch Commanders - Second tier leadership
export const branchCommandMembers: CommandStaffMember[] = [
  {
    id: "shatterstorm",
    name: "Shatterstorm",
    rank: "BCDR",
    role: "Army Commanding Officer",
    imageSrc:
      "/images/command_renders/ShatterstormRender.png",
    description:
      "Battalion Commander Shatterstorm leads the Army branch of the 104th with tactical precision and unwavering determination. His leadership has been instrumental in countless ground operations against Separatist forces.",
    achievements: [
      "Led the ground assault during the Battle of Felucia",
      "Coordinated the defense of multiple Republic outposts",
      "Recipient of the Republic Medal of Honor",
      "Veteran of over 40 major ground engagements",
    ],
    specializations: ["Infantry Tactics", "Armor Deployment", "Ground Assault Operations", "Defensive Fortifications"],
    commandDuties: [
      "104th Battalion - Army Commanding Officer",
      "Resilient Server - Battalion Commander",
      "Advanced Infantry Training Program - Instructor (former)",
    ],
  },
  {
    id: "snips",
    name: "Snips",
    rank: "COM",
    role: "Starfighter Corps Commander",
    imageSrc:
      "/images/command_renders/SnipsRender.png",
    description:
      "Commodore Snips commands the Starfighter Corps with exceptional skill and innovative tactics. Under his leadership, the 104th's pilots have become renowned throughout the Republic for their precision and effectiveness.",
    achievements: [
      "Led the decisive air victory at the Battle of Bothawui",
      "Pioneered new starfighter combat formations",
      "Recipient of the Republic Star of Courage",
      "Veteran of over 150 combat sorties",
    ],
    specializations: [
      "Fighter Squadron Tactics",
      "Pilot Training Programs",
      "Air-to-Ground Coordination",
      "Space Combat",
    ],
    commandDuties: [
      "104th Battalion - Starfighter Corps Commander",
      "Triumphant Server - Commodore",
      "Republic Flight Academy - Wing Commander (former)",
    ],
  },
]

// Split the Special Forces Command into two groups: commanders and executives
export const specialForcesCommandMembers: CommandStaffMember[] = [
  {
    id: "fox",
    name: "Fox",
    rank: "CDR",
    role: "Head of Special Forces",
    imageSrc:
      "/images/command_renders/FoxRender.png",
    description:
      "Commander Fox leads the Special Forces division with precision and expertise. His strategic mind and tactical prowess have made the 104th's special operations units among the most effective in the Republic military.",
    achievements: [
      "Established the Republic Commando training program",
      "Led numerous high-risk extraction operations in Separatist territory",
      "Recipient of the Republic Special Operations Medal",
      "Veteran of over 45 classified missions",
    ],
    specializations: ["Special Operations", "Covert Tactics", "RC Training", "High-Risk Deployments"],
    commandDuties: [
      "104th Battalion - Special Forces Commander",
      "Ravager Server - RC Admissions Officer",
      "Coruscant Guard - Commander (former)",
    ],
  },
  {
    id: "mako",
    name: "Mako",
    rank: "ACDR",
    role: "Head of ARC Program",
    imageSrc:
      "/images/command_renders/MakoRender.png",
    description:
      "ARC Commander Mako oversees the elite Advanced Recon Commando program with uncompromising standards and exceptional leadership. His training methods have produced some of the most capable special forces operatives in the Republic.",
    achievements: [
      "Redesigned the ARC selection process",
      "Personally led the infiltration of Separatist command centers on Mustafar",
      "Recipient of the Chancellor's Commendation for Valor",
      "Veteran of over 60 deep reconnaissance missions",
    ],
    specializations: ["ARC Operations", "Infiltration Tactics", "Advanced Combat Training", "Reconnaissance"],
    commandDuties: [
      "104th Battalion - ARC Program Commander",
      "Ravager Server - ARC Admissions Officer",
      "ARC Trooper Alpha Squad - Leader (former)",
    ],
  },
]

// Create a separate array for Special Forces Executive Officers (AMAJ)
export const specialForcesExecutiveMembers: CommandStaffMember[] = [
  {
    id: "vanok",
    name: "Vanok",
    rank: "AMAJ",
    role: "Special Forces Executive Officer - 03 Sector",
    imageSrc: "/images/command_renders/VanokRender.png",
    description:
      "ARC Major Vanok serves as the Special Forces Executive Officer for 03 Sector, coordinating covert operations and specialized training. His expertise in infiltration tactics has been crucial for numerous successful missions behind enemy lines.",
    achievements: [
      "Coordinated the extraction of vital intelligence from Separatist strongholds",
      "Developed advanced infiltration protocols for ARC operations",
      "Recipient of the Republic Intelligence Cross",
      "Veteran of over 35 deep cover operations",
    ],
    specializations: ["Covert Intelligence", "Infiltration Strategy", "Asset Extraction", "Counter-Intelligence"],
    commandDuties: [
      "104th Battalion - Special Forces Executive Officer (03 Sector)",
      "Ravager Server - ARC Operations Coordinator",
      "Republic Intelligence - Field Operative (former)",
    ],
  },
  {
    id: "jesse",
    name: "Jesse",
    rank: "AMAJ",
    role: "Special Forces Executive Officer - 02 Sector",
    imageSrc: "/images/command_renders/JesseRender.png",
    description:
      "ARC Major Jesse oversees Special Forces operations in 02 Sector with exceptional tactical acumen. His leadership in high-risk missions has earned him a reputation as one of the most reliable officers in the 104th's special operations division.",
    achievements: [
      "Led the assault team that captured a Separatist communications relay on Raxus",
      "Established specialized training protocols for urban infiltration",
      "Recipient of the Republic Valor Cross with distinction",
      "Veteran of over 40 special operations missions",
    ],
    specializations: ["Urban Warfare", "Demolitions", "Close-Quarters Combat", "Tactical Planning"],
    commandDuties: [
      "104th Battalion - Special Forces Executive Officer (02 Sector)",
      "Ravager Server - Special Operations Trainer",
      "501st Legion - ARC Trooper (former)",
    ],
  },
]

// Army Majors - Sector Majors
export const armyMajorMembers: CommandStaffMember[] = [
  {
    id: "liveshot",
    name: "Liveshot",
    rank: "MAJ",
    role: "Army Major - 03 Sector",
    imageSrc: "/placeholder.svg?key=liveshot",
    description:
      "Major Liveshot serves as the Army Major for 03 Sector, providing tactical leadership and strategic planning for ground operations. His expertise in combined arms warfare has been vital to the sector's operational success.",
    achievements: [
      "Led the successful defense of Republic outposts on Felucia",
      "Coordinated multiple battalion-level operations against Separatist forces",
      "Recipient of the Republic Combat Leadership Medal",
      "Veteran of over 30 major ground engagements",
    ],
    specializations: ["Ground Combat Tactics", "Combined Arms Operations", "Defensive Strategy", "Troop Leadership"],
    commandDuties: [
      "104th Battalion - ",
      "RAS Vanguard - Head of Department of Standards",
      "KMC - Chief Training Officer",
    ],
  },
  {
    id: "uchiha",
    name: "Uchiha",
    rank: "MAJ",
    role: "Head of Analysis",
    imageSrc: "/placeholder.svg?key=uchiha",
    description:
      "Major Uchiha oversees the analysis and data collection for the 104th Battalion, ensuring the effective operation of the unit.",
    achievements: [
      "Head of Department of Analysis",
      "Desert Trooper",
    ],
    // specializations: [],
    commandDuties: [
      "104th Battalion - Head of Analysis",
      "RAS Vanguard - Deputy Director of Analysis",
    ],
  },
  // {
  //   id: "vacant-01",
  //   name: "VACANT",
  //   rank: "MAJ",
  //   role: "Army Major - 01 Sector",
  //   imageSrc: "/placeholder.svg?key=vacant",
  //   description: "This position is currently vacant and awaiting assignment.",
  //   achievements: [],
  //   specializations: [],
  //   commandDuties: [],
  // },
]

// Separate array for sector commanders that will be displayed in a row
export const sectorCommandMembers: CommandStaffMember[] = [
  {
    id: "feedback",
    name: "Feedback",
    rank: "CDR",
    role: "01 Sector Army Commander",
    imageSrc: "/images/command_renders/FeedbackRender.png",
    description:
      "Commander Feedback leads the 01 Sector of the Army with methodical precision and tactical insight. His analytical approach to battlefield situations has saved countless lives and secured numerous victories.",
    achievements: [
      "Successfully defended Republic supply lines on Felucia",
      "Orchestrated the capture of key Separatist command posts",
      "Recipient of the Republic Strategic Command Medal",
      "Veteran of over 30 major ground campaigns",
    ],
    specializations: ["Strategic Analysis", "Resource Allocation", "Defensive Operations", "Tactical Planning"],
    commandDuties: [
      "104th Battalion - 01 Sector Commander",
      "Resilient Server - Clone Commander",
      "KMC - Head Marksman Cadre",
    ],
  },
  {
    id: "deranged",
    name: "Deranged",
    rank: "CDR",
    role: "02 Army Sector Commander",
    imageSrc:
      "/images/command_renders/DerangedRender.png",
    description:
      "Commander Deranged leads the 02 Sector of the Army with bold initiative and calculated aggression. His unconventional tactics have repeatedly caught Separatist forces off guard, leading to significant Republic victories.",
    achievements: [
      "Led the surprise assault that captured the Separatist base on Mygeeto",
      "Developed innovative urban combat strategies",
      "Recipient of the Republic Cross for Tactical Excellence",
      "Veteran of over 25 high-risk operations",
    ],
    specializations: ["Unconventional Warfare", "Urban Combat", "Assault Operations", "Guerrilla Tactics"],
    commandDuties: [
      "104th Battalion - 02 Sector Commander",
      "Resilient Server - Clone Commander",
    ],
  },
  {
    id: "tuut",
    name: "Tuut",
    rank: "CDR",
    role: "03 Army Sector Commander",
    imageSrc: "/placeholder.svg?key=g81nb",
    description:
      "Commander Tuut leads the 03 Sector of the Army with steady resolve and meticulous planning. His methodical approach to operations ensures minimal casualties while maximizing strategic objectives.",
    achievements: [
      "Successfully evacuated Republic forces from Cato Neimoidia under heavy fire",
      "Established effective supply chains across contested territories",
      "Recipient of the Republic Logistics Excellence Medal",
      "Veteran of over 35 extended campaigns",
    ],
    specializations: ["Logistics Operations", "Extended Campaigns", "Evacuation Procedures", "Supply Chain Security"],
    commandDuties: [
      "104th Battalion - 03 Sector Commander",
      "Resilient Server - Clone Commander",
      "Republic Logistics Command - Officer (former)",
    ],
  },
]

// Combined command staff for display
export const commandStaffMembers: CommandStaffMember[] = [
  ...fleetCommandMembers,
  ...branchCommandMembers,
  ...specialForcesCommandMembers,
  ...specialForcesExecutiveMembers,
  ...armyMajorMembers,
  ...sectorCommandMembers,
]