// Re-export all data types and collections
import type {
  Server,
  Department,
  Team,
  TeamMember,
  TeamGroup,
  Rank,
  Branch,
  SpecialOp,
  Position,
  CommandStaffMember,
} from "./types"
import { servers, rasDepartments } from "./servers/index"
import { branches, specialOps } from "./branches/index"
import { ranks } from "./ranks/index"
import { positions } from "./positions/index"
import { commandStaffMembers } from "./command-staff/index"
import { classes } from "./classes/index"

export {
  // Types
  type Server,
  type Department,
  type Team,
  type TeamMember,
  type TeamGroup,
  type Rank,
  type Branch,
  type SpecialOp,
  type Position,
  type CommandStaffMember,
  // Data
  servers,
  rasDepartments,
  branches,
  specialOps,
  ranks,
  positions,
  commandStaffMembers,
  classes
}
