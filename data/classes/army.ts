import type { ClassCategory } from "../types"

export const armyClasses: ClassCategory[] = [
  {
    name: "Infantry",
    classes: [
      {
        id: "assault",
        title: "Assault Trooper",
        description:
          "The Assault Trooper is the back bone of the 104th Battalion, Quick to learn and the most popular class with 1950 Clones. The Assault Class normally gives it all upfront and close dealing a quick push with its Vanguard Card turning clankers into scrap metal. Assault Troopers should be quick thinking and be the first to all objectives and the class that overruns all forces without delay.",
        equipment: ["DC-15A", "Ion Grenade", "Thermal Detonator", "Scan Dart", "Vanguard Shotgun"],
        imageSrc: "/images/classes/assaultClass.png",
      },
      {
        id: "heavy",
        title: "Heavy Trooper",
        description:
          "The Heavy Trooper is the firepower backbone of the 104th Battalion. Equipped with heavy weaponry, these troopers provide suppressive fire and area denial capabilities. Heavy Troopers excel at holding positions and breaking through enemy fortifications.",
        equipment: ["Z-6 Rotary Blaster", "Impact Grenade", "Combat Shield", "Sentry Turret", "DC-15LE"],
        imageSrc: "/images/classes/heavyClass.png",
      },
      {
        id: "officer",
        title: "Officer",
        description:
          "Officers are the tactical leaders on the battlefield, coordinating troops and providing crucial support abilities. They boost squad effectiveness through leadership and tactical planning.",
        equipment: ["DC-17 Pistol", "Flash Grenade", "Battle Command", "Officer's Presence", "Tactical Uplink"],
        imageSrc: "/images/classes/officerClass.png",
      },
      {
        id: "specialist",
        title: "Specialist Trooper",
        description:
          "Specialists are versatile troopers equipped with a variety of tools and abilities to adapt to changing battlefield conditions. They excel at reconnaissance, infiltration, and specialized combat roles.",
        equipment: ["EL-16HFE", "Trip Mine", "Shock Grenade", "Infiltration", "Hardened Infiltration"],
        imageSrc: "/images/classes/specialistClass.png",
      },
      {
         id: "arf",
        title: "Advanced Recon Force (ARF) Trooper",
        description:
          "The Advanced Recon Force Trooper has proven skill in all 3 base classes, they are equipped with a variety of the clone issue weapons and advanced equipment to maximize their potential at any given time. This includes Assault, Heavy & Specialist Class.",
        equipment: ["Assault Trooper equipment", "Heavy Trooper equipment", "Specialist Trooper equipment", "Phase 1 Clone Trooper Armour"],
        imageSrc: "/images/classes/arfClass.png",
      },
      {
        id: "rifleman",
        title: "Rifleman and Airborne Trooper",
        description:
          "Rifleman and Airborne Troopers excel at close quarter combat. Armed with a CR-2 blaster, they are extremely manoeuvrable and can quickly adapt to changing battlefield conditions. They are often deployed in rapid response roles.",
        equipment: ["Assault Trooper equipment", "CR-2 Blaster"],
        imageSrc: "/images/classes/riflemanClass.png",
      },
      {
        id: "marksman",
        title: "Marksman and Scout Trooper",
        description:
          "Marksman and Scout Troopers prove themselves to be excellent sharpshooters. They excel at long-range engagements and gathering intelligence on enemy positions.",
        equipment: ["Specialist Trooper equipment", "NT-242 Sniper Rifle"],
        imageSrc: "/images/classes/marksman.png",
      },
      {
        id: "antiarmor",
        title: "Anti-Armour Trooper",
        description:
          "Anti-Armour Troopers are specialists in taking down enemy vehicles and heavy armor. They are equipped with powerful anti-armor weapons and explosives, making them a key asset in any battle against mechanized forces.",
        equipment: ["Standard Heavy Trooper equipment", "T-21 Heavy Blaster"],
        imageSrc: "/images/classes/aaClass.png",
      },
      {
        id: "medic",
        title: "Combat Medic",
        description:
          "Combat Medics are essential for maintaining squad health and survivability. They provide critical medical support on the frontlines, keeping troops in the fight longer.",
        equipment: ["Standard Officer equipment", "S-5 Blaster Pistol"],
        imageSrc: "/images/classes/medicClass.png",
      },
    ],
  },
  {
    name: "Support",
    classes: [
      {
        id: "jet",
        title: "Jet Trooper",
        description:
          "Specialising in airborne combat, jet troopers are highly mobile and can quickly traverse the battlefield. They are equipped with jetpacks and specialized weaponry, making them formidable in both aerial and ground engagements.",
        equipment: ["Modified DC-17 Blaster Pistol", "Jump Pack", "Rocket Launcher"],
        imageSrc: "/images/classes/JetClass.png",
      },
      {
        id: "atrt",
        title: "AT-RT Driver",
        description:
          "ARF troopers who undergo specialized training to operate the All Terrain Recon Transport (AT-RT). They are equipped with advanced weaponry and mobility systems, allowing them to engage in rapid reconnaissance and support roles.",
        equipment: ["ARF Trooper equipment", "AT-RT Walker"],
        imageSrc: "/images/classes/atrtClass.png",
      },
      {
        id: "tx",
        title: "TX-130 Saber Tank Operator",
        description:
          "TX-130 Saber Tank Operators are trained to operate the TX-130 Saber-class tank. They provide heavy fire support and can engage enemy armor and fortifications effectively, making them a crucial asset and can turn the tide of battle.",
        equipment: ["Dual Laser Cannons", "Laser Barrage", "Rocket Pods", "Charged Blasts"],
        imageSrc: "/images/classes/txClass.png",
      },
    ],
  },
]
