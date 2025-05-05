import { Shield, Plane, Anchor, Sword } from "lucide-react"

export function getIconComponent(iconName: string) {
  switch (iconName) {
    case "Shield":
      return <Shield className="h-8 w-8" />
    case "Plane":
      return <Plane className="h-8 w-8" />
    case "Anchor":
      return <Anchor className="h-8 w-8" />
    case "Sword":
      return <Sword className="h-8 w-8" />
    default:
      return null
  }
}
