"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  AlertTriangle,
  Shield,
  Users,
  CheckCircle,
  AlertCircle,
  Lock,
  Search,
  BookOpen,
  FileText,
} from "lucide-react"
import { rulesPoliciesByCategory, rulesByType, categoryNames } from "@/data/rules-and-policies"
import MobileTabSelect from "@/components/mobile-tab-select"

export default function RulesSection() {
  const [activeType, setActiveType] = useState<"rule" | "policy">("rule")
  const [activeCategory, setActiveCategory] = useState<string | null>(null) // Set to null by default
  const [expandedRule, setExpandedRule] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null)
  const [showAll, setShowAll] = useState<boolean>(true) // Set to true by default

  const handleTypeChange = (type: "rule" | "policy") => {
    setActiveType(type)
    // Keep showing all rules/policies when switching types
    setActiveCategory(null)
    setExpandedRule(null)
    setSearchQuery("")
    setHighlightedSection(null)
    setShowAll(true) // Always show all when switching types
  }

  const handleCategoryChange = (category: string) => {
    if (category === "all-rules" || category === "all-policies") {
      setShowAll(true)
      setActiveCategory(null)
      setActiveType(category === "all-rules" ? "rule" : "policy")
    } else {
      setShowAll(false)
      setActiveCategory(category)
    }
    setExpandedRule(null)
    setSearchQuery("")
    setHighlightedSection(null)
  }

  const toggleRule = (ruleId: string) => {
    setExpandedRule(expandedRule === ruleId ? null : ruleId)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    setHighlightedSection(null)

    if (query.trim() === "") {
      setSearchResults([])
      return
    }

    // Search by code (if starts with §) or by title only
    const isCodeSearch = query.startsWith("§")
    const searchTerm = isCodeSearch ? query.toLowerCase() : query.toLowerCase()

    const results = [...rulesByType.rule, ...rulesByType.policy].filter((rule) => {
      // Check if main rule code matches
      if (isCodeSearch) {
        // Check main rule code
        if (rule.code && rule.code.toLowerCase().includes(searchTerm)) {
          return true
        }

        // Check section codes
        if (rule.sections) {
          const matchingSection = rule.sections.find(
            (section) => section.code && section.code.toLowerCase().includes(searchTerm),
          )
          if (matchingSection) {
            // If we find a matching section, highlight it
            setHighlightedSection(matchingSection.id)
            return true
          }
        }
        return false
      } else {
        // Regular search by title or any code
        if (rule.title.toLowerCase().includes(searchTerm)) {
          return true
        }

        if (rule.code && rule.code.toLowerCase().includes(searchTerm)) {
          return true
        }

        // Check section titles and codes
        if (rule.sections) {
          const matchingSection = rule.sections.find(
            (section) =>
              section.title.toLowerCase().includes(searchTerm) ||
              (section.code && section.code.toLowerCase().includes(searchTerm)),
          )
          if (matchingSection) {
            // If we find a matching section, highlight it
            setHighlightedSection(matchingSection.id)
            return true
          }
        }
        return false
      }
    })

    setSearchResults(results)
  }

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "critical":
        return "bg-red-500"
      case "high":
        return "bg-amber-500"
      case "standard":
        return "bg-green-500"
      case "staff-only":
        return "bg-purple-500"
      default:
        return "bg-zinc-500"
    }
  }

  const getImportanceWarning = (importance: string, type: "rule" | "policy") => {
    if (type === "rule") {
      // Rule warnings
      switch (importance) {
        case "critical":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-red-950/20 border border-red-900/30 rounded">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-red-400 text-sm">Violations may result in severe disciplinary action</span>
            </div>
          )
        case "high":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-amber-950/20 border border-amber-900/30 rounded">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span className="text-amber-400 text-sm">Violations will result in disciplinary action</span>
            </div>
          )
        case "standard":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-green-950/20 border border-green-900/30 rounded">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-green-400 text-sm">
                Standard rule - all members are expected to follow these guidelines
              </span>
            </div>
          )
        case "staff-only":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-purple-950/20 border border-purple-900/30 rounded">
              <Users className="h-4 w-4 text-purple-500" />
              <span className="text-purple-400 text-sm">
                Staff only - these rules apply exclusively to staff members
              </span>
            </div>
          )
        default:
          return null
      }
    } else {
      // Policy warnings - different from rule warnings
      switch (importance) {
        case "critical":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-red-950/20 border border-red-900/30 rounded">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <span className="text-red-400 text-sm">Mandatory policy - strict adherence required</span>
            </div>
          )
        case "high":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-amber-950/20 border border-amber-900/30 rounded">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              <span className="text-amber-400 text-sm">
                Important policy - failure to follow may result in disciplinary action
              </span>
            </div>
          )
        case "standard":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-green-950/20 border border-green-900/30 rounded">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-green-400 text-sm">Standard procedure</span>
            </div>
          )
        case "staff-only":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-purple-950/20 border border-purple-900/30 rounded">
              <Lock className="h-4 w-4 text-purple-500" />
              <span className="text-purple-400 text-sm">Staff procedure - administrative policy for staff</span>
            </div>
          )
        default:
          return null
      }
    }
  }

  // Filter rules by type and category or search results
  const displayRules =
    searchQuery.trim() !== ""
      ? searchResults
      : showAll
        ? rulesByType[activeType]
        : activeCategory
          ? rulesPoliciesByCategory[activeCategory as keyof typeof rulesPoliciesByCategory].filter(
              (rule) => rule.type === activeType,
            )
          : rulesByType[activeType]

  // Get categories for the active type
  const categoriesForType = Object.keys(rulesPoliciesByCategory).filter((category) =>
    rulesPoliciesByCategory[category as keyof typeof rulesPoliciesByCategory].some((rule) => rule.type === activeType),
  )

  // Create options for dropdown with "All" option
  const categoryOptions = [
    {
      value: activeType === "rule" ? "all-rules" : "all-policies",
      label: activeType === "rule" ? "All Rules" : "All Policies",
    },
    ...categoriesForType.map((category) => ({
      value: category,
      label: categoryNames[category as keyof typeof categoryNames],
    })),
  ]

  // Calculate the currently selected value for the dropdown
  const selectedValue = showAll ? (activeType === "rule" ? "all-rules" : "all-policies") : activeCategory || ""

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold text-zinc-200 font-mono">RULES & POLICIES</h2>
        <p className="text-zinc-400">Official regulations and guidelines for all members of the 104th Battalion.</p>
      </div>

      {/* Search bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-zinc-500" />
        </div>
        <input
          type="text"
          placeholder="Search by title or code (§)"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      {/* Type selector - only show if not searching */}
      {searchQuery.trim() === "" && (
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => handleTypeChange("rule")}
            className={`px-4 py-2 rounded-md font-mono text-sm flex items-center space-x-2 ${
              activeType === "rule"
                ? "bg-blue-600 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>RULES</span>
          </button>
          <button
            onClick={() => handleTypeChange("policy")}
            className={`px-4 py-2 rounded-md font-mono text-sm flex items-center space-x-2 ${
              activeType === "policy"
                ? "bg-blue-600 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>POLICIES</span>
          </button>
        </div>
      )}

      <div className="space-y-4">
        {/* Category dropdown - only show if not searching */}
        {searchQuery.trim() === "" && (
          <div className="w-full mb-4">
            <MobileTabSelect
              options={categoryOptions}
              value={selectedValue}
              onChange={(value) => handleCategoryChange(value)}
            />
          </div>
        )}

        {/* Rules list */}
        <div className="bg-zinc-900 rounded-md p-4">
          <h3 className="text-zinc-300 font-mono text-sm mb-3 border-b border-zinc-800 pb-2">
            {searchQuery.trim() !== ""
              ? `SEARCH RESULTS (${searchResults.length})`
              : showAll
                ? activeType === "rule"
                  ? "ALL RULES"
                  : "ALL POLICIES"
                : activeCategory
                  ? categoryNames[activeCategory as keyof typeof categoryNames]
                  : activeType === "rule"
                    ? "ALL RULES"
                    : "ALL POLICIES"}
          </h3>

          <div className="space-y-3">
            {displayRules.length === 0 ? (
              <div className="text-zinc-400 text-center py-4">
                {searchQuery.trim() !== "" ? "No results found" : "No rules or policies in this category"}
              </div>
            ) : (
              displayRules.map((rule) => (
                <div key={rule.id} className="border border-zinc-800 rounded-md overflow-hidden">
                  <button
                    onClick={() => toggleRule(rule.id)}
                    className="w-full flex items-center justify-between p-3 bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`h-2 w-2 rounded-full ${getImportanceColor(rule.importance)}`} />
                      <div className="flex flex-col items-start">
                        <span className="font-mono text-zinc-200">{rule.title}</span>
                        {rule.code && <span className="text-zinc-500 text-xs font-mono">{rule.code}</span>}
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-zinc-400 transition-transform ${
                        expandedRule === rule.id ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedRule === rule.id && (
                    <div className="p-4 bg-zinc-900 border-t border-zinc-800">
                      {rule.code && (
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-zinc-400 text-sm font-mono bg-zinc-800 px-2 py-1 rounded select-none">
                            {rule.code}
                          </span>
                          <span className="text-zinc-500 text-xs">Reference Code</span>
                        </div>
                      )}

                      <p className="text-zinc-400 mb-4">{rule.description}</p>

                      {getImportanceWarning(rule.importance, rule.type)}

                      {rule.sections?.map((section) => (
                        <div
                          key={section.id}
                          className={`mb-4 ${
                            highlightedSection === section.id
                              ? "bg-blue-900/20 p-3 rounded border border-blue-800/30"
                              : ""
                          }`}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="text-zinc-300 font-mono text-sm">{section.title}</h4>
                            {section.code && (
                              <span className="text-zinc-500 text-xs font-mono bg-zinc-800 px-2 py-0.5 rounded">
                                {section.code}
                              </span>
                            )}
                          </div>
                          <ul className="list-disc pl-5 space-y-1">
                            {section.content.map((item, index) => (
                              <li key={index} className="text-zinc-400 text-sm">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
