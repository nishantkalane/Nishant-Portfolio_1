import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Layout from "@/components/Layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nishant Kalane - AI/ML Researcher & Python Developer",
  description:
    "Building intelligent systems & presenting them with clarity. Portfolio of Nishant Kalane showcasing AI/ML research, projects, and achievements.",
  keywords: "AI, ML, Python, NLP, LLM, Robotics, Research, Developer",
  authors: [{ name: "Nishant Kalane" }],
  openGraph: {
    title: "Nishant Kalane - AI/ML Researcher & Python Developer",
    description: "Building intelligent systems & presenting them with clarity.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
