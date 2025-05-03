"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Plane, Anchor, Sword, Terminal, Menu } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import ServerDetail from "@/components/server-detail"
import ServerCard from "@/components/server-card"
import BranchCard from "@/components/branch-card"
import SpecialOpsCard from "@/components/special-ops-card"
import RankItem from "@/components/rank-item"
import PositionItem from "@/components/position-item"
import MobileTabSelect from "@/components/mobile-tab-select"
import Breadcrumb from "@/components/breadcrumb"
import LoadingScreen from "@/components/loading-screen"
import CommandStaffDetail from "@/components/command-staff/command-staff-detail"
import CommandStaffSection from "@/components/command-staff/command-staff-section"
import type { Department, Company, CommandStaffMember, Wing, SpecialDepartment, Troop } from "@/data/types"
import { rasDepartments } from "@/data/servers/ras"
import { resilientCompanies } from "@/data/servers/resilient"
import { triumphantWings } from "@/data/servers/triumphant"

// Import data
import { servers, branches, specialOps, ranks, positions } from "@/data"

// Add the import for the new component and data
import {
  fleetCommandMembers,
  branchCommandMembers,
  specialForcesCommandMembers,
  specialForcesExecutiveMembers,
  armyMajorMembers,
  sectorCommandMembers,
} from "@/data/command-staff"

