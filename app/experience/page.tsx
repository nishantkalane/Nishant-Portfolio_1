import Timeline from "@/components/Timeline"
import { getResumeData } from "@/lib/data"

export const metadata = {
  title: "Experience - Nishant Kalane",
  description:
    "Professional experience including roles at J.P.A Associates, Govt. College of Engineering, and CISCO/NIIT Foundation.",
}

export default async function Experience() {
  const data = await getResumeData()

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 gradient-text text-center">Experience</h1>
        <Timeline items={data.experience} type="experience" />
      </div>
    </main>
  )
}
