import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">AT</span>
              </div>
              <span className="text-emerald-500 text-xl font-bold">AlgoTrade</span>
              <span className="text-white text-xl font-bold">AI</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering traders with AI-driven algorithms and real-time market insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-gray-400 hover:text-emerald-500 transition-colors duration-200"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AlgoTradeAI. All rights reserved.</p>
          <p className="mt-2">Trading involves risk. Past performance is not indicative of future results.</p>
        </div>
      </div>
    </footer>
  )
}
