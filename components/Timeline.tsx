import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import type { Experience, Education } from "@/lib/types"

interface TimelineProps {
  items: Experience[] | Education[]
  type: "experience" | "education"
}

export default function Timeline({ items, type }: TimelineProps) {
  const getIcon = () => {
    return type === "experience" ? <Briefcase size={20} /> : <GraduationCap size={20} />
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start gap-6">
            {/* Timeline dot */}
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
              {getIcon()}
            </div>

            {/* Content */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {"title" in item ? item.title : item.degree}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                <MapPin size={16} />
                <span>
                  {"company" in item ? `${item.company}, ${item.location}` : `${item.institution}, ${item.location}`}
                </span>
              </div>

              {item.description && (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
              )}

              {"responsibilities" in item && item.responsibilities && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
