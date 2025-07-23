"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: "/featured-design.png",
    title: "Pins and Keychains",
    description:
      "Unique pins and keychains that add personality to your everyday style.",
  },
  {
    id: 2,
    image: "/featured-design2.png",
    title: "Photostrip Keychains",
    description:
      "A personalized keychain that turns your favorite photos into a pocket-sized keepsake.",
  },
  {
    id: 3,
    image: "/featured-design3.png",
    title: "Winkie Button Pins",
    description:
      "Cute and expressive pins that add a playful touch to any outfit or bag.",
  },
  /*{
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
  },*/
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[5/4] h-[400px] md:h-[500px] overflow-hidden rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100">
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-contain md:object-cover"
              sizes="(max-width: 786px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base opacity-90 max-w-md">
                {item.description}
              </p>
            </div>
            <div className="absolute bottom-8 right-8 hidden md:block">
              <Link href="/catalog">
                <Button className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white">
                  View Collection
                </Button>
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
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
