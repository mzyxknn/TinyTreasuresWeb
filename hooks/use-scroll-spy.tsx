"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[], offset = 220) {
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset
      let currentSection = "home"

      // Go through sections in reverse order to find the current one
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i]
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY

          // If we've scrolled past this section's top, it's the current one
          if (scrollPosition >= sectionTop) {
            currentSection = sectionId
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
