"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"
import MedalItem from "@/components/medal-item"
import { allMedals, medalsByCategory, categoryNames, categoryDescriptions } from "@/data/medals"
import MobileTabSelect from "@/components/mobile-tab-select"

export default function MedalsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const filteredMedals = useMemo(() => {
    let medals = selectedCategory === "all" ? allMedals : medalsByCategory[selectedCategory]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      medals = medals.filter(
        (medal) => medal.name.toLowerCase().includes(query),
        // Removed description and requirements searches
      )
    }

    return medals
  }, [selectedCategory, searchQuery])

  const categoryOptions = [
    { value: "all", label: "All Medals" },
    { value: "service", label: categoryNames.service },
    { value: "achievement", label: categoryNames.achievement },
    { value: "operation", label: categoryNames.operation },
    { value: "longevity", label: categoryNames.longevity },
    { value: "class", label: categoryNames.class },
  ]

  const getCategoryDescription = () => {
    if (selectedCategory === "all") {
      return "All medals available in the 104th Battalion. Filter by category or search for specific medals."
    }
    return categoryDescriptions[selectedCategory]
  }

  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-zinc-100">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
            104th Battalion Medals
          </span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Medals recognize excellence, dedication, and service within the 104th Battalion. Each medal has specific
          requirements and represents unique achievements.
        </p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-auto">
          <MobileTabSelect
            options={categoryOptions}
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full"
          />
        </div>

        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-zinc-700 rounded-md bg-zinc-800 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Search medals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6 bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
        <h3 className="text-lg font-medium text-zinc-300 mb-1">
          {selectedCategory === "all" ? "All Medals" : categoryNames[selectedCategory]}
        </h3>
        <p className="text-zinc-400 text-sm">{getCategoryDescription()}</p>
      </div>

      {filteredMedals.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-4"
        >
          {filteredMedals.map((medal) => (
            <MedalItem key={medal.id} medal={medal} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12 bg-zinc-800/30 rounded-lg border border-zinc-700">
          <Filter className="h-12 w-12 text-zinc-500 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-zinc-300 mb-1">No medals found</h3>
          <p className="text-zinc-400 text-sm">Try adjusting your search or selecting a different category.</p>
        </div>
      )}
    </div>
  )
}
