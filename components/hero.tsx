"use client"

import { motion } from "framer-motion"
import { ChevronDown, Zap, Brain, Cpu, Bot, CircuitBoardIcon as Circuit, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Hero() {
  const floatingIcons = [
    { Icon: Brain, delay: 0, x: -20, y: -30 },
    { Icon: Cpu, delay: 0.5, x: 20, y: -20 },
    { Icon: Bot, delay: 1, x: -30, y: 20 },
    { Icon: Circuit, delay: 1.5, x: 30, y: 30 },
    { Icon: Sparkles, delay: 2, x: 0, y: -40 },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="inline-flex items-center justify-center w-40 h-40 bg-gradient-to-br from-primary via-secondary to-accent rounded-full mb-6 relative overflow-hidden">
            {/* Rotating outer ring */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-2 border-2 border-primary/30 rounded-full"
            />
            
            {/* Pulsing inner ring */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-4 border border-secondary/50 rounded-full"
            />

            {/* Central logo */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-white text-5xl font-bold z-10"
            >
              M
            </motion.div>

            {/* Floating icons around logo */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                animate={{ 
                  rotate: [0, 360],
                  x: [x, x + 10, x],
                  y: [y, y - 10, y],
                }}
                transition={{ 
                  duration: 4 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  delay,
                  ease: "easeInOut"
                }}
                className="absolute"
                style={{ left: `50%`, top: `50%`, transform: `translate(${x}px, ${y}px)` }}
              >
                <Icon className="w-6 h-6 text-white/80" />
              </motion.div>
            ))}

            {/* Glowing effect */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6"
        >
          METRING
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium"
        >
          Metropolitan Engineering and Technology Ring
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Advancing Nigerian engineering and technology through AI-powered solutions, starting with Enugu metropolis and
          empowering the next generation of innovators with cutting-edge robotics and intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Zap className="w-5 h-5 mr-2" />
              Discover Our Vision
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Bot className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  )
}
