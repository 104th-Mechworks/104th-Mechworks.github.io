import type { Server } from "../types"

export const mainServer: Server = {
  id: "main",
  name: "Main Server",
  description: "Central hub for all operations",
  imageSrc: "/images/104th.png",
  status: "ONLINE",
  purpose:
    "Command and control center for the 104th Battalion. Houses the primary communications array and strategic operations center.",
  departments: ["Command Staff", "Raids and Events", "Discipline", "Logistics",],
  commandingOfficer: "Marshal Commander Dark",
  sectionDescriptions: {
    "Command Staff": "Main leadership team overseeing all battalion activities and strategic decisions operates from this server. They also work with the different branches at officer and nco levels.",
    "Raids and Events": "Announcement of raids and events across xbox, ps and pc platforms. This server is used to coordinate and plan all battalion raids and events. \nOperations are usually announced for summer and winter and involve the entire milsim working towards set objectives, awards handed out at the end of each operation",
    Discipline: "Enforcement of rules, handling of disciplinary actions, and maintaining order within the battalion. This server is used to handle all disciplinary actions and issues within the battalion. It is also used to handle any issues that may arise during raids or events.",
    Logistics: "Main logs of the milsim and reports are submitted here, and reviewed by the ncos and the admin team to ensure smooth operations and upto date records.",
  },
}
