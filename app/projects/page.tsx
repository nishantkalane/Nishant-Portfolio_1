import ProjectCard from "@/components/ProjectCard"
import { getResumeData } from "@/lib/data"

export const metadata = {
  title: "Projects - Nishant Kalane",
  description:
    "Explore Nishant Kalane's key projects including Kanthaka healthcare robotics and Sentiment Sense NLP tool.",
}

export default async function Projects() {
  const data = await getResumeData()

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Projects</h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {data.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
