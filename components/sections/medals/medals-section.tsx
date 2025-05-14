"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Medal } from "@/data/types"
import { medalsByCategory, categoryNames, categoryDescriptions } from "@/data/medals"
import MedalItem from "@/components/medal-item"
import MobileTabSelect from "@/components/mobile-tab-select"
import { Search } from "lucide-react"

export default function MedalsSection() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof medalsByCategory>("service")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter medals based on search query
  const filteredMedals = searchQuery
    ? Object.values(medalsByCategory)
        .flat()
        .filter(
          (medal) =>
            medal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            medal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            medal.requirements.some((req) => req.toLowerCase().includes(searchQuery.toLowerCase())),
        )
    : medalsByCategory[selectedCategory]

  // Get all category keys for the dropdown
  const categoryOptions = Object.keys(categoryNames).map((key) => ({
    value: key,
    label: categoryNames[key as keyof typeof categoryNames],
  }))

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-zinc-100">Medals</h1>
        <p className="text-zinc-400">
          Explore the various medals and commendations awarded to members of the 104th Battalion.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search medals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full md:w-64">
          <MobileTabSelect
            options={categoryOptions}
            value={selectedCategory}
            onChange={(value) => {
              setSelectedCategory(value as keyof typeof medalsByCategory)
              setSearchQuery("")
            }}
          />
        </div>
      </div>

      {/* Category Description */}
      {!searchQuery && (
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-md p-4">
          <h2 className="text-xl font-bold text-zinc-100 mb-2">{categoryNames[selectedCategory]}</h2>
          <p className="text-zinc-300">{categoryDescriptions[selectedCategory as keyof typeof categoryDescriptions]}</p>
        </div>
      )}

      {/* Search Results Count */}
      {searchQuery && (
        <div className="text-zinc-400">
          Found {filteredMedals.length} medal{filteredMedals.length !== 1 ? "s" : ""} matching "{searchQuery}"
        </div>
      )}

      {/* Medals List */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 gap-4">
        {filteredMedals.length > 0 ? (
          filteredMedals.map((medal: Medal) => <MedalItem key={medal.id} medal={medal} />)
        ) : (
          <div className="text-center py-8 text-zinc-500">No medals found matching your search criteria.</div>
        )}
      </motion.div>
    </motion.div>
  )
}
