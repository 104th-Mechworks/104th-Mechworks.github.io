"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { QualificationPathway, Qualification, RequirementPhase } from "@/data/types"
import { kmcQualifications } from "@/data/kmc" // Assuming kmcQualifications is exported from here
import Icon from "@/components/icon-library"
import MobileTabSelect from "@/components/mobile-tab-select"
import { Users, Gift, FileCheck, Lock } from "lucide-react"
import Breadcrumb, { type BreadcrumbItem } from "@/components/breadcrumb"

type QualificationsSectionProps = {}

export default function QualificationsSection({}: QualificationsSectionProps) {
  const [activeQualTab, setActiveQualTab] = useState(
    kmcQualifications[0]?.name.toLowerCase().replace(/\s+/g, "-") || "",
  )
  const [forceRefresh, setForceRefresh] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setForceRefresh((prev) => prev + 1)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const rolesDescription = [
    { role: "Tipoca City Clone Director", description: "Head of the KMC where all qualification trials are held." },
    { role: "Chief Training Officer", description: "Manages and maintains all non-special forces qualifications." },
    { role: "Head Cadre", description: "Head of a specific qualification across all game servers/consoles." },
    { role: "Cadre", description: "Head of a specific qualification on a single game server/console." },
    { role: "Advanced Instructor", description: "Authorized to host both normal and advanced qualification trials." },
    { role: "Instructor", description: "Authorized to host normal qualification trials." },
  ]

  const breadcrumbItems: BreadcrumbItem[] = [{ label: "QUALIFICATIONS", onClick: () => {} }]

  const renderQualificationItem = (qual: Qualification | QualificationPathway) => (
    <div className="flex items-center gap-3">
      <Icon name={qual.icon} size={28} key={`icon-${qual.name}-${forceRefresh}`} />
      <span className="text-sm font-mono text-blue-400 font-medium">{qual.name}</span>
      {qual.description && <span className="text-xs text-zinc-500 hidden md:inline">- {qual.description}</span>}
    </div>
  )

  const renderCadreInfo = (qual: Qualification | QualificationPathway) => {
    if (!qual.cadre) return null
    return (
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
          <Users size={14} className="text-blue-400" />
          <span>CADRE INFORMATION</span>
        </div>
        <div className="bg-zinc-800/50 p-3 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-xs font-mono">HEAD CADRE:</span>
              <span className="text-zinc-300 text-xs">{qual.cadre.headCadre}</span>
            </div>
            {Object.entries(qual.cadre.sectorCadres).map(([sector, name]) => (
              <div key={sector} className="flex items-center gap-2">
                <span className="text-zinc-400 text-xs font-mono">SECTOR {sector.toUpperCase()}:</span>
                <span className="text-zinc-300 text-xs">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderRewards = (qual: Qualification | QualificationPathway) => {
    if (!qual.rewards || qual.rewards.length === 0) return null
    return (
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
          <Gift size={14} className="text-blue-400" />
          <span>REWARDS</span>
        </div>
        <div className="bg-zinc-800/50 p-3 rounded-sm">
          <ul className="space-y-1 pl-5 list-disc text-zinc-300 text-xs">
            {qual.rewards.map((reward, index) => (
              <li key={index}>{reward}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  const renderRequirementPhases = (qual: Qualification | QualificationPathway) => {
    if (qual.classifiedRequirements) {
      return (
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
            <FileCheck size={14} className="text-blue-400" />
            <span>REQUIREMENTS</span>
          </div>
          <div className="bg-red-950/30 border-2 border-red-500/50 p-4 rounded-md flex items-center justify-center gap-2 text-red-300">
            <Lock size={16} className="text-red-400" />
            <span className="text-sm font-mono font-semibold tracking-wider">CLASSIFIED INFORMATION</span>
          </div>
        </div>
      )
    }
    if (!qual.requirementPhases || qual.requirementPhases.length === 0) return null
    return (
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
          <FileCheck size={14} className="text-blue-400" />
          <span>REQUIREMENTS</span>
        </div>
        <div className="bg-zinc-800/50 p-3 rounded-sm space-y-4">
          {qual.requirementPhases.map((phase: RequirementPhase, phaseIndex) => (
            <div key={phaseIndex} className="space-y-2">
              <div className="text-blue-400 text-xs font-mono border-b border-zinc-700 pb-1">{phase.phase}</div>
              <ul className="space-y-1 pl-5 list-disc text-zinc-300 text-xs">
                {phase.requirements.map((requirement, reqIndex) => (
                  <li key={reqIndex}>{requirement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderAdvancedQualDetails = (qual: Qualification, qualIndex: number) => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={`advanced-${qualIndex}`} className="border-0">
        <AccordionContent>
          <div className="pt-2 pb-1 px-1">
            {renderCadreInfo(qual)}
            {renderRewards(qual)}
            {renderRequirementPhases(qual)}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )

  const qualTabOptions = kmcQualifications.map((category) => ({
    value: category.name.toLowerCase().replace(/\s+/g, "-"),
    label: category.name.toUpperCase(),
  }))

  return (
    <motion.div
      key={`qualifications-section-${forceRefresh}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="h-px w-8 bg-blue-500"></div>
        <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">QUALIFICATIONS</h2>
        <div className="h-px w-8 bg-blue-500"></div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-400 font-mono mb-4 border-b border-zinc-700 pb-2">
          Role Descriptions
        </h3>
        <ul className="space-y-3">
          {rolesDescription.map((roleItem, index) => (
            <li key={index} className="flex flex-col sm:flex-row">
              <strong className="text-zinc-300 font-mono w-full sm:w-1/3 md:w-1/4 shrink-0">{roleItem.role}:</strong>
              <span className="text-zinc-400 text-sm">{roleItem.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
        {/* Mobile dropdown for qualification categories */}
        <div className="md:hidden mb-4">
          <MobileTabSelect options={qualTabOptions} value={activeQualTab} onChange={setActiveQualTab} />
        </div>

        <Tabs value={activeQualTab} onValueChange={setActiveQualTab} className="w-full">
          <TabsList className="hidden md:flex w-full bg-zinc-900 border border-zinc-800 p-1">
            {kmcQualifications.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name.toLowerCase().replace(/\s+/g, "-")}
                className="font-mono text-xs flex-1 px-4 py-2"
              >
                {category.name.toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>

          {kmcQualifications.map((category) => (
            <TabsContent key={category.name} value={category.name.toLowerCase().replace(/\s+/g, "-")} className="mt-6">
              <div className="space-y-3">
                {category.qualifications.map((pathway: QualificationPathway, index) => {
                  if (
                    category.name === "Special Forces" ||
                    !pathway.nextQualifications ||
                    pathway.nextQualifications.length === 0
                  ) {
                    return (
                      <Accordion
                        key={index}
                        type="single"
                        collapsible
                        className="border border-zinc-700 rounded-sm overflow-hidden"
                      >
                        <AccordionItem value={`pathway-${index}`} className="border-0">
                          <AccordionTrigger className="py-3 px-4 bg-zinc-800 hover:bg-zinc-700 data-[state=open]:bg-zinc-700 data-[state=open]:border-b data-[state=open]:border-zinc-600 transition-colors accordion-trigger-no-underline">
                            {renderQualificationItem(pathway)}
                          </AccordionTrigger>
                          <AccordionContent className="bg-zinc-800/50 border-t border-zinc-700">
                            <div className="p-4 space-y-4">
                              {renderCadreInfo(pathway)}
                              {renderRewards(pathway)}
                              {renderRequirementPhases(pathway)}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )
                  }
                  return (
                    <Accordion
                      key={index}
                      type="single"
                      collapsible
                      className="border border-zinc-700 rounded-sm overflow-hidden"
                    >
                      <AccordionItem value={`pathway-${index}`} className="border-0">
                        <AccordionTrigger className="py-3 px-4 bg-zinc-800 hover:bg-zinc-700 data-[state=open]:bg-zinc-700 data-[state=open]:border-b data-[state=open]:border-zinc-600 transition-colors accordion-trigger-no-underline">
                          {renderQualificationItem(pathway)}
                        </AccordionTrigger>
                        <AccordionContent className="bg-zinc-800/50 border-t border-zinc-700">
                          <div className="p-4 space-y-4">
                            {renderCadreInfo(pathway)}
                            {renderRewards(pathway)}
                            {renderRequirementPhases(pathway)}
                            <div className="space-y-3 mt-2">
                              {pathway.nextQualifications.map((nextQual, nextIndex) => (
                                <Accordion
                                  key={nextIndex}
                                  type="single"
                                  collapsible
                                  className="relative bg-zinc-800 rounded-md border border-zinc-600/70 shadow-lg"
                                >
                                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-l-md"></div>
                                  <AccordionItem value={`advanced-${nextIndex}`} className="border-0">
                                    <AccordionTrigger className="py-3 px-4 pb-2 border-b border-zinc-600/50 hover:no-underline">
                                      <div className="flex items-center justify-between w-full">
                                        <span className="text-sm font-mono text-blue-400 font-medium">
                                          {nextQual.name}
                                        </span>
                                        <div className="flex items-center gap-2 pr-2">
                                          {nextQual.isAdvanced && (
                                            <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-md border border-blue-500/30 font-semibold">
                                              ADVANCED
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                      <div className="p-4 pt-2">
                                        {renderCadreInfo(nextQual)}
                                        {renderRewards(nextQual)}
                                        {renderRequirementPhases(nextQual)}
                                      </div>
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              ))}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.div>
  )
}
