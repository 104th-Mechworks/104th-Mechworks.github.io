"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Terminal, CheckCircle2, Loader2, MousePointerClick } from "lucide-react"
import Image from "next/image"

export default function LoadingScreen({
  isAuthenticated,
  onComplete,
}: {
  isAuthenticated: boolean
  onComplete: () => void
}) {
  // State for the displayed text
  const [displayText, setDisplayText] = useState("")
  // State to track which success messages are visible
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  // State to track if animation is complete
  const [isComplete, setIsComplete] = useState(false)
  // Cursor blink state
  const [showCursor, setShowCursor] = useState(true)
  // State to control skip hint visibility
  const [showSkipHint, setShowSkipHint] = useState(false)
  // State to track if user has interacted
  const [hasInteracted, setHasInteracted] = useState(false)

  // Use refs to track current step to avoid closure issues
  const currentStepRef = useRef(0)
  // Store timeout reference for cleanup
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const loadingSteps = [
    "ESTABLISHING CONNECTION TO REPUBLIC MILITARY DATABASE...",
    "VERIFYING CHAIN CODE...",
    "AUTHENTICATING CREDENTIALS...",
    "ACCESS GRANTED",
    "WELCOME TO THE 104TH BATTALION DATABASE",
  ]

  // Success messages that appear after each step
  const successMessages = [
    "CONNECTION ESTABLISHED",
    "CHAIN CODE ACCEPTED",
    "CREDENTIALS AUTHENTICATED",
    "ACCESS GRANTED",
  ]

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Show skip hint after a delay
  useEffect(() => {
    const skipHintTimer = setTimeout(() => {
      setShowSkipHint(true)
    }, 2000) // Show skip hint after 2 seconds

    return () => clearTimeout(skipHintTimer)
  }, [])

  // Initialize the animation on component mount
  useEffect(() => {
    // Start the animation process
    typeCurrentStep(0)

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, []) // Empty dependency array - only run on mount

  // When animation is complete, trigger the onComplete callback after a delay
  useEffect(() => {
    if (isComplete) {
      // Wait 2 seconds after completion before transitioning to main site
      const finalDelay = setTimeout(() => {
        onComplete()
      }, 2000)

      return () => clearTimeout(finalDelay)
    }
  }, [isComplete, onComplete])

  // Function to handle skip action
  const handleSkip = () => {
    // Prevent multiple skips
    if (hasInteracted) return
    setHasInteracted(true)

    // Hide skip hint
    setShowSkipHint(false)

    // Clear any ongoing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Set all steps as completed
    setCompletedSteps([0, 1, 2, 3, 4])

    // Set the final text
    setDisplayText(loadingSteps[loadingSteps.length - 1])

    // Mark as complete
    setIsComplete(true)

    // Transition to main site after a short delay
    setTimeout(() => {
      onComplete()
    }, 500)
  }

  // Function to type the current step
  const typeCurrentStep = (charIndex: number) => {
    const stepIndex = currentStepRef.current

    // If we've gone through all steps, mark as complete
    if (stepIndex >= loadingSteps.length) {
      setIsComplete(true)
      return
    }

    const currentStep = loadingSteps[stepIndex]

    // If we've typed the entire step
    if (charIndex >= currentStep.length) {
      // Pause before clearing and moving to next step
      timeoutRef.current = setTimeout(() => {
        // Add this step to completed steps if there's a corresponding success message
        if (stepIndex < successMessages.length) {
          setCompletedSteps((prev) => [...prev, stepIndex])
        }

        // Clear the text
        setDisplayText("")

        // Move to the next step
        currentStepRef.current = stepIndex + 1

        // Check if we're done with all steps
        if (currentStepRef.current >= loadingSteps.length) {
          setIsComplete(true)
        } else {
          // Start typing the next step after a short delay
          timeoutRef.current = setTimeout(() => {
            typeCurrentStep(0)
          }, 300)
        }
      }, 1000)
      return
    }

    // Add the next character
    setDisplayText(currentStep.substring(0, charIndex + 1))

    // Schedule the next character
    const randomDelay = Math.floor(Math.random() * 30) + 50 // 50-80ms random delay
    timeoutRef.current = setTimeout(() => {
      typeCurrentStep(charIndex + 1)
    }, randomDelay)
  }

  return (
    // Add onClick handler to the entire container
    <div
      className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center cursor-pointer"
      onClick={handleSkip}
    >
      {/* Skip hint */}
      {showSkipHint && !isComplete && !hasInteracted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-zinc-800/70 px-3 py-1.5 rounded-sm"
        >
          <MousePointerClick size={14} className="text-blue-400" />
          <span className="text-zinc-300 text-xs font-mono">TAP ANYWHERE TO SKIP</span>
        </motion.div>
      )}

      {/* 104th Battalion Logo */}
      <div className="mb-8 relative h-20 w-20">
        <Image src="/images/104th.png" alt="104th Battalion" fill className="object-contain" />
      </div>

      {/* Terminal window */}
      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-sm p-5">
        <div className="flex items-center justify-between gap-2 mb-4 border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-blue-500" />
            <span className="text-zinc-400 font-mono text-sm">REPUBLIC MILITARY DATABASE</span>
          </div>
        </div>

        <div className="font-mono text-sm text-zinc-400 space-y-4">
          {/* Current typing line */}
          <div className="flex items-start gap-2">
            <span className="text-blue-500">$</span>
            <div>
              <span>{displayText}</span>
              {showCursor && <span className="text-zinc-300">_</span>}
            </div>
          </div>

          {/* Success messages that appear progressively */}
          {completedSteps.map((stepIndex) => (
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-green-500"
            >
              <CheckCircle2 size={14} />
              <span>{successMessages[stepIndex]}</span>
            </motion.div>
          ))}

          {/* Final "Entering Database" message */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-sm text-zinc-300 font-mono text-sm">
                <span>ENTERING DATABASE</span>
                <Loader2 size={14} className="animate-spin" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="mt-6 text-zinc-600 font-mono text-xs">REPUBLIC MILITARY DATABASE</div>
    </div>
  )
}
