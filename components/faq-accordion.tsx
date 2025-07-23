"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full px-6 py-4 text-left bg-white hover:bg-pink-50 transition-colors flex items-center justify-between"
            onClick={() => toggleItem(index)}
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
            <ChevronDown
              className={`w-5 h-5 text-pink-500 transition-transform duration-200 ${
                openItems.includes(index) ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(index) ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 py-4 bg-pink-50 border-t border-pink-100">
              <div 
                className="text-gray-600" 
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
