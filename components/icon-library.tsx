"use client"

import Image from "next/image"
import * as LucideIcons from "lucide-react"

type IconProps = {
  name: string
  size?: number
  className?: string
}

export default function Icon({ name, size = 24, className = "text-blue-400" }: IconProps) {
  // Custom image icons
  const customIcons: Record<string, string> = {
    Aerial: "/images/icons/JetClass.png",
    Marksman: "/images/icons/MarksmanClass.png",
    "Anti-Armour": "/images/icons/AntiArmourClass.png",
    Tank: "/images/icons/TankerClass.png",
    ARF: "/images/icons/ARFClass.png",
    ARC: "/images/icons/ArcClass.png",
    RC: "/images/icons/CommandoClass.png",
    "ARC-170": "/images/icons/ARC170Class.png",
    "V-Wing": "/images/icons/VWingClass.png",
    "Y-Wing": "/images/icons/YWingClass.png",
    Rifle: "/images/icons/RiflemanClass.png",
    // Add more custom icons here as needed
  }

  // Check if this is a custom image icon
  if (name in customIcons) {
    // Special case for Tank icon
    if (name === "Tank") {
      return (
        <div className="relative flex-shrink-0 flex items-center justify-center" style={{ height: size, width: size }}>
          <div
            style={{
              width: size * 1.5,
              height: size * 1.5,
              position: "relative",
              transform: "scale(1.5)",
            }}
          >
            <Image
              src={customIcons[name] || "/placeholder.svg"}
              alt={name}
              fill
              className="object-contain"
              style={{ maxWidth: "none", maxHeight: "none" }}
              unoptimized={true} // Bypass image optimization
            />
          </div>
        </div>
      )
    }

    // Standard handling for other icons
    return (
      <div className="relative flex-shrink-0 flex items-center justify-center" style={{ height: size, width: size }}>
        <Image
          src={customIcons[name] || "/placeholder.svg"}
          alt={name}
          width={size}
          height={size}
          className="object-contain"
          unoptimized={true} // Bypass image optimization
        />
      </div>
    )
  }

  // Otherwise use Lucide icons
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons]
  if (IconComponent) {
    return <IconComponent size={size} className={className} />
  }

  // Fallback for unknown icons
  return <span className="text-xs text-gray-400">[?]</span>
}
