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
        imageSrc: "/images/classes/assault.png",
      },
      {
        id: "heavy",
        title: "Heavy Trooper",
        description:
          "The Heavy Trooper is the firepower backbone of the 104th Battalion. Equipped with heavy weaponry, these troopers provide suppressive fire and area denial capabilities. Heavy Troopers excel at holding positions and breaking through enemy fortifications.",
        equipment: ["Z-6 Rotary Blaster", "Impact Grenade", "Combat Shield", "Sentry Turret", "DC-15LE"],
        imageSrc: "/images/classes/heavy.png",
      },
      {
        id: "officer",
        title: "Officer",
        description:
          "Officers are the tactical leaders on the battlefield, coordinating troops and providing crucial support abilities. They boost squad effectiveness through leadership and tactical planning.",
        equipment: ["DC-17 Pistol", "Flash Grenade", "Battle Command", "Officer's Presence", "Tactical Uplink"],
        imageSrc: "/images/classes/officer.png",
      },
    ],
  },
  {
    name: "Support",
    classes: [
      {
        id: "specialist",
        title: "Specialist",
        description:
          "Specialists are versatile troopers equipped with a variety of tools and abilities to adapt to changing battlefield conditions. They excel at reconnaissance, infiltration, and specialized combat roles.",
        equipment: ["EL-16HFE", "Trip Mine", "Shock Grenade", "Infiltration", "Hardened Infiltration"],
        imageSrc: "/images/classes/specialist.png",
      },
      {
        id: "medic",
        title: "Combat Medic",
        description:
          "Combat Medics are essential for maintaining squad health and survivability. They provide critical medical support on the frontlines, keeping troops in the fight longer.",
        equipment: ["DC-15A", "Medical Droid", "Bacta Injection", "Medical Scanner", "Revival Kit"],
        imageSrc: "/images/classes/medic.png",
      },
    ],
  },
]
