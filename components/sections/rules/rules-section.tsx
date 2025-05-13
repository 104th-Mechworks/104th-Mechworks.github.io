"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  AlertTriangle,
  Shield,
  BookOpen,
  Users,
  FileText,
  MessageSquare,
  UserCheck,
  Award,
  Briefcase,
  HardHatIcon as Helmet,
  FileWarning,
  Clock,
  Heart,
  Ban,
  Flag,
  Info,
  CheckCircle,
  AlertCircle,
  Lock,
} from "lucide-react"
import { rulesPoliciesByCategory, rulesByType, categoryNames } from "@/data/rules-and-policies"

export default function RulesSection() {
  const [activeType, setActiveType] = useState<"rule" | "policy">("rule")
  const [activeCategory, setActiveCategory] = useState<string | null>("raid")
  const [expandedRule, setExpandedRule] = useState<string | null>(null)

  const handleTypeChange = (type: "rule" | "policy") => {
    setActiveType(type)
    // Set default category for the selected type
    if (type === "rule") {
      setActiveCategory("raid")
    } else {
      setActiveCategory("class-transfer")
    }
    setExpandedRule(null)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setExpandedRule(null)
  }

  const toggleRule = (ruleId: string) => {
    setExpandedRule(expandedRule === ruleId ? null : ruleId)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      // Rules
      case "raid":
        return <Shield className="h-5 w-5" />
      case "discord":
        return <MessageSquare className="h-5 w-5" />
      case "discord-content":
        return <FileText className="h-5 w-5" />
      case "maturity":
        return <UserCheck className="h-5 w-5" />
      case "staff-rules":
        return <Users className="h-5 w-5" />
      case "qualifications":
        return <Award className="h-5 w-5" />
      case "kmc":
        return <Briefcase className="h-5 w-5" />
      case "staff":
        return <Users className="h-5 w-5" />
      case "milsim":
        return <Shield className="h-5 w-5" />

      // Policies
      case "class-transfer":
        return <Users className="h-5 w-5" />
      case "qual-dropping":
        return <Award className="h-5 w-5" />
      case "helmets":
        return <Helmet className="h-5 w-5" />
      case "reporting":
        return <FileWarning className="h-5 w-5" />
      case "activity":
        return <Clock className="h-5 w-5" />
      case "medbay":
        return <Heart className="h-5 w-5" />
      case "ban-appeals":
        return <Ban className="h-5 w-5" />
      case "strikes":
        return <Flag className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
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
              <span className="text-red-400 text-sm">
                Critical rule - violations may result in severe disciplinary action
              </span>
            </div>
          )
        case "high":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-amber-950/20 border border-amber-900/30 rounded">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span className="text-amber-400 text-sm">
                High priority rule - violations will result in disciplinary action
              </span>
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
                Staff only - these rules apply exclusively to battalion staff members
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
              <span className="text-red-400 text-sm">
                Mandatory policy - strict adherence required for all battalion operations
              </span>
            </div>
          )
        case "high":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-amber-950/20 border border-amber-900/30 rounded">
              <Info className="h-4 w-4 text-amber-500" />
              <span className="text-amber-400 text-sm">
                Important policy - failure to follow may impact battalion effectiveness
              </span>
            </div>
          )
        case "standard":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-blue-950/20 border border-blue-900/30 rounded">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span className="text-blue-400 text-sm">
                Standard procedure - established for consistent battalion operations
              </span>
            </div>
          )
        case "staff-only":
          return (
            <div className="flex items-center space-x-2 mb-4 p-2 bg-purple-950/20 border border-purple-900/30 rounded">
              <Lock className="h-4 w-4 text-purple-500" />
              <span className="text-purple-400 text-sm">
                Staff procedure - administrative policy for battalion leadership
              </span>
            </div>
          )
        default:
          return null
      }
    }
  }

  // Filter rules by type and category
  const filteredRules = activeCategory
    ? rulesPoliciesByCategory[activeCategory as keyof typeof rulesPoliciesByCategory].filter(
        (rule) => rule.type === activeType,
      )
    : rulesByType[activeType]

  // Get categories for the active type
  const categoriesForType = Object.keys(rulesPoliciesByCategory).filter((category) =>
    rulesPoliciesByCategory[category as keyof typeof rulesPoliciesByCategory].some((rule) => rule.type === activeType),
  )

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold text-zinc-200 font-mono">RULES & POLICIES</h2>
        <p className="text-zinc-400">Official regulations and guidelines for all members of the 104th Battalion.</p>
      </div>

      {/* Type selector */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => handleTypeChange("rule")}
          className={`px-4 py-2 rounded-md font-mono text-sm ${
            activeType === "rule"
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
          }`}
        >
          RULES
        </button>
        <button
          onClick={() => handleTypeChange("policy")}
          className={`px-4 py-2 rounded-md font-mono text-sm ${
            activeType === "policy"
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
          }`}
        >
          POLICIES
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Category sidebar */}
        <div className="md:col-span-1 bg-zinc-900 rounded-md p-4 h-fit">
          <h3 className="text-zinc-300 font-mono text-sm mb-3 border-b border-zinc-800 pb-2">CATEGORIES</h3>
          <div className="space-y-1">
            {categoriesForType.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`w-full text-left px-3 py-2 rounded flex items-center space-x-2 transition-colors ${
                  activeCategory === category
                    ? "bg-zinc-800 text-blue-400"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-300"
                }`}
              >
                <span>{getCategoryIcon(category)}</span>
                <span className="text-sm font-mono">{categoryNames[category as keyof typeof categoryNames]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Rules list */}
        <div className="md:col-span-4 bg-zinc-900 rounded-md p-4">
          <h3 className="text-zinc-300 font-mono text-sm mb-3 border-b border-zinc-800 pb-2">
            {activeCategory
              ? categoryNames[activeCategory as keyof typeof categoryNames]
              : activeType === "rule"
                ? "ALL RULES"
                : "ALL POLICIES"}
          </h3>

          <div className="space-y-3">
            {filteredRules.map((rule) => (
              <div key={rule.id} className="border border-zinc-800 rounded-md overflow-hidden">
                <button
                  onClick={() => toggleRule(rule.id)}
                  className="w-full flex items-center justify-between p-3 bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`h-2 w-2 rounded-full ${getImportanceColor(rule.importance)}`} />
                    <span className="font-mono text-zinc-200">{rule.title}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-zinc-400 transition-transform ${
                      expandedRule === rule.id ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedRule === rule.id && (
                  <div className="p-4 bg-zinc-900 border-t border-zinc-800">
                    <p className="text-zinc-400 mb-4">{rule.description}</p>

                    {getImportanceWarning(rule.importance, rule.type)}

                    {rule.sections?.map((section) => (
                      <div key={section.id} className="mb-4">
                        <h4 className="text-zinc-300 font-mono text-sm mb-2">{section.title}</h4>
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
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
