import Link from "next/link"
import { ArrowRight, Check, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <ScrollToTop />
      <Navbar />

      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              Join the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Algorithmic Trading
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Create your account to access powerful AI-driven trading tools, real-time market insights, and a community
              of professional traders.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Advanced AI Trading Algorithms</h3>
                  <p className="text-gray-600">
                    Access our proprietary AI models trained on decades of market data to identify profitable trading
                    opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Real-time Market Analysis</h3>
                  <p className="text-gray-600">
                    Get instant insights on market trends, volatility patterns, and trading signals across multiple
                    asset classes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Secure Multi-Broker Integration</h3>
                  <p className="text-gray-600">
                    Connect securely to leading brokers like Angel One, Zerodha, and Fyers with our encrypted API
                    integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-emerald-600" />
                <h3 className="font-semibold text-gray-900">Enterprise-Grade Security</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Your data is protected with military-grade encryption, two-factor authentication, and regular security
                audits. We never store your broker credentials.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Card className="border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Create your account</CardTitle>
                <CardDescription className="text-gray-600">Choose your account type to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="individual" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg">
                    <TabsTrigger
                      value="individual"
                      className="rounded-md data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                    >
                      Individual
                    </TabsTrigger>
                    <TabsTrigger
                      value="organization"
                      className="rounded-md data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                    >
                      Organization
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="individual" className="mt-6">
                    <form>
                      <div className="grid gap-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name" className="text-gray-700">
                              First name
                            </Label>
                            <Input
                              id="first-name"
                              placeholder="John"
                              className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name" className="text-gray-700">
                              Last name
                            </Label>
                            <Input
                              id="last-name"
                              placeholder="Doe"
                              className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700">
                            Email
                          </Label>
                          <Input
                            id="email"
                            placeholder="john.doe@example.com"
                            type="email"
                            className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-gray-700">
                            Password
                          </Label>
                          <Input
                            id="password"
                            type="password"
                            className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                          />
                          <p className="text-xs text-gray-500">
                            Password must be at least 8 characters long with a number and special character
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-700">
                            Phone (for 2FA)
                          </Label>
                          <Input
                            id="phone"
                            placeholder="+91 9876543210"
                            className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-700">Trading Experience</Label>
                          <RadioGroup defaultValue="beginner" className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="beginner" id="beginner" className="text-emerald-600" />
                              <Label htmlFor="beginner" className="text-gray-700">
                                Beginner (0-1 years)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="intermediate" id="intermediate" className="text-emerald-600" />
                              <Label htmlFor="intermediate" className="text-gray-700">
                                Intermediate (1-3 years)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="advanced" id="advanced" className="text-emerald-600" />
                              <Label htmlFor="advanced" className="text-gray-700">
                                Advanced (3+ years)
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="referral" className="text-gray-700">
                            Referral Code (Optional)
                          </Label>
                          <Input
                            id="referral"
                            placeholder="Enter code"
                            className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                          />
                        </div>
                      </div>
                    </form>
                  </TabsContent>
                  <TabsContent value="organization" className="mt-6">
                    <form>
                      <div className="grid gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="org-name" className="text-gray-700">
                            Organization name
                          </Label>
                          <Input
                            id="org-name"
                            placeholder="Acme Trading Inc."
                            className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="org-email" className="text-gray-700">
                            Business email
                          </Label>
                          <Input
                            id="org-email"
                            placeholder="contact@acmetrading.com"
                            type="email"
                            className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="org-password" className="text-gray-700">
                            Password
                          </Label>
                          <Input
                            id="org-password"
                            type="password"
                            className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="org-phone" className="text-gray-700">
                            Business phone
                          </Label>
                          <Input
                            id="org-phone"
                            placeholder="+91 9876543210"
                            className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="team-size" className="text-gray-700">
                            Team size
                          </Label>
                          <RadioGroup defaultValue="small" className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="small" id="small" className="text-emerald-600" />
                              <Label htmlFor="small" className="text-gray-700">
                                Small (1-10 traders)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="medium" id="medium" className="text-emerald-600" />
                              <Label htmlFor="medium" className="text-gray-700">
                                Medium (11-50 traders)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="large" id="large" className="text-emerald-600" />
                              <Label htmlFor="large" className="text-gray-700">
                                Large (50+ traders)
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="admin-code" className="text-gray-700">
                            Admin Referral Code
                          </Label>
                          <Input
                            id="admin-code"
                            placeholder="Required for admin registration"
                            className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                          />
                        </div>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                  Create Account <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="mt-4 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Sign in
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
