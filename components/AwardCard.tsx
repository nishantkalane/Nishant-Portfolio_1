import { Trophy, Calendar, MapPin, Globe, Star, Zap, X } from "lucide-react"
import type { AwardType } from "@/lib/types"

interface AwardCardProps {
  award: AwardType
  index: number
}

export default function AwardCard({ award, index }: AwardCardProps) {
  const getPlaceColor = (place: string) => {
    if (place.includes("1st") || place.includes("🥇")) return "award-gold"
    if (place.includes("2nd") || place.includes("🥈")) return "award-silver"
    if (place.includes("3rd") || place.includes("🥉")) return "award-bronze"
    if (place.includes("❌") || place.includes("Participated")) return "bg-gray-100 dark:bg-gray-700"
    return "award-special"
  }

  const getPlaceIcon = (place: string) => {
    if (place.includes("1st") || place.includes("🥇")) return <Trophy className="text-yellow-500" size={28} />
    if (place.includes("2nd") || place.includes("🥈")) return <Zap className="text-gray-400" size={28} />
    if (place.includes("3rd") || place.includes("🥉")) return <Star className="text-amber-600" size={28} />
    if (place.includes("❌") || place.includes("Participated")) return <X className="text-gray-500" size={28} />
    return <Zap className="text-purple-500" size={28} />
  }

  const getPlaceEmoji = (place: string) => {
    if (place.includes("1st") || place.includes("🥇")) return "🥇"
    if (place.includes("2nd") || place.includes("🥈")) return "🥈"
    if (place.includes("3rd") || place.includes("🥉")) return "🥉"
    if (place.includes("❌") || place.includes("Participated")) return "❌"
    return "⭐"
  }

  const getModeColor = (mode: string) => {
    switch (mode.toLowerCase()) {
      case "online":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "offline":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "hybrid":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "national level":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      case "college level":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "state level":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  const isParticipation = award.place.includes("❌") || award.place.includes("Participated")

  return (
    <div
      className={`award-card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg stagger-animation ${
        isParticipation ? "opacity-75" : "glow-border"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Award Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-full ${getPlaceColor(award.place)} rotate-in`}>{getPlaceIcon(award.place)}</div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl bounce-in">{getPlaceEmoji(award.place)}</span>
              <h3
                className={`text-lg font-bold ${isParticipation ? "text-gray-600 dark:text-gray-400" : "gradient-text"}`}
              >
                {award.place}
              </h3>
            </div>
            {award.type && <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{award.type}</span>}
          </div>
        </div>
        <div className={isParticipation ? "opacity-50" : "floating"}>
          <Trophy className="text-yellow-500 pulse-glow" size={24} />
        </div>
      </div>

      {/* Event Name */}
      <h4 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer">
        {award.event}
      </h4>

      {/* College/Institution */}
      <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium leading-relaxed">{award.college}</p>

      {/* Award Details */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Calendar size={16} className="text-blue-500" />
          <span className="font-medium text-gray-700 dark:text-gray-300">{award.date}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Globe size={16} className="text-green-500" />
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getModeColor(award.mode)}`}>
            {award.mode}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MapPin size={16} className="text-purple-500" />
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(award.level)}`}>
            {award.level}
          </span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-2 right-2 opacity-10">
        <div className="text-6xl">{getPlaceEmoji(award.place)}</div>
      </div>

      {/* Shimmer Effect - only for winning awards */}
      {!isParticipation && (
        <div className="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      )}
    </div>
  )
}
