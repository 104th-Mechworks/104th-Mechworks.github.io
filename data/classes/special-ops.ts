import type { ClassCategory } from "../types"

export const specialOpsClasses: ClassCategory[] = [
  {
    name: "ARC Troopers",
    classes: [
      {
        id: "arc-heavy",
        title: "ARC Heavy Specialist",
        description:
          "ARC Heavy Specialists are elite troopers equipped with advanced weaponry and armor. They provide overwhelming firepower in special operations, capable of engaging multiple targets and breaching fortified positions.",
        equipment: ["Rotary Blaster Cannon", "Wrist Rocket", "Jetpack", "Reinforced Armor", "Thermal Imploder"],
        imageSrc: "/images/classes/arc-heavy.png",
      },
      {
        id: "arc-recon",
        title: "ARC Recon",
        description:
          "ARC Recon troopers are stealth specialists trained for infiltration and intelligence gathering. They operate behind enemy lines, providing critical battlefield information and executing precision strikes.",
        equipment: [
          "DC-17M Sniper Configuration",
          "Stealth Field Generator",
          "Recon Droid",
          "Thermal Vision",
          "Vibroblade",
        ],
        imageSrc: "/images/classes/arc-recon.png",
      },
    ],
  },
  {
    name: "Republic Commandos",
    classes: [
      {
        id: "rc-demolitions",
        title: "RC Demolitions Expert",
        description:
          "Republic Commando Demolitions Experts are specialized in breaching, sabotage, and explosive ordnance. They can destroy enemy fortifications, vehicles, and infrastructure with surgical precision.",
        equipment: [
          "DC-17M Anti-Armor Configuration",
          "Thermal Detonators",
          "Breach Charges",
          "Katarn Armor",
          "Anti-Vehicle Mines",
        ],
        imageSrc: "/images/classes/rc-demolitions.png",
      },
      {
        id: "rc-tech",
        title: "RC Tech Specialist",
        description:
          "Republic Commando Tech Specialists are experts in electronic warfare, slicing, and technical sabotage. They can hack enemy systems, disable security measures, and provide technical support for complex operations.",
        equipment: ["DC-17M Blaster Rifle", "Slicing Kit", "EMP Grenades", "Katarn Armor", "Bacta Dispenser"],
        imageSrc: "/images/classes/rc-tech.png",
      },
    ],
  },
]
