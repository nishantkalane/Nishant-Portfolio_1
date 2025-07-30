import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"
import Link from "next/link"

interface HeroProps {
  data: {
    name: string
    title: string
    tagline: string
    contact: {
      email: string
      github?: string
      linkedin?: string
      profile?: string
    }
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-pattern relative">
      <div className="container mx-auto px-4 text-center">
        {/* Animated Icon */}
        <div className="mb-8 fade-in">
          <Sparkles className="text-yellow-500 mx-auto pulse-slow icon-fix" size={48} />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-up">
          <span className="gradient-text">{data.name}</span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-6 slide-up stagger-1">{data.title}</h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto slide-up stagger-2">
          {data.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 slide-up stagger-3">
          <a href={`mailto:${data.contact.email}`} className="btn-primary inline-flex items-center gap-2">
            <Mail className="icon-fix" size={20} />
            Get In Touch
          </a>

          <Link href="/resume" className="btn-secondary inline-flex items-center gap-2">
            <Download className="icon-fix" size={20} />
            Download Resume
          </Link>

          <Link href="/projects" className="btn-secondary inline-flex items-center gap-2">
            View Projects
            <ArrowRight className="icon-fix" size={20} />
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 slide-up stagger-4">
          {data.contact.github && (
            <a
              href={data.contact.github}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="icon-fix" size={32} />
            </a>
          )}
          {data.contact.linkedin && (
            <a
              href={data.contact.linkedin}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="icon-fix" size={32} />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
