"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Award, Zap, Target } from 'lucide-react'

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Students Impacted",
      color: "text-blue-500",
    },
    {
      icon: Award,
      value: 5,
      suffix: " Years",
      label: "Engineering Experience",
      color: "text-green-500",
    },
    {
      icon: Zap,
      value: 50,
      suffix: "+",
      label: "Projects Completed",
      color: "text-yellow-500",
    },
    {
      icon: Target,
      value: 95,
      suffix: "%",
      label: "Success Rate",
      color: "text-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ${stat.color}`}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              <CountUpAnimation
                value={stat.value}
                suffix={stat.suffix}
                isInView={isInView}
                delay={index * 0.1}
              />
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CountUpAnimation({ 
  value, 
  suffix, 
  isInView, 
  delay 
}: { 
  value: number
  suffix: string
  isInView: boolean
  delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0

        const counter = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(counter)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, value, delay])

  return (
    <motion.h3 
      className="text-3xl md:text-4xl font-bold text-foreground mb-2"
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {count}{suffix}
    </motion.h3>
  )
}
