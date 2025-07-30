import Timeline from "@/components/Timeline"
import { getResumeData } from "@/lib/data"

export const metadata = {
  title: "Education - Nishant Kalane",
  description: "Educational background from B.Tech at Govt. College of Engineering to early schooling.",
}

export default async function Education() {
  const data = await getResumeData()

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 gradient-text text-center">Education</h1>
        <Timeline items={data.education} type="education" />
      </div>
    </main>
  )
}
