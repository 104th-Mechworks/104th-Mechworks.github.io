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
import { getIconComponent } from "@/components/utils/icon-helper"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Only handle authentication timing
    // Loading will be controlled by the LoadingScreen component
    const authTimer = setTimeout(() => {
      setIsAuthenticated(true)
    }, 4000)

    return () => {
      clearTimeout(authTimer)
    }
  }, [])

  // Function to handle when loading is complete
  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Function to handle navigation between sections
  const handleNavigation = (section: string) => {
    setActiveSection(section)
  }

  // Function to handle logo click
  const handleLogoClick = () => {
    setActiveSection("home")
  }

  // Generate breadcrumb items based on current navigation state
  const getBreadcrumbItems = (items: any[]) => {
    return items
  }

  if (isLoading) {
    return <LoadingScreen isAuthenticated={isAuthenticated} onComplete={handleLoadingComplete} />
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Header activeSection={activeSection} onNavigate={handleNavigation} onLogoClick={handleLogoClick} />

      <main className="flex-1 container mx-auto py-8 px-4">
        <AnimatePresence mode="wait">
          {activeSection === "home" && <HomeSection onNavigate={handleNavigation} />}

          {activeSection === "branches" && <BranchesSection getIconComponent={getIconComponent} />}

          {activeSection === "ranks" && <RanksSection />}

          {activeSection === "positions" && <PositionsSection />}

          {activeSection === "classes" && <ClassesSection />}

          {activeSection === "servers" && <ServersSection getBreadcrumbItems={getBreadcrumbItems} />}

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
