import { Shield, Plane, Anchor, Sword } from "lucide-react"
import type React from "react"

export function getIconComponent(iconName: string): React.ReactNode {
  switch (iconName) {
    case "Shield":
      return <Shield className="h-6 w-6" />
    case "Plane":
      return <Plane className="h-6 w-6" />
    case "Anchor":
      return <Anchor className="h-6 w-6" />
    case "Sword":
      return <Sword className="h-6 w-6" />
    default:
      return null
  }
}
