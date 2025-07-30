import IconGrid from "@/components/IconGrid"
import { getResumeData } from "@/lib/data"

export const metadata = {
  title: "Skills - Nishant Kalane",
  description: "Technical and interpersonal skills including Python, SQL, LLMs, Power BI, and more.",
}

export default async function Skills() {
  const data = await getResumeData()

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 gradient-text text-center">Skills</h1>
        <IconGrid skills={data.skills} />
      </div>
    </main>
  )
}
