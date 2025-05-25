import type { ClassCategory } from "../types"

export const starfighterClasses: ClassCategory[] = [
  {
    name: "Interceptors",
    classes: [
      {
        id: "v-wing-pilot",
        title: "V-Wing Pilot",
        description:
          "The best dogfighter in the Navy, the Alpha-3 Nimbus Class V-Wing Starfighter functions as a rapid interceptor. Used to defend objective bombers and run interference on enemy starfighters, the V-Wing is an agile and difficult to master starfighter, flown by few within the 104th’s Navy. Able to eliminate enemy ships with ease, the brave pilots of these craft will always make sure that the skies are clear for our bombers and ground troops.\n ”Ready when you are, skipper.”",
        equipment: [
          "2x Dual Rapid-Fire Laser Cannons",
          "Afterburner",
          "Laser Barrage",
          "Heat Sink",
        ],
        imageSrc: "/images/classes/v-wing.png",
      },
      {
        id: "eta-2-pilot",
        title: "Eta-2 Actis-class Light Interceptor",
        description:
          "Eta-2 Actis Pilots operate the Republic's most agile starfighters. These elite pilots 'ACE' are selected for their exceptional reflexes and spatial awareness, making them formidable in close-quarters space combat.",
        equipment: [
          "Twin Blaster Cannons",
          "Afterburners",
          "Ion Pulse",
          "Advanced Targeting Computer",
        ],
        imageSrc: "/placeholder.svg",
      },
    ],
  },
  {
    name: "Bombers & Fighters",
    classes: [
      {
        id: "y-wing-pilot",
        title: "BTL-B Y-Wing Pilot",
        description: "The BTL-B Y-Wing Bomber, a heavy, powerful ship used to annihilate critical enemy infrastructure, vehicles, and ships. Able to take a hit, the Y-Wing Bombers are critical in dealing continuous damage to enemy objectives, whether they be on the ground or in the skies. Oftentimes the focus of enemy fighters, Y-Wings Pilots utilize the assistance of ARC-170s and V-Wings to make sure all their missiles hit the target.\n”Minimal casualties, maximum effectiveness!”",
        equipment: ["2 Laser Cannons", "Dual Proton Torpedoes", "Ion Turret Gunner", "Astromech Repair Droid"],
        imageSrc: "/images/classes/y-wing.png",
      },
      {
        id: "arc-170-pilot",
        title: "ARC-170 Pilot",
        description:
          "The Aggressive ReConnaissance-170 Starfighter, better known as the ARC-170, is the most common star ship in the 104th. Making up 2/3rds of the Navy, the ARC-170 Pilots function effectively as a multi-purpose fighter in the skies. Able to defend and lead formations, dogfight, and obliterate the objective, the ARC-170 is the essential backbone of the 104th 2nd Fleet’s Naval forces.\n ”Lock S-Foils in attack position.”",
        equipment: [
          "2x Medium Laser Cannons",
          "Proton Torpedo",
          "Rear Turret Gunner",
          "Astromech Repair Droid",
        ],
        imageSrc: "/images/classes/arc-170.png",
      },
    ],
  },
]