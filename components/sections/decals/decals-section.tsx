"use client"

import type React from "react"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { decals } from "@/data/decals"
import type { Decal, DecalVariation } from "@/data/types"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const DecalCard: React.FC<{ decal: Decal }> = ({ decal }) => {
  const [selectedVariation, setSelectedVariation] = useState<DecalVariation | null>(
    decal.variations && decal.variations.length > 0 ? decal.variations[0] : null,
  )

  const handleVariationChange = (variationName: string) => {
    const variation = decal.variations?.find((v) => v.name === variationName)
    setSelectedVariation(variation || null)
  }

  const preventInteraction = (e: React.MouseEvent) => e.preventDefault()

  return (
    <Card className="bg-zinc-900 border-zinc-700 text-zinc-300 w-full overflow-hidden flex flex-col h-full">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="text-xl text-blue-400">{decal.name}</CardTitle>
        <CardDescription className="text-zinc-400 whitespace-pre-line">{decal.requirement}</CardDescription>
        <div className="pt-1 flex flex-wrap gap-1 mt-1">
          <Badge variant="secondary" className="bg-zinc-700 text-zinc-300">
            {decal.category}
          </Badge>
          {decal.subCategory && (
            <Badge variant="outline" className="border-zinc-600 text-zinc-400">
              {decal.subCategory}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        {/* Changed from grid md:grid-cols-2 to flex flex-col */}
        <div className="flex flex-col gap-6 mt-2 flex-grow">
          {/* Appearance Section */}
          <div className="flex flex-col h-full">
            <h4 className="font-semibold text-zinc-200 mb-2 flex-shrink-0">Appearance:</h4>
            {decal.variations && decal.variations.length > 1 && (
              <div className="mb-4 flex-shrink-0">
                <Select onValueChange={handleVariationChange} defaultValue={selectedVariation?.name}>
                  <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-zinc-300">
                    <SelectValue placeholder="Select Helmet/Variation" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-300">
                    {decal.variations.map((variation) => (
                      <SelectItem key={variation.name} value={variation.name} className="hover:bg-zinc-700">
                        {variation.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="relative w-full aspect-video bg-zinc-800 rounded-md overflow-hidden mb-2 flex items-center justify-center flex-grow">
              {selectedVariation ? (
                <Image
                  src={selectedVariation.imagePath || "/placeholder.svg"}
                  alt={selectedVariation.name}
                  fill
                  className="object-contain p-2 pointer-events-none"
                  unoptimized
                />
              ) : decal.generalImagePath ? (
                <Image
                  src={decal.generalImagePath || "/placeholder.svg"}
                  alt={decal.name}
                  fill
                  className="object-contain p-2 pointer-events-none"
                  unoptimized
                />
              ) : (
                <p className="text-zinc-500">No image available</p>
              )}
              <div className="absolute inset-0 z-10" onContextMenu={preventInteraction} draggable="false" />
            </div>
            {selectedVariation?.description && (
              <p className="text-sm text-zinc-400 italic mt-1 flex-shrink-0">{selectedVariation.description}</p>
            )}
          </div>

          {/* Available On Section */}
          <div className="flex-shrink-0">
            <h4 className="font-semibold text-zinc-200 mb-2">Available On:</h4>
            <div className="flex flex-wrap gap-2">
              {decal.availableOn.map((helmet) => (
                <Badge key={helmet} variant="outline" className="border-zinc-600 text-zinc-400">
                  {helmet}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function DecalsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(decals.map((d) => d.category))).sort()
    return ["All Categories", ...uniqueCategories]
  }, [])

  const filteredDecals = useMemo(() => {
    return decals.filter((decal) => {
      const categoryMatch = selectedCategory === "All Categories" || decal.category === selectedCategory
      const searchMatch =
        searchTerm === "" ||
        decal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        decal.requirement.toLowerCase().includes(searchTerm.toLowerCase()) ||
        decal.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (decal.subCategory && decal.subCategory.toLowerCase().includes(searchTerm.toLowerCase())) ||
        decal.availableOn.some((helmet) => helmet.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (decal.variations &&
          decal.variations.some(
            (variation) =>
              variation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              variation.helmetType.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (variation.description && variation.description.toLowerCase().includes(searchTerm.toLowerCase())),
          ))
      return categoryMatch && searchMatch
    })
  }, [decals, selectedCategory, searchTerm])

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-zinc-100">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500">
            104th Battalion Decals
          </span>
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-400">Browse available helmet decals and their variations.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8 items-end">
        <div>
          <label htmlFor="categoryFilter" className="block text-sm font-medium text-zinc-300 mb-1">
            Filter by Category:
          </label>
          <Select onValueChange={setSelectedCategory} defaultValue="All Categories">
            <SelectTrigger id="categoryFilter" className="w-full bg-zinc-800 border-zinc-700 text-zinc-300">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-300">
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="hover:bg-zinc-700">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="searchDecals" className="block text-sm font-medium text-zinc-300 mb-1">
            Search Decals:
          </label>
          <div className="relative">
            <Input
              id="searchDecals"
              type="search"
              placeholder="Search by name, requirement, helmet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-800 border-zinc-700 text-zinc-300 pl-10"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          </div>
        </div>
      </div>

      {filteredDecals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDecals.map((decal) => (
            <DecalCard key={decal.id} decal={decal} />
          ))}
        </div>
      ) : (
        <p className="text-center text-zinc-400 py-10">
          No decals match your current filters. Try adjusting your search or category.
        </p>
      )}
    </motion.section>
  )
}
