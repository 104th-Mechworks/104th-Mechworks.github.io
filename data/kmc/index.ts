import type { Server } from "../types"
import { kmcQualifications } from "./quals"

export const kmcServer: Server = {
  id: "kmc",
  name: "KMC",
  description: "Kaminoan Military Complex",
  imageSrc: "/images/kmc.png",
  status: "ONLINE",
  purpose:
    "Primary qualification and training facility for the 104th Battalion. Houses all qualification programs and training operations.",
  qualificationCategories: kmcQualifications,
  supervisingOfficer: "AMAJ Vanok",
  standardsOfficer: "MAJ Liveshot",
  hasCustomStructure: true,
}

export { kmcQualifications }
