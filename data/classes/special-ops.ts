import type { ClassCategory } from "../types"

export const specialOpsClasses: ClassCategory[] = [
  {
    name: "Special Forces",
    classes: [
      {
        id: "arc",
        title: "ARC Trooper",
        description:
          "Advanced Recon Commandos are the best of the best out of the clones on the frontline. A mixture of Officer Training and great combat training these are the deadliest weapons of the 104th battalion, ready to sacrifice everything to help defeat the separatist scum. You will find that ARC Troopers are the most loyal clones in the unit as they don't question or disobey any commands given and will execute any orders that are received  from high command. Trained in sabotaging the enemy these boys will role up with standard infantry showing how things should be done by racking up more kills then anyone. \n \"Why hello clanker!\"",
        equipment: ["Dual DC-17 Blaster Pistols", "Power Blast", "Helmet Scanner", "Shock Trap"],
        imageSrc: "/images/classes/arcClass.png",
      },
      {
        id: "rc",
        title: "Republic Commando",
        description:
          "Clone Commandos, also known as RepublicCommandos, are an elite class of trooper within the Grand Army of the Republic. Trained in sabotage, demolition, and advanced small unit infantry tactics these clones were deemed perfect by their Kaminoan creators due to their unmatched loyalty and formidable combat capabilities compared to their more common brethren. Unlike ARCs who operate independently and act as battlefield liaisons to military commanders, these troopers operate in four man squads that are expected to carry out their objective(s) in all battlefield conditions without question.\"Let's rearrange some architecture, Commandos!\"",
        equipment: [
          "DC-17m ICWS",
          "Katarn-Class Armor",
          "Anti-Armor Attachment",
          "Battle Focus Damage Reduction Aura",
          "Repulsor Blast",
        ],
        imageSrc: "/images/classes/rcClass.png",
      },
    ],
  },
]