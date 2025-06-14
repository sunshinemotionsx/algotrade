"use client"

import Link from "next/link"
import { Suspense } from "react"
import { ArrowRight, KeyRound, Mail, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import LoginClient from "./page.client"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <ScrollToTop />
      <Navbar />

      <div className="container mx-auto px-4 py-32">
        <div className="max-w-md mx-auto">
          <Card className="border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-gray-900">Welcome back</CardTitle>
              <CardDescription className="text-gray-600">Sign in to your account to continue</CardDescription>
            </CardHeader>

            <CardContent>
              <Suspense fallback={<div className="text-center text-gray-400 py-8">Loading form...</div>}>
                <LoginClient>
                  <Tabs defaultValue="email" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg">
                      <TabsTrigger
                        value="email"
                        className="rounded-md data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                      >
                        Email
                      </TabsTrigger>
                      <TabsTrigger
                        value="guest"
                        className="rounded-md data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                      >
                        Guest Access
                      </TabsTrigger>
                    </TabsList>

                    {/* Email Login */}
                    <TabsContent value="email" className="mt-6 space-y-4">
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-gray-700 block text-sm font-medium">
                            Email
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <input
                              id="email"
                              type="email"
                              placeholder="name@example.com"
                              className="pl-10 w-full rounded-md bg-white border border-gray-300 py-2 px-3 focus-visible:ring-emerald-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-gray-700 block text-sm font-medium">
                              Password
                            </label>
                            <Link href="/forgot-password" className="text-xs text-emerald-600 hover:text-emerald-700">
                              Forgot password?
                            </Link>
                          </div>
                          <div className="relative">
                            <KeyRound className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <input
                              id="password"
                              type="password"
                              className="pl-10 w-full rounded-md bg-white border border-gray-300 py-2 px-3 focus-visible:ring-emerald-500"
                              required
                            />
                          </div>
                        </div>

                        {/* 2FA Section */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
                          <div className="flex items-center gap-3 mb-2">
                            <Shield className="h-5 w-5 text-emerald-600" />
                            <h3 className="font-semibold text-sm text-gray-900">Two-Factor Authentication</h3>
                          </div>
                          <p className="text-gray-600 text-xs mb-3">
                            Enter the 6-digit code sent to your registered mobile number
                          </p>
                          <div className="grid grid-cols-6 gap-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                              <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="text-center p-2 rounded-md border border-gray-300 bg-white focus-visible:ring-emerald-500"
                              />
                            ))}
                          </div>
                          <div className="text-center mt-3">
                            <button type="button" className="text-xs text-emerald-600 hover:text-emerald-700">
                              Resend code (30s)
                            </button>
                          </div>
                        </div>
                      </form>
                    </TabsContent>

                    {/* Guest Access */}
                    <TabsContent value="guest" className="mt-6 space-y-4">
                      <form className="space-y-4">
                        <div>
                          <label htmlFor="guest-name" className="text-gray-700 block text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="guest-name"
                            placeholder="John Doe"
                            className="w-full rounded-md bg-white border border-gray-300 py-2 px-3 focus-visible:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="guest-email" className="text-gray-700 block text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="guest-email"
                            type="email"
                            placeholder="name@example.com"
                            className="w-full rounded-md bg-white border border-gray-300 py-2 px-3 focus-visible:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="guest-password" className="text-gray-700 block text-sm font-medium">
                            Create Password
                          </label>
                          <input
                            id="guest-password"
                            type="password"
                            className="w-full rounded-md bg-white border border-gray-300 py-2 px-3 focus-visible:ring-emerald-500"
                          />
                        </div>
                        <p className="text-xs text-gray-500">
                          Guest access provides limited features. You can upgrade to a full account anytime.
                        </p>
                      </form>
                    </TabsContent>
                  </Tabs>
                </LoginClient>
              </Suspense>
            </CardContent>

            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Sign In <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="mt-4 text-center text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
