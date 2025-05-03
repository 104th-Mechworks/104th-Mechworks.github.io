"use client"

import { Shield, Award, Clock, ChevronRight, Users, Gift, FileCheck, Lock } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Server, QualificationPathway, Qualification, RequirementPhase } from "@/data/types"
import Breadcrumb from "../breadcrumb"
import { useState, useEffect } from "react"
import MobileTabSelect from "../mobile-tab-select"
import Icon from "../icon-library"

export default function KMCServer({
  server,
  onServerListClick,
  showBreadcrumb = true,
}: {
  server: Server
  onServerListClick: () => void
  showBreadcrumb?: boolean
}) {
  const [activeQualTab, setActiveQualTab] = useState("army")
  const [forceRefresh, setForceRefresh] = useState(0)

  // Force a refresh of the component once on mount to ensure icons are properly loaded
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setForceRefresh((prev) => prev + 1)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Function to render a qualification item
  const renderQualificationItem = (qual: Qualification | QualificationPathway) => (
    <div className="flex items-center gap-3">
      <Icon name={qual.icon} size={28} key={`icon-${qual.name}-${forceRefresh}`} />
      <span className="text-sm font-mono text-blue-400 font-medium">{qual.name}</span>
      {qual.description && <span className="text-xs text-zinc-500 hidden md:inline">- {qual.description}</span>}
    </div>
  )

  // Function to render cadre information
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

            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-xs font-mono">SECTOR 01:</span>
              <span className="text-zinc-300 text-xs">{qual.cadre.sectorCadres["01"]}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-xs font-mono">SECTOR 02:</span>
              <span className="text-zinc-300 text-xs">{qual.cadre.sectorCadres["02"]}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-xs font-mono">SECTOR 03:</span>
              <span className="text-zinc-300 text-xs">{qual.cadre.sectorCadres["03"]}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Function to render rewards
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

  // Function to render requirement phases
  const renderRequirementPhases = (qual: Qualification | QualificationPathway) => {
    if (qual.classifiedRequirements) {
      return (
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-zinc-300 font-mono text-sm">
            <FileCheck size={14} className="text-blue-400" />
            <span>REQUIREMENTS</span>
          </div>

          <div className="bg-zinc-800/50 p-3 rounded-sm flex items-center justify-center gap-2 text-zinc-400">
            <Lock size={14} />
            <span className="text-xs font-mono">CLASSIFIED INFORMATION</span>
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

  // Function to render advanced qualification details
  const renderAdvancedQualDetails = (qual: Qualification) => {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details" className="border-0">
          <AccordionTrigger className="py-2 px-3 text-xs font-mono text-zinc-400 hover:text-zinc-300 accordion-trigger-no-underline">
            VIEW DETAILS
          </AccordionTrigger>
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
  }

  // Create options for the mobile dropdown
  const qualTabOptions =
    server.qualificationCategories?.map((category) => ({
      value: category.name.toLowerCase().replace(/\s+/g, "-"),
      label: category.name.toUpperCase(),
    })) || []

  return (
    <motion.div
      key={`kmc-details-${forceRefresh}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {showBreadcrumb && (
        <Breadcrumb
          items={[
            { label: "SERVERS", onClick: onServerListClick },
            { label: server.name.toUpperCase(), onClick: () => {} },
          ]}
        />
      )}

      <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="relative h-24 w-24 flex-shrink-0 mx-auto md:mx-0">
            <Image src={server.imageSrc || "/placeholder.svg"} alt={server.name} fill className="object-contain" />
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h2 className="text-2xl font-bold font-mono text-zinc-200">{server.name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded-sm">
                  STATUS:{" "}
                  <span className={server.status === "ONLINE" ? "text-green-400" : "text-blue-400"}>
                    {server.status}
                  </span>
                </span>
              </div>
            </div>

            <p className="text-zinc-400">{server.purpose}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-blue-400" />
                <span className="text-sm text-zinc-300 font-mono">
                  SUPERVISING OFFICER: {server.supervisingOfficer}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-400" />
                <span className="text-sm text-zinc-300 font-mono">LAST UPDATED: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-blue-400" />
                <span className="text-sm text-zinc-300 font-mono">STANDARDS OFFICER: {server.standardsOfficer}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6">
          <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4">QUALIFICATIONS</h3>

          {server.qualificationCategories && (
            <>
              {/* Mobile dropdown for qualification categories */}
              <div className="md:hidden mb-4">
                <MobileTabSelect options={qualTabOptions} value={activeQualTab} onChange={setActiveQualTab} />
              </div>

              <Tabs value={activeQualTab} onValueChange={setActiveQualTab} className="w-full">
                <TabsList className="hidden md:grid w-full grid-cols-4 bg-zinc-900 border border-zinc-800">
                  {server.qualificationCategories.map((category) => (
                    <TabsTrigger
                      key={category.name}
                      value={category.name.toLowerCase().replace(/\s+/g, "-")}
                      className="font-mono text-xs"
                    >
                      {category.name.toUpperCase()}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {server.qualificationCategories.map((category) => (
                  <TabsContent
                    key={category.name}
                    value={category.name.toLowerCase().replace(/\s+/g, "-")}
                    className="mt-6"
                  >
                    <div className="space-y-3">
                      {category.qualifications.map((pathway: QualificationPathway, index) => {
                        // Special Forces qualifications have a simpler structure
                        if (category.name === "Special Forces") {
                          return (
                            <Accordion
                              key={index}
                              type="single"
                              collapsible
                              className="border border-zinc-700 rounded-sm overflow-hidden"
                            >
                              <AccordionItem value={`pathway-${index}`} className="border-0">
                                <AccordionTrigger className="py-3 px-4 bg-zinc-800 hover:bg-zinc-700 transition-colors accordion-trigger-no-underline">
                                  {renderQualificationItem(pathway)}
                                </AccordionTrigger>
                                <AccordionContent className="bg-zinc-800/50 border-t border-zinc-700">
                                  <div className="p-4 space-y-4">
                                    {renderRewards(pathway)}
                                    {renderRequirementPhases(pathway)}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )
                        }

                        // If there are no next qualifications, render as a simple accordion
                        if (!pathway.nextQualifications || pathway.nextQualifications.length === 0) {
                          return (
                            <Accordion
                              key={index}
                              type="single"
                              collapsible
                              className="border border-zinc-700 rounded-sm overflow-hidden"
                            >
                              <AccordionItem value={`pathway-${index}`} className="border-0">
                                <AccordionTrigger className="py-3 px-4 bg-zinc-800 hover:bg-zinc-700 transition-colors accordion-trigger-no-underline">
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

                        // Otherwise, render as an accordion with progression path
                        return (
                          <Accordion
                            key={index}
                            type="single"
                            collapsible
                            className="border border-zinc-700 rounded-sm overflow-hidden"
                          >
                            <AccordionItem value={`pathway-${index}`} className="border-0">
                              <AccordionTrigger className="py-3 px-4 bg-zinc-800 hover:bg-zinc-700 transition-colors accordion-trigger-no-underline">
                                {renderQualificationItem(pathway)}
                              </AccordionTrigger>
                              <AccordionContent className="bg-zinc-800/50 border-t border-zinc-700">
                                <div className="p-4 space-y-4">
                                  {renderCadreInfo(pathway)}
                                  {renderRewards(pathway)}
                                  {renderRequirementPhases(pathway)}

                                  {/* Render next qualifications */}
                                  <div className="space-y-3 mt-2">
                                    {pathway.nextQualifications.map((nextQual, nextIndex) => (
                                      <div
                                        key={nextIndex}
                                        className="pl-6 relative bg-zinc-700/80 p-3 rounded-sm border border-zinc-600/50"
                                      >
                                        {/* <ChevronRight size={12} className="absolute left-1 top-3 text-blue-400" /> */}
                                        <div className="flex items-center gap-3">
                                          {/* <Icon
                                            name={nextQual.icon}
                                            size={28}
                                            key={`next-icon-${nextQual.name}-${forceRefresh}`}
                                          /> */}
                                          <span className="text-sm font-mono text-blue-400 font-medium">
                                            {nextQual.name}
                                          </span>
                                          {nextQual.isAdvanced && (
                                            <span className="text-xs bg-blue-900/50 text-blue-400 px-1.5 py-0.5 rounded-sm">
                                              ADVANCED
                                            </span>
                                          )}
                                        </div>

                                        {renderAdvancedQualDetails(nextQual)}
                                      </div>
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
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
