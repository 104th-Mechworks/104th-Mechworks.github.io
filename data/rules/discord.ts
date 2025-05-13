import type { Rule } from "."

// Discord Rules
const discordRules: Rule[] = [
  {
    id: "discord-behavior",
    title: "Discord Behavior",
    description: "Expected conduct in all battalion Discord channels.",
    importance: "critical",
    category: "discord",
    type: "rule",
    sections: [
      {
        id: "discord-behavior-1",
        title: "General Conduct",
        content: [
          "No Abuse to anyone.",
          "No spamming any type of content in the chats (Text, Images and other content.)",
          "No racial / 18+ / Offensive language here. (Swearing is ok as long as its not used to offend someone, please do not spam cuss words or over use them.)",
          "No promoting unless requested from staff / Do not send links to other discord's or try and recruit from the 104th as this can grant a perm ban",
          "13+ of age.",
          "Please speak English in the 104th, we cant monitor people speaking in different language.",
        ],
      },
      {
        id: "discord-behavior-2",
        title: "Prohibited Behavior",
        content: [
          "Pinging a console or spam pinging a console in any chat despite the raid chats will grant a suspension.",
          "Do not organize, participate or encourage harrasment on others.",
          "Do not organize, promote, or coordinate servers around hate speech.",
          "Do not make threats of violence or threaten harm to others.",
          "Do not evade user blocks or server bans.",
          "Do not send other viruses or malware.",
          "Do not share 3rd party milsim drama here.",
          "Do not ping staff for something that isn't serious.",
          "Do not discuss World Politics and controversial topics in this discord.",
        ],
      },
    ],
  },
]

export default discordRules
