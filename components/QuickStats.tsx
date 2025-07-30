import { Trophy, Code, Award, Users } from "lucide-react"
import type { ResumeData } from "@/lib/types"

interface QuickStatsProps {
  data: ResumeData
}

export default function QuickStats({ data }: QuickStatsProps) {
  const stats = [
    {
      icon: Trophy,
      value: data.awards.filter((award) => award.place.includes("1st")).length,
      label: "First Place Awards",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Code,
      value: data.projects.length,
      label: "Major Projects",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Award,
      value: data.awards.length,
      label: "Total Achievements",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      value: data.experience.length,
      label: "Work Experiences",
      color: "from-pink-500 to-red-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">Achievements at a Glance</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A snapshot of my journey in AI/ML research, development, and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center card-hover stagger-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 floating`}
              >
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
