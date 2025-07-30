"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react"
import type { Award } from "@/lib/types"

interface FeaturedAwardsCarouselProps {
  awards: Award[]
}

export default function FeaturedAwardsCarousel({ awards }: FeaturedAwardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [awards.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + awards.length) % awards.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length)
  }

  if (awards.length === 0) return null

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {awards.map((award, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white dark:bg-gray-800 p-8 mx-4 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">
                  <Trophy className="mx-auto text-yellow-500" size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{award.place}</h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-2">{award.event}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{award.college}</p>
                <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                  <span>{award.date}</span>
                  <span>•</span>
                  <span>{award.mode}</span>
                  <span>•</span>
                  <span>{award.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        aria-label="Previous award"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        aria-label="Next award"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {awards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-blue-600"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to award ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
