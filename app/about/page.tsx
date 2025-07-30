import { getResumeData } from "@/lib/data"

export const metadata = {
  title: "About - Nishant Kalane",
  description:
    "Learn about Nishant Kalane's background in AI/ML research, NLP/LLM work, robotics mentorship, and interdisciplinary interests.",
}

export default async function About() {
  const data = await getResumeData()

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 gradient-text">About Me</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am an AI/ML Researcher and Python Developer with a passion for building intelligent systems and
              presenting them with clarity. My work spans across Natural Language Processing (NLP), Large Language
              Models (LLMs), and healthcare robotics, with a focus on creating practical solutions that bridge the gap
              between research and real-world applications.
            </p>

            <h3 className="text-xl font-semibold mb-3">Research Focus</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My research primarily focuses on NLP and LLM applications, particularly in sentiment analysis, sarcasm
              detection, and healthcare robotics. I have developed innovative solutions like RF-enabled healthcare
              robotics systems and advanced sentiment analysis tools with comprehensive data visualization capabilities.
            </p>

            <h3 className="text-xl font-semibold mb-3">Mentorship & Leadership</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I actively mentor students in robotics and AI/ML projects, helping them understand complex concepts and
              develop practical skills. My approach combines theoretical knowledge with hands-on experience, ensuring
              students can apply what they learn in real-world scenarios.
            </p>

            <h3 className="text-xl font-semibold mb-3">Interdisciplinary Interests</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Beyond technology, I have deep interests in Linguistics, Psychology, and Forensics. This interdisciplinary
              approach enriches my research perspective and enables me to develop more comprehensive and human-centered
              AI solutions.
            </p>

            <h3 className="text-xl font-semibold mb-3">Recognition</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My work has been recognized by the Ministry of Education & Science, and I have received multiple
              national-level awards for research papers and project presentations. These achievements reflect my
              commitment to excellence in research and innovation.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
