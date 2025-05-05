"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ClassItem from "@/components/class-item"
import MobileTabSelect from "@/components/mobile-tab-select"
import { classes } from "@/data"
import { useState } from "react"

export default function ClassesSection() {
  const [activeClassTab, setActiveClassTab] = useState("army")

  // Class tab options for the dropdown
  const classTabOptions = [
    { value: "army", label: "ARMY" },
    { value: "starfighter", label: "STARFIGHTER" },
    { value: "specialOps", label: "SPECIAL OPS" },
  ]

  return (
    <motion.div
      key="classes"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="h-px w-8 bg-blue-500"></div>
        <h2 className="text-2xl font-bold text-center text-zinc-200 font-mono">CLASSES</h2>
        <div className="h-px w-8 bg-blue-500"></div>
      </div>

      {/* Mobile dropdown for classes */}
      <div className="md:hidden mb-4">
        <MobileTabSelect options={classTabOptions} value={activeClassTab} onChange={setActiveClassTab} />
      </div>

      <Tabs value={activeClassTab} onValueChange={setActiveClassTab} className="w-full">
        <TabsList className="hidden md:grid w-full grid-cols-3 bg-zinc-900 border border-zinc-800">
          <TabsTrigger value="army" className="font-mono text-xs">
            ARMY
          </TabsTrigger>
          <TabsTrigger value="starfighter" className="font-mono text-xs">
            STARFIGHTER
          </TabsTrigger>
          <TabsTrigger value="specialOps" className="font-mono text-xs">
            SPECIAL OPS
          </TabsTrigger>
        </TabsList>

        <TabsContent value="army" className="mt-6">
          {classes.army.map((category, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-xl font-bold text-zinc-200 font-mono mb-4">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.classes.map((classItem) => (
                  <ClassItem key={classItem.id} {...classItem} />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="starfighter" className="mt-6">
          {classes.starfighter.map((category, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-xl font-bold text-zinc-200 font-mono mb-4">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.classes.map((classItem) => (
                  <ClassItem key={classItem.id} {...classItem} />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="specialOps" className="mt-6">
          {classes.specialOps.map((category, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-xl font-bold text-zinc-200 font-mono mb-4">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.classes.map((classItem) => (
                  <ClassItem key={classItem.id} {...classItem} />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
