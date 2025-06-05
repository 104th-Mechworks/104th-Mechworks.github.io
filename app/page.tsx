"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HomeSection from "@/components/sections/home/home-section"
import BranchesSection from "@/components/sections/branches/branches-section"
import RanksSection from "@/components/sections/ranks/ranks-section"
import PositionsSection from "@/components/sections/positions/positions-section"
import ClassesSection from "@/components/sections/classes/classes-section"
import ServersSection from "@/components/sections/servers/servers-section"
import CommandStaffSectionComponent from "@/components/sections/command-staff/command-staff-section"
import RulesSection from "@/components/sections/rules/rules-section"
import MedalsSection from "@/components/sections/medals/medals-section"
import { getIconComponent } from "@/components/utils/icon-helper"
import QualificationsSection from "@/components/sections/qualifications/qualifications-section"
import DecalsSection from "@/components/sections/decals/decals-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [navigationParams, setNavigationParams] = useState<any>(null)

  useEffect(() => {
    // Check if we should skip the loading animation
    // This happens when coming from the 404 page
    const urlParams = new URLSearchParams(window.location.search)
    const skipLoading = urlParams.get("skipLoading") === "true"

    if (skipLoading) {
      // Skip loading animation
      setIsLoading(false)
      setIsAuthenticated(true)

      // Clean up the URL by removing the skipLoading parameter
      const newUrl = window.location.pathname + window.location.hash
      window.history.replaceState({}, document.title, newUrl)
    } else {
      // Normal loading behavior
      const authTimer = setTimeout(() => {
        setIsAuthenticated(true)
      }, 4000)

      return () => {
        clearTimeout(authTimer)
      }
    }
  }, [])

  // Function to handle when loading is complete
  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Function to handle navigation between sections with optional parameters
  const handleNavigation = (section: string, params?: any) => {
    setActiveSection(section)
    setNavigationParams(params || null)
  }

  // Function to handle logo click
  const handleLogoClick = () => {
    setActiveSection("home")
    setNavigationParams(null)
  }

  // Generate breadcrumb items based on current navigation state
  const getBreadcrumbItems = (items: any[]) => {
    return items
  }

  // Check for hash in URL to set initial active section
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      setActiveSection(hash)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen isAuthenticated={isAuthenticated} onComplete={handleLoadingComplete} />
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Header activeSection={activeSection} onNavigate={handleNavigation} onLogoClick={handleLogoClick} />

      <main className="flex-1 container mx-auto py-8 px-4">
        <AnimatePresence mode="wait">
          {activeSection === "home" && <HomeSection onNavigate={handleNavigation} />}

          {activeSection === "branches" && (
            <BranchesSection getIconComponent={getIconComponent} onNavigate={handleNavigation} />
          )}

          {activeSection === "ranks" && <RanksSection />}

          {activeSection === "positions" && <PositionsSection />}

          {activeSection === "classes" && <ClassesSection />}

          {activeSection === "qualifications" && <QualificationsSection />}

          {activeSection === "decals" && <DecalsSection />}

          {activeSection === "medals" && <MedalsSection />}

          {activeSection === "servers" && (
            <ServersSection
              getBreadcrumbItems={getBreadcrumbItems}
              initialServerId={navigationParams?.serverId}
              initialSpecialDepartment={navigationParams?.specialDepartment}
            />
          )}

          {activeSection === "command-staff" && (
            <CommandStaffSectionComponent getBreadcrumbItems={getBreadcrumbItems} />
          )}

          {activeSection === "rules" && <RulesSection />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
