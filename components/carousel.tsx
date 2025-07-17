"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselItem {
  id: number
  image: string
  title: string
  description: string
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=800&text=Featured Design 1",
    title: "Holographic Dreams",
    description: "Shimmery holographic designs that change colors in the light",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=800&text=Featured Design 2",
    title: "Vintage Polaroids",
    description: "Classic vintage-style photo frames with retro aesthetics",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=800&text=Featured Design 3",
    title: "Kawaii Collection",
    description: "Cute and adorable designs perfect for any occasion",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=800&text=Featured Design 4",
    title: "Minimalist Elegance",
    description: "Clean and simple designs for a sophisticated look",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=400&width=800&text=Featured Design 5",
    title: "Floral Paradise",
    description: "Beautiful floral patterns and botanical designs",
  },
]

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100">
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="w-full h-full flex-shrink-0 relative">
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm md:text-base opacity-90 max-w-md">{item.description}</p>
            </div>
            <div className="absolute bottom-8 right-8">
              <Link href="/catalog">
                <Button className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white">Order Now</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
