import type { Rule } from "."

// Discord Content Rules
const discordContentRules: Rule[] = [
  {
    id: "content-restrictions",
    code: "§102",
    title: "Prohibited Content",
    description: "Content that is not permitted in any battalion channels.",
    importance: "critical",
    category: "discord-content",
    type: "rule",
    sections: [
      {
        id: "content-restrictions-1",
        code: "§102.1",
        title: "Content Guidelines",
        content: [
          "NSFW must be applied to channels if it has adult content.",
          "You may not sexualize minors in any way.",
          "You may not share sexually explicity content of other people.",
          "You may not share content that glorifies or promotes suicide or self-harm.",
          "You many not use discord to promote or support violent extremisim.",
          "You may not share images of sadistic gore or animal cruelty.",
        ],
      },
      {
        id: "content-restrictions-2",
        code: "§102.2",
        title: "Prohibited Activities",
        content: [
          "You may not operate a server that sells prohibted goods or dangerous goods.",
          "You may not promote any hacking or distribution of stolen accounts.",
          "You should not promote or encourage illagal behaviour.",
        ],
      },
    ],
  },
]

export default discordContentRules
