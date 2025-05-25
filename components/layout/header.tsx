"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  activeSection: string
  onNavigate: (section: string) => void
  onLogoClick: () => void
}

export default function Header({ activeSection, onNavigate, onLogoClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  // Function to handle mobile navigation
  const handleMobileNavigation = (section: string) => {
    onNavigate(section)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onLogoClick}>
            <div className="h-8 w-8 relative">
              <Image src="/images/104th.png" alt="104th Battalion" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-zinc-200 font-mono">104TH BATTALION</h1>
              <div className="text-xs text-zinc-500 font-mono">MILITARY DATABASE</div>
            </div>
          </div>

          <nav className="hidden space-x-6">
            {/*<button*/}
            {/*  onClick={() => handleMobileNavigation("branches")}*/}
            {/*  className={`text-sm font-mono transition-colors ${*/}
            {/*    activeSection === "branches" ? "text-blue-400" : "text-zinc-500 hover:text-zinc-300"*/}
            {/*  }`}*/}
            {/*>*/}
            {/*  BRANCHES*/}
            {/*</button>*/}
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
              onClick={() => handleMobileNavigation("classes")}
              className={`text-sm font-mono transition-colors ${
                activeSection === "classes" ? "text-blue-400" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              CLASSES
            </button>
            <button
              onClick={() => handleMobileNavigation("medals")}
              className={`text-sm font-mono transition-colors ${
                activeSection === "medals" ? "text-blue-400" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              MEDALS
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
            <button
              onClick={() => handleMobileNavigation("rules")}
              className={`text-sm font-mono transition-colors ${
                activeSection === "rules" ? "text-blue-400" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              RULES
            </button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="text-zinc-400 hover:text-zinc-200">
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
            className="fixed top-[70px] left-0 right-0 bg-zinc-900 border-b border-zinc-800 z-40 shadow-lg w-full"
          >
            <div className="flex flex-col p-5 space-y-2 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-inner">
              <div className="mb-2 pb-2 border-b border-zinc-800/50">
                <p className="text-xs uppercase text-zinc-500 font-mono tracking-wider">Navigation</p>
              </div>
              <button
                onClick={() => handleMobileNavigation("home")}
                className={`text-sm font-mono py-3 px-4 rounded transition-all flex items-center ${
                  activeSection === "home"
                    ? "bg-zinc-800/80 text-blue-400 border-l-2 border-blue-400 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 hover:border-l-2 hover:border-zinc-600"
                }`}
              >
                HOME
              </button>
              {/*<button*/}
              {/*  onClick={() => handleMobileNavigation("branches")}*/}
              {/*  className={`text-sm font-mono py-3 px-4 rounded transition-all flex items-center ${*/}
              {/*    activeSection === "branches"*/}
              {/*      ? "bg-zinc-800/80 text-blue-400 border-l-2 border-blue-400 shadow-sm"*/}
              {/*      : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 hover:border-l-2 hover:border-zinc-600"*/}
              {/*  }`}*/}
              {/*>*/}
              {/*  BRANCHES*/}
              {/*</button>*/}
              <button
                onClick={() => handleMobileNavigation("ranks")}
                className={`text-sm font-mono py-3 px-4 rounded transition-all flex items-center ${
                  activeSection === "ranks"
                    ? "bg-zinc-800/80 text-blue-400 border-l-2 border-blue-400 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 hover:border-l-2 hover:border-zinc-600"
                }`}
              >
                RANKS
              </button>
              <button
                onClick={() => handleMobileNavigation("positions")}
                className={`text-sm font-mono py-3 px-4 rounded transition-all flex items-center ${
                  activeSection === "positions"
                    ? "bg-zinc-800/80 text-blue-400 border-l-2 border-blue-400 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 hover:border-l-2 hover:border-zinc-600"
                }`}
              >
                POSITIONS
              </button>
              <button
                onClick={() => handleMobileNavigation("classes")}
                className={`text-sm font-mono py-3 px-4 rounded transition-all flex items-center ${
                  activeSection === "classes"
                    ? "bg-zinc-800/80 text-blue-400 border-l-2 border-blue-400 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 hover:border-l-2 hover:border-zinc-600"
                }`}
              >
                CLASSES
              </button>
              <button
                onClick={() => handleMobileNavigation("medals")}
                className={`text-sm font-mono py-3 px-4 rounded transition-all flex items-center ${
                  activeSection === "medals"
                    ? "bg-zinc-800/80 text-blue-400 border-l-2 border-blue-400 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 hover:border-l-2 hover:border-zinc-600"
                }`}
              >
                MEDALS
              </button>
              <button
                onClick={() => handleMobileNavigation("servers")}
                className={`text-sm font-mono py-3 px-4 rounded transition-all flex items-center ${
                  activeSection === "servers"
                    ? "bg-zinc-800/80 text-blue-400 border-l-2 border-blue-400 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 hover:border-l-2 hover:border-zinc-600"
                }`}
              >
                SERVERS
              </button>
              <button
                onClick={() => handleMobileNavigation("command-staff")}
                className={`text-sm font-mono py-3 px-4 rounded transition-all flex items-center ${
                  activeSection === "command-staff"
                    ? "bg-zinc-800/80 text-blue-400 border-l-2 border-blue-400 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 hover:border-l-2 hover:border-zinc-600"
                }`}
              >
                COMMAND STAFF
              </button>
              <button
                onClick={() => handleMobileNavigation("rules")}
                className={`text-sm font-mono py-3 px-4 rounded transition-all flex items-center ${
                  activeSection === "rules"
                    ? "bg-zinc-800/80 text-blue-400 border-l-2 border-blue-400 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 hover:border-l-2 hover:border-zinc-600"
                }`}
              >
                RULES & POLICIES
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
