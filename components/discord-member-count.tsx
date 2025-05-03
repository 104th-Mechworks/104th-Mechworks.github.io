"use client"

import { useState, useEffect } from "react"
import { Users } from "lucide-react"

export default function DiscordMemberCount({
  serverId,
  fallbackCount = "...",
}: {
  serverId: string
  fallbackCount?: string | number
}) {
  const [memberCount, setMemberCount] = useState<number | string>(fallbackCount)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // For a static site, we'll use the fallback count instead of trying to fetch
    // real-time data that will likely be blocked by CORS
    setIsLoading(false)

    // Note: We're keeping this commented code for reference, but it won't work in most cases
    // due to CORS restrictions on client-side requests to Discord's API
    /*
    const fetchMemberCount = async () => {
      try {
        // This would work if CORS wasn't an issue
        const response = await fetch(`https://discord.com/api/guilds/${serverId}/widget.json`, {
          mode: 'no-cors' // This doesn't actually solve the CORS issue for reading the response
        })

        if (!response.ok) {
          throw new Error("Failed to fetch Discord data")
        }

        const data = await response.json()
        setMemberCount(data.presence_count)
        setError(false)
      } catch (err) {
        console.error("Error fetching Discord member count:", err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMemberCount()
    */
  }, [serverId, fallbackCount])

  return (
    <div className="flex items-center gap-2">
      <Users size={16} className={error ? "text-red-400" : "text-blue-400"} />
      <span className="text-sm text-zinc-300 font-mono">PERSONNEL: {isLoading ? "..." : memberCount}</span>
    </div>
  )
}