export default function Home() {
  // Change the default activeSection from "branches" to "home"
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [selectedServer, setSelectedServer] = useState<string | null>(null)
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null)
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [selectedWing, setSelectedWing] = useState<Wing | null>(null)
  const [selectedSpecialDepartment, setSelectedSpecialDepartment] = useState<SpecialDepartment | null>(null)
  const [selectedTroop, setSelectedTroop] = useState<Troop | null>(null)
  const [selectedCommandStaffMember, setSelectedCommandStaffMember] = useState<CommandStaffMember | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeRankTab, setActiveRankTab] = useState("command")
  const [activePositionTab, setActivePositionTab] = useState("command")

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

  const handleServerClick = (serverId: string) => {
    setSelectedServer(serverId)
    setSelectedDepartment(null)
    setSelectedCompany(null)
    setSelectedWing(null)
    setSelectedSpecialDepartment(null)
    setSelectedTroop(null)
  }

  const handleBackClick = () => {
    setSelectedServer(null)
    setSelectedDepartment(null)
    setSelectedCompany(null)
    setSelectedWing(null)
    setSelectedSpecialDepartment(null)
    setSelectedTroop(null)
  }

  const handleDepartmentClick = (department: Department) => {
    setSelectedDepartment(department)
  }

  const handleCompanyClick = (company: Company) => {
    setSelectedCompany(company)
  }

  const handleWingClick = (wing: Wing) => {
    setSelectedWing(wing)
  }

  const handleSpecialDepartmentClick = (department: SpecialDepartment | null) => {
    setSelectedSpecialDepartment(department)
    setSelectedTroop(null)
  }

  const handleTroopClick = (troop: Troop | null) => {
    setSelectedTroop(troop)
  }

  const handleCommandStaffMemberClick = (member: CommandStaffMember) => {
    setSelectedCommandStaffMember(member)
  }

  const handleBackToDepartments = () => {
    setSelectedDepartment(null)
  }

  const handleBackToCompanies = () => {
    setSelectedCompany(null)
  }

  const handleBackToCommandStaffGrid = () => {
    setSelectedCommandStaffMember(null)
  }

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  // Function to handle mobile navigation
  const handleMobileNavigation = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
    // Reset any selected items when changing sections
    setSelectedServer(null)
    setSelectedDepartment(null)
    setSelectedCompany(null)
    setSelectedWing(null)
    setSelectedSpecialDepartment(null)
    setSelectedTroop(null)
    setSelectedCommandStaffMember(null)
  }

  // Add a handler for the logo click
  const handleLogoClick = () => {
    setActiveSection("home")
    setMobileMenuOpen(false)
    // Reset any selected items when going home
    setSelectedServer(null)
    setSelectedDepartment(null)
    setSelectedCompany(null)
    setSelectedWing(null)
    setSelectedSpecialDepartment(null)
    setSelectedTroop(null)
    setSelectedCommandStaffMember(null)
  }

  const selectedServerData = servers.find((server) => server.id === selectedServer)

  // Helper function to get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-8 w-8" />
      case "Plane":
        return <Plane className="h-8 w-8" />
      case "Anchor":
        return <Anchor className="h-8 w-8" />
      case "Sword":
        return <Sword className="h-8 w-8" />
      default:
        return null
    }
  }

  // Rank tab options for the dropdown
  const rankTabOptions = [
    { value: "command", label: "COMMAND" },
    { value: "army", label: "ARMY" },
    { value: "starfighter", label: "STARFIGHTER" },
    { value: "special", label: "SPECIAL OPS" },
    { value: "naval", label: "NAVAL" },
  ]

  // Position tab options for the dropdown
  const positionTabOptions = [
    { value: "command", label: "COMMAND" },
    { value: "army", label: "ARMY" },
    { value: "starfighter", label: "STARFIGHTER CORPS" },
    { value: "specialForces", label: "SPECIAL FORCES" },
  ]

  // Generate breadcrumb items based on current navigation state
  const getBreadcrumbItems = () => {
    if (activeSection === "servers") {
      const items = [{ label: "SERVERS", onClick: () => setSelectedServer(null) }]

      if (selectedServer) {
        items.push({
          label: selectedServerData?.name.toUpperCase() || "",
          onClick: () => {
            setSelectedDepartment(null)
            setSelectedCompany(null)
            setSelectedWing(null)
            setSelectedSpecialDepartment(null)
            setSelectedTroop(null)
          },
        })

        if (selectedServer === "ras" && selectedDepartment) {
          items.push({
            label: selectedDepartment.name.split(" ")[2],
            onClick: () => {},
          })
        }

        if (selectedServer === "resilient" && selectedCompany) {
          items.push({
            label: selectedCompany.name,
            onClick: () => {},
          })
        }

        if (selectedServer === "triumphant" && selectedWing) {
          items.push({
            label: selectedWing.name,
            onClick: () => {},
          })
        }

        if (selectedServer === "ravager" && selectedSpecialDepartment) {
          items.push({
            label: selectedSpecialDepartment.name,
            onClick: () => setSelectedTroop(null),
          })

          if (selectedTroop) {
            items.push({
              label: selectedTroop.name,
              onClick: () => {},
            })
          }
        }
      }

      return items
    } else if (activeSection === "command-staff") {
      const items = [{ label: "COMMAND STAFF", onClick: () => setSelectedCommandStaffMember(null) }]

      if (selectedCommandStaffMember) {
        items.push({
          label: selectedCommandStaffMember.name.toUpperCase(),
          onClick: () => {},
        })
      }

      return items
    }

    return []
  }

  if (isLoading) {
    return <LoadingScreen isAuthenticated={isAuthenticated} onComplete={handleLoadingComplete} />
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
            <div className="h-8 w-8 relative">
              <Image src="/images/104th.png" alt="104th Battalion" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-zinc-200 font-mono">104TH BATTALION</h1>
              <div className="text-xs text-zinc-500 font-mono">MILITARY DATABASE</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-500 font-mono">
            {/* 
            <Terminal size={12} />
            <span>TERMINAL: CT-7567</span>
          */}
          </div>

          <nav className="hidden md:flex space-x-6">
            {/*
            <button
              onClick={() => handleMobileNavigation("home")}
              className={`text-sm font-mono transition-colors ${
                activeSection === "home" ? "text-blue-400" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              HOME
            </button>
            */}
            <button
              onClick={() => handleMobileNavigation("branches")}
              className={`text-sm font-mono transition-colors ${
                activeSection === "branches" ? "text-blue-400" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              BRANCHES
            </button>
            <button
              onClick={() => handleMobileNavigation("ranks")}
              className={`text-sm font-mono transition-colors ${
                activeSection === "ranks" ? "text-blue-400" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              RANKS
            </button>
            <button
              onClick={() => handleMobileNavigation("positions")}
              className={`text-sm font-mono transition-colors ${
                activeSection === "positions" ? "text-blue-400" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              POSITIONS
            </button>
            <button
              onClick={() => handleMobileNavigation("servers")}
              className={`text-sm font-mono transition-colors ${
                activeSection === "servers" ? "text-blue-400" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              SERVERS
            </button>
            <button
              onClick={() => handleMobileNavigation("command-staff")}
              className={`text-sm font-mono transition-colors ${
                activeSection === "command-staff" ? "text-blue-400" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              COMMAND STAFF
            </button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-zinc-400 hover:text-zinc-200">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[70px] left-0 right-0 bg-zinc-900 border-b border-zinc-800 z-40"
          >
            <div className="flex flex-col p-4 pt-6 space-y-3">
              <button
                onClick={() => handleMobileNavigation("home")}
                className={`text-sm font-mono py-2 px-4 rounded-sm transition-colors ${
                  activeSection === "home"
                    ? "bg-zinc-800 text-blue-400"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => handleMobileNavigation("branches")}
                className={`text-sm font-mono py-2 px-4 rounded-sm transition-colors ${
                  activeSection === "branches"
                    ? "bg-zinc-800 text-blue-400"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                }`}
              >
                BRANCHES
              </button>
              <button
                onClick={() => handleMobileNavigation("ranks")}
                className={`text-sm font-mono py-2 px-4 rounded-sm transition-colors ${
                  activeSection === "ranks"
                    ? "bg-zinc-800 text-blue-400"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                }`}
              >
                RANKS
              </button>
              <button
                onClick={() => handleMobileNavigation("positions")}
                className={`text-sm font-mono py-2 px-4 rounded-sm transition-colors ${
                  activeSection === "positions"
                    ? "bg-zinc-800 text-blue-400"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                }`}
              >
                POSITIONS
              </button>
              <button
                onClick={() => handleMobileNavigation("servers")}
                className={`text-sm font-mono py-2 px-4 rounded-sm transition-colors ${
                  activeSection === "servers"
                    ? "bg-zinc-800 text-blue-400"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                }`}
              >
                SERVERS
              </button>
              <button
                onClick={() => handleMobileNavigation("command-staff")}
                className={`text-sm font-mono py-2 px-4 rounded-sm transition-colors ${
                  activeSection === "command-staff"
                    ? "bg-zinc-800 text-blue-400"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                }`}
              >
                COMMAND STAFF
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 container mx-auto py-8 px-4">
        <AnimatePresence mode="wait">
          {/* Add the home section content in the AnimatePresence section */}
          {/* Add this as the first condition in the AnimatePresence: */}
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Home content */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="h-px w-8 bg-blue-500"></div>
                <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">104TH BATTALION</h2>
                <div className="h-px w-8 bg-blue-500"></div>
              </div>

              <div className="flex flex-col items-center justify-center mb-12">
                <div className="relative h-32 w-32 mb-6">
                  <Image src="/images/104th.png" alt="104th Battalion" fill className="object-contain" />
                </div>
                <p className="text-zinc-400 text-center max-w-2xl mb-6">
                  Welcome to the official military database of the 104th Battalion. Access information about our
                  branches, ranks, positions, servers, and command staff.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                  <button
                    onClick={() => setActiveSection("command-staff")}
                    className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 rounded-sm border border-zinc-700 text-zinc-200 font-mono text-sm"
                  >
                    COMMAND STAFF
                  </button>
                  <button
                    onClick={() => setActiveSection("servers")}
                    className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 rounded-sm border border-zinc-700 text-zinc-200 font-mono text-sm"
                  >
                    SERVERS
                  </button>
                  <button
                    onClick={() => setActiveSection("ranks")}
                    className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 rounded-sm border border-zinc-700 text-zinc-200 font-mono text-sm"
                  >
                    RANKS
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
                  <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4 flex items-center gap-2">
                    <Shield size={18} className="text-blue-400" />
                    BATTALION STRUCTURE
                  </h3>
                  <p className="text-zinc-400 mb-4">
                    The 104th Battalion is organized into specialized branches, each with its own command structure and
                    operational focus.
                  </p>
                  <button
                    onClick={() => setActiveSection("branches")}
                    className="text-blue-400 font-mono text-sm hover:underline"
                  >
                    VIEW BRANCHES →
                  </button>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
                  <h3 className="text-lg font-bold font-mono text-zinc-200 mb-4 flex items-center gap-2">
                    <Terminal size={18} className="text-blue-400" />
                    POSITIONS & RESPONSIBILITIES
                  </h3>
                  <p className="text-zinc-400 mb-4">
                    Each member of the 104th Battalion holds a specific position with defined responsibilities and
                    requirements.
                  </p>
                  <button
                    onClick={() => setActiveSection("positions")}
                    className="text-blue-400 font-mono text-sm hover:underline"
                  >
                    VIEW POSITIONS →
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Servers section */}
          {activeSection === "servers" && (
            <motion.div
              key="servers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="h-px w-8 bg-blue-500"></div>
                <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">SERVERS</h2>
                <div className="h-px w-8 bg-blue-500"></div>
              </div>

              {/* Persistent breadcrumb that updates based on selection */}
              <motion.div layout className="mb-6">
                <Breadcrumb items={getBreadcrumbItems()} />
              </motion.div>

              <AnimatePresence mode="wait">
                {selectedServer ? (
                  <motion.div
                    key="server-detail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ServerDetail
                      server={selectedServerData!}
                      onBack={handleBackClick}
                      onServerListClick={() => setSelectedServer(null)}
                      showBreadcrumb={false}
                      onDepartmentClick={selectedServer === "ras" ? handleDepartmentClick : undefined}
                      departments={selectedServer === "ras" ? rasDepartments : undefined}
                      selectedDepartment={selectedDepartment}
                      companies={selectedServer === "resilient" ? resilientCompanies : undefined}
                      onCompanyClick={selectedServer === "resilient" ? handleCompanyClick : undefined}
                      selectedCompany={selectedCompany}
                      wings={selectedServer === "triumphant" ? triumphantWings : undefined}
                      onWingClick={selectedServer === "triumphant" ? handleWingClick : undefined}
                      selectedWing={selectedWing}
                      onSpecialDepartmentClick={selectedServer === "ravager" ? handleSpecialDepartmentClick : undefined}
                      selectedSpecialDepartment={selectedSpecialDepartment}
                      onTroopClick={selectedServer === "ravager" ? handleTroopClick : undefined}
                      selectedTroop={selectedTroop}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="server-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {servers.map((server) => (
                      <ServerCard
                        key={server.id}
                        name={server.name}
                        description={server.description}
                        imageSrc={server.imageSrc}
                        onClick={() => handleServerClick(server.id)}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {activeSection === "branches" && (
            <motion.div
              key="branches"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="h-px w-8 bg-blue-500"></div>
                <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">BRANCHES</h2>
                <div className="h-px w-8 bg-blue-500"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {branches.map((branch) => (
                  <BranchCard
                    key={branch.id}
                    icon={getIconComponent(branch.icon)}
                    title={branch.title}
                    description={branch.description}
                  />
                ))}
              </div>

              <div className="mt-12 space-y-6">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="h-px w-6 bg-blue-500"></div>
                  <h3 className="text-xl font-bold text-center text-zinc-200 font-mono">SPECIAL OPERATIONS PATHS</h3>
                  <div className="h-px w-6 bg-blue-500"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {specialOps.map((op) => (
                    <SpecialOpsCard key={op.id} title={op.title} description={op.description} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "ranks" && (
            <motion.div
              key="ranks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="h-px w-8 bg-blue-500"></div>
                <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">RANKS</h2>
                <div className="h-px w-8 bg-blue-500"></div>
              </div>

              {/* Mobile dropdown for ranks */}
              <div className="md:hidden mb-4">
                <MobileTabSelect options={rankTabOptions} value={activeRankTab} onChange={setActiveRankTab} />
              </div>

              <Tabs value={activeRankTab} onValueChange={setActiveRankTab} className="w-full">
                <TabsList className="hidden md:grid w-full grid-cols-5 bg-zinc-900 border border-zinc-800">
                  <TabsTrigger value="command" className="font-mono text-xs">
                    COMMAND
                  </TabsTrigger>
                  <TabsTrigger value="army" className="font-mono text-xs">
                    ARMY
                  </TabsTrigger>
                  <TabsTrigger value="starfighter" className="font-mono text-xs">
                    STARFIGHTER
                  </TabsTrigger>
                  <TabsTrigger value="special" className="font-mono text-xs">
                    SPECIAL OPS
                  </TabsTrigger>
                  <TabsTrigger value="naval" className="font-mono text-xs">
                    NAVAL
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="command" className="mt-6">
                  <div className="space-y-4">
                    {ranks.command.map((rank, index) => (
                      <RankItem key={index} {...rank} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="army" className="mt-6">
                  <div className="space-y-4">
                    {ranks.army.map((rank, index) => (
                      <RankItem key={index} {...rank} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="starfighter" className="mt-6">
                  <div className="space-y-4">
                    {ranks.starfighter.map((rank, index) => (
                      <RankItem key={index} {...rank} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="special" className="mt-6">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="arc" className="border border-zinc-800 rounded-lg overflow-hidden">
                      <AccordionTrigger className="text-base font-mono text-zinc-200 py-3 px-4 bg-zinc-900 hover:bg-zinc-800 accordion-trigger-no-underline">
                        ARC PATH
                      </AccordionTrigger>
                      <AccordionContent className="bg-zinc-900 border-x border-b border-zinc-800">
                        <div className="space-y-4 pt-2 p-4">
                          {ranks.special.arc.map((rank, index) => (
                            <RankItem key={index} {...rank} />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rc" className="border border-zinc-800 rounded-lg overflow-hidden">
                      <AccordionTrigger className="text-base font-mono text-zinc-200 py-3 px-4 bg-zinc-900 hover:bg-zinc-800 accordion-trigger-no-underline">
                        RC PATH
                      </AccordionTrigger>
                      <AccordionContent className="bg-zinc-900 border-x border-b border-zinc-800">
                        <div className="space-y-4 pt-2 p-4">
                          {ranks.special.rc.map((rank, index) => (
                            <RankItem key={index} {...rank} />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="naval" className="mt-6">
                  <div className="space-y-4">
                    {ranks.naval.map((rank, index) => (
                      <RankItem key={index} {...rank} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          )}

          {activeSection === "positions" && (
            <motion.div
              key="positions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="h-px w-8 bg-blue-500"></div>
                <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">POSITIONS</h2>
                <div className="h-px w-8 bg-blue-500"></div>
              </div>

              {/* Mobile dropdown for positions */}
              <div className="md:hidden mb-4">
                <MobileTabSelect
                  options={positionTabOptions}
                  value={activePositionTab}
                  onChange={setActivePositionTab}
                />
              </div>

              <Tabs value={activePositionTab} onValueChange={setActivePositionTab} className="w-full">
                <TabsList className="hidden md:grid w-full grid-cols-4 bg-zinc-900 border border-zinc-800">
                  <TabsTrigger value="command" className="font-mono text-xs">
                    COMMAND
                  </TabsTrigger>
                  <TabsTrigger value="army" className="font-mono text-xs">
                    ARMY
                  </TabsTrigger>
                  <TabsTrigger value="starfighter" className="font-mono text-xs">
                    STARFIGHTER CORPS
                  </TabsTrigger>
                  <TabsTrigger value="specialForces" className="font-mono text-xs">
                    SPECIAL FORCES
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="command" className="mt-6">
                  <div className="space-y-4">
                    {positions.command.map((position, index) => (
                      <PositionItem key={index} {...position} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="army" className="mt-6">
                  <div className="space-y-4">
                    {positions.army.map((position, index) => (
                      <PositionItem key={index} {...position} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="starfighter" className="mt-6">
                  <div className="space-y-4">
                    {positions.starfighter.map((position, index) => (
                      <PositionItem key={index} {...position} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="specialForces" className="mt-6">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="arc" className="border border-zinc-800 rounded-lg overflow-hidden">
                      <AccordionTrigger className="text-base font-mono text-zinc-200 py-3 px-4 bg-zinc-900 hover:bg-zinc-800 accordion-trigger-no-underline">
                        ARC POSITIONS
                      </AccordionTrigger>
                      <AccordionContent className="bg-zinc-900 border-x border-b border-zinc-800">
                        <div className="space-y-4 pt-2 p-4">
                          {positions.specialForces.arc.map((position, index) => (
                            <PositionItem key={index} {...position} />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rc" className="border border-zinc-800 rounded-lg overflow-hidden">
                      <AccordionTrigger className="text-base font-mono text-zinc-200 py-3 px-4 bg-zinc-900 hover:bg-zinc-800 accordion-trigger-no-underline">
                        RC POSITIONS
                      </AccordionTrigger>
                      <AccordionContent className="bg-zinc-900 border-x border-b border-zinc-800">
                        <div className="space-y-4 pt-2 p-4">
                          {positions.specialForces.rc.map((position, index) => (
                            <PositionItem key={index} {...position} />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </motion.div>
          )}

          {activeSection === "command-staff" && (
            <motion.div
              key="command-staff"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="h-px w-8 bg-blue-500"></div>
                <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">COMMAND STAFF</h2>
                <div className="h-px w-8 bg-blue-500"></div>
              </div>

              {/* Persistent breadcrumb that updates based on selection */}
              <motion.div layout className="mb-6">
                <Breadcrumb items={getBreadcrumbItems()} />
              </motion.div>

              <AnimatePresence mode="wait">
                {selectedCommandStaffMember ? (
                  <CommandStaffDetail member={selectedCommandStaffMember} onBack={handleBackToCommandStaffGrid} />
                ) : (
                  <div className="space-y-12">
                    <CommandStaffSection
                      title="FLEET COMMAND"
                      members={fleetCommandMembers}
                      onSelectMember={handleCommandStaffMemberClick}
                    />
                    <CommandStaffSection
                      title="BRANCH COMMANDERS"
                      members={branchCommandMembers}
                      onSelectMember={handleCommandStaffMemberClick}
                    />
                    <CommandStaffSection
                      title="SPECIAL FORCES COMMAND"
                      members={specialForcesCommandMembers}
                      onSelectMember={handleCommandStaffMemberClick}
                    />
                    <CommandStaffSection
                      title="SPECIAL FORCES EXECUTIVES"
                      members={specialForcesExecutiveMembers}
                      onSelectMember={handleCommandStaffMemberClick}
                    />
                    <CommandStaffSection
                      title="SECTOR COMMANDERS"
                      members={sectorCommandMembers}
                      onSelectMember={handleCommandStaffMemberClick}
                      rowLayout={true}
                    />
                    <CommandStaffSection
                      title="ARMY MAJORS"
                      members={armyMajorMembers}
                      onSelectMember={handleCommandStaffMemberClick}
                      rowLayout={true}
                    />
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="border-t border-zinc-800 py-4 bg-zinc-950">
        <div className="container mx-auto px-4 text-center text-zinc-500 text-xs font-mono">
          <p>REPUBLIC MILITARY DATABASE // {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}
