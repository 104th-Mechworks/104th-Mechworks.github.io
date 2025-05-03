import { mainServer } from "./main"
import { resilientServer, resilientCompanies } from "./resilient/index"
import { triumphantServer } from "./triumphant"
import { ravagerServer } from "./ravager"
import { rasServer, rasDepartments } from "./ras"
import { kmcServer } from "../kmc"

export const servers = [mainServer, resilientServer, triumphantServer, ravagerServer, rasServer, kmcServer]

export { rasDepartments, resilientCompanies }
