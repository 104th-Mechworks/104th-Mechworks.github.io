import type { Server, QualificationCategory } from "../types"

// Organize qualifications by category with icons, pathways, and detailed information
export const kmcQualifications: QualificationCategory[] = [
  {
    name: "Army",
    qualifications: [
      {
        name: "Rifleman",
        icon: "Rifle",
        description: "Assualt pathway",
        cadre: {
          headCadre: "LT Xiash",
          sectorCadres: {
            "01": "LT Xiash",
            "02": "2LT Clax",
            "03": "SGM Kurlig",
          },
        },
        rewards: ["Access to CR-2 blaster rifle", "Grey hood helmet attatchment", "Infantry combat certification"],
        requirementPhases: [
          {
            phase: "Phase I",
            requirements: ["Using the DC-15A", "Top 3 overall"],
          },
          {
            phase: "Phase II",
            requirements: ["Using the DC-15A", "70 eliminations before boarding", "110 eliminations overall"],
          },
          {
            phase: "Phase III",
            requirements: ["Using the CR-2", "85 eliminations before boarding", "120 eliminations overall"],
          },
        ],
        nextQualifications: [
          {
            name: "Airborne",
            icon: "Aerial",
            description: "Advanced aerial deployment training",
            rewards: ["Airbourne Helmet"],
            isAdvanced: true,
            classifiedRequirements: true,
          },
        ],
      },
      {
        name: "Marksman",
        icon: "Marksman",
        description: "Specialist pathway",
        cadre: {
          headCadre: "MAJ Feedback",
          sectorCadres: {
            "01": "SGM Ollie",
            "02": "CPT Hondo",
            "03": "SGT Mood",
          },
        },
        rewards: ["Access to NT-242 sniper rifle", "Raised binoculars in helmet"],
        requirementPhases: [
          {
            phase: "Phase I",
            requirements: [
              "Using the Valken-38x",
              "Top 5 on podium",
              "Infiltration may be banned for combat, check with instructor",
            ],
          },
          {
            phase: "Phase II",
            requirements: ["Using the Valken-38x", "65 eliminations before boarding", "85 eliminations overall"],
          },
          {
            phase: "Phase III",
            requirements: ["Using the NT-242", "75 eliminations before boarding", "110 eliminations overall"],
          },
        ],
        nextQualifications: [
          {
            name: "Scout",
            icon: "Binoculars",
            description: "The best sharpshooters in the milsim",
            rewards: ["Scout Helmet", "Digital camo"],
            isAdvanced: true,
            classifiedRequirements: true,
          },
        ],
      },
      {
        name: "Anti-Armour",
        icon: "Bomb",
        description: "Heavy weapons training focused on vehicle destruction",
        cadre: {
          headCadre: "LT Evolution",
          sectorCadres: {
            "01": "CTP Dymphna",
            "02": "LT Monferno",
            "03": "CPT Igneel",
          },
        },
        rewards: ["Access to T-21", "Gunnar plated on top of the helmet"],
        requirementPhases: [
          {
            phase: "Phase I",
            requirements: [
              "Using DC-15 or DC-15LE",
              "50 eliminations before boarding",
              "70 eliminations overall",
              "FIrst 3 attendees that reach top 5 on team",
            ],
          },
          {
            phase: "Phase II",
            requirements: [
              "Using the T-21",
              "60 eliminations before boarding",
              "85 eliminations",
              "2 AAT Eliminations",
              "25,000 score minimum",
            ],
          },
          {
            phase: "Phase III",
            requirements: ["Using the T-21", "1,600 SPM average across 3 CS games"],
          },
        ],
      },
      {
        name: "TX-130 Driver",
        icon: "Tank",
        description: "Operation of TX-130 Saber-class fighter tank",
        cadre: {
          headCadre: "LT Evolution",
          sectorCadres: {
            "01": "CTP Dymphna",
            "02": "LT Monferno",
            "03": "CPT Igneel",
          },
        },
        rewards: ["TX-130 operation certification", "Bacara helmet", "Priority for artilery"],
        requirementPhases: [
          {
            phase: "Phase I",
            requirements: [
              "Using the DC-15 or DC-15LE",
              "65 eliminations before boarding",
              "85 eliminations",
              "25,000 score minimum",
              "Top 2 candidates will advance",
            ],
          },
          {
            phase: "Phase II",
            requirements: [
              "Using the TX-130 on ground and DC-15 or DC-15LE on ship",
              "70 eliminations before boarding with the TX-130",
              "20 eliminations on ship with DC-15 or DC-15LE",
              "90 eliminations overall",
              "34,000 score minimum",
            ],
          },
          {
            phase: "Phase III",
            requirements: [
              "Using the TX-130",
              "5 Objective captures",
              "2 Hero eliminations",
              "40 Killstrak",
              "Objective captures and hero eliminations must be comunicated clearly",
            ],
          },
          {
            phase: "Phase IV",
            requirements: ["Using TX-130", "2,200 SPM", "100 eliminations overall", "3 AAT elminiations"],
          },
        ],
      },
      {
        name: "ARF",
        icon: "Search",
        description: "Advanced Recon Force training",
        cadre: {
          headCadre: "ASGT Dalen",
          sectorCadres: {
            "01": "SGT Datti",
            "02": "AMAJ Vanok",
            "03": "SGM Ollie",
          },
        },
        rewards: ["ARF trooper designation", "Specialized reconnaissance equipment", "Access to stealth operations"],
        requirementPhases: [
          {
            phase: "Phase I",
            requirements: [
              "Complete basic reconnaissance training",
              "Pass stealth movement assessment",
              "Complete surveillance techniques course",
            ],
          },
          {
            phase: "Phase II",
            requirements: [
              "Pass long-range communications certification",
              "Complete intelligence gathering training",
              "Pass survival skills assessment",
            ],
          },
          {
            phase: "Phase III",
            requirements: [
              "Complete advanced reconnaissance course",
              "Pass stealth assessment with 85% score",
              "Complete final field qualification",
            ],
          },
        ],
        nextQualifications: [
          {
            name: "AT-RT Driver",
            icon: "Footprints",
            description: "Operation of All Terrain Recon Transport",
            cadre: {
              headCadre: "MAJ Liveshot",
              sectorCadres: {
                "01": "SGT Datti",
                "02": "CPL Thinker",
                "03": "SGM Poiser",
              },
            },
            rewards: [
              "AT-RT operation certification",
              "Rapid deployment specialist designation",
              "Scout walker tactical training",
            ],
            isAdvanced: true,
            classifiedRequirements: true,
          },
        ],
      },
    ],
  },
  {
    name: "Starfighter Corps",
    qualifications: [
      {
        name: "ARC-170 Stalker",
        icon: "PlaneTakeoff",
        description: "Operation of ARC-170 starfighter",
        cadre: {
          headCadre: "WCDR Odd Ball",
          sectorCadres: {
            "01": "GCPT Tucker",
            "02": "SL Warthog",
            "03": "FCPT Slammer",
          },
        },
        rewards: ["ARC-170 pilot certification", "Long-range patrol authorization", "Multi-crew coordination training"],
        requirementPhases: [
          {
            phase: "Phase I",
            requirements: [
              "Complete basic flight training",
              "Pass ARC-170 systems examination",
              "Complete simulator training program",
            ],
          },
          {
            phase: "Phase II",
            requirements: [
              "Pass formation flying assessment",
              "Complete weapons systems training",
              "Pass navigation certification",
            ],
          },
          {
            phase: "Phase III",
            requirements: [
              "Complete 20 successful combat sorties",
              "Pass multi-crew coordination assessment",
              "Complete final qualification flight",
            ],
          },
        ],
        nextQualifications: [
          {
            name: "ACE Pilot",
            icon: "BadgePlus",
            description: "Elite pilot certification",
            cadre: {
              headCadre: "COM Hawk",
              sectorCadres: {
                "01": "Air CPT Axe",
                "02": "WCDR Matchstick",
                "03": "GCPT Swoop",
              },
            },
            rewards: [
              "Ace pilot designation",
              "Priority starfighter assignment",
              "Squadron leadership eligibility",
              "Custom fighter markings",
            ],
            isAdvanced: true,
            classifiedRequirements: true,
          },
        ],
      },
      {
        name: "V-Wing Prowler",
        icon: "Plane",
        description: "Operation of Alpha-3 Nimbus-class V-wing starfighter",
        cadre: {
          headCadre: "SL Kickback",
          sectorCadres: {
            "01": "FCPT Killer",
            "02": "FLT Hez",
            "03": "FLT Sear",
          },
        },
        rewards: ["V-wing pilot certification", "Interceptor tactics training", "High-speed pursuit authorization"],
        requirementPhases: [
          {
            phase: "Phase I",
            requirements: [
              "Complete basic flight training",
              "Pass V-wing systems examination",
              "Complete simulator training program",
            ],
          },
          {
            phase: "Phase II",
            requirements: [
              "Pass high-speed maneuvers assessment",
              "Complete weapons systems training",
              "Pass intercept tactics certification",
            ],
          },
          {
            phase: "Phase III",
            requirements: [
              "Complete 15 successful intercept missions",
              "Pass squadron coordination assessment",
              "Complete final qualification flight",
            ],
          },
        ],
        nextQualifications: [
          {
            name: "ACE Pilot",
            icon: "BadgePlus",
            description: "Elite pilot certification",
            cadre: {
              headCadre: "COM Hawk",
              sectorCadres: {
                "01": "Air CPT Axe",
                "02": "WCDR Matchstick",
                "03": "GCPT Swoop",
              },
            },
            rewards: [
              "Ace pilot designation",
              "Priority starfighter assignment",
              "Squadron leadership eligibility",
              "Custom fighter markings",
            ],
            isAdvanced: true,
            classifiedRequirements: true,
          },
        ],
      },
      {
        name: "Y-Wing Bomber",
        icon: "Rocket",
        description: "Operation of BTL Y-wing starfighter",
        cadre: {
          headCadre: "FO Tracker",
          sectorCadres: {
            "01": "FO Kickstart",
            "02": "PO Afterburn",
            "03": "PO Boost",
          },
        },
        rewards: ["Y-wing pilot certification", "Bombing run authorization", "Heavy ordnance handling certification"],
        requirementPhases: [
          {
            phase: "Phase I",
            requirements: [
              "Complete basic flight training",
              "Pass Y-wing systems examination",
              "Complete simulator training program",
            ],
          },
          {
            phase: "Phase II",
            requirements: [
              "Pass heavy craft handling assessment",
              "Complete ordnance systems training",
              "Pass targeting certification",
            ],
          },
          {
            phase: "Phase III",
            requirements: [
              "Complete 10 successful bombing runs",
              "Pass squadron coordination assessment",
              "Complete final qualification flight",
            ],
          },
        ],
        nextQualifications: [
          {
            name: "ACE Pilot",
            icon: "BadgePlus",
            description: "Elite pilot certification",
            cadre: {
              headCadre: "COM Hawk",
              sectorCadres: {
                "01": "Air CPT Axe",
                "02": "WCDR Matchstick",
                "03": "GCPT Swoop",
              },
            },
            rewards: [
              "Ace pilot designation",
              "Priority starfighter assignment",
              "Squadron leadership eligibility",
              "Custom fighter markings",
            ],
            isAdvanced: true,
            classifiedRequirements: true,
          },
        ],
      },
    ],
  },
  {
    name: "Universal",
    qualifications: [
      {
        name: "Aerial",
        icon: "Aerial",
        description: "Basic jetpack operations",
        cadre: {
          headCadre: "SGT Datti",
          sectorCadres: {
            "01": "CPL Snare",
            "02": "SGM Blllzo",
            "03": "CPL Scali",
          },
        },
        rewards: ["Basic jetpack certification", "Aerial mobility training", "High-ground tactical advantage training"],
        requirementPhases: [
          {
            phase: "Phase I",
            requirements: [
              "Complete jetpack safety course",
              "Pass equipment handling assessment",
              "Complete basic flight controls training",
            ],
          },
          {
            phase: "Phase II",
            requirements: [
              "Pass basic flight maneuvers assessment",
              "Complete emergency procedures training",
              "Pass hover and stability test",
            ],
          },
          {
            phase: "Phase III",
            requirements: [
              "Complete aerial combat basics",
              "Pass tactical deployment exercise",
              "Complete final qualification assessment",
            ],
          },
        ],
        nextQualifications: [
          {
            name: "Adv Aerial",
            icon: "CloudLightning",
            description: "Advanced jetpack combat maneuvers",
            cadre: {
              headCadre: "ASGT Dalen",
              sectorCadres: {
                "01": "SGT Datti",
                "02": "AMAJ Vanok",
                "03": "SGM Ollie",
              },
            },
            rewards: [
              "Advanced aerial combat certification",
              "Specialized jetpack modifications",
              "Aerial assault team eligibility",
              "High-altitude operation authorization",
            ],
            isAdvanced: true,
            classifiedRequirements: true,
          },
        ],
      },
      {
        name: "Medic",
        icon: "HeartPulse",
        description: "Field medicine and emergency care",
        cadre: {
          headCadre: "NCDR Kix",
          sectorCadres: {
            "01": "LTCDR Coric",
            "02": "NLT Kano",
            "03": "PO1 Zeer",
          },
        },
        rewards: [
          "Combat medic certification",
          "Medical equipment authorization",
          "Triage priority training",
          "Field surgery basics",
        ],
        requirementPhases: [
          {
            phase: "Phase I",
            requirements: [
              "Complete anatomy and physiology examination",
              "Pass basic medical procedures training",
              "Complete field triage assessment",
            ],
          },
          {
            phase: "Phase II",
            requirements: [
              "Pass emergency response assessment",
              "Complete trauma care training",
              "Pass medical equipment certification",
            ],
          },
          {
            phase: "Phase III",
            requirements: [
              "Complete field medicine practical",
              "Pass combat casualty care assessment",
              "Complete final qualification scenario",
            ],
          },
          {
            phase: "Phase IV",
            requirements: [
              "Complete specialized treatment protocols",
              "Pass advanced field surgery basics",
              "Complete medical evacuation procedures",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Special Forces",
    qualifications: [
      {
        name: "ARC",
        icon: "Swords",
        description: "Advanced Recon Commando training",
        rewards: [
          "ARC trooper designation",
          "Advanced weapons authorization",
          "Special operations clearance",
          "Command staff consideration",
        ],
        classifiedRequirements: true,
      },
      {
        name: "RC",
        icon: "Zap",
        description: "Republic Commando training",
        rewards: [
          "RC trooper designation",
          "Specialized equipment access",
          "Covert operations clearance",
          "Squad-based tactical training",
        ],
        classifiedRequirements: true,
      },
    ],
  },
]

export const kmcServer: Server = {
  id: "kmc",
  name: "KMC",
  description: "Kaminoan Military Complex",
  imageSrc: "/images/kmc.png",
  status: "ONLINE",
  purpose:
    "Primary qualification and training facility for the 104th Battalion. Houses all qualification programs and training operations.",
  qualificationCategories: kmcQualifications,
  supervisingOfficer: "AMAJ Vanok",
  standardsOfficer: "MAJ Liveshot",
  hasCustomStructure: true,
}
