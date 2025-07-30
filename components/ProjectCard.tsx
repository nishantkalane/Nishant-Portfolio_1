import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{project.name}</h3>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="View demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.features && (
        <div>
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
