"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { AlertTriangle, Search } from "lucide-react"
import Header from "@/components/layout/header"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [path, setPath] = useState<string>("")

  useEffect(() => {
    setMounted(true)
    // Get the current path that wasn't found
    setPath(window.location.pathname)
  }, [])

  // Header navigation handlers with skipLoading parameter
  const handleNavigation = (section: string) => {
    // Add skipLoading=true to the URL to bypass the loading animation
    window.location.href = `/?skipLoading=true#${section}`
  }

  const handleLogoClick = () => {
    // Add skipLoading=true to the URL to bypass the loading animation
    window.location.href = "/?skipLoading=true"
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Use the same Header component as the rest of the app */}
      <Header activeSection="" onNavigate={handleNavigation} onLogoClick={handleLogoClick} />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-red-500/20 p-6 rounded-full"
              >
                <AlertTriangle size={64} className="text-red-500" />
              </motion.div>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-zinc-100">404 - Sector Not Found</h1>
            <p className="text-xl text-zinc-400 mb-8">
              This area appears to be outside of 104th Battalion jurisdiction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8"
          >
            <div className="flex items-start space-x-4">
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Intelligence Report</h3>
                <p className="text-zinc-400 mb-4">
                  Our reconnaissance units have searched the area but found no sign of the requested resource. It may
                  have been relocated or never existed in our database.
                </p>
                <div className="text-sm text-zinc-500 font-mono bg-zinc-950 p-3 rounded border border-zinc-800">
                  <p>ERROR CODE: CT-404</p>
                  <p>LOCATION: {path || "Unknown Sector"}</p>
                  <p>TIMESTAMP: {new Date().toISOString()}</p>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <blockquote className="italic text-zinc-400 mb-2">
              "Even when lost, a good soldier finds their way back to base."
            </blockquote>
            <p className="text-sm text-zinc-500">— Marshal Commander</p>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-zinc-500 text-sm">
        <p>104th Battalion Information System</p>
        <p className="mt-1">© {new Date().getFullYear()} 104th Battalion. All rights reserved.</p>
      </footer>
    </div>
  )
}
