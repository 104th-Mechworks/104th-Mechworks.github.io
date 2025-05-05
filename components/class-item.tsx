import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { TrooperClass } from "@/data/types"

interface ClassItemProps extends TrooperClass {}

export default function ClassItem({ title, description, equipment, imageSrc }: ClassItemProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
      <div className="relative w-full h-64">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-mono text-zinc-200">{title}</CardTitle>
        <CardDescription className="text-zinc-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-zinc-300 font-mono">EQUIPMENT</h4>
          <ul className="space-y-1">
            {equipment.map((item, index) => (
              <li key={index} className="text-zinc-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
