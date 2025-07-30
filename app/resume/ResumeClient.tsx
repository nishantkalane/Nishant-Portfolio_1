"use client"

import { Download, FileText, Award, Briefcase, GraduationCap, ExternalLink } from "lucide-react"
import { useState } from "react"

interface ResumeClientProps {
  data: {
    name: string
    title: string
    contact: {
      email: string
      phone: string
      profile?: string
    }
    experience: any[]
    awards: any[]
    projects: any[]
  }
}

export default function ResumeClient({ data }: ResumeClientProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = () => {
    setIsLoading(true)
    // Open Google Drive link in new tab
    window.open(data.contact.profile, "_blank")
    setTimeout(() => setIsLoading(false), 1000)
  }

  const handlePreview = () => {
    // Open Google Drive link in new tab for preview
    window.open(data.contact.profile, "_blank")
  }

  return (
    <main className="py-16 bg-pattern">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="float">
              <FileText className="text-blue-500 pulse-slow icon-fix" size={48} />
            </div>
            <h1 className="text-5xl font-bold gradient-text">My Resume</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Download my comprehensive resume showcasing my expertise in AI/ML, full-stack development, and research
            achievements
          </p>
        </div>

        {/* Resume Preview Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 card-hover">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
                <p className="text-xl opacity-90">{data.title}</p>
                <p className="opacity-80 mt-2">
                  {data.contact.email} • {data.contact.phone}
                </p>
              </div>
              <div className="text-right">
                <div className="bg-white/20 rounded-lg p-4">
                  <FileText className="icon-fix" size={48} />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-8 border-b dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="text-blue-600 dark:text-blue-400 icon-fix" size={24} />
                </div>
                <h3 className="font-bold text-lg">{data.experience.length}+</h3>
                <p className="text-gray-600 dark:text-gray-400">Work Experiences</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Award className="text-green-600 dark:text-green-400 icon-fix" size={24} />
                </div>
                <h3 className="font-bold text-lg">{data.awards.length}+</h3>
                <p className="text-gray-600 dark:text-gray-400">Awards & Achievements</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="text-purple-600 dark:text-purple-400 icon-fix" size={24} />
                </div>
                <h3 className="font-bold text-lg">{data.projects.length}+</h3>
                <p className="text-gray-600 dark:text-gray-400">Major Projects</p>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Key Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Technical Expertise</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• AI/ML Research & Development</li>
                  <li>• Full Stack Development</li>
                  <li>• Natural Language Processing</li>
                  <li>• Healthcare Robotics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">Achievements</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• 13 First Place Awards</li>
                  <li>• National Level Recognition</li>
                  <li>• Research Publications</li>
                  <li>• Leadership Roles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Download Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownload}
            disabled={isLoading}
            className="btn-primary inline-flex items-center gap-3 text-lg disabled:opacity-50"
          >
            {isLoading ? <div className="loading w-6 h-6"></div> : <Download className="icon-fix" size={24} />}
            {isLoading ? "Opening..." : "View Resume (Google Drive)"}
          </button>

          <button onClick={handlePreview} className="btn-secondary inline-flex items-center gap-3 text-lg">
            <ExternalLink className="icon-fix" size={24} />
            Open in New Tab
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Collaborate?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm actively seeking opportunities in AI/ML research, full-stack development, and innovative technology
              projects. Let's discuss how my expertise can contribute to your team's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/projects" className="btn-secondary">
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
