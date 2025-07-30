"use client"

import { useState, useMemo, useEffect } from "react"
import AwardCard from "@/components/AwardCard"
import { getResumeData } from "@/lib/data"
import { Trophy, Download, Search, Award } from "lucide-react"

export default function Awards() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterMode, setFilterMode] = useState("all")
  const [sortBy, setSortBy] = useState("date")

  // Load data on component mount using useEffect
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const resumeData = await getResumeData()
        setData(resumeData)
      } catch (error) {
        console.error("Error loading resume data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const filteredAndSortedAwards = useMemo(() => {
    if (!data) return []

    const filtered = data.awards.filter((award: any) => {
      const matchesSearch =
        award.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
        award.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
        award.type.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesType =
        filterType === "all" ||
        (filterType === "1st" && award.place.includes("1st")) ||
        (filterType === "2nd" && award.place.includes("2nd")) ||
        (filterType === "3rd" && award.place.includes("3rd")) ||
        (filterType === "participated" && (award.place.includes("❌") || award.place.includes("Participated"))) ||
        (filterType === "special" && (award.place.includes("⭐") || award.place.includes("Excellence")))

      const matchesMode = filterMode === "all" || award.mode.toLowerCase() === filterMode.toLowerCase()

      return matchesSearch && matchesType && matchesMode
    })

    // Sort awards
    filtered.sort((a: any, b: any) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "place") {
        const getPlaceValue = (place: string) => {
          if (place.includes("1st")) return 1
          if (place.includes("2nd")) return 2
          if (place.includes("3rd")) return 3
          if (place.includes("⭐")) return 4
          if (place.includes("❌")) return 5
          return 6
        }
        return getPlaceValue(a.place) - getPlaceValue(b.place)
      }
      return 0
    })

    return filtered
  }, [data, searchTerm, filterType, filterMode, sortBy])

  const getAwardStats = () => {
    if (!data) return { total: 0, first: 0, second: 0, third: 0, special: 0, participated: 0 }

    const stats = data.awards.reduce(
      (acc: any, award: any) => {
        acc.total++
        if (award.place.includes("1st")) acc.first++
        else if (award.place.includes("2nd")) acc.second++
        else if (award.place.includes("3rd")) acc.third++
        else if (award.place.includes("❌") || award.place.includes("Participated")) acc.participated++
        else acc.special++
        return acc
      },
      { total: 0, first: 0, second: 0, third: 0, special: 0, participated: 0 },
    )

    return stats
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">Loading awards...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Trophy className="mx-auto text-gray-400 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">Failed to load awards</h3>
          <p className="text-gray-500 dark:text-gray-500">Please try refreshing the page</p>
        </div>
      </div>
    )
  }

  const stats = getAwardStats()

  return (
    <main className="py-16 particle-bg">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="floating">
              <Trophy className="text-yellow-500 pulse-glow" size={48} />
            </div>
            <h1 className="text-5xl font-bold gradient-text">Awards & Achievements</h1>
            <div className="floating" style={{ animationDelay: "1s" }}>
              <Award className="text-purple-500 pulse-glow" size={48} />
            </div>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Recognition for excellence in AI/ML research, innovation, and technical competitions across national
            platforms
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl card-hover">
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-sm opacity-90">Total Events</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-4 rounded-xl card-hover">
              <div className="text-2xl font-bold">{stats.first}</div>
              <div className="text-sm opacity-90">🥇 First Place</div>
            </div>
            <div className="bg-gradient-to-br from-gray-400 to-gray-500 text-white p-4 rounded-xl card-hover">
              <div className="text-2xl font-bold">{stats.second}</div>
              <div className="text-sm opacity-90">🥈 Second Place</div>
            </div>
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-4 rounded-xl card-hover">
              <div className="text-2xl font-bold">{stats.third}</div>
              <div className="text-sm opacity-90">🥉 Third Place</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 rounded-xl card-hover">
              <div className="text-2xl font-bold">{stats.special}</div>
              <div className="text-sm opacity-90">⭐ Special Awards</div>
            </div>
            <div className="bg-gradient-to-br from-gray-600 to-gray-700 text-white p-4 rounded-xl card-hover">
              <div className="text-2xl font-bold">{stats.participated}</div>
              <div className="text-sm opacity-90">❌ Participated</div>
            </div>
          </div>

          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Download size={20} />
            Download Complete Awards List (PDF)
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search awards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
              />
            </div>

            {/* Filter by Place */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
            >
              <option value="all">All Results</option>
              <option value="1st">🥇 First Place</option>
              <option value="2nd">🥈 Second Place</option>
              <option value="3rd">🥉 Third Place</option>
              <option value="special">⭐ Special Awards</option>
              <option value="participated">❌ Participated</option>
            </select>

            {/* Filter by Mode */}
            <select
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
            >
              <option value="all">All Modes</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="hybrid">Hybrid</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
            >
              <option value="date">Sort by Date</option>
              <option value="place">Sort by Place</option>
            </select>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredAndSortedAwards.map((award: any, index: number) => (
            <AwardCard key={index} award={award} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedAwards.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No awards found</h3>
            <p className="text-gray-500 dark:text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Achievement Timeline - Only show winning awards */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Achievement Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            {data.awards
              .filter((award: any) => !award.place.includes("❌") && !award.place.includes("Participated"))
              .slice(0, 6)
              .map((award: any, index: number) => (
                <div
                  key={index}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg card-hover">
                      <h4 className="font-bold text-blue-600 dark:text-blue-400">{award.event}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{award.place}</p>
                      <p className="text-xs text-gray-500">{award.date}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
