import type { Rule } from "."

// Raid Rules
const raidRules: Rule[] = [
  {
    id: "raid-general",
    code: "§104",
    title: "General Raid Rules",
    description: "Primary rules for all battalion raids.",
    importance: "critical",
    category: "raid",
    type: "rule",
    sections: [
      {
        id: "raid-general-1",
        code: "§104.1",
        title: "Core Rule",
        content: ["HAVE FUN."],
      },
      {
        id: "raid-general-2",
        code: "§104.2",
        title: "Standards and Behavior",
        content: [
          "No Shouting down the mic, Communication is key.",
          "Respect the raid leader and others.",
          "Raid Rules must be followed when playing clones, no matter what.",
          "Raid Rules must be followed atleast once per raid to count as attendance.",
          "Raid Rules can be followed as droids - Try to search for clones 3 times first.",
          "Raid Rules must be followed if facing against 104th raids or members - Unless agreed in Discord DMs.",
          "Purposely attacking or targeting raids is not allowed.",
          "We are all on the same team, do not fight each other unless apart of Official Skirmishes or Operations.",
        ],
      },
    ],
  },
  {
    id: "raid-class",
    code: "§105",
    title: "Class Rules",
    description: "Rules regarding class selection during raids.",
    importance: "high",
    category: "raid",
    type: "rule",
    sections: [
      {
        id: "raid-class-1",
        code: "§105.1",
        title: "Class Selection",
        content: [
          "Play only your selected base Class. (Assault, Heavy, Specialist)",
          "Officer Class is for Medic Qual and Officers only. (SGT+/FCPT/PO2+)",
          "ARC / Commando / Aerial are only for those who have earned that qualifcation.",
          "ARF Troopers can play all base classes.",
          "No heroes or Wookiees. We are a Clone Unit.",
        ],
      },
    ],
  },
  {
    id: "raid-weapons",
    code: "§106",
    title: "Weapon Rules",
    description: "Rules regarding weapon selection during raids.",
    importance: "standard",
    category: "raid",
    type: "rule",
    sections: [
      {
        id: "raid-weapons-1",
        code: "§106.1",
        title: "Weapon Selection",
        content: [
          "Play only default clone weapons. (includes DC-15LE)",
          "CR-2, T-21, NT-242, S-5 are unlocked by earning specific qualifications in the KMC.",
          "SE-44c can be used by Special Forces.",
        ],
      },
    ],
  },
  {
    id: "raid-vehicles",
    code: "§107",
    title: "Vehicle Rules",
    description: "Rules regarding vehicle usage during raids.",
    importance: "standard",
    category: "raid",
    type: "rule",
    sections: [
      {
        id: "raid-vehicles-1",
        code: "§107.1",
        title: "Vehicle Usage",
        content: [
          "TX-130 / AT-RT are only for those who have earned that qualification.",
          "BARC Speeder / Republic Gunship is allowed for all members.",
          "AT-TE on CS Felucia: Tanker Class Only.",
          "AT-TE on GA Geonosis: Available to all, giving priority to Tankers.",
        ],
      },
    ],
  },
  {
    id: "raid-starfighters",
    code: "§108",
    title: "Starfighter Rules",
    description: "Rules regarding starfighter usage during raids.",
    importance: "standard",
    category: "raid",
    type: "rule",
    sections: [
      {
        id: "raid-starfighters-1",
        code: "§108.1",
        title: "Starfighter Usage",
        content: [
          "Army Members can play their selected Starfighter Class in SFA + GA.",
          "Starfighter Members can play their selected Infantry Class in CS + GA.",
          "Starfighter Members get priority on starfighter use in GA.",
          "Ace Pilots can use Yoda + Maul in SFA only.",
        ],
      },
    ],
  },
  {
    id: "raid-appearances",
    code: "§109",
    title: "Appearance Rules",
    description: "Rules regarding clone appearances during raids.",
    importance: "standard",
    category: "raid",
    type: "rule",
    sections: [
      {
        id: "raid-appearances-1",
        code: "§109.1",
        title: "Clone Appearances",
        content: [
          "Phase 2 104th for all troopers.",
          "Phase 1 104th for ARF troopers.",
          "Special Forces Appearances are known by Special Forces.",
        ],
      },
      {
        id: "raid-appearances-2",
        code: "§109.2",
        title: "Officer Skins",
        content: [
          
          "Shiny Officer Skin: Medics.",
          "P2 104th Officer Skin: SGT+",
          "P1 104th Officer Skin: SGT+, who are ARFs.",
          "Naval Officer Skin: FCPT+/PO2+",
        ],
      },
    ],
  },
  {
    id: "raid-tldr",
    title: "TLDR of Raid Rules",
    description: "Simplified version of raid rules for quick reference.",
    importance: "standard",
    category: "raid",
    type: "rule",
    sections: [
      {
        id: "raid-tldr-1",
        title: "For the nerds who need to read it",
        content: [
          "No Shouting down the mic, Communication is key.",
          "Respect the raid leader and others.",
          "Play your selected base class, unless otherwise permitted.",
          "Play default weapons + DC-15LE, unless otherwise permitted.",
          "Play Phase 2 104th, unless otherwise permitted",
          "If you do not know what you are permitted, check with your raid leader.",
          "HAVE FUN.",
        ],
      },
    ],
  },
]

export default raidRules
