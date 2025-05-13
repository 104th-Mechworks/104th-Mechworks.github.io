import type { ClassCategory } from "../types"

export const starfighterClasses: ClassCategory[] = [
  {
    name: "Interceptors",
    classes: [
      {
        id: "v-wing-pilot",
        title: "V-Wing Pilot",
        description:
          "V-Wing Pilots are elite interceptor specialists, trained to engage and eliminate enemy fighters with superior speed and maneuverability. They excel in dogfighting scenarios and quick strike missions.",
        equipment: [
          "V-Wing Starfighter",
          "Targeting Computer",
          "Afterburners",
          "Concussion Missiles",
          "Advanced Targeting Systems",
        ],
        imageSrc: "/images/classes/v-wing-pilot.png",
      },
      {
        id: "eta-2-pilot",
        title: "Eta-2 Actis Pilot",
        description:
          "Eta-2 Actis Pilots operate the Republic's most agile starfighters. These elite pilots are selected for their exceptional reflexes and spatial awareness, making them formidable in close-quarters space combat.",
        equipment: [
          "Eta-2 Actis Interceptor",
          "Advanced Targeting Computer",
          "Proton Torpedoes",
          "Evasive Maneuvers System",
          "Enhanced Communication Array",
        ],
        imageSrc: "/images/classes/eta-2-pilot.png",
      },
    ],
  },
  {
    name: "Bombers & Fighters",
    classes: [
      {
        id: "y-wing-pilot",
        title: "Y-Wing Bomber Pilot",
        description:
          "Y-Wing Bomber Pilots specialize in heavy ordnance delivery against capital ships and ground installations. They are trained to withstand heavy fire while delivering devastating payloads to critical targets.",
        equipment: ["BTL-B Y-Wing", "Proton Bombs", "Ion Cannons", "Proton Torpedoes", "Reinforced Hull Systems"],
        imageSrc: "/images/classes/y-wing-pilot.png",
      },
      {
        id: "arc-170-pilot",
        title: "ARC-170 Pilot",
        description:
          "ARC-170 Pilots operate the Republic's premier multi-role starfighter. These pilots excel in both escort missions and strike operations, providing versatile combat capabilities in various space engagements.",
        equipment: [
          "ARC-170 Starfighter",
          "Medium Laser Cannons",
          "Proton Torpedoes",
          "Rear Gunner Station",
          "Long-Range Sensors",
        ],
        imageSrc: "/images/classes/arc-170-pilot.png",
      },
    ],
  },
]
