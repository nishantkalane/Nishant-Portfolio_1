import { Code, Database, Brain, BarChart3, Users, Lightbulb, Search, HeadphonesIcon } from "lucide-react"
import type { Skills } from "@/lib/types"

interface IconGridProps {
  skills: Skills
}

const skillIcons = {
  Python: Code,
  SQL: Database,
  LLMs: Brain,
  "Power BI": BarChart3,
  Communication: Users,
  Leadership: Users,
  "Critical Thinking": Lightbulb,
  Research: Search,
  "Research Assistance": HeadphonesIcon,
}

export default function IconGrid({ skills }: IconGridProps) {
  const categories = [
    { title: "Technical Skills", skills: skills.technical, color: "blue" },
    { title: "Interpersonal Skills", skills: skills.interpersonal, color: "green" },
    { title: "Analytical Skills", skills: skills.analytical, color: "purple" },
    { title: "Support Skills", skills: skills.support, color: "orange" },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700",
      green:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700",
      purple:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700",
      orange:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="max-w-6xl mx-auto">
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">{category.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.skills.map((skill, skillIndex) => {
              const IconComponent = skillIcons[skill as keyof typeof skillIcons] || Code
              return (
                <div
                  key={skillIndex}
                  className={`p-4 rounded-lg border-2 text-center card-hover ${getColorClasses(category.color)}`}
                >
                  <IconComponent className="mx-auto mb-2" size={32} />
                  <span className="font-medium">{skill}</span>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
