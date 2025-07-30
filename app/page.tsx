import Hero from "@/components/Hero"
import FeaturedProjects from "@/components/FeaturedProjects"
import QuickStats from "@/components/QuickStats"
import { getResumeData } from "@/lib/data"

export default async function Home() {
  const data = await getResumeData()

  return (
    <main>
      <Hero data={data} />
      <QuickStats data={data} />
      <FeaturedProjects projects={data.projects} />

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Welcome to My Portfolio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my journey in AI/ML research, discover my innovative projects, and learn about my achievements in
            the field of artificial intelligence and full-stack development.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's collaborate on innovative AI/ML projects and full-stack solutions that make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Start a Conversation
            </a>
            <a
              href="/resume"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
