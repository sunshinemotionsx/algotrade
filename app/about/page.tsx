import { ArrowRight, Award, Building, Globe, Shield, Target, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former Goldman Sachs quantitative analyst with 15+ years in algorithmic trading. PhD in Financial Engineering from Stanford.",
      linkedin: "#",
    },
    {
      name: "Priya Sharma",
      role: "CTO & Co-Founder",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Ex-Google AI researcher specializing in machine learning for financial markets. MS Computer Science from MIT.",
      linkedin: "#",
    },
    {
      name: "Vikram Mehta",
      role: "Head of Risk Management",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former JP Morgan risk management director. Expert in derivatives and portfolio risk modeling with 12+ years experience.",
      linkedin: "#",
    },
    {
      name: "Anita Patel",
      role: "Head of Product",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former Bloomberg product manager with deep expertise in financial technology and user experience design.",
      linkedin: "#",
    },
    {
      name: "Arjun Singh",
      role: "Lead Data Scientist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "PhD in Machine Learning from IIT Delhi. Specialist in time series analysis and predictive modeling for financial markets.",
      linkedin: "#",
    },
    {
      name: "Kavya Reddy",
      role: "Head of Operations",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former McKinsey consultant with expertise in scaling fintech operations and regulatory compliance.",
      linkedin: "#",
    },
  ]

  const achievements = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "50,000+",
      description: "Active Traders",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "25+",
      description: "Countries Served",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "₹500Cr+",
      description: "Assets Under Management",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "99.9%",
      description: "Platform Uptime",
      color: "from-orange-500 to-red-500",
    },
  ]

  const awards = [
    {
      title: "Best Fintech Innovation 2024",
      organization: "Economic Times",
      year: "2024",
    },
    {
      title: "Top AI Trading Platform",
      organization: "Forbes India",
      year: "2023",
    },
    {
      title: "Excellence in Financial Technology",
      organization: "NASSCOM",
      year: "2023",
    },
    {
      title: "Startup of the Year",
      organization: "TechCrunch India",
      year: "2022",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-50"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <Building className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 text-sm font-medium">About AlgoTradeAI</span>
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="text-gray-900">Revolutionizing</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Algorithmic Trading
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're on a mission to democratize institutional-grade trading technology, making advanced algorithmic
              trading accessible to individual traders and small firms worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
              >
                Join Our Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <Target className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-medium">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">From Wall Street to Your Desktop</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020 by a team of former Wall Street quantitative analysts and Silicon Valley AI engineers,
                  AlgoTradeAI was born from a simple yet powerful vision: to democratize access to institutional-grade
                  trading technology.
                </p>
                <p>
                  Having witnessed firsthand how large financial institutions leverage sophisticated algorithms and AI
                  to generate consistent profits, our founders recognized a massive opportunity to level the playing
                  field for individual traders and smaller firms.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 traders across 25+ countries, managing more than ₹500 crores
                  in assets through our platform. Our technology has been recognized by leading publications and has won
                  multiple awards for innovation in financial technology.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Company story"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving the future of algorithmic trading through innovation, accessibility, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize access to institutional-grade algorithmic trading technology, empowering individual
                  traders and small firms with the same advanced tools used by hedge funds and investment banks. We
                  believe that sophisticated trading technology should not be limited to Wall Street elites.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the world's leading platform for algorithmic trading, where every trader—regardless of their
                  background or capital—has access to cutting-edge AI technology, comprehensive education, and a
                  supportive community that helps them achieve consistent trading success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <Award className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 text-sm font-medium">Our Achievements</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Traders Worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has earned us recognition from industry leaders and the trust of thousands of
              traders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <div className="text-white">{achievement.icon}</div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{award.title}</h4>
                  <p className="text-gray-600 text-sm">{award.organization}</p>
                  <Badge variant="outline" className="mt-2">
                    {award.year}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Users className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Our Team</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Experts Behind AlgoTradeAI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our world-class team combines decades of experience from top financial institutions and technology
              companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
              <Zap className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-700 text-sm font-medium">Technology</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Built on Cutting-Edge Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform leverages the latest advances in AI, machine learning, and cloud computing to deliver
              unparalleled performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
                <p className="text-gray-600">
                  Advanced neural networks and deep learning models trained on decades of market data for superior
                  pattern recognition and prediction accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600">
                  Enterprise-grade cloud infrastructure with global distribution, ensuring low latency and high
                  availability for traders worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
                <p className="text-gray-600">
                  Bank-grade security with end-to-end encryption, regular security audits, and compliance with
                  international financial regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Trading Revolution?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Become part of a community that's redefining what's possible in algorithmic trading. Start your journey
              with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
