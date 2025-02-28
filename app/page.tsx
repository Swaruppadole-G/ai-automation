import Link from "next/link"
import {
  ArrowRight,
  Bot,
  Brain,
  ChevronRight,
  Code,
  Database,
  Gauge,
  Layers,
  Lightbulb,
  Rocket,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Brain className="h-6 w-6 text-primary" />
            <span>AutomateAI</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#use-cases"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Use Cases
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Button size="sm" asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Automate Your Workflow with AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your business processes with our powerful AI automation platform. Save time, reduce
                    errors, and focus on what matters.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
                  <div className="relative h-full w-full rounded-xl border bg-background p-4 shadow-xl">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-lg border border-dashed p-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border bg-background shadow-sm">
                          <Database className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border bg-background shadow-sm">
                          <Bot className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border bg-background shadow-sm">
                          <Code className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border bg-background shadow-sm">
                          <Gauge className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border bg-background shadow-sm">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border bg-background shadow-sm">
                          <Layers className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-full w-4/5 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                      <div className="flex w-full items-center justify-between rounded-lg border bg-background p-2 shadow-sm">
                        <div className="flex items-center gap-2">
                          <Rocket className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Automation Complete</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful AI Automation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive suite of AI-powered automation tools to streamline your workflow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    Intelligent Workflows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Create smart workflows that adapt to your business needs using our AI-powered automation engine.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Data Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automatically process, analyze, and extract insights from your data with advanced AI algorithms.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    No-Code Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with your existing tools and systems without writing a single line of code.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Predictive Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Forecast trends and make data-driven decisions with our AI-powered predictive analytics.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Real-time Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Trigger automated actions in real-time based on events, schedules, or conditions.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    Scalable Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our platform grows with your business, handling increased workloads without compromising
                    performance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Use Cases</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transform Your Business</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how businesses across industries are leveraging our AI automation platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Customer Service</h3>
                <p className="text-muted-foreground">
                  Automate customer inquiries with AI chatbots that understand context and provide accurate responses
                  24/7.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Data Entry</h3>
                <p className="text-muted-foreground">
                  Eliminate manual data entry with intelligent document processing that extracts and categorizes
                  information.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Marketing Campaigns</h3>
                <p className="text-muted-foreground">
                  Optimize your marketing efforts with AI-driven content creation, scheduling, and performance analysis.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Financial Operations</h3>
                <p className="text-muted-foreground">
                  Streamline invoicing, expense tracking, and financial reporting with automated workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold">$49</span> /month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>5 automated workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Basic integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold">$99</span> /month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>20 automated workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Advanced integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Analytics dashboard</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold">Custom</span> pricing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Unlimited workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Advanced security</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get Started</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Workflow?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start automating your business processes today with our AI-powered platform.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button size="lg" className="w-full">
                  Request a Demo
                </Button>
                <p className="text-xs text-muted-foreground">
                  No credit card required. Start your free 14-day trial today.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-2 items-center text-lg font-bold">
            <Brain className="h-5 w-5 text-primary" />
            <span>AutomateAI</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 AutomateAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

