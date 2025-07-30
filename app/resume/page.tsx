import ResumeClient from "./ResumeClient"
import { getResumeData } from "@/lib/data"

export const metadata = {
  title: "Resume - Nishant Kalane",
  description: "Download Nishant Kalane's professional resume showcasing AI/ML expertise and achievements.",
}

export default async function Resume() {
  const data = await getResumeData()

  return <ResumeClient data={data} />
}
