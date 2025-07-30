import ContactForm from "@/components/ContactForm"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Contact - Nishant Kalane",
  description: "Get in touch with Nishant Kalane for collaborations, research opportunities, or inquiries.",
}

export default function Contact() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 gradient-text text-center">Contact Me</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm always interested in discussing new opportunities, research collaborations, or innovative projects.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <span>nishant.kalane@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={20} />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <span>Nagpur, Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
