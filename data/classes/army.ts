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
          "The Heavy trooper is the one who always brings the big gun to a fight. The Heavy class are what give the suppressive fire when it comes to long range fighting and will always be prepared to take out enemy armour. With 1429 serving clones in the role of a Heavy this allows the 104th to always make sure its front line troopers have support from the rear when it comes to bigger targets.",
        equipment: ["DC-15", "DC-15LE", "Impact Grenade", "Z-6 Rotary Blaster Cannon", "Combat Shield", "Grenade Launcher", "Detonator Charge", "Ion Torpedo", "Ion Turret"],
        imageSrc: "/images/classes/heavy.png",
      },
      {
        id: "specialist",
        title: "Specialist",
        description:
          "The Scout Trooper is the clone that always has eyes on everything, Taking out droids at long distances but also up close and personal with its Infiltration trait. Not many Clones serve under the specialist class with only 368 members, these troopers are rare to see among the many Assault and Heavy troopers making them unique in the 104th.",
        equipment: ["Valken-38X", "Shock Grenade", "Infiltration", "Thermal Binoculars", "Personal Shield", "Stinger Pistol", "Laser Trip Mine"],
        imageSrc: "/images/classes/specialist.png",
      },
      {
        id: "nofficer",
        title: "Naval Officer",
        description:
          "The Naval Officer is primarily on board the Cruisers or fighting enemy fighters in side an ARC-170. With access to same equipment as the other Infantry Officers these are men who have your back  as they can supply you with Health and Moral Boosts that are super effective in the Battlefront. A Naval Officer is far superior for when it comes to Naval Fights by giving out strategic commands giving the 104th Navy air supremacy. \"We're clones, We fight! We Win!!\"",
        equipment: ["DC-17", "Flash Grenade", "Infantry Turret", "Defuser", "Disruption", "Homing Shot", "Squad Shield"],
        imageSrc: "/images/classes/navalOfficer.png",
      },
      {
        id: "nonCofficer",
        title: "Non-Commissioned Officer",
        description: "These boys make up a small amount of the 104th, Although not officially an officer but have the traits of one they are training to become something bigger. You will find these officers in the Company's of the 104th or in the main Chain of Command helping out the higher ranking officers enforce the rules and orders given to help win a victory for the Republic \n \"For the Honour of our Brothers!\" ",
        equipment: ["DC-17", "Flash Grenade", "Infantry Turret", "Defuser", "Disruption", "Homing Shot", "Squad Shield"],
        imageSrc: "/images/classes/nonComissionedOfficer.png",
      },
      {
        id: "officer",
        title: "104th Officer",
        description: "These are the Clones that were born to lead and win. The 104th Officer is always giving support on the Battlefront to make sure his men are doing what is needed to secure an easy victory. The 104th Officers are strict and set high expectations that are not easy to meet however they are the ones who will get you through the war without any fatal injuries. What makes the 104th Officer different is he has earned his markings of the famous \"Wolfe Pack\" and leads the bigger clone units in the battalion. 104th Officers are normally the Clones who have been here the longest and helped build the Battalion and have shown loyal, Dedication and respect to the Republic.\n \"All of us were born to fight!\"",
        equipment: ["DC-17", "Flash Grenade", "Infantry Turret", "Defuser", "Disruption", "Homing Shot", "Squad Shield"],
        imageSrc: "/images/classes/officer.png",
      },
    ],
  },
  {
    name: "Qualifications",
    classes: [
      {
        id: "rifleman",
        title: "Rifleman Trooper",
        description: "Rifleman Troopers plays a major role on the Battlefield with Mobility and Close Combat. They are equipped with a heavy blaster pistol manufactured by Corellian Arms that was utilized by the Royal Naboo Security Forces, the weapon is also known as the CR-2.  The CR-2 has 3 attachments to make the weapon more deadly; Light Stock (Reduces Recoil), Ion Shots (Destroys shields, turrets, and vehicles more effectively), and Night Vision (Can see enemies at night time). Rifleman Troopers could be found fighting Independently or as a Squad to eliminate any forces or capture any objectives. “Quickness is the essence of the war”  ",
        equipment: ["CR-2 Heavy Blaster Pistol", "DC-15A", "Improved Thermal Detonator", "Improved Scan Dart", "Toughen Up", "Acid Launcher", "Vanguard", "Slug Vanguard", "Smart ion Grenade", "Flash Pistol"],
        imageSrc: "/images/classes/rifleman.png",
      },
      {
        id: "aa",
        title: "Anti-Armour Trooper",
        description: "The heavy trooper already had a big gun right? Why not get a bigger one! Heavy troopers may qualify for the Anti-Armour qualification which in turn allows them to wield the mighty T-21 Heavy Blaster Rifle. If hostile armour has your squad pinned down one of these troopers can turn the tables in your favour. A big gun doesn’t make a big man, but it definitely helps.",
        equipment: ["T-21 Heavy Blaster Rifle", "Multi-Purpose Launcher (barrage configuration)", "Stationary Ion Turret", "Protective Combat Shield", "Ion Torpedo Launcher", "Impact Grenade", "Detonate Charge", "Z-6 Rotary Blaster Cannon"],
        imageSrc: "/images/classes/antiarmour.png",
      },
      {
        id: "marksman",
        title: "Marksman Trooper",
        description: "The Marksman Trooper is one who has shown proficiency in their weapon. These troopers are very skilled whether up close or from a far. They are also even a threat to armor with their disruptor shot.",
        equipment: ["NT-242", "Valken-38X", "Shock Grenade", "Infiltration", "Thermal Binoculars", "Personal Shield", "Stinger Pistol", "Laser Trip Mine"],
        imageSrc: "/images/classes/marksman.png",
      },
      {
        id: "arf",
        title: "Advanced Recon Force Trooper",
        description: "The Advanced Recon Force Trooper plays the role of a mobile enforcer within the 104th. The Arf Trooper is seen equipped with a variety of the clone issue weapons and advanced equipment to maximize their potential at any given time. This includes Assault, Heavy & Specialist Class qualifications. These advanced troopers are aggressive and serve all purposes whether it be sharpshooting, infiltration, rushing or holding the line for the 104th.",
        equipment: ["DC-15A", "DC-15", "DC-15LE", "Valken-38X", "Impact Grenade", "Ion Grenade", "Thermal Detonator", "Stinger Pistol", "Combat Shield", "Vanguard Shotgun", "Z-6 Rotary Blaster Cannon", "Grenade Launcher", "Detonator Charge"],
        imageSrc: "/images/classes/arf.png",
      },
      {
        id: "jet",
        title: "Jet Trooper",
        description: "The title of Jet Trooper is reserved for the clones who specialise in airborne combat.  This quick and nimble clone has increased mobility with his jetpack and added firepower with his rocket launcher, meaning they are effective against basic infantry and larger targets.  These troopers are often on the frontlines leading the charge with their powerful jetpack leap or flanking an enemy attack.  A Jet Trooper is never afraid of heights. ",
        equipment: ["Modified DC-17", "Flash Grenade", "Rocket Launcher", "Jet Pack"],
        imageSrc: "/images/classes/aerial.png",
      },
      {
        id: "tx",
        title: "TX-130 Driver",
        description: "A TX-130 Sabre Tank Driver is a clone with a thirst for destruction.  The highly adaptive tank is capable of leading a charge or backing off and holding down objectives alone. Equipped with heavy firepower and increased mobility, the TX-130 proves as a worthy opponent for the CIS AAT.  The propulsion jets can master any terrain and allow the tank to quickly navigate a battlefield.  When out of the TX-130, the driver is equipped with Heavy Trooper gear, allowing them to lay down as much firepower as the tank itself.",
        equipment: ["Dual Laver Cannons", "Rocket Pods", "Charged Blasts", "Laser Barrage"],
        imageSrc: "/images/classes/tx-130.png",
      },
      {
        id: "medic",
        title: "Medic Trooper",
        description: "Coming Soon",
        equipment: ["Coming soon"],
        imageSrc: "/placeholder.svg",
      }
    ],
  },
]
