import { ExternalLink, Calendar, Clock, Tag } from "lucide-react"
import { getResumeData } from "@/lib/data"

export const metadata = {
  title: "Blogs - Nishant Kalane",
  description: "Read Nishant Kalane's insights on AI/ML, technology, and innovation through his blog posts.",
}

export default async function Blogs() {
  const data = await getResumeData()

  return (
    <main className="py-16 particle-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-6">My Blogs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing insights on AI/ML, technology trends, and innovative solutions that shape our digital future
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {data.blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover mb-8 stagger-animation"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{blog.description}</p>
                </div>
                <div className="ml-4 floating">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blog.platform}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Read Full Article
                <ExternalLink size={18} />
              </a>
            </article>
          ))}

          {/* Coming Soon Section */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-2xl font-bold mb-3 gradient-text">More Articles Coming Soon!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm constantly working on new content about AI/ML, technology trends, and innovative solutions. Stay tuned
              for more insights!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://medium.com/@nishhhh_ant"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Follow on Medium
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
