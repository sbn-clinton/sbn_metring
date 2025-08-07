"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { DataAI } from "@/components/data-ai"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AnimatedBackground } from "@/components/animated-background"
import { Stats } from "@/components/stats"
import { Timeline } from "@/components/timeline"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Timeline />
      <Services />
      <Projects />
      <DataAI />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
