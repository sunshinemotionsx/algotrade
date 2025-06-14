"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Check, HelpCircle, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import DemoRequestModal from "@/components/demo-request-modal"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")
  const [showAddOns, setShowAddOns] = useState(false)
  const router = useRouter()

  const plans = [
    {
      name: "Basic",
      description: "For individual traders getting started with algorithmic trading",
      price: {
        monthly: "₹3,399",
        annually: "₹2,719",
      },
      features: [
        { name: "5 Concurrent Strategies", included: true },
        { name: "Standard Backtesting (5 years data)", included: true },
        { name: "1 Broker Integration", included: true },
        { name: "Basic Technical Indicators", included: true },
        { name: "Email Support", included: true },
        { name: "AI Strategy Suggestions", included: false },
        { name: "Advanced Risk Management", included: false },
        { name: "API Access", included: false },
        { name: "Multi-user Access", included: false },
        { name: "Priority Support", included: false },
      ],
      highlight: false,
      cta: "Start Free Trial",
    },
    {
      name: "Smart",
      description: "For active traders looking for advanced features and better performance",
      price: {
        monthly: "₹6,999",
        annually: "₹5,599",
      },
      features: [
        { name: "15 Concurrent Strategies", included: true },
        { name: "Advanced Backtesting (10 years data)", included: true },
        { name: "3 Broker Integrations", included: true },
        { name: "All Technical Indicators", included: true },
        { name: "Priority Email Support", included: true },
        { name: "AI Strategy Suggestions", included: true },
        { name: "Advanced Risk Management", included: true },
        { name: "API Access", included: false },
        { name: "Multi-user Access", included: false },
        { name: "Priority Support", included: false },
      ],
      highlight: true,
      cta: "Start Free Trial",
    },
    {
      name: "Advanced",
      description: "For professional traders and small trading firms with advanced needs",
      price: {
        monthly: "₹14,999",
        annually: "₹11,999",
      },
      features: [
        { name: "Unlimited Strategies", included: true },
        { name: "Premium Backtesting (Full history)", included: true },
        { name: "All Broker Integrations", included: true },
        { name: "Custom Indicators", included: true },
        { name: "24/7 Email & Chat Support", included: true },
        { name: "AI Strategy Suggestions", included: true },
        { name: "Advanced Risk Management", included: true },
        { name: "API Access", included: true },
        { name: "Multi-user Access (5 users)", included: true },
        { name: "Priority Support", included: true },
      ],
      highlight: false,
      cta: "Start Free Trial",
    },
    {
      name: "Premium",
      description: "For institutional traders and hedge funds requiring enterprise features",
      price: {
        monthly: "₹34,999",
        annually: "₹27,999",
      },
      features: [
        { name: "Unlimited Strategies", included: true },
        { name: "Enterprise Backtesting", included: true },
        { name: "Custom Broker Integrations", included: true },
        { name: "Custom Indicators & Algorithms", included: true },
        { name: "24/7 Dedicated Support", included: true },
        { name: "Advanced AI Strategy Builder", included: true },
        { name: "Enterprise Risk Management", included: true },
        { name: "Full API Access", included: true },
        { name: "Unlimited Users", included: true },
        { name: "Dedicated Account Manager", included: true },
      ],
      highlight: false,
      cta: "Contact Sales",
    },
  ]

  const addOns = [
    {
      name: "Additional API Credits",
      description: "For higher API call limits",
      price: "₹999/month",
      options: ["5,000 calls/day", "10,000 calls/day", "25,000 calls/day"],
    },
    {
      name: "Extended Data History",
      description: "Access to additional historical data",
      price: "₹1,499/month",
      options: ["15 years", "20 years", "Full history"],
    },
    {
      name: "Additional Users",
      description: "Add more users to your account",
      price: "₹799/user/month",
      options: ["1 user", "5 users", "10 users"],
    },
    {
      name: "Custom Indicators",
      description: "Development of custom indicators",
      price: "₹4,999 one-time",
      options: ["Basic", "Advanced", "Enterprise"],
    },
  ]

  const handleStartTrial = () => {
    router.push("/login?tab=guest")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-50"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 text-sm font-medium">Flexible Pricing</span>
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="text-gray-900">Transparent</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Pricing
              </span>{" "}
              <span className="text-gray-900">for Every Trader</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Choose the plan that fits your trading needs and scale as your strategies evolve.
            </p>

            <div className="flex items-center justify-center mb-12">
              <Label
                htmlFor="billing-toggle"
                className={`mr-2 ${billingCycle === "monthly" ? "text-gray-900 font-medium" : "text-gray-500"}`}
              >
                Monthly
              </Label>
              <Switch
                id="billing-toggle"
                checked={billingCycle === "annually"}
                onCheckedChange={(checked) => setBillingCycle(checked ? "annually" : "monthly")}
                className="data-[state=checked]:bg-emerald-600"
              />
              <Label
                htmlFor="billing-toggle"
                className={`ml-2 ${billingCycle === "annually" ? "text-gray-900 font-medium" : "text-gray-500"}`}
              >
                Annually <span className="text-emerald-600 text-sm font-medium">(20% off)</span>
              </Label>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  plan.highlight
                    ? "border-2 border-emerald-500 shadow-xl scale-105"
                    : "border border-gray-200 hover:border-gray-300"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-gray-900">
                      {billingCycle === "monthly" ? plan.price.monthly : plan.price.annually}
                      <span className="text-sm text-gray-500">/month</span>
                    </div>
                    {billingCycle === "annually" && (
                      <div className="text-sm text-emerald-600 mt-1">Billed annually</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    } transition-all duration-300`}
                    onClick={plan.cta === "Start Free Trial" ? handleStartTrial : undefined}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Feature Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare all features across our plans to find the perfect fit for your trading needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 rounded-xl shadow-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Feature
                      </th>
                      {plans.map((plan, index) => (
                        <th
                          key={index}
                          scope="col"
                          className={`py-4 px-6 text-center text-xs font-medium uppercase tracking-wider ${
                            plan.highlight ? "text-emerald-600" : "text-gray-500"
                          }`}
                        >
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">Concurrent Strategies</td>
                      <td className="py-4 px-6 text-center text-gray-700">5</td>
                      <td className="py-4 px-6 text-center text-gray-700">15</td>
                      <td className="py-4 px-6 text-center text-gray-700">Unlimited</td>
                      <td className="py-4 px-6 text-center text-gray-700">Unlimited</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">Backtesting Data</td>
                      <td className="py-4 px-6 text-center text-gray-700">5 years</td>
                      <td className="py-4 px-6 text-center text-gray-700">10 years</td>
                      <td className="py-4 px-6 text-center text-gray-700">Full history</td>
                      <td className="py-4 px-6 text-center text-gray-700">Enterprise</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">Broker Integrations</td>
                      <td className="py-4 px-6 text-center text-gray-700">1</td>
                      <td className="py-4 px-6 text-center text-gray-700">3</td>
                      <td className="py-4 px-6 text-center text-gray-700">All</td>
                      <td className="py-4 px-6 text-center text-gray-700">Custom</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">Technical Indicators</td>
                      <td className="py-4 px-6 text-center text-gray-700">Basic</td>
                      <td className="py-4 px-6 text-center text-gray-700">All</td>
                      <td className="py-4 px-6 text-center text-gray-700">Custom</td>
                      <td className="py-4 px-6 text-center text-gray-700">Custom</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">Support</td>
                      <td className="py-4 px-6 text-center text-gray-700">Email</td>
                      <td className="py-4 px-6 text-center text-gray-700">Priority Email</td>
                      <td className="py-4 px-6 text-center text-gray-700">24/7 Email & Chat</td>
                      <td className="py-4 px-6 text-center text-gray-700">Dedicated</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">
                        <div className="flex items-center">
                          AI Strategy Suggestions
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-gray-400 ml-1" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-white p-3 shadow-lg border border-gray-200 rounded-lg">
                                <p className="w-64 text-gray-700 text-sm">
                                  AI-powered suggestions to optimize your trading strategies based on market conditions
                                  and historical performance.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center text-gray-700">Advanced</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">API Access</td>
                      <td className="py-4 px-6 text-center">
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center text-gray-700">Full</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">Multi-user Access</td>
                      <td className="py-4 px-6 text-center">
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center text-gray-700">5 users</td>
                      <td className="py-4 px-6 text-center text-gray-700">Unlimited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Customizations</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-ons & Customizations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your plan with additional features and capabilities.
            </p>
            <Button
              variant="outline"
              className="mt-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
              onClick={() => setShowAddOns(!showAddOns)}
            >
              {showAddOns ? "Hide Add-ons" : "Show Add-ons"}
            </Button>
          </div>

          {showAddOns && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">{addon.name}</CardTitle>
                    <p className="text-sm text-gray-500">{addon.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-gray-900 mb-4">{addon.price}</div>
                    <div className="space-y-2">
                      {addon.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center">
                          <input
                            type="radio"
                            name={`addon-${index}`}
                            id={`addon-${index}-${optionIndex}`}
                            className="mr-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                          />
                          <label htmlFor={`addon-${index}-${optionIndex}`} className="text-gray-700">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
              <HelpCircle className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-700 text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200 py-2">
                <AccordionTrigger className="text-left text-gray-900 hover:text-emerald-600 font-medium">
                  Can I switch between plans?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the
                  prorated difference for the remainder of your billing cycle. When downgrading, the new rate will apply
                  at the start of your next billing cycle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
                <AccordionTrigger className="text-left text-gray-900 hover:text-emerald-600 font-medium">
                  Is there a free trial available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we offer a 14-day free trial on all plans. No credit card is required to start your trial. You'll
                  have access to all features of your selected plan during the trial period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-gray-200 py-2">
                <AccordionTrigger className="text-left text-gray-900 hover:text-emerald-600 font-medium">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We accept all major credit cards, debit cards, and UPI payments. For annual plans, we also offer bank
                  transfer options. Enterprise customers can request custom payment terms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-gray-200 py-2">
                <AccordionTrigger className="text-left text-gray-900 hover:text-emerald-600 font-medium">
                  Can I get a refund if I'm not satisfied?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We offer a 30-day money-back guarantee for all new customers. If you're not satisfied with our service
                  within the first 30 days, contact our support team for a full refund.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-gray-200 py-2">
                <AccordionTrigger className="text-left text-gray-900 hover:text-emerald-600 font-medium">
                  Do you offer discounts for startups or educational institutions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we offer special pricing for startups, educational institutions, and non-profit organizations.
                  Contact our sales team to learn more about our discount programs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Trading?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Start your free trial today and discover how our platform can help you achieve better trading results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleStartTrial}
              >
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <DemoRequestModal>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300"
                >
                  Contact Sales
                </Button>
              </DemoRequestModal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
