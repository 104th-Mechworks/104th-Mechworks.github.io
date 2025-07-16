"use client"

import React, { useRef } from "react"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { decals } from "@/data/decals"
import type { Decal, DecalVariation } from "@/data/types"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Check } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {cn} from "@/lib/utils";

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
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-300 max-h-60 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-600 [&::-webkit-scrollbar-button]:hidden">
                    {decal.variations.map((variation) => (
                      <SelectItem key={variation.name} value={variation.name} className="hover:bg-zinc-700">
                        {variation.name} ({variation.helmetType})
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
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  // Handle clicks outside the dropdown to close it
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false)
      }
    }

    if (isCategoryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isCategoryDropdownOpen])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setIsCategoryDropdownOpen(false)
  }

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
          <div className="relative" ref={dropdownRef}>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              className="w-full justify-between bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700"
              aria-haspopup="listbox"
              aria-expanded={isCategoryDropdownOpen}
            >
              {selectedCategory}
              <ChevronDown className="h-4 w-4 ml-2 shrink-0 opacity-50" />
            </Button>
            {isCategoryDropdownOpen && (
              <div className="absolute top-full left-0 right-0 z-50 mt-1">
                <ScrollArea
                  className={cn(
                    "h-60 w-full rounded-md border border-zinc-700 bg-zinc-800", // Base styles for ScrollArea root
                    // Hide the custom Radix Scrollbar elements (both vertical and horizontal)
                    "[&>[role='scrollbar']]:!hidden"
                  )}
                >
                  <div className="p-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        role="option"
                        aria-selected={selectedCategory === category}
                        className={`flex items-center justify-between text-sm p-2 cursor-pointer rounded transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-600 text-white"
                            : "text-zinc-300 hover:bg-zinc-700"
                        }`}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                        {selectedCategory === category && <Check className="h-4 w-4 ml-2" />}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            )}
          </div>
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
