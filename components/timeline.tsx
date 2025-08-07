"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap, Briefcase, Rocket } from 'lucide-react'

export function Timeline() {
  const timelineEvents = [
    {
      year: "2019",
      title: "Engineering Journey Begins",
      description: "Started Electronic and Computer Engineering studies, laying the foundation for technological innovation.",
      icon: GraduationCap,
      color: "bg-blue-500",
    },
    {
      year: "2021",
      title: "Industry Experience",
      description: "Joined Desicon Engineering Limited as an IT student, gaining practical experience in engineering solutions.",
      icon: Briefcase,
      color: "bg-green-500",
    },
    {
      year: "2023",
      title: "AI Integration Focus",
      description: "Specialized in AI and data acquisition technologies, developing expertise in machine learning applications.",
      icon: Rocket,
      color: "bg-purple-500",
    },
    {
      year: "2024",
      title: "METRING Founded",
      description: "Established METRING to advance Nigerian engineering through AI-powered solutions and student empowerment.",
      icon: Calendar,
      color: "bg-orange-500",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From engineering student to AI innovator - the path that led to METRING's mission of technological advancement.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                >
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    <div className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center text-white mr-4 ${index % 2 === 0 ? "order-2 ml-4 mr-0" : ""}`}>
                      <event.icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold text-primary">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"
              />

              {/* Empty space for the other side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
