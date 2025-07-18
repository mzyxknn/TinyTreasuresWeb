"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

interface MobileNavigationProps {
  activeSection: string
}

export function MobileNavigation({ activeSection }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Mobile menu button - Hidden since we're using floating nav */}
      <Button
        variant="outline"
        size="icon"
        className="hidden bg-transparent border-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Toggle menu</span>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu overlay - Hidden */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold text-blue-500">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="p-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`block w-full text-left py-2 px-3 rounded-lg transition-colors ${
                        activeSection === item.href.slice(1)
                          ? "bg-blue-100 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
