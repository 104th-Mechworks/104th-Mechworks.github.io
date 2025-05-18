import Image from "next/image"
import type { Troop } from "@/data/types"

export default function TroopDetail({
  troop,
  departmentColor,
}: {
  troop: Troop
  departmentColor: string
}) {
  // Function to determine badge style based on platform
  const getPlatformBadgeStyle = (platform: string) => {
    switch (platform?.toLowerCase()) {
      case "xbox":
        return "bg-green-900/20 text-green-400/70"
      case "playstation":
        return "bg-blue-900/20 text-blue-400/70"
      default:
        return "bg-red-900/20 text-red-400/70"
    }
  }

  // Ensure platform has a default value
  const platform = troop.platform || "Unknown"

  // Determine which class icon to use and if this is an ARC or RC troop
  const isArc = departmentColor === "#f009c9"
  const classIcon = isArc ? "/images/icons/ArcClass.png" : "/images/icons/CommandoClass.png"

  return (
    <div className={`bg-zinc-900 border rounded-sm p-6 relative`} style={{ borderColor: departmentColor }}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold font-mono text-zinc-200">{troop.name}</h2>
          <div className={`px-2 py-1 rounded-md text-xs font-bold ${getPlatformBadgeStyle(platform)}`}>{platform}</div>
        </div>

        {/* Class icon in top right */}
        <div className="relative h-10 w-10">
          <Image
            src={classIcon || "/placeholder.svg"}
            alt={isArc ? "ARC Class" : "Commando Class"}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      <div className="space-y-6">
        {/* ARC Structure */}
        {isArc && (
          <>
            {/* Check for different possible property paths */}
            {(troop.commandingOfficer || (troop.leadership && troop.leadership.tco)) && (
              <div className="space-y-2"> {/* Changed from flex flex-col gap-1 */}
                <h3 className="text-base font-bold font-mono" style={{ color: departmentColor }}> {/* Changed from span, added styles */}
                  Troop Commanding Officer:
                </h3>
                <div className="text-zinc-200 font-mono"> {/* Changed from span */}
                  {troop.commandingOfficer || (troop.leadership && troop.leadership.tco)}
                </div>
              </div>
            )}

            {/* Check for lieutenants in different possible locations */}
            {((troop.lieutenants && troop.lieutenants.length > 0) ||
              (troop.personnel && troop.personnel.lieutenants && troop.personnel.lieutenants.length > 0)) && (
              <div className="space-y-2">
                <h3 className="text-base font-bold font-mono" style={{ color: departmentColor }}>
                  ARC Lieutenant
                  {(troop.lieutenants && troop.lieutenants.length > 1) ||
                  (troop.personnel && troop.personnel.lieutenants && troop.personnel.lieutenants.length > 1)
                    ? "s"
                    : ""}
                  :
                </h3>
                <div className="space-y-1">
                  {(troop.lieutenants || (troop.personnel && troop.personnel.lieutenants) || []).map(
                    (lieutenant, index) => (
                      <div key={index} className="text-zinc-200 font-mono">
                        {lieutenant}
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}

            {/* Check for sergeants in different possible locations */}
            {((troop.sergeants && troop.sergeants.length > 0) ||
              (troop.personnel && troop.personnel.sergeants && troop.personnel.sergeants.length > 0)) && (
              <div className="space-y-2">
                <h3 className="text-base font-bold font-mono" style={{ color: departmentColor }}>
                  ARC Sergeant
                  {(troop.sergeants && troop.sergeants.length > 1) ||
                  (troop.personnel && troop.personnel.sergeants && troop.personnel.sergeants.length > 1)
                    ? "s"
                    : ""}
                  :
                </h3>
                <div className="space-y-1">
                  {(troop.sergeants || (troop.personnel && troop.personnel.sergeants) || []).map((sergeant, index) => (
                    <div key={index} className="text-zinc-200 font-mono">
                      {sergeant}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* RC Structure */}
        {!isArc && (
          <>
            {troop.squadLeaders && troop.squadLeaders.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-base font-bold font-mono" style={{ color: departmentColor }}>
                  Squad Leader{troop.squadLeaders.length > 1 ? "s" : ""}:
                </h3>
                <div className="space-y-1">
                  {troop.squadLeaders.map((leader, index) => (
                    <div key={index} className="text-zinc-200 font-mono">
                      {leader}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {troop.members && troop.members.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-base font-bold font-mono" style={{ color: departmentColor }}>
                  Squad Members:
                </h3>
                <div className="space-y-1">
                  {troop.members.map((member, index) => (
                    <div key={index} className="text-zinc-200 font-mono">
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}