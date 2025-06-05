import type { Decal } from "./types"

// Helper function to generate a simple ID
const generateId = (name: string) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "")
}

export const decals: Decal[] = [
  // Manually parsed from the provided text file
  {
    id: generateId("Battle Damage"),
    name: "Battle Damage",
    requirement: "1 Consectutive Year in a Platoon",
    category: "General", // Assuming a general category for this one
    generalImagePath: "/placeholder.svg?width=150&height=100",
    variations: [
      {
        helmetType: "All Standard Helmets",
        name: "Battle Damage",
        imagePath: "/placeholder.svg?width=150&height=100",
      },
    ],
    availableOn: ["Army", "ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("104th Veteran Decal"),
    name: "104th Veteran Decal",
    requirement: "Have joined the 104th before the 10th of April 2019",
    category: "Insignia Decals", // Assuming a general category for this one
    generalImagePath: "/images/decals/veteran.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/veteran.png",
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/veteranarc170.png",
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/veteranvwing.png",
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/veteranywing.png",
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/veteranrancor.png",
      },
    ],
    availableOn: ["Army", "ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("104th Comet Insignia Decal"),
    name: "104th Comet Insignia Decal",
    requirement: "Have joined the 104th before the 10th of October 2019 (still in active unit currently, can have left and returned)",
    category: "Insignia Decals",
    generalImagePath: "/images/decals/comet.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/comet.png",
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/cometarc170.png",
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/cometvwing.png",
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/cometywing.png",
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/cometrancor.png",
      },
    ],
    availableOn: ["Army", "ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("104th Insignia Decal"),
    name: "104th Insignia Decal",
    requirement: "Have join the 104th before 10th of October 2020\n" +
        "Has been the rank of CPL or above.\n" +
        "(and still in active unit currently, can have left and returned)",
    category: "Insignia Decals",
    generalImagePath: "/images/decals/insignia.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/insignia.png",
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/insigniaarc170.png",
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/insigniavwing.png",
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/insigniaywing.png",
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/insigniarancor.png",
      },
    ],
    availableOn: ["Army", "ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("Wolf Eyes Design"),
    name: "Wolf Eyes Design",
    requirement: "Top 3 of the entire leader board in a 12 man+ 104th raid 30 times.\n" +
        "(starting from the 16/4/2023)",
    category: "Insignia Decals",
    generalImagePath: "/images/decals/wolfeyes.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/wolfeyes.png",
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/wolfeyesarc170.png",
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/wolfeyesvwing.png",
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/wolfeyesywing.png",
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/wolfeyesrancor.png",
      },
    ],
    availableOn: ["Army", "ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("Assault Class Decal"),
    name: "Assault Class Decal",
    requirement:
      "Obtain level 750 with the Assault class + Assault Trooper",
    category: "Class Decals",
    generalImagePath: "/images/decals/assault.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/assault.png",
      },
        ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("Heavy Class Decal"),
    name: "Medic Class Decal",
    requirement: "Obtain level 750 with the Heavy class + Heavy Trooper",
    category: "Class Decals",
    generalImagePath: "/images/decals/heavy.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/heavy.png",
      },
    ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("Specialist Class Decal"),
    name: "Specialist Class Decal",
    requirement: "Obtain level 750 with the Specialist class + Specialist Trooper",
    category: "Class Decals",
    generalImagePath: "/images/decals/specialist.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/specialist.png",
      },
    ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("Officer Class Decal"),
    name: "Officer Class Decal",
    requirement: "Obtain level 750 with the Officer class",
    category: "Class Decals",
    generalImagePath: "/images/decals/officer.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/officer.png",
      },
    ],
    availableOn: ["Army", "ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("ARF Class Decal"),
    name: "ARF Class Decal",
    requirement: "Obtain level 750 with assault, heavy and specialist classes + ARF Qualification",
    category: "Class Decals",
    generalImagePath: "/images/decals/ARF.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/ARF.png",
      },
    ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("Tanker Class Decal"),
    name: "Tanker Class Decal",
    requirement: "Obtain level 750 with Tank + Tank Qualification",
    category: "Class Decals",
    generalImagePath: "/images/decals/tanker.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/tanker.png",
      },
    ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("Rifleman Class Decal"),
    name: "Rifleman Class Decal",
    requirement: "Obtain max assault + Rifleman Qualification",
    category: "Class Decals",
    generalImagePath: "/images/decals/rifleman.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/rifleman.png",
      },
    ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("Anti-Armour Class Decal"),
    name: "Anti-Armour Class Decal",
    requirement: "Obtain max heavy + Anti-Armour Qualification",
    category: "Class Decals",
    generalImagePath: "/images/decals/aa.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/aa.png",
      },
    ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("Advanced Tanker Decal"),
    name: "Advanced Tanker Helmet Decal",
    requirement: "Become an Advanced Tanker",
    category: "Class Decals",
    generalImagePath: "/images/decals/tanker.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Advanced Tanker",
        imagePath: "/images/decals/tanker.png",
      },
    ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("Marksman Decal"),
    name: "Marksman Decal",
    requirement:
      "Obtain Max Specialist + Marksman Qualification",
    category: "Class Decals",
    generalImagePath: "/images/decals/marksman.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Marksman",
        imagePath: "/images/decals/marksman.png",
      },
    ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("AT-RT Wolf of the Huntress"),
    name: "AT-RT Wolf of the Huntress",
    requirement: "Become an AT-RT Driver within the 60th Reconnaissance Company",
    category: "Class Decals",
    generalImagePath: "/images/decals/atrt.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/atrt.png",
      },
    ],
    availableOn: ["Rancor"],
  },
  {
    id: generateId("Recon Specialised (Decommissioned)"),
    name: "Recon Specialised (Decommissioned)",
    requirement: "Become an Instructor within the 104th Battalion",
    category: "Class Decals",
    generalImagePath: "/images/decals/recon.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/recon.png",
      },
    ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("ARC-170 Class Decal"),
    name: "ARC-170 Class Decal",
    requirement: "Obtain level 120 with the ARC-170 + Fighter Qualification",
    category: "Class Decals",
    generalImagePath: "/images/decals/arc170.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/arc170.png",
      },
    ],
    availableOn: ["ARC-170"],
  },
  {
    id: generateId("V-Wing Class Decal"),
    name: "V-Wing Class Decal",
    requirement: "Obtain level 120 with the V-Wing + Interceptor Qualification",
    category: "Class Decals",
    generalImagePath: "/images/decals/vwing.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/vwing.png",
      },
    ],
    availableOn: ["V-Wing"],
  },
  {
    id: generateId("Y-Wing Class Decal"),
    name: "Y-Wing Class Decal",
    requirement: "Obtain level 120 with the Y-Wing + Bomber Qualification",
    category: "Class Decals",
    generalImagePath: "/images/decals/ywing.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/ywing.png",
      },
    ],
    availableOn: ["Y-Wing"],
  },
  {
    id: generateId("Master Pilot Decal"),
    name: "Master Pilot Decal",
    requirement: "Obtain level 120 with all 3 pilot classes + be in the SFC",
    category: "Class Decals",
    generalImagePath: "/images/decals/masterpilot.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/masterpilot.png",
      },
    ],
    availableOn: ["ARC-170", "V-Wing", "Y-Wing",],
  },
  {
    id: generateId("Aerial Class Decal"),
    name: "Aerial Class Decal",
    requirement: "Obtain Level 1000 with Aerial + Aerial Qual",
    category: "Class Decals",
    generalImagePath: "/images/decals/aerial.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/aerial.png",
      },
    ],
    availableOn: ["Army","ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("Sharpshooter of the Skies Decal"),
    name: "Sharpshooter of the Skies Decal",
    requirement: "Obtain 160 Eliminations within 1 Ground and 1 Ship phase as an\n" +
        "Advanced Aerial. Minimum Score 64k",
    category: "Class Decals",
    generalImagePath: "/images/decals/pilotsharp.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/pilotsharp.png",
      },
    ],
    availableOn: ["Army", "Rancor"],
  },
  {
    id: generateId("Speeder I Decal"),
    name: "Speeder I Decal",
    requirement: "Reach level 150 with the BARC speeder",
    category: "Class Decals",
    generalImagePath: "/images/decals/speeder1.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/speeder1.png",
      },
    ],
    availableOn: ["Army","ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("Speeder II Decal"),
    name: "Speeder II Decal",
    requirement: "Reach level 400 with the BARC speeder",
    category: "Class Decals",
    generalImagePath: "/images/decals/speeder2.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/speeder2.png",
      },
    ],
    availableOn: ["Army","ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("Aerial Instructor Decal"),
    name: "Aerial Instructor Decal",
    requirement: "Become a certified Aerial Instructor",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/aerialinst.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/aerialinst.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("Aerial Cadre Decal"),
    name: "Aerial Cadre Decal",
    requirement: "Become a certified Aerial Cadre, or receive it from your Cadre for impressive feats",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/aerailcadre.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/aerialcadre.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("Marksman Instructor Decal"),
    name: "Marksman Instructor Decal",
    requirement: "Become a certified Marksman Instructor",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/marksmaninst.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/marksmaninst.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("Marksman Cadre Decal"),
    name: "Marksman Cadre Decal",
    requirement: "Become a certified Marksman Cadre, or receive it from your Cadre for impressive feats",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/marksmancadre.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/marksmancadre.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("Anti Armour Instructor Decal"),
    name: "Anti Armour Instructor Decal",
    requirement: "Become a certified Anti Armour Instructor",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/aainst.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/aainst.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("Anti Armour Cadre Decal"),
    name: "Anti Armour Cadre Decal",
    requirement: "Become a certified Anti Armour Cadre, or receive it from your Cadre for impressive feats",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/aacadre.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/aacadre.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("Cyclone Tanker Decal"),
    name: "Cyclone Tanker Decal",
    requirement: "While being a certified tanker, be lvl 1000 with the Tanker and Heavy class",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/cyclonetanker.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/cyclonetanker.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("Rifleman Instructor Decal"),
    name: "Rifleman Instructor Decal",
    requirement: "Become a certified Rifleman Instructor",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/riflemaninst.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/riflemaninst.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("Rifleman Cadre Decal"),
    name: "Rifleman Cadre Decal",
    requirement: "Become a certified Rifleman Cadre, or receive it from your Cadre for impressive feats",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/riflemancadre.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/riflemancadre.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("ARF Instructor Decal"),
    name: "ARF Instructor Decal",
    requirement: "\"Loth Wolf\": Become a certified ARF Instructor",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/arfinst.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/arfinst.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("ARF Cadre Decal"),
    name: "ARF Cadre Decal",
    requirement: "\"Cadre Stomping Skull\": Become a certified ARF Cadre, or receive it from your Cadre for impressive feats",
    category: "Instructor Decals",
    generalImagePath: "/images/decals/arfcadre.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/arfcadre.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("ARC-170 Proficiency Decal"),
    name: "ARC-170 Proficiency Decal",
    requirement: "Obtain level 300 with the Fighter class + achieve ARC-170 Stalker qualification",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/arc170proficient.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/arc170proficient.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("V-Wing Proficiency Decal"),
    name: "V-Wing Proficiency Decal",
    requirement: "Obtain level 300 with the Interceptor class + achieve V-Wing Prowler qualification",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/vwingproficinet.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/vwingproficinet.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("Y-Wing Proficiency Decal"),
    name: "Y-Wing Proficiency Decal",
    requirement: "Obtain level 300 with the Bomber class + achieve Y-Wing Bomber qualification",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/ywingproficient.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/ywingproficient.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("Gladious Warrior Decal"),
    name: "Gladious Warrior Decal",
    requirement: "Obtain max level with all three base Classes (not including qualifications)",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/gladiouswarrior.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/gladiouswarrior.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("Twin Falcon Decal"),
    name: "Twin Falcon Decal",
    requirement: "Obtain all 3 Qualifications [Y-Wing Bomber, ARC-170 Stalker, V-Wing Prowler]",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/twinfalcon.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/twinfalcon.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("King of the Skies Decal"),
    name: "King of the Skies Decal",
    requirement: "Obtain 40k score in a single match of Galactic Assault using only a starfighter. Provide screenshot of the xp-table after the match to show you only used a starfighter for the duration of the game (taking into account you need to earn score initially to get a starfighter)",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/kingskies.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/kingskies.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("Talon Hunter Decal"),
    name: "Talon Hunter Decal",
    requirement: "100+ eliminations SFA (non dead lobby +5 People in each team)",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/talonhunter.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/talonhunter.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("Pin Pointed Decal"),
    name: "Pin Pointed Decal",
    requirement: "20K+ objective score SFA (non dead lobby +5 People in each team)",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/pinpointed.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/pinpointed.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("Pilots Star Decal"),
    name: "Pilots Star Decal",
    requirement: "Host 100 sorties. \"Vouching\" will not be accepted as proof.",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/pilotstar.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/pilotstar.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("Ace Pilot Instructor Decal"),
    name: "Ace Pilot Instructor Decal",
    requirement: "Become an Ace Instructor, Ace Head Instructor or Ace Cadre.",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/image.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/image.png"
      }
    ],
    availableOn: ["Army"]
  },
  {
    id: generateId("Starfighter Aerial Instructor Decal"),
    name: "Starfighter Aerial Instructor Decal",
    requirement: "Become an Aerial Instructor whilst being apart of the Starfighter Corps.",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/image.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/sfcaerialinst.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("Naval Veteran Loyalty Decal"),
    name: "Naval Veteran Loyalty Decal",
    requirement: "Be apart of the Starfighter Corps consistently for 1 year and 2 months. Timer resets if you leave the branch and come back. Must be an active member of the Starfighter Corps (i.e. in Triumphant).",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/sfcveteran.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/sfcveteran.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("Starfighter Jaig Eyes Prestigious Decal"),
    name: "Starfighter Jaig Eyes Prestigious Decal",
    requirement: "- Meet the requirements for all the above decals in all categories\n- This includes all staff and instructor based decals\n- Ignores \"Original 104th Wolf Decal\"\n\nMost prestigious decal ever awarded in the Starfighter Corps.\nWill only ever be awarded to one or two pilots ever—maybe.",
    category: "Starfighter Corps Decals",
    generalImagePath: "/images/decals/sfcjaigeyes.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/sfcjaigeyes.png"
      }
    ],
    availableOn: ["ARC-170", "Y-Wing", "V-Wing"]
  },
  {
    id: generateId("Art Team I"),
    name: "Art Team I",
    requirement: "Be in the Art Team 2 months and do 30 Trooper Pieces",
    category: "Art Team Decals",
    generalImagePath: "/images/decals/AT1.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/AT1.png"
      }
    ],
    availableOn: ["Army", "ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("Art Team II"),
    name: "Art Team II",
    requirement: "Be in the Art Team  4 months and do 50+ overall pieces",
    category: "Art Team Decals",
    generalImagePath: "/images/decals/AT2.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/AT2.png"
      }
    ],
    availableOn: ["Army", "ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("Art Team III"),
    name: "Art Team III",
    requirement: "Be in the Art Team 8 months and do 50+ Helmets",
    category: "Art Team Decals",
    generalImagePath: "/images/decals/AT3.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/AT3.png"
      }
    ],
    availableOn: ["Army", "ARC-170", "V-Wing", "Y-Wing", "Rancor"],
  },
  {
    id: generateId("Aerial Mastery Design"),
    name: "Aerial Mastery Design",
    requirement: "Have the Aerial Qualification for 6 months and have it maxed out (level 1000) in Battlefront 2",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/aerialmastery.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/aerialmastery.png"
      }
    ],
    availableOn: ["Army", "ARC-170", "V-Wing", "Y-Wing", "Rancor"]
  },
  {
    id: generateId("Class Mastery Design"),
    name: "Class Mastery Design",
    requirement: "Have all 3 base classes maxed out (level 1000) in Battlefront 2",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/classmastery.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/classmastery.png"
      }
    ],
    availableOn: ["Army", "Rancor"]
  },
  {
    id: generateId("Assault Mastery Design"),
    name: "Assault Mastery Design",
    requirement: "Assault for 6 months + Level 1000 Class",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/assaultmastery.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/assaultmastery.png"
      }
    ],
    availableOn: ["Army", "Rancor"]
  },
  {
    id: generateId("Heavy Mastery Design"),
    name: "Heavy Mastery Design",
    requirement: "Heavy for 6 months + Level 1000 Class",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/heavymastery.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/heavymastery.png"
      }
    ],
    availableOn: ["Army", "Rancor"]
  },
  {
    id: generateId("Specialist Mastery Design"),
    name: "Specialist Mastery Design",
    requirement: "Specialist for 6 months + Level 1000 Class",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/specialistmastery.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/specialistmastery.png"
      }
    ],
    availableOn: ["Army", "Rancor"]
  },
  {
    id: generateId("Rifleman Mastery Design"),
    name: "Rifleman Mastery Design",
    requirement: "Rifleman for 6 months + Level 1000 Class",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/riflemanmastery.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/riflemanmastery.png"
      }
    ],
    availableOn: ["Army", "Rancor"]
  },
  {
    id: generateId("Anti Armour Mastery Design"),
    name: "Anti Armour Mastery Design",
    requirement: "Anti Armour for 6 months + Level 1000 Class",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/image.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/aamastery.png"
      }
    ],
    availableOn: ["Army", "Rancor"]
  },
  {
    id: generateId("Marksman Mastery Design"),
    name: "Marksman Mastery Design",
    requirement: "Marksman for 6 months + Level 1000 Class",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/marksmanmastery.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/marksmanmastery.png"
      }
    ],
    availableOn: ["Army", "Rancor"]
  },
  {
    id: generateId("Fighter Mastery Design"),
    name: "Fighter Mastery Design",
    requirement: "Fighter for 6 months + MAX Fighter\nCT-57/11-9048 Jag (Pilot who killed Plo Koon's Design)\n2 Slots (top and centre)",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/fightermastery.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/fightermastery.png"
      }
    ],
    availableOn: ["ARC-170"]
  },
  {
    id: generateId("Interceptor Mastery Design"),
    name: "Interceptor Mastery Design",
    requirement: "Fighter for 6 months + MAX Interceptor\n2 Slots (top and centre)",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/interceptormastery.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/interceptormastery.png"
      }
    ],
    availableOn: ["V-Wing"]
  },
  {
    id: generateId("Bomber Mastery Design"),
    name: "Bomber Mastery Design",
    requirement: "Fighter for 6 months + MAX Bomber\n2 Slots (top and centre)",
    category: "Helmet Mastery Designs",
    generalImagePath: "/images/decals/bombermastery.png",
    variations: [
      {
        helmetType: "Standard",
        name: "Standard",
        imagePath: "/images/decals/bombermastery.png"
      }
    ],
    availableOn: ["Y-Wing"]
  },
  {
    id: generateId("Spikes of Loyalty"),
    name: "Spikes of Loyalty Design",
    requirement: "Joined the 104th during 2023",
    category: "Reward Designs",
    generalImagePath: "/images/decals/spikesofloyalty.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/spikesofloyalty.png"
      },
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("fangs_of_loyalty_design"),
    name: "Fangs of Loyalty Design",
    requirement: "Joined the 104th during 2022",
    category: "Reward Designs",
    generalImagePath: "/images/decals/fangsofloyalty.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/fangsofloyalty.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/fangsofloyaltyarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/fangsofloyaltyvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/fangsofloyaltyywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/fangsofloyaltyrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("stripes_of_loyalty_design"),
    name: "Stripes of Loyalty Design",
    requirement: "Joined the 104th during 2021",
    category: "Reward Designs",
    generalImagePath: "/images/decals/stripesofloyalty.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/stripesofloyalty.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/stripesofloyaltyarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/stripesofloyaltyvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/stripesofloyaltyywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/stripesofloyaltyrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("tears_of_loyalty_design"),
    name: "Tears of Loyalty Design",
    requirement: "Joined the 104th during 2020",
    category: "Reward Designs",
    generalImagePath: "/images/decals/tearsofloyalty.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/tearsofloyalty.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/tearsofloyaltyarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/tearsofloyaltyvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/tearsofloyaltyywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/tearsofloyaltyrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("arrow_of_loyalty_design"),
    name: "Arrow of Loyalty Design",
    requirement: "Joined the 104th during 2019",
    category: "Reward Designs",
    generalImagePath: "/images/decals/arrowofloyalty.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/arrowofloyalty.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/arrowofloyaltyarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/arrowofloyaltyvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/arrowofloyaltyywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/arrowofloyaltyrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("we_the_few_design"),
    name: "We The Few Design",
    requirement: "Army: Awarded by Army Command (MAJ+) for unforgettable feats. SFC: Army: Awarded by SFC Command (WCDR+) for unforgettable feats.",
    category: "Reward Designs",
    generalImagePath: "/images/decals/wethefew.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/wethefew.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/wethefewarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/wethefewvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/wethefewywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/wethefewrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("live_to_fight_another_day_design"),
    name: "Live to Fight Another Day Design",
    requirement: "Army: Awarded by High Officers (LT+) for impressive feats in battle SFC: Awarded by High Officers (GCPT+) for impressive feats in battle (raids/sorties only)",
    category: "Reward Designs",
    generalImagePath: "/images/decals/LtFAD.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/LtFAD.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/LtFADarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/LtFADvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/LtFADywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/LtFADrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("good_soldiers_follow_orders_design"),
    name: "Good Soldiers Follow Orders Design",
    requirement: "Be Awarded MVP of a Raid by a SGT+",
    category: "Reward Designs",
    generalImagePath: "/images/decals/GSFO.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/GSFO.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/GSFOarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/GSFOvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/GSFOywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/GSFOrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("may_the_force_be_with_you_decal"),
    name: "May the force be with you Decal",
    requirement: "Participated in a 104th meet up.",
    category: "Reward Designs",
    generalImagePath: "/images/decals/MTFBWY.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/MTFBWY.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/MTFBWYarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/MTFBWYvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/MTFWBYywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/MTFBWYrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("artists_blessings"),
    name: "Artists Blessings",
    requirement: "Awarded by Members of the Art Team for creative achievements.",
    category: "Reward Designs",
    generalImagePath: "/images/decals/artists_blessings.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/army/artists_blessings.png"
      },
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("clanker_buster_design"),
    name: "Clanker Buster Design",
    requirement: "Take part in 200 104th Main Server Raids",
    category: "Reward Designs",
    generalImagePath: "/images/decals/clankerbuster.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/clanerbuster.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/clankerbusterarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/clankerbustervwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/clankerbusterywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/clankerbusterrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("mark_of_brotherhood_design"),
    name: "Mark of Brotherhood Design",
    requirement: "Take part in 100 104th Main Sever Raids",
    category: "Reward Designs",
    generalImagePath: "/images/decals/MOBH.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/MOBH.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/MOBHarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/MOBHvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/MOBHywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/MOBHrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("battle_hardened_design"),
    name: "Battle Hardened Design",
    requirement: "Take part in 50 104th Main Server Raids",
    category: "Reward Designs",
    generalImagePath: "/images/decals/battlehardened.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/battlehardened.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/battlehardenedarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/battlehardenedvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/battlehardenedywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/battlehardenedrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("leadership_commendation_design"),
    name: "Leadership Commendation Design",
    requirement: "Lead over 50 raids in the 104th Main Server Raids",
    category: "Reward Designs",
    generalImagePath: "/images/decals/leadershipcom.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/leadershipcom.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/leadershipcomarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/leadershipcomvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/leadershipcomywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/leadershipcomrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("for_the_republic"),
    name: "For The Republic",
    requirement: "Host 150 Raids (Squad, Platoon, and Main Server Raids count)",
    category: "Reward Designs",
    generalImagePath: "/images/decals/FTR.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/army/FTR.png"
      },
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("battle_tears_design"),
    name: "Battle Tears Design",
    requirement: "Obtain 100 eliminations in a 104th raid prior to boarding the ship, with base class and weaponry",
    category: "Reward Designs",
    generalImagePath: "/images/decals/battletears.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/battletears.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/battletearsarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/battletearsvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/battletearsywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/battletearsrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("stripes_of_valour_design"),
    name: "Stripes of Valour Design",
    requirement: "Manage to pass a qualification in less than 4 attempts. Including switching classes and switching back.",
    category: "Reward Designs",
    generalImagePath: "/images/decals/stripesofvalor.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/stripesofvalor.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/stripesofvalorarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/stripesofvalorvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/stripesofvalorywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/stripesofvalorrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("fangs_of_dedication_design"),
    name: "Fangs of Dedication Design",
    requirement: "Have over 10k messages in the Main Server",
    category: "Reward Designs",
    generalImagePath: "/images/decals/fangsofdedication.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/fangsofdedication.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/fangsofdedicationarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/fangsofdedicationvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/fangsofdedicationywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/fangsofdedicationrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("troopers_calling_design"),
    name: "Troopers Calling Design",
    requirement: "Have over 1k messages in the Main Server and Unit Server",
    category: "Reward Designs",
    generalImagePath: "/images/decals/troopcalling.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/troopcalling.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/troopcallingarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/troopcallingvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/troopcallingywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/troopcallingrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("horns_of_resilience_design"),
    name: "17-Horns of Resilience Design",
    requirement: "Attendance in a 104th Operation (Barycir, Akalenedat, Oyula Shukalar)",
    category: "Reward Designs",
    generalImagePath: "/images/decals/resilienthorns.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/resilienthorns.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/resilienthornsarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/resilienthornsvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/resilienthornsywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/resilienthornsrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("red_vs_blue_design"),
    name: "Red vs Blue Design",
    requirement: "Have been part of the Red vs Blue event (RvB Medal as proof)",
    category: "Reward Designs",
    generalImagePath: "/images/decals/RvB.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/army/RvB.png"
      },
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("tusks_of_achievement"),
    name: "Tusks of Achievement",
    requirement: "Have 7+ Medals in the Main Server awarded to you (Note: only one out of the assault/heavy/specialist service medals will count towards this.)",
    category: "Reward Designs",
    generalImagePath: "/images/decals/achievementtusks.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/achievementtusks.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/achievementtusksarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/achievementtusksvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/achievementtusksywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/achievementtusksrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("time_well_spent_design"),
    name: "Time Well Spent Design",
    requirement: "3 consecutive years in the 104th",
    category: "Reward Designs",
    generalImagePath: "/images/decals/timewellspent.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/timewellspent.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/timewellspentarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/timewellspentvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/timewellspentywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/timewellspentrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("scars_of_tenacity_design"),
    name: "Scars of Tenacity Design",
    requirement: "2 consecutive years in a platoon",
    category: "Reward Designs",
    generalImagePath: "/images/decals/tenacityscars.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/tenacityscars.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/tenacityscarsarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/tenacityscarsvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/tenacityscarsywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/tenacityscarsrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("loyal_beginnings"),
    name: "Loyal Beginnings",
    requirement: "3 consecutive years in a platoon",
    category: "Reward Designs",
    generalImagePath: "/images/decals/loyalbegins.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/army/loyalbegins.png"
      },
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("totem_of_the_loyal"),
    name: "Totem of the Loyal",
    requirement: "4 consecutive years in a platoon",
    category: "Reward Designs",
    generalImagePath: "/images/decals/loyaltotem.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/army/totem_of_the_loyal.png"
      },
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("token_of_leadership_design"),
    name: "Token of Leadership Design",
    requirement: "2 consecutive years as platoon staff",
    category: "Reward Designs",
    generalImagePath: "/images/decals/leadershiptoken.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/leadershiptoken.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/leadershiptokenarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/leadershiptokenvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/leadershiptokenywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/leadershiptokenrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("wolf_s_fangs_design"),
    name: "Wolf's Fangs Design",
    requirement: "1 consecutive year with your current class",
    category: "Reward Designs",
    generalImagePath: "/images/decals/wolffangs.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/wolffangs.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/wolffangsarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/wolffangsvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/wolffangsywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/wolffangsrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("wolf_teeth_design"),
    name: "Wolf Teeth Design",
    requirement: "1 consecutive year as staff in Main Server",
    category: "Reward Designs",
    generalImagePath: "/images/decals/wolfteeth.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/army/wolfteeth.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/wolfteetharc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/wolfteethvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/wolfteethywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/wolfteethrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("cost_of_glory_design"),
    name: "23-Cost of Glory Design",
    requirement: "1 consective year as CPL+ / FL+ Retired as SGT+ / FCPT+",
    category: "Reward Designs",
    generalImagePath: "/images/decals/costofglory.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/costofglory.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/costofgloryarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/costofgloryvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/costofgloryywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/costofgloryrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("staff_veteran_design"),
    name: "Staff Veteran Design",
    requirement: "Army: 4 consectutive months as CPL+ SFC: 4 consecutive months as FL+",
    category: "Reward Designs",
    generalImagePath: "/images/decals/staffveteran.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/staffveteran.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/staffveteranarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/staffveteranvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/staffveteranywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/staffveteranrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("mark_of_strength_design"),
    name: "Mark of Strength Design",
    requirement: "Be in no more than 2 platoons during your time in the 104th. Being in one platoon multiple times counts as one for each time.",
    category: "Reward Designs",
    generalImagePath: "/images/decals/markofstrength.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/markofstrength.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/markofstrengtharc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/markofstrengthvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/markofstrengthywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/markofstrengthrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("darks_chosen_design"),
    name: "Darks chosen Design",
    requirement: "2 years on the 104th art team or awarded by art team commander",
    category: "Reward Designs",
    generalImagePath: "/images/decals/darkschosen.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/darkschosen.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/darkschosenarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/darkschosenvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/darkschosenywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/darkschosenrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("mark_of_pride_design"),
    name: "Mark of Pride Design",
    requirement: "Be an active member of an official 104th team (Admin, Art, Media, Modding, Kaminoan Security, etc) - ask the team leader if you qualify",
    category: "Reward Designs",
    generalImagePath: "/images/decals/markofpride.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/markofpride.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/markofpridearc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/markofpridevwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/markofprideywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/markofpricrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("ksf_symbol_decal"),
    name: "KSF Symbol Decal",
    requirement: "1 Year in KSF",
    category: "Reward Designs",
    generalImagePath: "/images/decals/KSFsymbol.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/KSFsymbol.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/KSFsymbolarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/KSFsymbolvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/KSFsymbolywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/KSFsymbolrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("ksf_stripes_design"),
    name: "KSF Stripes Design",
    requirement: "6 months in KSF",
    category: "Reward Designs",
    generalImagePath: "/images/decals/KSFstripes.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/KSFstripes.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/KSFstripesarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/KSFstripesvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/KSFstripesywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/KSFstripesrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("admins_finest_decal"),
    name: "Admins Finest Decal",
    requirement: "Be an active member within the Administrations Team",
    category: "Reward Designs",
    generalImagePath: "/images/decals/admin.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/admin.png"
      },
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("boil_it_down_decal"),
    name: "Boil it down Decal",
    requirement: "Army: Maxed assault for over a year SFC: Maxed ARC-170 for over a year",
    category: "Reward Designs",
    generalImagePath: "/images/decals/BoilitDown.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/BoilitDown.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/BoilitDownarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/BoilitDownvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/BoilitDownywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/BoilitDownrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("bigger_fish_decal"),
    name: "Bigger fish Decal",
    requirement: "Army: Maxed heavy for over a year SFC: Maxed Y-Wing for over a year",
    category: "Reward Designs",
    generalImagePath: "/images/decals/BiggerFish.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/BiggerFish.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/BiggerFisharc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/BiggerFishvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/BiggerFishywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/BiggerFishrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("eyes_on_the_prize_decal"),
    name: "Eyes on the Prize Decal",
    requirement: "Army Maxed specialist for over a year SFC: Max V-Wing for over a year",
    category: "Reward Designs",
    generalImagePath: "/images/decals/EOTP.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/EOTP.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/EOTParc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/EOTPvwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/EOTPywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/EOTPrancor.png"
      }
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("upon_walkers_decal_pending_update_"),
    name: "Upon walkers Decal (PENDING UPDATE)",
    requirement: "Awarded to those who had the ARF trooper qualification actively before the closing to Rancor only",
    category: "Reward Designs",
    generalImagePath: "/images/decals/Uponwalkers.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/Uponwalkers.png"
      },
    ],
    availableOn: [
      "Army",
      "ARC-170",
      "V-Wing",
      "Y-Wing",
      "Rancor"
    ]
  },
  {
    id: generateId("mauler_design"),
    name: "Mauler Design",
    requirement: "Army: Must have passed ATP when this qualification was still in use. SFC: Passed Advanced Quals",
    category: "Reward Designs",
    generalImagePath: "/images/decals/Mauler.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/Mauler.png"
      },
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/Maulerarc170.png"
      },
      {
        helmetType: "V-Wing",
        name: "V-Wing",
        imagePath: "/images/decals/Maulervwing.png"
      },
      {
        helmetType: "Y-Wing",
        name: "Y-Wing",
        imagePath: "/images/decals/Maulerywing.png"
      },
      {
        helmetType: "Rancor",
        name: "Rancor",
        imagePath: "/images/decals/Maulerrancor.png"
      }
    ],
  availableOn: [
    "Army",
    "ARC-170",
    "V-Wing",
    "Y-Wing",
    "Rancor"
    ]
  },
  {
  id: generateId("stripe_of_the_storm_design"),
  name: "Stripe of the Storm Design",
  requirement: "First place overall, Base class only, in a raid on Kamino. 3 Times. (Main Server Raids. Adequate Screenshots must be provided.) In 2025",
  category: "Reward Designs",
  generalImagePath: "/images/decals/StripeoftheStorm.png",
  variations: [{ helmetType: "Army", name: "Army", imagePath: "/images/decals/StripeoftheStorm.png" }],
  availableOn: ["Army"]
},
{
  id: generateId("stripe_of_the_sarlacc_design"),
  name: "Stripe of the Sarlacc Design",
  requirement: "First place overall, Base class only, in a raid on Felucia. 3 Times. (Main Server Raids. Adequate Screenshots must be provided.) In 2025",
  category: "Reward Designs",
  generalImagePath: "/images/decals/StripeSarlacc.png",
  variations: [{ helmetType: "Army", name: "Army", imagePath: "/images/decals/StripeSarlacc.png" }],
  availableOn: ["Army"]
},
{
  id: generateId("stripe_of_the_senator_design"),
  name: "Stripe of the Senator Design",
  requirement: "First place overall, Base class only, in a raid on Naboo. 3 Times. (Main Server Raids. Adequate Screenshots must be provided.) In 2025",
  category: "Reward Designs",
  generalImagePath: "/images/decals/StripeSenator.png",
  variations: [{ helmetType: "Army", name: "Army", imagePath: "/images/decals/StripeSenator.png" }],
  availableOn: ["Army"]
},
{
  id: generateId("stripe_of_the_forest_design"),
  name: "Stripe of the Forest Design",
  requirement: "First place overall, Base class only, in a raid on Kashyyyk. 3 Times. (Main Server Raids. Adequate Screenshots must be provided.) In 2025",
  category: "Reward Designs",
  generalImagePath: "/images/decals/StripeForest.png",
  variations: [{ helmetType: "Army", name: "Army", imagePath: "/images/decals/StripeForest.png" }],
  availableOn: ["Army"]
},
{
  id: generateId("stripe_of_the_sands_design"),
  name: "Stripe of the Sands Design",
  requirement: "First place overall, Base class only, in a raid on Geonosis. 3 Times. (Main Server Raids. Adequate Screenshots must be provided.) In 2025",
  category: "Reward Designs",
  generalImagePath: "/images/decals/StripeSands.png",
  variations: [{ helmetType: "Army", name: "Army", imagePath: "/images/decals/StripeSands.png" }],
  availableOn: ["Army"]
},
{
  id: generateId("hooded_deadshot_decal"),
  name: "Hooded Deadshot Decal",
  requirement: "Obtain 135 Eliminations as a Rifleman playing Assault within one ground and ship phase. A minimum of 53k score is required. In 2025",
  category: "Reward Designs",
  generalImagePath: "/images/decals/HoodedDeadshot.png",
  variations: [{ helmetType: "Army", name: "Army", imagePath: "/images/decals/HoodedDeadshot.png" }],
  availableOn: ["Army"]
},
    {
    id: generateId("Anti-Personnel Decal"),
    name: "Anti-Personnel Decal",
    requirement: "Obtain 135 Eliminations as an AA playing Heavy within one ground and ship phase. A minimum of 53k score is required. In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/AntiPersonel.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/AntiPersonel.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Pinpoint Decal"),
    name: "Pinpoint Decal",
    requirement: "Obtain 135 Eliminations as a Marksman playing Specialist within one ground and ship phase. A minimum of 53k score is required. In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/pinpoint.png",
    variations: [
        {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/pinpoint.png",
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Slash of the Strong"),
    name: "Slash of the Strong",
    requirement: "As an AA playing Heavy, obtain 200 Eliminations in a Main Server raid. A minimum score of 80k is required. In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/SlashofStrong.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/SlashofStrong.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Horns of the Heavy"),
    name: "Horns of the Heavy",
    requirement: "As an AA playing Heavy, get first place overall in a Main Server Raid (SF excluded). In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/HornsofHeavy.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/HornsofHeavy.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Unkillable"),
    name: "Unkillable",
    requirement: "As an AA playing Heavy, obtain a 25 killstreak in a Main Server Raid. A minimum score per kill of 450 is required. In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/unkillable.png",
    variations: [],
    availableOn: ["Army"],
  },
  {
    id: generateId("A Heavys Best"),
    name: "A Heavy's Best",
    requirement: "Pass the AA-Trial on your first attempt on your console",
    category: "Reward Designs",
    generalImagePath: "/images/decals/heavysbest.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/heavysbest.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Deaths Fangs"),
    name: "Death's Fangs",
    requirement: "As a Marksman playing Specialist, obtain 200 kills in a Main Server Raid. A minimum score of 80k is required. In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/DeathFangs.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/DeathFangs.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Deadeye Horns"),
    name: "Deadeye Horns",
    requirement: "As a Marksman playing Specialist, get first place overall in a Main Server Raid (SF excluded). In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/DeadeyeHorms.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/DeadeyeHorms.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Dash of Achievement"),
    name: "Dash of Achievement",
    requirement: "Pass the Marksman-Trial on your first attempt on your console",
    category: "Reward Designs",
    generalImagePath: "/images/decals/AchievementDash.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/AchievementDash.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Spikes of the Marksman"),
    name: "Spikes of the Marksman",
    requirement: "As a Marksman playing Specialist, obtain a 30 killstreak in a Main Server Raid. A minimum score per kill of 400 is required. In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/MarksmanSpikes.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/MarksmanSpikes.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Lethal Eyes Design"),
    name: "Lethal Eyes Design",
    requirement: "Achieve first place overall in a Main Server Blast Raid. Must be a competitive raid with a minimum of four 104th Troopers on either side. In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/LethalEyes.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/LethalEyes.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Survivors Skull Design"),
    name: "Survivor's Skull Design",
    requirement: "Achieve Victory in a Main Server Raid that lasted 3+ ground and ship phases. Must have been present for the entire duration of the game. In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/SurvivorSkull.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/SurvivorSkull.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Spikes of Honour Design"),
    name: "Spikes of Honour Design",
    requirement: "Achieve 20+ Attendance within 1 attendance period. In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/SpikesofHonour.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/SpikesofHonour.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Always Around Design"),
    name: "Always Around Design",
    requirement: "Exceed Attendance requirements for 6 attendance periods in a row. (going on LOA/NFFC breaks the streak.) In 2025",
    category: "Reward Designs",
    generalImagePath: "/images/decals/AlwaysAround.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/AlwaysAround.png"
      },
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Vision of the Wartorn Design"),
    name: "Vision of the Wartorn Design",
    requirement: "Stay at the same Rank for 8+ months (LCPL+)",
    category: "Reward Designs",
    generalImagePath: "/images/decals/WartornVision.png",
    variations: [],
    availableOn: ["Army"],
  },
  {
    id: generateId("Wisdoms Beginnings Decal"),
    name: "Wisdom's Beginnings Decal",
    requirement: "Awarded to all Fireteam Leaders",
    category: "Reward Designs",
    generalImagePath: "/images/decals/WisdomsBegins.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/WisdomsBegins.png",
      },
    ],
    availableOn: ["Army"],
  },
    {
    id: generateId("Howler Platoon Legacy Design"),
    name: "Howler Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/howler.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/howler.png"
      }
    ],
    availableOn: ["Howler Platoon"],
  },
  {
    id: generateId("Taurus Platoon Legacy Design"),
    name: "Taurus Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/taurus.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/taurus.png"
      }
    ],
    availableOn: ["Taurus Platoon"],
  },
  {
    id: generateId("Sentinel Platoon Legacy Design"),
    name: "Sentinel Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/sentinel.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/sentinel.png"
      }
    ],
    availableOn: ["Sentinel Platoon"],
  },
  {
    id: generateId("Cerberus Platoon Legacy Design"),
    name: "Cerberus Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/cerberus.png",
    variations: [],
    availableOn: ["Cerberus Platoon"],
  },
  {
    id: generateId("Ghost Platoon Legacy Design"),
    name: "Ghost Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/ghost.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/ghost.png"
      }
    ],
    availableOn: ["Ghost Platoon"],
  },
  {
    id: generateId("Scrapper Platoon Legacy Design"),
    name: "Scrapper Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/scrapper.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/scrapper.png"
      }
    ],
    availableOn: ["Scrapper Platoon"],
  },
  {
    id: generateId("Dagger Platoon Legacy Design"),
    name: "Dagger Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/dagger.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/dagger.png"
      }
    ],
    availableOn: ["Dagger Platoon"],
  },
  {
    id: generateId("Fenrir Platoon Legacy Design"),
    name: "Fenrir Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/fenrir.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/fenrir.png"
      }
    ],
    availableOn: ["Fenrir Platoon"],
  },
  {
    id: generateId("Titan Platoon Legacy Design"),
    name: "Titan Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/titan.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/titan.png"
      }
    ],
    availableOn: ["Titan Platoon"],
  },
  {
    id: generateId("Ravager Platoon Legacy Design"),
    name: "Ravager Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/ravager.png",
    variations: [],
    availableOn: ["Ravager Platoon"],
  },
  {
    id: generateId("Ice Platoon Legacy Design"),
    name: "Ice Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/ice.png",
    variations: [
        {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/ice.png",
      }
    ],
    availableOn: ["Ice Platoon"],
  },
  {
    id: generateId("Hound Platoon Legacy Design"),
    name: "Hound Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/hound.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/hound.png"
      }
    ],
    availableOn: ["Hound Platoon"],
  },
  {
    id: generateId("Ragnarok Platoon Legacy Design"),
    name: "Ragnarok Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/ragnarok.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/ragnarok.png"
      }
    ],
    availableOn: ["Ragnarok Platoon"],
  },
  {
    id: generateId("Solstice Platoon Legacy Design"),
    name: "Solstice Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/solstice.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/solstice.png"
      }
    ],
    availableOn: ["Solstice Platoon"],
  },
  {
    id: generateId("Dawn Platoon Legacy Design"),
    name: "Dawn Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/dawn.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/dawn.png"
      }
    ],
    availableOn: ["Dawn Platoon"],
  },
  {
    id: generateId("Corvus Platoon Legacy Design"),
    name: "Corvus Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/corvus.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/corvus.png"
      }
    ],
    availableOn: ["Corvus Platoon"],
  },
  {
    id: generateId("Iridium Platoon Legacy Design"),
    name: "Iridium Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/iridium.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/iridium.png"
      }
    ],
    availableOn: ["Iridium Platoon"],
  },
  {
    id: generateId("Fang Platoon Legacy Design"),
    name: "Fang Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/fang.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/fang.png"
      }
    ],
    availableOn: ["Fang Platoon"],
  },
  {
    id: generateId("Storm Platoon Legacy Design"),
    name: "Storm Platoon Legacy Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/storm.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/storm.png"
      }
    ],
    availableOn: ["Storm Platoon"],
  },
  {
    id: generateId("Spectre Platoon Design"),
    name: "Spectre Platoon Design",
    requirement: "1 Year Service inside of Platoon or Given by Platoon CO, XO, NCO for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/spectre.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/spectre.png"
      }
    ],
    availableOn: ["Spectre Platoon"],
  },
  {
    id: generateId("Obsidian Owls I Design"),
    name: "Obsidian Owls I Design",
    requirement: "1 Year Service inside of Wing or Given by Wing Command for Loyalty and Commitment. Mainly for Indigo Squadron members/ex.members",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/owls1arc170.png",
    variations: [
      { helmetType: "ARC-170", name: "ARC-170", imagePath: "/images/decals/legacy/owlsarc170.png" },
      { helmetType: "V-Wing", name: "V-Wing", imagePath: "/images/decals/legacy/owlsvwing.png" },
      { helmetType: "Y-Wing", name: "Y-Wing", imagePath: "/images/decals/legacy/owlsywing.png" },
    ],
    availableOn: ["ARC-170", "V-Wing", "Y-Wing", "Obsidian Owls"],
  },
  {
    id: generateId("Obsidian Owls II Design"),
    name: "Obsidian Owls II Design",
    requirement: "1 Year Service inside of Wing or Given by Wing Command for Loyalty and Commitment. Mainly for Crimson Squadron members/ex.members",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/owls2arc170.png",
    variations: [
      { helmetType: "ARC-170", name: "ARC-170", imagePath: "/images/decals/legacy/owls2arc170.png" },
      { helmetType: "V-Wing", name: "V-Wing", imagePath: "/images/decals/legacy/owls2vwing.png" },
      { helmetType: "Y-Wing", name: "Y-Wing", imagePath: "/images/decals/legacy/owls2ywing.png" },
    ],
    availableOn: ["ARC-170", "V-Wing", "Y-Wing", "Obsidian Owls"],
  },
  {
    id: generateId("Eagles Talon Design"),
    name: "Eagles Talon Design",
    requirement: "1 Year Service inside of Wing or Given by Wing Command for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/eaglesarc170.png",
    variations: [
      { helmetType: "ARC-170", name: "ARC-170", imagePath: "/images/decals/legacy/eaglesarc170.png" },
      { helmetType: "V-Wing", name: "V-Wing", imagePath: "/images/decals/legacy/eaglesvwing.png" },
      { helmetType: "Y-Wing", name: "Y-Wing", imagePath: "/images/decals/legacy/eaglesywing.png" },
    ],
    availableOn: ["ARC-170", "V-Wing", "Y-Wing", "Eagles Talon"],
  },
  {
    id: generateId("Midnight Ravens Design"),
    name: "Midnight Ravens Design",
    requirement: "1 Year Service inside of Wing or Given by Wing Command for Loyalty and Commitment",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/ravensarc170.png",
    variations: [
      { helmetType: "ARC-170", name: "ARC-170", imagePath: "/images/decals/legacy/ravensarc170.png" },
      { helmetType: "V-Wing", name: "V-Wing", imagePath: "/images/decals/legacy/ravensvwing.png" },
      { helmetType: "Y-Wing", name: "Y-Wing", imagePath: "/images/decals/legacy/ravensywing.png" },
    ],
    availableOn: ["ARC-170", "V-Wing", "Y-Wing", "Midnight Ravens"],
  },
  {
    id: generateId("Garhead Legacy Decal"),
    name: "Garhead Legacy Decal",
    requirement: "Awarded to those who helped in the Garhead Memorial Video. Or given in respect of those who were closest with our lost friend.",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/oldunits/garhead.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/oldunits/garhead.png"
      }
    ],
    availableOn: ["Army"],
  },
  {
    id: generateId("Apollo Platoon Design"),
    name: "Apollo Platoon Design",
    requirement: "Apart of Unit when they shut down",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/oldunits/apollo.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/oldunits/apollo.png"
      }
    ],
    availableOn: ["Apollo Platoon"],
  },
  {
    id: generateId("Eclipse Platoon Decal"),
    name: "Eclipse Platoon Decal",
    requirement: "Apart of Unit when they shut down",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/oldunits/eclipse.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/oldunits/eclipse.png"
      }
    ],
    availableOn: ["Eclipse Platoon"],
  },
  {
    id: generateId("Arctic Platoon Decal"),
    name: "Arctic Platoon Decal",
    requirement: "Apart of Unit when they shut down",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/oldunits/arctic.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/oldunits/arctic.png"
      }
    ],
    availableOn: ["Arctic Platoon"],
  },
  {
    id: generateId("Odyssey Platoon Design"),
    name: "Odyssey Platoon Design",
    requirement: "Apart of Unit when they shut down",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/oldunits/odyssey.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/oldunits/odyssey.png"
      }
    ],
    availableOn: ["Odyssey Platoon"],
  },
  {
    id: generateId("Phoenix Platoon Design"),
    name: "Phoenix Platoon Design",
    requirement: "Apart of Unit when they shut down",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/oldunits/phoenix.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/oldunits/phoenix.png"
      }
    ],
    availableOn: ["Phoenix Platoon"],
  },
  {
    id: generateId("Phoenix Legacy Decal"),
    name: "Phoenix Legacy Decal",
    requirement: "Have been in Phoenix for 2 Months at the time of shut down",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/oldunits/phoenixLegacy.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/oldunits/pheonixLegacy.png"
      }
    ],
    availableOn: ["Phoenix Platoon"],
  },
  {
    id: generateId("Rampart Platoon Design"),
    name: "Rampart Platoon Design",
    requirement: "Apart of Unit when they shut down",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/oldunits/rampart.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/oldunits/rampart.png"
      }
    ],
    availableOn: ["Rampart Platoon"],
  },
  {
    id: generateId("Sparker Platoon Design"),
    name: "Sparker Platoon Design",
    requirement: "Apart of Unit when they shut down",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/oldunits/sparker.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/oldunits/sparker.png"
      }
    ],
    availableOn: ["Sparker Platoon"],
  },
  {
    id: generateId("Sparrows Wing Decal"),
    name: "Sparrows Wing Decal",
    requirement: "Apart of Unit when they shut down",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/oldunits/sparrows.png",
    variations: [
      {
        helmetType: "ARC-170",
        name: "ARC-170",
        imagePath: "/images/decals/legacy/oldunits/sparrows.png"
      },
    ],
    availableOn: ["Silver Sparrows"],
  },
  {
    id: generateId("Lightning Platoon Legacy Design"),
    name: "Lightning Platoon Legacy Design",
    requirement: "Apart of Unit when they shut down",
    category: "Legacy Decals",
    generalImagePath: "/images/decals/legacy/lightning.png",
    variations: [
      {
        helmetType: "Army",
        name: "Army",
        imagePath: "/images/decals/legacy/oldunits/lightning.png"
      }
    ],
    availableOn: ["Lightning Platoon"],
  },

]

// This list might need to be expanded based on actual helmet types mentioned
// or implied by the decal availability.
export const helmetTypesForDecals: string[] = [
  "All",
  "Army Standard",
  "ARC-170",
  "V-Wing",
  "Y-Wing",
  "Rancor",
  "ARF Helmets",
  "SFC Pilot Helmets",
  "Instructor Helmets",
  "Platoon Specific Helmets",
  // Add other relevant helmet types as you define them in `availableOn`
]

// Update the Decal type in data/types.ts to include 'requirement' and 'subCategory'
// (This change should be made in data/types.ts, shown here for context)
/*
export interface DecalVariation {
  helmetType: string;
  name: string;
  imagePath: string;
  description?: string;
}

export interface Decal {
  id: string;
  name: string;
  requirement: string; // Changed from description
  category: string;
  subCategory?: string; // Added for finer categorization
  generalImagePath?: string;
  variations: DecalVariation[];
  availableOn: string[];
}
*/
