"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface FlipCardProps {
  frontImage: string
  title: string
  description: string
  price: string
  category: string
}

export function FlipCard({ frontImage, title, description, price, category }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-full aspect-square perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden overflow-hidden shadow-lg">
          <div className="relative w-full h-full">
            <Image src={frontImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
            {/* Hover overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent transition-opacity duration-300 flex items-end justify-center pb-6 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white font-medium text-sm">Click to view more details</p>
            </div>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-blue-50 shadow-lg">
          <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center space-y-4">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            <div className="space-y-2">
              <p className="text-lg font-bold text-blue-500">{price}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{category}</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-lg hover:from-sky-500 hover:to-blue-600 transition-colors text-sm">
              Add to Cart
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
